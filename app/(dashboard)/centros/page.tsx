import { getHealthCenters } from "@/app/actions/registro";
import Link from "next/link";
import SafeMap from '@/app/components/dashboard/SafeMap';

export const dynamic = 'force-dynamic';

export default async function CentrosPage() {
    const response = await getHealthCenters()
    const centros = response.success ? response.data || [] : []

    return (
        <div className="p-4 md:p-8 space-y-8">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Centros de Salud</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Gestione las jurisdicciones estatales, el estado operativo y la distribución de vacunas.</p>
                </div>
                <Link href="/centros/nuevo" className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                    <span className="material-symbols-outlined">add</span>
                    <span>Agregar Nuevo Centro</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Main Table Column */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                    {/* Filters */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-wrap gap-4 items-center">
                        <div className="flex-1 min-w-[240px]">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary" placeholder="Buscar por nombre, código o municipio..." type="text" />
                            </div>
                        </div>
                        <select className="text-sm border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 focus:ring-primary">
                            <option>Todas las Jurisdicciones</option>
                            <option>Jurisdicción I - Cuernavaca</option>
                            <option>Jurisdicción II - Jojutla</option>
                            <option>Jurisdicción III - Cuautla</option>
                        </select>
                        <select className="text-sm border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 focus:ring-primary">
                            <option>Todos los Estados</option>
                            <option>Activo</option>
                            <option>Mantenimiento</option>
                            <option>Inactivo</option>
                        </select>
                    </div>

                    {/* Table */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">CENTRO DE SALUD</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">JURISDICCIÓN</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">UBICACIÓN</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">ESTADO</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">ACCIÓN</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {centros.map((centro: { id: string; name: string; municipality: string; jurisdiction: string }, index: number) => (
                                        <tr key={centro.id} className={`hover:bg-primary/5 transition-colors cursor-pointer group ${index === 0 ? 'bg-primary/10 border-l-4 border-primary' : 'border-l-4 border-transparent'}`}>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${index === 0 ? 'bg-primary/20 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-primary/20 group-hover:text-primary'}`}>
                                                        <span className="material-symbols-outlined text-xl">medical_services</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{centro.name}</p>
                                                        <p className="text-xs text-slate-500 capitalize">Mpio: {centro.municipality}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Jurisdicción {centro.jurisdiction}</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-[150px] truncate">{centro.municipality}, Morelos</p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full w-fit ${index === 2 ? 'text-amber-600 bg-amber-100 dark:bg-amber-900/30' : 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30'}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${index === 2 ? 'bg-amber-600' : 'bg-emerald-600 animate-pulse'}`}></span>
                                                    {index === 2 ? 'MANTENIMIENTO' : 'ACTIVO'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button className="text-slate-400 hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined">chevron_right</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {centros.length === 0 && (
                                        <tr>
                                            <td colSpan={5} className="py-8 text-center text-slate-500 text-sm">No hay centros de salud registrados.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Sidebar Widget Column */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg p-6 flex flex-col gap-6 sticky top-24">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{centros.length > 0 ? centros[0].name : "Seleccione Centro"}</h3>
                                <p className="text-sm text-slate-500">Estado del Inventario</p>
                            </div>
                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-primary transition-colors">
                                <span className="material-symbols-outlined">edit</span>
                            </button>
                        </div>
                        <div className="p-4 rounded-lg bg-primary/5 dark:bg-primary/10 border border-primary/10">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-primary/70">CAPACIDAD GENERAL</span>
                                <span className="text-xs font-black text-primary">82% Lleno</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-full rounded-full" style={{ width: "82%" }}></div>
                            </div>
                        </div>

                        {/* Inventory List */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">Inventario en Vivo (Simulado)</h4>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center gap-3 p-3 border border-slate-100 dark:border-slate-800 rounded-lg bg-slate-50/50 dark:bg-slate-800/50">
                                    <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined">vaccines</span>
                                    </div>
                                    <div className="flex-1 w-full min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="text-xs font-bold text-slate-900 dark:text-white truncate pr-2">BCG (Tuberculosis)</p>
                                            <p className="text-xs font-black text-slate-900 dark:text-white shrink-0">1,250 u.</p>
                                        </div>
                                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-blue-500 h-full rounded-full" style={{ width: "65%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 border border-slate-100 dark:border-slate-800 rounded-lg bg-slate-50/50 dark:bg-slate-800/50">
                                    <div className="w-10 h-10 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined">vaccines</span>
                                    </div>
                                    <div className="flex-1 w-full min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="text-xs font-bold text-slate-900 dark:text-white truncate pr-2">Rotavirus</p>
                                            <p className="text-xs font-black text-slate-900 dark:text-white shrink-0">850 u.</p>
                                        </div>
                                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-emerald-500 h-full rounded-full" style={{ width: "90%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 border border-slate-100 dark:border-slate-800 rounded-lg bg-slate-50/50 dark:bg-slate-800/50">
                                    <div className="w-10 h-10 rounded bg-red-100 dark:bg-red-900/40 text-red-600 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined">warning</span>
                                    </div>
                                    <div className="flex-1 w-full min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="text-xs font-bold text-slate-900 dark:text-white truncate pr-2">Hepatitis B</p>
                                            <p className="text-xs font-black text-red-600 shrink-0">45 u.</p>
                                        </div>
                                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-red-500 h-full rounded-full" style={{ width: "15%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Heatmap Section */}
            <div className="mt-8 bg-slate-900 rounded-2xl p-8 relative overflow-hidden group">
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-black text-white mb-2">Mapa de Cobertura de Centros de Salud</h3>
                        <p className="text-white/70 max-w-lg">Visualice el alcance de la vacunación en los 36 municipios de Morelos. Monitoree áreas con bajo stock o alta demanda en tiempo real.</p>
                        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                            <Link
                                href="/vigilancia"
                                className="inline-block px-6 py-2 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors cursor-pointer relative z-50 shadow-md"
                                style={{ display: 'inline-block', minWidth: '180px', textAlign: 'center' }}
                            >
                                Ver Mapa Interactivo
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-5/12 aspect-video bg-white/5 rounded-xl border border-white/10 overflow-hidden relative shadow-2xl min-h-[300px]">
                        <SafeMap
                            zoom={9}
                            points={[
                                { lat: 18.92, lng: -99.23, label: 'Capacidad: 85%', risk: 'low' },
                                { lat: 18.61, lng: -99.22, label: 'Capacidad: 40%', risk: 'medium' },
                                { lat: 18.81, lng: -98.94, label: 'Capacidad: 15%', risk: 'high' }
                            ]}
                        />
                    </div>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute -left-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            </div>
        </div>
    );
}
