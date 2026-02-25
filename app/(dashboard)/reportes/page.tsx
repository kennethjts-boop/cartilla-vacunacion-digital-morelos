'use client';
import { useState } from 'react';
import ExportModal from '@/app/components/dashboard/ExportModal';

const centrosData = [
    { id: 1, nombre: "UMF No. 20", institucion: "IMSS", municipio: "Cuernavaca", cobertura: 96.5, meta: "3,200 / 3,310", estado: "Óptimo" },
    { id: 2, nombre: "H.R. Centenario de la Revolución", institucion: "ISSSTE", municipio: "Emiliano Zapata", cobertura: 89.2, meta: "1,450 / 1,620", estado: "Óptimo" },
    { id: 3, nombre: "C.S. Cuernavaca Centro", institucion: "SSM Morelos", municipio: "Cuernavaca", cobertura: 98.2, meta: "1,200 / 1,220", estado: "Óptimo" },
    { id: 4, nombre: "Hospital General G. Parres", institucion: "SSM Morelos", municipio: "Cuernavaca", cobertura: 94.1, meta: "2,800 / 2,970", estado: "Óptimo" },
    { id: 5, nombre: "C.S. Jiutepec Norte", institucion: "SSM Morelos", municipio: "Jiutepec", cobertura: 92.5, meta: "850 / 920", estado: "Óptimo" },
    { id: 6, nombre: "Clínica Hospital Cuautla", institucion: "ISSSTE", municipio: "Cuautla", cobertura: 85.0, meta: "980 / 1,150", estado: "Regular" },
    { id: 7, nombre: "C.S. Cuautla Oriente", institucion: "SSM Morelos", municipio: "Cuautla", cobertura: 81.0, meta: "940 / 1,160", estado: "Regular" },
    { id: 8, nombre: "UMF No. 24", institucion: "IMSS", municipio: "Yecapixtla", cobertura: 78.4, meta: "650 / 830", estado: "Regular" },
    { id: 9, nombre: "Hospital del Niño Morelense", institucion: "SSM Morelos", municipio: "Emiliano Zapata", cobertura: 93.5, meta: "1,800 / 1,920", estado: "Óptimo" },
    { id: 10, nombre: "C.S. Tepoztlán Rural", institucion: "SSM Morelos", municipio: "Tepoztlán", cobertura: 64.1, meta: "320 / 500", estado: "Crítico" },
];

const getEstadoBadge = (estado: string) => {
    switch (estado) {
        case 'Óptimo':
            return <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase">Óptimo</span>;
        case 'Regular':
            return <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 dark:bg-amber-900/30 px-2 py-1 text-[10px] font-black text-amber-700 dark:text-amber-400 uppercase">Regular</span>;
        case 'Crítico':
            return <span className="inline-flex items-center gap-1 rounded-md bg-rose-50 dark:bg-rose-900/30 px-2 py-1 text-[10px] font-black text-rose-700 dark:text-rose-400 uppercase">Crítico</span>;
        default:
            return null;
    }
};

const getInstitucionBadge = (inst: string) => {
    switch (inst) {
        case 'IMSS':
            return <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-1 text-[10px] font-black text-emerald-800 dark:text-emerald-400 uppercase border border-emerald-200 dark:border-emerald-800 tracking-wider">IMSS</span>;
        case 'ISSSTE':
            return <span className="inline-flex items-center gap-1 rounded-md bg-blue-100 dark:bg-blue-900/30 px-2.5 py-1 text-[10px] font-black text-blue-800 dark:text-blue-400 uppercase border border-blue-200 dark:border-blue-800 tracking-wider">ISSSTE</span>;
        case 'SSM Morelos':
            return <span className="inline-flex items-center gap-1 rounded-md bg-pink-100 dark:bg-pink-900/30 px-2.5 py-1 text-[10px] font-black text-pink-800 dark:text-pink-400 uppercase border border-pink-200 dark:border-pink-800 tracking-wider">SSM</span>;
        default:
            return <span>{inst}</span>;
    }
};

