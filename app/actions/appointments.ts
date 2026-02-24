'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function getAppointments() {
    try {
        const appointments = await prisma.appointment.findMany({
            include: {
                patient: true,
                vaccine: true,
                healthCenter: true
            },
            orderBy: {
                date: 'asc'
            }
        })
        return { success: true, data: appointments }
    } catch (error) {
        console.error('Error fetching appointments:', error)
        return { success: false, error: 'Error al obtener citas' }
    }
}

export async function createAppointment(formData: FormData) {
    const patientId = formData.get('patientId') as string
    const vaccineId = formData.get('vaccineId') as string
    const healthCenterId = formData.get('healthCenterId') as string
    const date = formData.get('date') as string

    if (!patientId || !vaccineId || !healthCenterId || !date) {
        return { success: false, error: 'Faltan campos requeridos' }
    }

    try {
        await prisma.appointment.create({
            data: {
                patientId,
                vaccineId,
                healthCenterId,
                date: new Date(date),
                status: 'PENDIENTE'
            }
        })

        revalidatePath('/citas')
        return { success: true, message: 'Cita programada exitosamente' }
    } catch (error) {
        console.error('Error creating appointment:', error)
        return { success: false, error: 'Error al programar la cita' }
    }
}

export async function updateAppointmentStatus(id: string, status: string) {
    try {
        await prisma.appointment.update({
            where: { id },
            data: { status }
        })
        revalidatePath('/citas')
        return { success: true }
    } catch (error) {
        console.error('Error updating appointment status:', error)
        return { success: false, error: 'Error al actualizar estado de la cita' }
    }
}
