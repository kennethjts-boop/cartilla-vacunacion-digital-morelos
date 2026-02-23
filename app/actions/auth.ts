'use server'

import prisma from '@/lib/prisma'
import { encrypt } from '@/lib/auth'
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'

export async function login(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
        return { success: false, error: 'Email y contraseña son requeridos' }
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            return { success: false, error: 'Credenciales inválidas' }
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return { success: false, error: 'Credenciales inválidas' }
        }

        // Set secure JWT cookie
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 1 day
        const session = await encrypt({
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                name: user.name
            }
        })

        const cookieStore = await cookies()
        cookieStore.set('session', session, {
            expires,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/'
        })

        return { success: true }
    } catch (error) {
        console.error('Login error:', error)
        return { success: false, error: 'Ocurrió un error en el servidor' }
    }
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.set('session', '', { expires: new Date(0), path: '/' })
}
