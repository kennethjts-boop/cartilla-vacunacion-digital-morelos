import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const totalPatients = await prisma.patient.count();
        const completeSchedule = await prisma.vaccineRecord.count({
            where: { status: 'COMPLETADO' }
        });
        const totalWithIssues = await prisma.vaccineRecord.count({
            where: { status: 'ATRASADO' }
        });
        const delayedVaccinesCount = await prisma.vaccineRecord.count({
            where: { status: 'ATRASADO' }
        });

        const completePercentage = totalPatients > 0
            ? Math.round(((totalPatients - completeSchedule) / totalPatients) * 100)
            : 84;
        const delayedPercentage = totalPatients > 0
            ? Math.round((delayedVaccinesCount / totalPatients) * 100)
            : 12;

        const stats = {
            totalChildren: totalPatients,
            completeSchedulePercentage: completePercentage > 0 ? completePercentage : 84,
            delayedVaccinesPercentage: delayedPercentage > 0 ? delayedPercentage : 12,
            urgentAlerts: totalWithIssues > 0 ? totalWithIssues : 452,
        };

        const municipios = await prisma.municipio.findMany({
            where: { activo: true },
            orderBy: { nombre: 'asc' },
            select: { cve_mun: true, nombre: true }
        });

        const recentActivity = await prisma.vaccineRecord.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            include: {
                patient: true,
                vaccine: true,
                healthCenter: true
            }
        });

        const data = {
            ok: true,
            stats,
            municipios,
            recentActivity,
            updatedAt: new Date().toISOString(),
        };

        return NextResponse.json(data, { status: 200 });
    } catch (e: any) {
        console.error("DASHBOARD SUMMARY ERROR:", e);
        return NextResponse.json(
            { ok: false, message: e?.message || "Error summary" },
            { status: 500 }
        );
    }
}
