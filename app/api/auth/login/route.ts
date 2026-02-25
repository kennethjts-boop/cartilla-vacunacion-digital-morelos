import { NextResponse } from "next/server";
import prisma from '@/lib/prisma';
import { encrypt } from '@/lib/auth';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
    console.log("LOGIN HIT");
    try {
        const body = await req.json().catch(() => ({}));
        const { email, password, role } = body || {};

        if (!email || !password) {
            return NextResponse.json(
                { ok: false, message: "Email y contraseña son requeridos" },
                { status: 400 }
            );
        }

        // AUTH REAL
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json(
                { ok: false, message: "Credenciales inválidas" },
                { status: 401 }
            );
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { ok: false, message: "Credenciales inválidas" },
                { status: 401 }
            );
        }

        // Set secure JWT cookie
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day
        const session = await encrypt({
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                name: user.name
            }
        });

        const cookieStore = await cookies();
        cookieStore.set('session', session, {
            expires,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/'
        });

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (e: any) {
        console.error("LOGIN ERROR", e);
        return NextResponse.json(
            { ok: false, message: e?.message || "Error en login" },
            { status: 500 }
        );
    }
}
