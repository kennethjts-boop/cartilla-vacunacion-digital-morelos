
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testConnection() {
    console.log('Testing database connection...')
    try {
        const userCount = await prisma.user.count()
        console.log(`Connection successful. User count: ${userCount}`)
        const admin = await prisma.user.findUnique({
            where: { email: 'admin@salud.morelos.gob.mx' }
        })
        console.log('Admin user found:', !!admin)
    } catch (error) {
        console.error('Database connection failed:', error)
    } finally {
        await prisma.$disconnect()
    }
}

testConnection()
