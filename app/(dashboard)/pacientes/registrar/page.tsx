import { getHealthCenters, getMunicipios } from "@/app/actions/registro";
import RegistryForm from "@/app/components/registro/RegistryForm";

export default async function RegistroPage() {
    const [hcRes, munRes] = await Promise.all([
        getHealthCenters(),
        getMunicipios()
    ])

    const healthCenters = hcRes.success ? hcRes.data || [] : []
    const municipios = munRes.success ? munRes.data || [] : []

    return (
        <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 w-full">
            {/* ... Navigation and Title ... */}
            <div className="mb-8">
                <nav className="flex mb-4 text-sm text-slate-500 gap-2">
                    <span className="hover:text-primary cursor-pointer">Pacientes</span>
                    <span>/</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Registro de Nuevo Niño/a</span>
                </nav>
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Registro de Nuevo Niño/a</h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Ingrese la información obligatoria para dar de alta al paciente en el sistema estatal de salud.</p>
            </div>

            <RegistryForm healthCenters={healthCenters} municipios={municipios} />

            {/* Footer Info */}
            <div className="mt-8 text-center text-slate-400 text-xs">
                <p>© 2026 Gobierno del Estado de Morelos - Secretaría de Salud</p>
                <p className="mt-1">El manejo de sus datos personales está protegido por la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.</p>
            </div>
        </main>
    )
}
