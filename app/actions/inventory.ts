'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function getInventory() {
    try {
        const inventory = await prisma.inventory.findMany({
            include: {
                vaccine: true,
                healthCenter: true
            },
            orderBy: {
                expirationDate: 'asc'
            }
        })
        return { success: true, data: inventory }
    } catch (error) {
        console.error('Error fetching inventory:', error)
        return { success: false, error: 'Error al obtener inventario' }
    }
}

export async function addInventoryBatch(formData: FormData) {
    const vaccineId = formData.get('vaccineId') as string
    const healthCenterId = formData.get('healthCenterId') as string
    const stock = parseInt(formData.get('stock') as string)
    const lotNumber = formData.get('lotNumber') as string
    const expirationDate = formData.get('expirationDate') as string

    if (!vaccineId || !healthCenterId || isNaN(stock) || !lotNumber || !expirationDate) {
        return { success: false, error: 'Faltan campos requeridos' }
    }

    try {
        await prisma.inventory.create({
            data: {
                vaccineId,
                healthCenterId,
                stock,
                lotNumber,
                expirationDate: new Date(expirationDate),
                status: stock < 100 ? 'CRITICO' : stock < 500 ? 'STOCK_BAJO' : 'EN_STOCK'
            }
        })

        revalidatePath('/inventario')
        return { success: true, message: 'Lote agregado exitosamente' }
    } catch (error) {
        console.error('Error adding inventory batch:', error)
        return { success: false, error: 'Error al guardar el lote' }
    }
}

export async function updateInventoryStock(id: string, newStock: number) {
    try {
        await prisma.inventory.update({
            where: { id },
            data: {
                stock: newStock,
                status: newStock < 100 ? 'CRITICO' : newStock < 500 ? 'STOCK_BAJO' : 'EN_STOCK'
            }
        })
        revalidatePath('/inventario')
        return { success: true }
    } catch (error) {
        console.error('Error updating stock:', error)
        return { success: false, error: 'Error al actualizar stock' }
    }
}

export async function transferInventory(formData: FormData) {
    const inventoryId = formData.get('inventoryId') as string
    const destinationId = formData.get('destinationId') as string
    const quantity = parseInt(formData.get('quantity') as string)

    if (!inventoryId || !destinationId || isNaN(quantity)) {
        return { success: false, error: 'Faltan campos requeridos' }
    }

    try {
        const originInventory = await prisma.inventory.findUnique({
            where: { id: inventoryId },
            include: { vaccine: true }
        })

        if (!originInventory) return { success: false, error: 'Lote de origen no encontrado' }
        if (originInventory.stock < quantity) return { success: false, error: 'Stock insuficiente' }

        // Update origin
        await prisma.inventory.update({
            where: { id: inventoryId },
            data: {
                stock: originInventory.stock - quantity,
                status: (originInventory.stock - quantity) < 100 ? 'CRITICO' : (originInventory.stock - quantity) < 500 ? 'STOCK_BAJO' : 'EN_STOCK'
            }
        })

        // Check destination
        const destInventory = await prisma.inventory.findFirst({
            where: {
                healthCenterId: destinationId,
                vaccineId: originInventory.vaccineId,
                lotNumber: originInventory.lotNumber
            }
        })

        if (destInventory) {
            await prisma.inventory.update({
                where: { id: destInventory.id },
                data: {
                    stock: destInventory.stock + quantity,
                    status: (destInventory.stock + quantity) < 100 ? 'CRITICO' : (destInventory.stock + quantity) < 500 ? 'STOCK_BAJO' : 'EN_STOCK'
                }
            })
        } else {
            await prisma.inventory.create({
                data: {
                    vaccineId: originInventory.vaccineId,
                    healthCenterId: destinationId,
                    stock: quantity,
                    lotNumber: originInventory.lotNumber,
                    expirationDate: originInventory.expirationDate,
                    status: quantity < 100 ? 'CRITICO' : quantity < 500 ? 'STOCK_BAJO' : 'EN_STOCK'
                }
            })
        }

        revalidatePath('/inventario')
        return { success: true, message: 'Transferencia completada' }
    } catch (error) {
        console.error('Error in transfer:', error)
        return { success: false, error: 'Error al procesar transferencia' }
    }
}
