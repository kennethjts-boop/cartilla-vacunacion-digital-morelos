'use client'

import { registerPatient } from '@/app/actions/registro'
import { useState } from 'react'

type HealthCenterItem = {
    id: string;
    name: string;
    municipality: string;
}

export default function RegistryForm({
    healthCenters: initialHealthCenters,
    municipios
}: {
    healthCenters: HealthCenterItem[],
    municipios: any[]
}) {
    const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error', message: string }>({ type: 'idle', message: '' })
    const [isPending, setIsPending] = useState(false)
    const [selectedMunicipio, setSelectedMunicipio] = useState('')
    const [filteredCenters, setFilteredCenters] = useState(initialHealthCenters)

    const handleMunicipioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setSelectedMunicipio(value)
        if (!value) {
            setFilteredCenters(initialHealthCenters)
        } else {
            // In a more complex app, we'd fetch this from the API
            // but for now we filter the initial list if possible or just show all
            setFilteredCenters(initialHealthCenters.filter(c => c.municipality === value))
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsPending(true)
        setStatus({ type: 'idle', message: '' })

        const formData = new FormData(event.currentTarget)
        const response = await registerPatient(formData)

        if (response.success) {
            setStatus({ type: 'success', message: response.message || '' })
            setSelectedMunicipio('')
            setFilteredCenters(initialHealthCenters)
                ; (event.target as HTMLFormElement).reset()
        } else {
            setStatus({ type: 'error', message: response.error || 'Unknown error' })
        }
        setIsPending(false)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            {/* ... Alerts ... */}
            {status.type === 'success' && (
                <div className="p-4 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-lg border border-green-200 dark:border-green-800 font-bold">
                    {status.message}
                </div>
            )}
            {status.type === 'error' && (
                <div className="p-4 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800 font-bold">
                    {status.message}
                </div>
            )}

            {/* Section 1: Identificación */}
            <section>
                <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-primary">person_search</span>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Datos Generales</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">CURP *</label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                                    <span className="material-symbols-outlined">fingerprint</span>
                                </span>
                                <input name="curp" required className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm uppercase" placeholder="ABCD123456HDFRNS01" type="text" />
                            </div>
                            <button className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-sm disabled:opacity-50" type="button" disabled={isPending}>
                                <span className="material-symbols-outlined">verified</span>
                                Validar
                            </button>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Nombre Completo *</label>
                        <input name="fullName" required className="block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm" placeholder="Nombre(s) y apellidos del menor" type="text" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Fecha de Nacimiento *</label>
                        <input name="dateOfBirth" required className="block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm" type="date" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Género *</label>
                        <div className="flex gap-4 h-12">
                            <label className="flex-1 flex items-center justify-center gap-2 px-4 border border-slate-300 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:bg-primary/10 has-[:checked]:border-primary has-[:checked]:text-primary">
                                <input className="text-primary focus:ring-primary" name="gender" type="radio" value="M" required />
                                <span className="text-sm font-medium">Masculino</span>
                            </label>
                            <label className="flex-1 flex items-center justify-center gap-2 px-4 border border-slate-300 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:bg-primary/10 has-[:checked]:border-primary has-[:checked]:text-primary">
                                <input className="text-primary focus:ring-primary" name="gender" type="radio" value="F" required />
                                <span className="text-sm font-medium">Femenino</span>
                            </label>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Ubicación */}
            <section>
                <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Ubicación y Unidad de Salud</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Estado</label>
                        <input className="block w-full px-3 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 font-medium text-sm" disabled type="text" value="Morelos" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Municipio *</label>
                        <select
                            name="municipality"
                            required
                            defaultValue={selectedMunicipio}
                            onChange={handleMunicipioChange}
                            className="block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm"
                        >
                            <option value="">Seleccione un municipio</option>
                            {municipios.map(m => (
                                <option key={m.cve_mun} value={m.nombre}>{m.nombre}</option>
                            ))}
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Centro de Salud Asignado *</label>
                        <select name="healthCenterId" required className="block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm">
                            <option value="">Seleccione la unidad médica</option>
                            {filteredCenters.map(hc => (
                                <option key={hc.id} value={hc.id}>{hc.name}</option>
                            ))}
                        </select>
                        <p className="mt-1.5 text-xs text-slate-500">Solo se muestran unidades del municipio seleccionado.</p>
                    </div>
                </div>
            </section>

            {/* Actions */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-end gap-4 border-t border-slate-100 dark:border-slate-800">
                <button className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50" type="button" disabled={isPending}>
                    Cancelar
                </button>
                <button className="w-full sm:w-auto px-10 py-3 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50" type="submit" disabled={isPending}>
                    <span className="material-symbols-outlined">
                        {isPending ? 'sync' : 'app_registration'}
                    </span>
                    {isPending ? 'Registrando...' : 'Registrar Paciente'}
                </button>
            </div>
        </form>
    )
}
