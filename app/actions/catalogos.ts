'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getMunicipios() {
    try {
        const municipios = await prisma.municipio.findMany({
            where: { activo: true },
            orderBy: { nombre: 'asc' },
            select: { cve_mun: true, nombre: true }
        });
        return { success: true, data: municipios };
    } catch (error) {
        console.error('Error fetching municipios:', error);
        return { success: false, error: 'Error al cargar municipios' };
    }
}

export async function getUnidadesSalud(filters: { municipio?: string, institucion?: string }) {
    try {
        const where: any = {};
        if (filters.municipio) where.cve_mun = filters.municipio;
        if (filters.institucion) where.institucion = filters.institucion;

        const unidades = await prisma.unidadSalud.findMany({
            where,
            orderBy: { nombre_unidad: 'asc' },
        });
        return { success: true, data: unidades };
    } catch (error) {
        console.error('Error fetching units:', error);
        return { success: false, error: 'Error al cargar unidades' };
    }
}
