import Link from "next/link";
import SafeMap from '@/app/components/dashboard/SafeMap';

export default function VigilanciaPage() {
    return (
        <div className="p-4 md:p-8 flex-1 overflow-y-auto max-w-7xl mx-auto w-full space-y-6">
            {/* Welcome & Fast Filters */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Estado de Salud Pública</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Monitoreo en tiempo real de cobertura de vacunación y brotes prevenibles.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-base">filter_list</span>
                        Filtrar por Jurisdicción
                    </button>
                    <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-base">refresh</span>
                        Actualizar
                    </button>
                </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cobertura Global</p>
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded-lg font-black tracking-wider uppercase border border-emerald-200">+1.2%</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white">84.5%</h3>
                        <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Meta: 95%</span>
                    </div>
                    <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                        <div className="bg-emerald-500 h-1.5 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" style={{ width: '84.5%' }}></div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Casos Sospechosos</p>
                        <span className="bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-[10px] px-2 py-0.5 rounded-lg font-black tracking-wider border border-amber-200 dark:border-amber-800/50 uppercase">Alerta</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white">12</h3>
                        <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Últimos 7 días</span>
                    </div>
                    <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400 mt-2 flex items-center gap-1 uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[12px]">warning</span>
                        Supera histórico (+4)
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Inmunidad de Rebaño</p>
                        <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] px-2 py-0.5 rounded-lg font-black tracking-wider uppercase border border-slate-200 dark:border-slate-700">Estable</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white">78.2%</h3>
                        <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Promedio</span>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-emerald-500"></span>
                        <span className="size-1.5 rounded-full bg-emerald-500"></span>
                        <span className="size-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></span>
                        <span className="size-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Riesgo: Bajo</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Alertas Activas</p>
                        <span className="bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 text-[10px] px-2 py-0.5 rounded-lg font-black tracking-wider uppercase border border-red-200 dark:border-red-800/50">Crítico</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-3xl font-black text-red-600 dark:text-red-400">03</h3>
                        <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Municipios</span>
                    </div>
                    <p className="text-[11px] font-bold text-red-600 dark:text-red-400 mt-2 uppercase tracking-wider flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">vital_signs</span>
                        Acción Inmediata
                    </p>
                </div>
            </div>

            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Interactive Map */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col h-[500px]">
                        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">map</span>
                                <h3 className="font-bold text-slate-800 dark:text-white">Mapa de Calor: Cobertura de Vacunación</h3>
                            </div>
                            <div className="flex items-center gap-4 hidden sm:flex">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Baja</span>
                                    <div className="w-24 h-2 rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500"></div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Alta</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative min-h-[400px]">
                            <SafeMap
                                zoom={10}
                                points={[
                                    { lat: 18.92, lng: -99.23, label: 'Jurisdicción I - Cuernavaca', risk: 'medium' },
                                    { lat: 18.61, lng: -99.22, label: 'Jurisdicción II - Jojutla', risk: 'low' },
                                    { lat: 18.81, lng: -98.94, label: 'Jurisdicción III - Cuautla', risk: 'high' },
                                    { lat: 18.88, lng: -99.17, label: 'Brote Detectado: Jiutepec', risk: 'high' },
                                    { lat: 18.85, lng: -99.21, label: 'Centro: Temixco', risk: 'low' }
                                ]}
                            />
                        </div>
                    </div>
                </div>

                {/* Trends Graph Placeholder */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">monitoring</span>
                            <h3 className="font-bold text-slate-800 dark:text-white">Tendencias Epidemiológicas</h3>
                        </div>
                        <select className="text-[11px] font-black uppercase tracking-wider border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-lg focus:ring-primary py-1.5 px-3">
                            <option>Últimos 6 meses</option>
                            <option>Anual</option>
                        </select>
                    </div>
                    <div className="h-40 w-full flex items-end justify-between gap-3 px-2">
                        {/* Simulated Bars */}
                        {[30, 45, 25, 60, 85, 40].map((h, i) => (
                            <div key={i} className="group relative flex-1 flex flex-col items-center gap-2 h-full justify-end">
                                <div className={`w-full rounded-t-md transition-all ${i === 4 ? 'bg-primary shadow-[0_4px_12px_rgba(6,96,70,0.3)]' : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-primary/50'}`} style={{ height: `${h}%` }}></div>
                                <span className={`text-[10px] font-black uppercase tracking-wider ${i === 4 ? 'text-primary' : 'text-slate-400'}`}>
                                    {['Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar'][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-6">
                        <div className="flex items-center gap-2">
                            <span className="size-2.5 rounded-full bg-primary shadow-sm shadow-primary/50"></span>
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">Sarampión</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="size-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50"></span>
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">Influenza</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="size-2.5 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></span>
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">Tos Ferina</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Risk Sidebar */}
            <div className="space-y-6">
                {/* High Risk List */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-4 bg-red-50 dark:bg-red-900/10 border-b border-red-100 dark:border-red-900/20">
                        <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                            <span className="material-symbols-outlined">priority_high</span>
                            <h3 className="font-bold">Municipios en Riesgo</h3>
                        </div>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                            <div className="flex justify-between items-start mb-1">
                                <p className="font-bold text-slate-900 dark:text-white">Jiutepec</p>
                                <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-2 py-0.5 rounded">Crítico</span>
                            </div>
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Cobertura: 62% • Casos: 5</p>
                            <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                                <div className="bg-red-500 h-1.5 rounded-full shadow-[0_0_5px_rgba(239,68,68,0.5)]" style={{ width: '62%' }}></div>
                            </div>
                        </div>
                        <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                            <div className="flex justify-between items-start mb-1">
                                <p className="font-bold text-slate-900 dark:text-white">Cuautla</p>
                                <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded">Alerta</span>
                            </div>
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Cobertura: 74% • Casos: 3</p>
                            <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                                <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '74%' }}></div>
                            </div>
                        </div>
                        <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                            <div className="flex justify-between items-start mb-1">
                                <p className="font-bold text-slate-900 dark:text-white">Cuernavaca</p>
                                <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded">Alerta</span>
                            </div>
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Cobertura: 78% • Casos: 2</p>
                            <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                                <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '78%' }}></div>
                            </div>
                        </div>
                        <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group opacity-70">
                            <div className="flex justify-between items-start mb-1">
                                <p className="font-bold text-slate-900 dark:text-white">Temixco</p>
                                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded">Bajo</span>
                            </div>
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Cobertura: 81% • Casos: 1</p>
                            <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                                <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '81%' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-slate-50/80 dark:bg-slate-800/50 text-center border-t border-slate-100 dark:border-slate-800">
                        <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Ver todos los municipios</button>
                    </div>
                </div>

                {/* Alert Protocol */}
                <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-5">
                    <h3 className="font-bold text-primary dark:text-emerald-400 mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl">emergency</span>
                        Protocolo de Alerta
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <div className="size-2 rounded-full bg-red-500 mt-1 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                            <div>
                                <p className="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-wider">Nivel 3 (Crítico)</p>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 font-medium leading-relaxed">Despliegue de brigadas de vacunación masiva en 24h.</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="size-2 rounded-full bg-amber-500 mt-1"></div>
                            <div>
                                <p className="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-wider">Nivel 2 (Alerta)</p>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 font-medium leading-relaxed">Notificación a centros de salud locales y revisión de stocks.</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="size-2 rounded-full bg-emerald-500 mt-1"></div>
                            <div>
                                <p className="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-wider">Nivel 1 (Seguro)</p>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 font-medium leading-relaxed">Monitoreo rutinario y reportes semanales del servidor.</p>
                            </div>
                        </li>
                    </ul>
                    <Link href="/manual_de_procedimientos.html" target="_blank" className="w-full mt-6 flex items-center justify-center bg-white dark:bg-slate-900 border border-primary/20 text-primary py-2.5 rounded-lg text-xs font-black uppercase tracking-wider shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        Manual de Procedimientos
                    </Link>
                </div>
            </div>
        </div>
    );
}