const getProgressBarColor = (cobertura: number) => {
    if (cobertura >= 85) return 'bg-primary';
    if (cobertura >= 70) return 'bg-amber-500';
    return 'bg-rose-500';
};

export default function ReportesPage() {
    const [isExportOpen, setIsExportOpen] = useState(false);
    const [exportType, setExportType] = useState<'excel' | 'pdf' | 'csv'>('excel');

    const handleExport = (type: 'excel' | 'pdf' | 'csv') => {
        setExportType(type);
        setIsExportOpen(true);
    };

    return (
        <div className="p-4 md:p-8 space-y-8">
            {/* Header Actions */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 dark:border-slate-800 pb-6">
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Panel de Reportes Avanzados</h2>
                    <p className="mt-1 text-slate-500 dark:text-slate-400">Análisis detallado de indicadores estatales y desempeño interinstitucional de vacunación.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <button className="inline-flex items-center gap-2 rounded-lg bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all" onClick={() => handleExport('excel')}>
                        <span className="material-symbols-outlined text-lg">file_download</span>
                        Exportar Excel
                    </button>
                    <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all" onClick={() => handleExport('pdf')}>
                        <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                        Informe Mensual PDF
                    </button>
                </div>
            </div>

            {/* KPIs Section */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Cobertura Interinstitucional</p>
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">analytics</span>
                        </span>
                    </div>
                    <div className="mt-4 flex items-baseline gap-2">
                        <h3 className="text-4xl font-black text-slate-900 dark:text-white">88.3%</h3>
                        <span className="flex items-center text-sm font-bold text-emerald-600">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            1.5%
                        </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-400 font-medium">vs. mismo periodo mes anterior (Sector Salud)</p>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Tasa de Deserción</p>
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                            <span className="material-symbols-outlined">person_remove</span>
                        </span>
                    </div>
                    <div className="mt-4 flex items-baseline gap-2">
                        <h3 className="text-4xl font-black text-slate-900 dark:text-white">3.8%</h3>
                        <span className="flex items-center text-sm font-bold text-rose-600">
                            <span className="material-symbols-outlined text-sm">trending_down</span>
                            0.9%
                        </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-400 font-medium">Esquemas incompletos detectados a nivel estatal</p>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Dosis Aplicadas (Mes)</p>
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            <span className="material-symbols-outlined">vaccines</span>
                        </span>
                    </div>
                    <div className="mt-4 flex items-baseline gap-2">
                        <h3 className="text-4xl font-black text-slate-900 dark:text-white">45,620</h3>
                        <span className="flex items-center text-sm font-bold text-emerald-600">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            12.4%
                        </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-400 font-medium">SSM, IMSS, e ISSSTE combinados</p>
                </div>
            </div>

            {/* Charts and Map Section */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Monthly Trends - Simulated */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tendencias Interinstitucionales (2026)</h3>
                        <select className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold py-1.5 focus:border-primary focus:ring-primary">
                            <option>Todas las Instituciones</option>
                            <option>SSM Morelos</option>
                            <option>IMSS</option>
                            <option>ISSSTE</option>
                        </select>
                    </div>
                    <div className="relative h-64 w-full">
                        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 400 150">
                            <path className="fill-primary/10" d="M0,130 C40,120 80,140 120,80 C160,20 200,60 240,40 C280,20 320,50 360,10 C380,0 400,5 400,5 L400,150 L0,150 Z"></path>
                            <path className="stroke-primary" d="M0,130 C40,120 80,140 120,80 C160,20 200,60 240,40 C280,20 320,50 360,10 C380,0 400,5" fill="none" strokeWidth="3"></path>
                            <circle className="fill-primary" cx="120" cy="80" r="4"></circle>
                            <circle className="fill-primary" cx="240" cy="40" r="4"></circle>
                            <circle className="fill-primary" cx="360" cy="10" r="4"></circle>
                        </svg>
                    </div>
                    <div className="mt-4 flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span><span>Jul</span><span>Ago</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dic</span>
                    </div>
                </div>

                {/* Simulated Map */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm overflow-hidden relative">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cobertura Estatal por Región</h3>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 text-[10px] text-slate-500 font-bold">
                                <span className="h-2 w-2 rounded-full bg-red-400"></span> Bajo
                                <span className="h-2 w-2 rounded-full bg-primary/60"></span> Medio
                                <span className="h-2 w-2 rounded-full bg-primary"></span> Alto
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-700">
                        {/* Simulated Google Maps Interface */}
                        <div className="relative w-full h-full bg-[#e5e3df] dark:bg-slate-800 overflow-hidden">
                            <div className="absolute inset-0 opacity-70 dark:opacity-40">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="Mapa Base Morelos" className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen scale-110" src="/morelos_map.png" />
                            </div>

                            {/* Map Markers */}
                            <div className="absolute inset-0">
                                <div className="absolute top-1/4 left-1/3 group cursor-pointer">
                                    <div className="h-4 w-4 bg-primary rounded-full ring-4 ring-primary/30 animate-pulse"></div>
                                    <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-10">Cuernavaca (Todas Inst.): 96.3%</div>
                                </div>
                                <div className="absolute top-1/3 left-1/2 group cursor-pointer">
                                    <div className="h-3 w-3 bg-primary/80 rounded-full ring-2 ring-primary/20"></div>
                                </div>
                                <div className="absolute top-1/2 left-1/4 group cursor-pointer">
                                    <div className="h-3 w-3 bg-red-500 rounded-full ring-2 ring-red-500/20"></div>
                                </div>
                                <div className="absolute bottom-1/3 right-1/3 group cursor-pointer">
                                    <div className="h-3 w-3 bg-amber-500 rounded-full ring-2 ring-amber-500/20"></div>
                                </div>
                            </div>

                            {/* Focus Tooltip */}
                            <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-slate-900/95 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xl">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Detalle Regional: Cuernavaca</p>
                                <p className="text-sm font-black text-primary">96.3% Cobertura Interinstitucional</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Performance Table */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden flex flex-col">
                <div className="border-b border-slate-100 dark:border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        Desempeño Interinstitucional de Unidades Médicas
                    </h3>
                    <div className="flex gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">Top Regional</span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 dark:bg-rose-900/30 px-2.5 py-0.5 text-xs font-bold text-rose-700 dark:text-rose-400">Atención Prioritaria</span>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-bold border-b border-slate-100 dark:border-slate-800 uppercase tracking-wider text-[11px]">
                                <th className="px-6 py-4">Unidad Médica</th>
                                <th className="px-6 py-4">Institución</th>
                                <th className="px-6 py-4">Municipio</th>
                                <th className="px-6 py-4 w-48">Cobertura</th>
                                <th className="px-6 py-4">Meta Mensual</th>
                                <th className="px-6 py-4">Estado</th>
                                <th className="px-6 py-4 text-right">Acción</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {centrosData.map((centro) => (
                                <tr key={centro.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{centro.nombre}</td>
                                    <td className="px-6 py-4">{getInstitucionBadge(centro.institucion)}</td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">{centro.municipio}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <span className="font-black w-12 text-slate-700 dark:text-slate-200">{centro.cobertura.toFixed(1)}%</span>
                                            <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full transition-all duration-500 ${getProgressBarColor(centro.cobertura)}`} style={{ width: `${centro.cobertura}%` }}></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 font-medium">{centro.meta}</td>
                                    <td className="px-6 py-4">{getEstadoBadge(centro.estado)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:text-primary/80 font-bold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-md hover:bg-primary/10 transition-colors">Detalles</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ExportModal
                isOpen={isExportOpen}
                onClose={() => setIsExportOpen(false)}
                fileType={exportType}
            />
        </div>

    );
}
