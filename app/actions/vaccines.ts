'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function registerVaccineApplication(formData: FormData) {
    const patientId = formData.get('patientId') as string
    const vaccineId = formData.get('vaccineId') as string
    const healthCenterId = formData.get('healthCenterId') as string
    const dateAdministered = formData.get('dateAdministered') as string
    const lotNumber = formData.get('lotNumber') as string
    const doseName = formData.get('doseName') as string

    if (!patientId || !vaccineId || !healthCenterId || !dateAdministered) {
        return { success: false, error: 'Faltan campos requeridos' }
    }

    try {
        await prisma.vaccineRecord.create({
            data: {
                patientId,
                vaccineId,
                healthCenterId,
                dateAdministered: new Date(dateAdministered),
                status: 'COMPLETADO',
                lotNumber,
                doseName
            },
        })

        revalidatePath('/')
        revalidatePath('/cartilla')

        return { success: true, message: 'Vacuna registrada exitosamente' }
    } catch (error) {
        console.error('Error registering vaccine:', error)
        return { success: false, error: 'Error al registrar la vacuna' }
    }
}

export async function getPatientVaccineRecords(patientId: string) {
    if (!patientId) return { success: false, error: 'ID de paciente requerido' }

    try {
        const records = await prisma.vaccineRecord.findMany({
            where: { patientId },
            include: {
                vaccine: true,
                healthCenter: true
            }
        })
        return { success: true, data: records }
    } catch (error) {
        console.error('Error fetching vaccine records:', error)
        return { success: false, error: 'Error al obtener registros' }
    }
}

export async function getVaccines() {
    try {
        const vaccines = await prisma.vaccine.findMany()
        return { success: true, data: vaccines }
    } catch (error) {
        console.error('Error fetching vaccines:', error)
        return { success: false, error: 'Error al obtener catálogo de vacunas' }
    }
}
