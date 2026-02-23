'use client';
import { useState } from 'react';
import ExportModal from '@/app/components/dashboard/ExportModal';

import Link from 'next/link';

export default function CitasPage() {
    const [isExportOpen, setIsExportOpen] = useState(false);
    const [exportType, setExportType] = useState<'excel' | 'pdf' | 'csv'>('excel');

    const handleExport = (type: 'excel' | 'pdf' | 'csv') => {
        setExportType(type);
        setIsExportOpen(true);
    };

    return (
        <div className="p-4 md:p-8 flex flex-col xl:flex-row gap-6 max-w-[1600px] mx-auto w-full">
            {/* Sidebar Izquierda: Calendario y Navegación rápida (solo para citas) */}
            <aside className="w-full xl:w-72 flex-shrink-0 space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-slate-700 dark:text-slate-200">Octubre 2023</h3>
                        <div className="flex gap-1">
                            <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 transition-colors">
                                <span className="material-symbols-outlined text-sm">chevron_left</span>
                            </button>
                            <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 transition-colors">
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 text-center text-[10px] font-bold text-slate-400 uppercase mb-2">
                        <div>Do</div><div>Lu</div><div>Ma</div><div>Mi</div><div>Ju</div><div>Vi</div><div>Sá</div>
                    </div>
                    <div className="grid grid-cols-7 text-center gap-y-1">
                        {/* Calendario Dummy */}
                        <div className="text-xs py-2 text-slate-300 dark:text-slate-600">26</div>
                        <div className="text-xs py-2 text-slate-300 dark:text-slate-600">27</div>
                        <div className="text-xs py-2 text-slate-300 dark:text-slate-600">28</div>
                        <div className="text-xs py-2 text-slate-300 dark:text-slate-600">29</div>
                        <div className="text-xs py-2 text-slate-300 dark:text-slate-600">30</div>
                        <div className="text-xs py-2 font-medium">1</div>
                        <div className="text-xs py-2 font-medium">2</div>
                        <div className="text-xs py-2 font-medium">3</div>
                        <div className="text-xs py-2 font-medium">4</div>
                        <div className="text-xs py-2 font-medium">5</div>
                        <div className="text-xs py-2 font-medium">6</div>
                        <div className="text-xs py-2 font-medium">7</div>
                        <div className="text-xs py-2 font-medium">8</div>
                        <div className="text-xs py-2 font-medium">9</div>
                        <div className="text-xs py-2 font-medium">10</div>
                        <div className="text-xs py-2 font-medium">11</div>
                        <div className="text-xs py-2 font-medium bg-primary text-white rounded-lg shadow-sm shadow-primary/20">12</div>
                        <div className="text-xs py-2 font-medium">13</div>
                        <div className="text-xs py-2 font-medium">14</div>
                        <div className="text-xs py-2 font-medium">15</div>
                        <div className="text-xs py-2 font-medium">16</div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Sede de Vacunación</h4>
                    <select className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-2 focus:ring-primary focus:border-primary">
                        <option>Jurisdicción I - Cuernavaca</option>
                        <option>Jurisdicción II - Jojutla</option>
                        <option>Jurisdicción III - Cuautla</option>
                    </select>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 space-y-6">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Gestión de Citas</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Administre y revise el progreso de citas de vacunación programadas.</p>
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Citas Hoy</p>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white">45</h3>
                            <p className="text-xs text-primary font-semibold mt-2 flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                +5% vs ayer
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl">calendar_today</span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Atendidos</p>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white">28</h3>
                            <div className="w-32 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-4 overflow-hidden">
                                <div className="w-[62%] h-full bg-primary rounded-full"></div>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                            <span className="material-symbols-outlined text-3xl">check_circle</span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Pendientes</p>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white">17</h3>
                            <p className="text-xs text-amber-600 font-semibold mt-2 flex items-center gap-1">
                                En espera de llegada
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                            <span className="material-symbols-outlined text-3xl">schedule</span>
                        </div>
                    </div>
                </div>

                {/* Filters Section */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                            <label className="text-xs font-bold text-slate-500 uppercase">Vacuna:</label>
                            <select className="text-sm bg-slate-50 dark:bg-slate-800 border-none rounded-lg py-1.5 focus:ring-2 focus:ring-primary w-full sm:w-auto">
                                <option>Todas las vacunas</option>
                                <option>Influenza</option>
                                <option>COVID-19</option>
                                <option>BCG</option>
                                <option>Hepatitis B</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-xs font-bold text-slate-500 uppercase">Estado:</label>
                            <select className="text-sm bg-slate-50 dark:bg-slate-800 border-none rounded-lg py-1.5 focus:ring-2 focus:ring-primary w-full sm:w-auto">
                                <option>Todos los estados</option>
                                <option>Confirmada</option>
                                <option>Pendiente</option>
                                <option>Cancelada</option>
                            </select>
                        </div>
                    </div>
                    <Link href="/citas/nueva" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm shadow-primary/20">
                        <span className="material-symbols-outlined text-sm">add</span>
                        Nueva Cita
                    </Link>
                </div>

                {/* Table Section */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <h3 className="font-bold text-slate-800 dark:text-slate-100 tracking-tight text-lg">Citas - Jueves 12 Octubre</h3>
                        <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                            <span className="material-symbols-outlined text-sm">download</span>
                            Descargar Reporte del Día
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                                    <th className="px-6 py-3">Hora</th>
                                    <th className="px-6 py-3">Paciente</th>
                                    <th className="px-6 py-3">Cédula/CURP</th>
                                    <th className="px-6 py-3">Vacuna</th>
                                    <th className="px-6 py-3">Estado</th>
                                    <th className="px-6 py-3 text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {/* Fila 1 */}
                                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                                    <td className="px-6 py-4 font-black text-slate-700 dark:text-slate-300">08:00 AM</td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-900 dark:text-slate-100">Carlos Eduardo Ruiz</div>
                                        <div className="text-xs text-slate-500 font-medium">25 años • Masculino</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">RUCE981014HMO...</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-[10px] font-black uppercase tracking-wider border border-blue-200 dark:border-blue-800/50">Influenza</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-wider border border-emerald-200 dark:border-emerald-800/50">
                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full drop-shadow-[0_0_2px_rgba(16,185,129,0.5)]"></span>
                                            Confirmada
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center w-48">
                                        <Link href="/citas/registrar" className="inline-block bg-primary text-white text-[10px] font-black tracking-wider px-3 py-1.5 rounded-lg border border-primary/20 hover:bg-primary/90 transition-all w-full text-center">REGISTRAR APLICACIÓN</Link>
                                    </td>
                                </tr>
                                {/* Fila 2 */}
                                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors bg-amber-50/30 dark:bg-amber-900/10">
                                    <td className="px-6 py-4 font-black text-slate-700 dark:text-slate-300">08:30 AM</td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-900 dark:text-slate-100">María Paula Delgado</div>
                                        <div className="text-xs text-slate-500 font-medium">12 años • Femenino</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">DEMP110321MDF...</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-[10px] font-black uppercase tracking-wider border border-purple-200 dark:border-purple-800/50">COVID-19 (Dosis 3)</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-[10px] font-black uppercase tracking-wider border border-amber-200 dark:border-amber-800/50">
                                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                            Pendiente
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center w-48 flex items-center justify-center gap-2">
                                        <Link href="/recordatorio" target="_blank" title="Ver plantilla de correo" className="text-slate-400 hover:text-blue-500 transition-colors p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800"><span className="material-symbols-outlined text-lg">mail</span></Link>
                                        <button className="text-slate-400 hover:text-primary transition-colors p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800"><span className="material-symbols-outlined text-lg">edit</span></button>
                                        <button className="text-slate-400 hover:text-red-500 transition-colors p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800"><span className="material-symbols-outlined text-lg">cancel</span></button>
                                    </td>
                                </tr>
                                {/* Fila 3 */}
                                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors opacity-75">
                                    <td className="px-6 py-4 font-black text-slate-500 dark:text-slate-400">09:15 AM</td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-600 dark:text-slate-400 line-through decoration-slate-300 dark:decoration-slate-600">Roberto Antonio Gómez</div>
                                        <div className="text-xs text-slate-400 font-medium">68 años • Masculino</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 font-medium">GORA550101HDF...</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded text-[10px] font-black uppercase tracking-wider border border-slate-200 dark:border-slate-700">Neumococo</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-[10px] font-black uppercase tracking-wider border border-red-200 dark:border-red-800/50">
                                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                            Cancelada
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center w-48">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">No asistió</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
