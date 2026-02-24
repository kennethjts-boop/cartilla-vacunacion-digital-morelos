import { PrismaClient, Institucion } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const MUNICIPIOS_MORELOS = [
    { cve_mun: "001", nombre: "Amacuzac" },
    { cve_mun: "002", nombre: "Atlatlahucan" },
    { cve_mun: "003", nombre: "Axochiapan" },
    { cve_mun: "004", nombre: "Ayala" },
    { cve_mun: "005", nombre: "Coatlán del Río" },
    { cve_mun: "006", nombre: "Cuautla" },
    { cve_mun: "007", nombre: "Cuernavaca" },
    { cve_mun: "008", nombre: "Emiliano Zapata" },
    { cve_mun: "009", nombre: "Huitzilac" },
    { cve_mun: "010", nombre: "Jantetelco" },
    { cve_mun: "011", nombre: "Jiutepec" },
    { cve_mun: "012", nombre: "Jojutla" },
    { cve_mun: "013", nombre: "Jonacatepec de Leandro Valle" },
    { cve_mun: "014", nombre: "Mazatepec" },
    { cve_mun: "015", nombre: "Miacatlán" },
    { cve_mun: "016", nombre: "Ocuituco" },
    { cve_mun: "017", nombre: "Puente de Ixtla" },
    { cve_mun: "018", nombre: "Temixco" },
    { cve_mun: "019", nombre: "Tepalcingo" },
    { cve_mun: "020", nombre: "Tepoztlán" },
    { cve_mun: "021", nombre: "Tetecala" },
    { cve_mun: "022", nombre: "Tetela del Volcán" },
    { cve_mun: "023", nombre: "Tlalnepantla" },
    { cve_mun: "024", nombre: "Tlaltizapán de Zapata" },
    { cve_mun: "025", nombre: "Tlaquiltenango" },
    { cve_mun: "026", nombre: "Tlayacapan" },
    { cve_mun: "027", nombre: "Totolapan" },
    { cve_mun: "028", nombre: "Xochitepec" },
    { cve_mun: "029", nombre: "Yautepec" },
    { cve_mun: "030", nombre: "Yecapixtla" },
    { cve_mun: "031", nombre: "Zacatepec" },
    { cve_mun: "032", nombre: "Zacualpan de Amilpas" },
    { cve_mun: "033", nombre: "Temoac" },
    { cve_mun: "034", nombre: "Coatetelco" },
    { cve_mun: "035", nombre: "Xoxocotla" },
    { cve_mun: "036", nombre: "Hueyapan" },
];

async function main() {
    // 1. Crear un Admin (con contraseña hasheada)
    const adminPasswordHtml = 'admin123'
    const passwordHash = await bcrypt.hash(adminPasswordHtml, 10)

    await prisma.user.upsert({
        where: { email: 'admin@salud.morelos.gob.mx' },
        update: { password: passwordHash },
        create: {
            email: 'admin@salud.morelos.gob.mx',
            password: passwordHash,
            role: 'ADMIN_ESTATAL',
            name: 'Administrador Estatal',
        },
    })

    // 2. Seed Municipios
    console.log('Seeding Municipios...')
    for (const mun of MUNICIPIOS_MORELOS) {
        await prisma.municipio.upsert({
            where: { cve_ent_cve_mun: { cve_ent: "17", cve_mun: mun.cve_mun } },
            update: { nombre: mun.nombre, nombre_normalizado: mun.nombre.toUpperCase() },
            create: {
                cve_ent: "17",
                cve_mun: mun.cve_mun,
                nombre: mun.nombre,
                nombre_normalizado: mun.nombre.toUpperCase()
            },
        });
    }

    // 3. Insert Vaccines
    const vacunas = [
        { name: 'BCG (Tuberculosis)', dosesRequired: 1, recommendedAgeMonths: 0 },
        { name: 'Hepatitis B', dosesRequired: 3, recommendedAgeMonths: 0 },
        { name: 'Pentavalente Acelular', dosesRequired: 4, recommendedAgeMonths: 2 },
        { name: 'Rotavirus', dosesRequired: 2, recommendedAgeMonths: 2 },
        { name: 'Neumocócica Conjugada', dosesRequired: 3, recommendedAgeMonths: 2 },
    ]

    for (const v of vacunas) {
        await prisma.vaccine.upsert({
            where: { name: v.name },
            update: {},
            create: v,
        });
    }

    // 4. Seed Representative Health Units
    const healthUnits = [
        {
            clues: "MSSSA000632",
            institucion: Institucion.SSA,
            nombre_unidad: "HOSPITAL GENERAL CUERNAVACA",
            tipo_unidad: "HOSPITAL GENERAL",
            cve_mun: "007",
            direccion: "AV. DOMINGO DIEZ S/N COL. LOMAS DE LA SELVA",
            municipio_texto: "Cuernavaca",
            fuente: "CLUES"
        },
        {
            clues: "MSSSA001402",
            institucion: Institucion.SSA,
            nombre_unidad: "CENTRO DE SALUD JIUTEPEC",
            tipo_unidad: "CENTRO DE SALUD",
            cve_mun: "011",
            direccion: "AV. INSURGENTES S/N",
            municipio_texto: "Jiutepec",
            fuente: "CLUES"
        }
    ];

    for (const unit of healthUnits) {
        await prisma.unidadSalud.upsert({
            where: { clues: unit.clues },
            update: unit,
            create: unit as any
        });
    }

    console.log('Seed completed successfully.')
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
