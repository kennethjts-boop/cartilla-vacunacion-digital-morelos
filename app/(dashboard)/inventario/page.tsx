'use client';
import { useState } from 'react';
import ExportModal from '@/app/components/dashboard/ExportModal';

import Link from 'next/link';

export default function InventarioPage() {
    const [isExportOpen, setIsExportOpen] = useState(false);
    const [exportType, setExportType] = useState<'excel'|'pdf'|'csv'>('excel');

    const handleExport = (type: 'excel'|'pdf'|'csv') => {
        setExportType(type);
        setIsExportOpen(true);
    };

    return (
        <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
            {/* Action Buttons & Title */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Resumen de Inventario</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Gestión y control de vacunas disponibles en el estado.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <button className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm" onClick={() => handleExport('excel')}>
                        <span className="material-symbols-outlined text-lg">download</span>
                        Exportar Reporte
                    </button>
                    <Link href="/inventario/transferencia" className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-lg">sync_alt</span>
                        Transferencia
                    </Link>
                    <Link href="/inventario/nuevo" className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-lg">add_circle</span>
                        Nuevo Cargamento
                    </Link>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total de Dosis</p>
                        <h3 className="text-3xl font-black mt-2 text-slate-900 dark:text-white">124,500</h3>
                        <p className="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">trending_up</span> +2.4% vs mes anterior
                        </p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">vaccines</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Lotes Críticos</p>
                        <h3 className="text-3xl font-black mt-2 text-red-600">12</h3>
                        <p className="text-xs text-red-500 font-bold mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">warning</span> Atención inmediata
                        </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg dark:bg-red-900/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-600">error</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Próximas a Vencer</p>
                        <h3 className="text-3xl font-black mt-2 text-amber-600">4,200</h3>
                        <p className="text-xs text-amber-500 font-bold mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">timer</span> Programar distribución
                        </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg dark:bg-amber-900/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">event_busy</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">En Tránsito</p>
                        <h3 className="text-3xl font-black mt-2 text-slate-900 dark:text-white">8,500</h3>
                        <p className="text-xs text-slate-500 font-bold mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">local_shipping</span> 4 envíos activos
                        </p>
                    </div>
                    <div className="bg-slate-100 p-3 rounded-lg dark:bg-slate-800 flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">move_to_inbox</span>
                    </div>
                </div>
            </div>

            {/* Main Inventory Table Container */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">Detalle de Existencias por Sede</h3>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                            <input type="text" placeholder="Filtrar lote..." className="pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-full sm:w-auto" />
                        </div>
                        <button className="p-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-500 transition-colors">
                            <span className="material-symbols-outlined">filter_list</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-slate-50/80 dark:bg-slate-800/50">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Vacuna</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Centro de Salud / Almacén</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider relative group">Stock Actual <span className="material-symbols-outlined text-[10px] inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">info</span></th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Vencimiento</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Estado</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {/* Row 1 */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                                            <span className="material-symbols-outlined text-lg">science</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-slate-100">BCG (Tuberculosis)</p>
                                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">LOTE: 549-AXX</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-slate-900 dark:text-slate-200 font-medium">Almacén Central Cuernavaca</p>
                                    <p className="text-[11px] text-slate-500">Jurisdicción I</p>
                                </td>
                                <td className="px-6 py-4 font-black text-slate-900 dark:text-white text-lg">25,000 <span className="text-xs font-medium text-slate-400 lowercase">dosis</span></td>
                                <td className="px-6 py-4">
                                    <p className="text-slate-700 dark:text-slate-300 font-bold text-sm">12 Dic 2026</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">En Stock</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-primary transition-colors p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 shrink-0 border border-orange-200 dark:border-orange-800">
                                            <span className="material-symbols-outlined text-lg">science</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-slate-100">Hepatitis B (Adulto)</p>
                                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">LOTE: 921-HBA</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-slate-900 dark:text-slate-200 font-medium">Hospital General de Cuautla</p>
                                    <p className="text-[11px] text-slate-500">Jurisdicción III</p>
                                </td>
                                <td className="px-6 py-4 font-black text-slate-900 dark:text-white text-lg">450 <span className="text-xs font-medium text-slate-400 lowercase">dosis</span></td>
                                <td className="px-6 py-4">
                                    <p className="text-slate-700 dark:text-slate-300 font-bold text-sm">15 Abr 2026</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50">Stock Bajo</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-primary transition-colors p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group bg-red-50/50 dark:bg-red-900/10">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600 shrink-0 border border-red-200 dark:border-red-800/50">
                                            <span className="material-symbols-outlined text-lg">coronavirus</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-slate-100">Influenza Estacional</p>
                                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">LOTE: 112-INF</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-slate-900 dark:text-slate-200 font-medium">Centro de Salud Jojutla</p>
                                    <p className="text-[11px] text-slate-500">Jurisdicción II</p>
                                </td>
                                <td className="px-6 py-4 font-black text-red-600 dark:text-red-400 text-lg">12 <span className="text-xs font-medium text-slate-400 lowercase">dosis</span></td>
                                <td className="px-6 py-4">
                                    <p className="text-red-600 dark:text-red-400 font-bold text-sm">30 May 2026</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 border border-red-200 dark:border-red-800/50 flex items-center gap-1 w-max"><span className="material-symbols-outlined text-[10px]">emergency</span> Crítico</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-primary transition-colors p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            {/* Row 4 */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0 border border-blue-200 dark:border-blue-800/50">
                                            <span className="material-symbols-outlined text-lg">child_care</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-slate-100">Rotavirus</p>
                                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">LOTE: 443-RTV</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-slate-900 dark:text-slate-200 font-medium">Centro de Salud Temixco</p>
                                    <p className="text-[11px] text-slate-500">Jurisdicción I</p>
                                </td>
                                <td className="px-6 py-4 font-black text-slate-900 dark:text-white text-lg">1,200 <span className="text-xs font-medium text-slate-400 lowercase">dosis</span></td>
                                <td className="px-6 py-4">
                                    <p className="text-slate-700 dark:text-slate-300 font-bold text-sm">18 Jul 2026</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">En Stock</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-primary transition-colors p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Mostrando 4 de 142 registros</p>
                    <div className="flex items-center gap-1">
                        <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-bold text-slate-500 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors cursor-not-allowed opacity-50">Ant</button>
                        <button className="px-3 py-1.5 bg-primary text-white rounded-md text-sm font-bold shadow shadow-primary/20">1</button>
                        <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-bold text-slate-500 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">2</button>
                        <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-bold text-slate-500 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">3</button>
                        <span className="text-slate-400 px-1">...</span>
                        <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-bold text-slate-500 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">Sig</button>
                    </div>
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
