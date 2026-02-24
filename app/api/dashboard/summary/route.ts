import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { subDays, startOfDay, endOfDay } from 'date-fns';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const range = searchParams.get('range') || '30d';
        const municipio = searchParams.get('municipio');
        const institucion = searchParams.get('institucion');
        const tipo = searchParams.get('tipo');

        // Temporal Filtering
        let startDate = subDays(new Date(), 30);
        if (range === 'today') startDate = startOfDay(new Date());
        else if (range === '7d') startDate = subDays(new Date(), 7);
        else if (range === '90d') startDate = subDays(new Date(), 90);

        const dateFilter = {
            createdAt: {
                gte: startDate,
                lte: endOfDay(new Date()),
            }
        };

        // Geographic/Institutional Filters
        const unitFilters: any = {};
        if (municipio) unitFilters.cve_mun = municipio;
        if (institucion) unitFilters.institucion = institucion;
        if (tipo) unitFilters.tipo_unidad = tipo;

        // Fetch Metrics
        const [totalRecords, delayedRecords, totalUnits, alertUnits] = await Promise.all([
            prisma.vaccineRecord.count({
                where: {
                    ...dateFilter,
                    healthCenter: unitFilters
                }
            }),
            prisma.vaccineRecord.count({
                where: {
                    ...dateFilter,
                    status: 'ATRASADO',
                    healthCenter: unitFilters
                }
            }),
            prisma.unidadSalud.count({ where: unitFilters }),
            prisma.unidadSalud.count({
                where: {
                    ...unitFilters,
                    OR: [
                        { lat: null },
                        { lon: null },
                        { cve_mun: null }
                    ]
                }
            })
        ]);

        // Variation calculation (Mocked for current version, real logic would sub-query previous period)
        const variation = "+2.4%";

        return NextResponse.json({
            summary: {
                totalRecords,
                delayedPercentage: totalRecords > 0 ? ((delayedRecords / totalRecords) * 100).toFixed(1) : 0,
                totalUnits,
                alertUnits,
                variation
            },
            filters: {
                range,
                municipio,
                institucion,
                tipo
            }
        });

    } catch (error) {
        console.error('Dashboard API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
