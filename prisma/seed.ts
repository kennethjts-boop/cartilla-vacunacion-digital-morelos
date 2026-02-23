import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    // 1. Crear un Admin (con contraseña hasheada)
    const adminPasswordHtml = 'admin123'
    const passwordHash = await bcrypt.hash(adminPasswordHtml, 10)

    const admin = await prisma.user.upsert({
        where: { email: 'admin@salud.morelos.gob.mx' },
        update: { password: passwordHash }, // Update it if we already ran the seed script
        create: {
            email: 'admin@salud.morelos.gob.mx',
            password: passwordHash,
            role: 'ADMIN_ESTATAL',
            name: 'Administrador Estatal',
        },
    })
    console.log('Admin user created:', admin.email)

    // Insert Health Centers
    const centros = [
        { name: 'Hospital General de Jiutepec', municipality: 'Jiutepec', jurisdiction: 'Morelos' },
        { name: 'Centro Salud Cuernavaca Centro', municipality: 'Cuernavaca', jurisdiction: 'Morelos' },
        { name: 'Clínica Rural 42 Cuautla', municipality: 'Cuautla', jurisdiction: 'Morelos' },
        { name: 'CESSA Temixco', municipality: 'Temixco', jurisdiction: 'Morelos' },
        { name: 'Centro Salud Jojutla', municipality: 'Jojutla', jurisdiction: 'Morelos' },
    ]

    const healthCenterMap = new Map()
    for (const hc of centros) {
        // Assume name is unique enough for demo
        const existing = await prisma.healthCenter.findFirst({ where: { name: hc.name } })
        let created
        if (existing) {
            created = existing
        } else {
            created = await prisma.healthCenter.create({ data: hc })
        }
        healthCenterMap.set(hc.name, created.id)
    }

    // Insert Vaccines
    const vacunas = [
        { name: 'BCG (Tuberculosis)', dosesRequired: 1, recommendedAgeMonths: 0 },
        { name: 'Hepatitis B', dosesRequired: 3, recommendedAgeMonths: 0 },
        { name: 'Pentavalente Acelular', dosesRequired: 4, recommendedAgeMonths: 2 },
        { name: 'Rotavirus', dosesRequired: 2, recommendedAgeMonths: 2 },
        { name: 'Neumocócica Conjugada', dosesRequired: 3, recommendedAgeMonths: 2 },
    ]

    const vaccineMap = new Map()
    for (const v of vacunas) {
        const existing = await prisma.vaccine.findFirst({ where: { name: v.name } })
        let created
        if (existing) {
            created = existing
        } else {
            created = await prisma.vaccine.create({ data: v })
        }
        vaccineMap.set(v.name, created.id)
    }

    // Admin user 2
    await prisma.user.upsert({
        where: { email: 'admin@saludmorelos.gob.mx' },
        update: { password: passwordHash },
        create: {
            email: 'admin@saludmorelos.gob.mx',
            password: passwordHash,
            name: 'Admin Estatal (Secundario)',
            role: 'ADMIN_ESTATAL',
            jurisdiction: 'Morelos',
        }
    })

    // Médico user
    await prisma.user.upsert({
        where: { email: 'medico@salud.morelos.gob.mx' },
        update: { password: passwordHash },
        create: {
            email: 'medico@salud.morelos.gob.mx',
            password: passwordHash,
            name: 'Dra. Elena Ramírez',
            role: 'MEDICO',
            jurisdiction: 'Cuernavaca',
        }
    })

    // Tutor user
    await prisma.user.upsert({
        where: { email: 'tutor@ejemplo.com' },
        update: { password: passwordHash },
        create: {
            email: 'tutor@ejemplo.com',
            password: passwordHash,
            name: 'Juan Pérez',
            role: 'TUTOR',
        }
    })

    // Los catalogos, configuraciones y usuarios base han sido creados.
    // NOTA PARA PRODUCCION: Se han limpiado los pacientes dummy (pruebas) 
    // para que la base de datos nazca completamente limpia al salir a red, 
    // pero lista para recibir registros reales a traves del dashboard.
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
