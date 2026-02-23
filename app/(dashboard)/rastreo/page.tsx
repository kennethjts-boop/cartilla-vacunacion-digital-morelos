import Link from 'next/link';

export default function RastreoPage() {
    return (
        <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
            {/* Header & Search */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary/10 text-primary p-2 rounded-lg">
                            <span className="material-symbols-outlined block">track_changes</span>
                        </div>
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Rastreo de Lotes</h2>
                    </div>
                    <p className="mt-1 text-slate-500 dark:text-slate-400">Consulta la trazabilidad completa, cadena de frío y estatus de distribución de cualquier lote de vacuna.</p>
                </div>

                <div className="w-full sm:w-auto min-w-[320px]">
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input
                            type="text"
                            defaultValue="BCG-001"
                            placeholder="Ingrese No. de Lote..."
                            className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold focus:ring-4 focus:ring-primary/20 focus:border-primary shadow-sm uppercase tracking-wider transition-all text-slate-900 dark:text-white"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors">
                            Rastrear
                        </button>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs font-bold text-slate-500">
                        <span>Búsquedas recientes:</span>
                        <button className="text-primary hover:underline bg-primary/5 px-2 py-0.5 rounded">SRP-X1</button>
                        <button className="text-primary hover:underline bg-primary/5 px-2 py-0.5 rounded">INF-2022</button>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">

                {/* Lote Info & Metrics (Left Sidebar) */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Summary Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-10 -mt-10 pointer-events-none"></div>
                        <div className="flex items-start justify-between mb-6 relative">
                            <div>
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Detalle del Lote</h3>
                                <p className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-wider">BCG-001</p>
                            </div>
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1.5 text-xs font-black text-emerald-700 dark:text-emerald-400 uppercase border border-emerald-200 dark:border-emerald-800/50 shadow-sm">
                                <span className="material-symbols-outlined text-[14px]">check_circle</span> Activo
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">vaccines</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Inmunógeno</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1">Hepatitis B <span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-1.5 rounded text-slate-600 dark:text-slate-300">Pediátrica</span></p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">factory</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Fabricante</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Birmex S.A. de C.V.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                                <div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-900/30 text-rose-600 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">calendar_month</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Caducidad</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">12 Dic 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Dosis Recibidas</p>
                            <p className="text-2xl font-black text-slate-900 dark:text-white">50,000</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Dosis Aplicadas</p>
                            <p className="text-2xl font-black text-emerald-600">42,150</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">En Tránsito</p>
                            <p className="text-2xl font-black text-blue-600">4,500</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4">
                            <p className="text-[10px] font-bold text-rose-500 uppercase tracking-wider mb-1">Merma (Bajas)</p>
                            <p className="text-2xl font-black text-rose-600">12</p>
                        </div>
                    </div>
                </div>

                {/* Timeline Lifecycle trace (Right Panel) */}
                <div className="lg:col-span-8">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full overflow-hidden">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
                            <h3 className="text-lg font-black text-slate-900 dark:text-white">Trazabilidad del Lote</h3>
                            <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">map</span>
                                Ver en Mapa
                            </button>
                        </div>

                        <div className="p-6 md:p-8 flex-1">
                            <div className="relative pl-8 space-y-10 before:absolute before:inset-y-2 before:left-[15px] before:w-[2px] before:bg-slate-200 dark:before:bg-slate-700">

                                {/* Timeline Item 1: Reception */}
                                <div className="relative">
                                    <div className="absolute -left-[45px] top-1 h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#0f172a] z-10 text-emerald-600">
                                        <span className="material-symbols-outlined text-[16px] font-bold">flight_land</span>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                            <h4 className="font-bold text-slate-900 dark:text-white text-base">Recepción Estatal (Arribo)</h4>
                                            <span className="text-xs font-bold text-slate-400 bg-white dark:bg-slate-900 px-2 py-1 rounded shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-1 w-max">
                                                <span className="material-symbols-outlined text-[12px]">schedule</span> 10 Ene 2026, 08:30 AM
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Llegada al Almacén Central de Servicios de Salud de Morelos proveniente del laboratorio Birmex.</p>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase">Cantidad</p>
                                                <p className="text-sm font-black text-slate-800 dark:text-white">50,000 Dosis</p>
                                            </div>
                                            <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase">Temp. Ingreso</p>
                                                <p className="text-sm font-black text-blue-500">4.2 °C</p>
                                            </div>
                                            <div className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-center col-span-2 md:col-span-1">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase">Validado Por</p>
                                                <p className="text-sm font-black text-slate-800 dark:text-white">Dr. A. López</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Item 2: Distribution Transit */}
                                <div className="relative">
                                    <div className="absolute -left-[45px] top-1 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 border-2 border-blue-500 flex items-center justify-center shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#0f172a] z-10 text-blue-600">
                                        <span className="material-symbols-outlined text-[16px] font-bold">local_shipping</span>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow relative overflow-hidden">
                                        {/* Activity Indicator Line */}
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>

                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                            <h4 className="font-bold text-slate-900 dark:text-white text-base">Distribución a Jurisdicciones</h4>
                                            <span className="text-xs font-bold text-slate-400 bg-white dark:bg-slate-900 px-2 py-1 rounded shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-1 w-max">
                                                <span className="material-symbols-outlined text-[12px]">schedule</span> 15 Ene - Presente
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Transferencias interinstitucionales completadas a almacenes jurisdiccionales e IMSS/ISSSTE. Envío activo hacia 3 clínicas.</p>

                                        {/* Status Progress Bars */}
                                        <div className="space-y-3">
                                            <div>
                                                <div className="flex justify-between text-xs font-bold mb-1">
                                                    <span className="text-slate-700 dark:text-slate-300">Entregado a SSM</span>
                                                    <span className="text-emerald-600">30,000 / 30,000</span>
                                                </div>
                                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '100%' }}></div></div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-xs font-bold mb-1">
                                                    <span className="text-slate-700 dark:text-slate-300">Entregado a IMSS</span>
                                                    <span className="text-blue-500">10,500 / 15,000</span>
                                                </div>
                                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5"><div className="bg-blue-500 h-1.5 rounded-full animate-pulse" style={{ width: '70%' }}></div></div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-xs font-bold mb-1">
                                                    <span className="text-slate-700 dark:text-slate-300">Entregado a ISSSTE</span>
                                                    <span className="text-emerald-600">5,000 / 5,000</span>
                                                </div>
                                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '100%' }}></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Item 3: Application & Padrón */}
                                <div className="relative">
                                    <div className="absolute -left-[45px] top-1 h-8 w-8 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#0f172a] z-10 text-slate-400">
                                        <span className="material-symbols-outlined text-[16px] font-bold">how_to_reg</span>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 group hover:border-primary/50 cursor-pointer transition-colors relative">
                                        <div className="absolute right-4 top-4 hidden group-hover:block transition-opacity opacity-0 group-hover:opacity-100">
                                            <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg">open_in_new</span>
                                        </div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">Proceso de Aplicación (En Curso)</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">42,150 Dosis han sido aplicadas a pacientes registrados en la Cartilla Digital.</p>
                                        <Link href="/rastreo/padron/BCG-001" className="text-xs font-bold text-primary uppercase tracking-wider hover:underline flex items-center gap-1 w-fit">
                                            Ver Padrón de Pacientes del Lote <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
