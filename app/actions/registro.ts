'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function registerPatient(formData: FormData) {
    try {
        const curp = formData.get('curp') as string
        const fullName = formData.get('fullName') as string
        const dateOfBirth = formData.get('dateOfBirth') as string
        const gender = formData.get('gender') as string
        const municipality = formData.get('municipality') as string
        const healthCenterId = formData.get('healthCenterId') as string

        if (!curp || !fullName || !dateOfBirth || !gender || !municipality || !healthCenterId) {
            return { success: false, error: 'Faltan campos obligatorios' }
        }

        const [firstName, ...lastNames] = fullName.split(' ')
        const lastName = lastNames.join(' ')

        // Basic validation to see if CURP exists
        const existing = await prisma.patient.findUnique({
            where: { curp }
        })

        if (existing) {
            return { success: false, error: 'Este paciente ya está registrado con este CURP' }
        }

        await prisma.patient.create({
            data: {
                curp,
                firstName: firstName || fullName,
                lastName: lastName || '',
                dateOfBirth: new Date(dateOfBirth),
                gender,
                municipality,
                healthCenterId,
            }
        })

        revalidatePath('/')
        revalidatePath('/pacientes/registrar')

        return { success: true, message: 'Paciente registrado exitosamente' }
    } catch (error) {
        console.error("Error registering patient:", error)
        return { success: false, error: 'Hubo un error al registrar el paciente' }
    }
}

export async function getHealthCenters(municipio?: string) {
    try {
        const where: any = {};
        if (municipio) where.cve_mun = municipio;

        const centers = await prisma.unidadSalud.findMany({
            where,
            orderBy: { nombre_unidad: 'asc' }
        })
        // Transform for UI compatibility
        return {
            success: true,
            data: centers.map(c => ({
                id: c.id,
                name: c.nombre_unidad,
                municipality: c.municipio_texto,
                institucion: c.institucion,
                tipo: c.tipo_unidad
            }))
        }
    } catch (error) {
        console.error("Error fetching health centers:", error)
        return { success: false, error: 'No se pudieron cargar los centros de salud' }
    }
}

export async function getMunicipios() {
    try {
        const municipios = await prisma.municipio.findMany({
            where: { activo: true },
            orderBy: { nombre: 'asc' }
        })
        return { success: true, data: municipios }
    } catch (error) {
        console.error("Error fetching municipios:", error)
        return { success: false, error: 'No se pudieron cargar los municipios' }
    }
}

export async function getPatients() {
    try {
        const patients = await prisma.patient.findMany({
            orderBy: { firstName: 'asc' }
        })
        return { success: true, data: patients }
    } catch (error) {
        console.error("Error fetching patients:", error)
        return { success: false, error: 'No se pudieron cargar los pacientes' }
    }
}
