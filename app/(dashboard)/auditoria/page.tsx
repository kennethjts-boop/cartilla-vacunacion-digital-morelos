'use client';
import { useState } from 'react';
import ExportModal from '@/app/components/dashboard/ExportModal';

export default function AuditoriaPage() {
    const [isExportOpen, setIsExportOpen] = useState(false);
    const [exportType, setExportType] = useState<'excel'|'pdf'|'csv'>('excel');

    const handleExport = (type: 'excel'|'pdf'|'csv') => {
        setExportType(type);
        setIsExportOpen(true);
    };

    return (
        <div className="p-4 md:p-8 flex-1 overflow-y-auto max-w-7xl mx-auto w-full space-y-6">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-primary tracking-tight">Auditoría de Acciones</h2>
                    <p className="text-slate-500 font-medium mt-1">Historial completo de accesos, modificaciones y eventos del sistema.</p>
                </div>
            </div>

            {/* Filters & Controls Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">filter_list</span>
                            <h3 className="font-bold text-slate-700 dark:text-slate-300">Filtros Avanzados</h3>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-sm">description</span>
                                CSV
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all" onClick={() => handleExport('pdf')}>
                                <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                                Exportar PDF
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Búsqueda rápida</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                                <input type="text" placeholder="Usuario, Acción, IP..." className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary font-medium" />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Rango de fechas</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">calendar_today</span>
                                <input type="text" placeholder="Últimos 7 días" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary font-medium" />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tipo de acción</label>
                            <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary font-bold text-slate-700 dark:text-slate-300">
                                <option>Todas las acciones</option>
                                <option>Registro de paciente</option>
                                <option>Actualización de vacuna</option>
                                <option>Cambio de rol</option>
                                <option>Inicio de sesión</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Módulo</label>
                            <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary font-bold text-slate-700 dark:text-slate-300">
                                <option>Todos los módulos</option>
                                <option>Pacientes</option>
                                <option>Vacunación</option>
                                <option>Seguridad</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Table Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead>
                            <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Fecha y Hora</th>
                                <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Usuario</th>
                                <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Acción Realizada</th>
                                <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Módulo</th>
                                <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Origen (IP/Ubicación)</th>
                                <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider text-right">Detalles</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {/* Row 1 */}
                            <tr className="hover:bg-primary/5 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">24 Oct 2023</div>
                                    <div className="text-[11px] font-medium text-slate-400">14:32:15 hrs</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black tracking-wider text-xs border border-primary/20">RM</div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">Ricardo M.</div>
                                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Enfermería</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg text-[10px] uppercase font-black tracking-wider bg-emerald-100/50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                        Registro de paciente
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Expedientes</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-mono text-slate-500 font-medium">189.203.45.12</span>
                                        <span className="text-[10px] font-bold text-primary flex items-center gap-1 uppercase tracking-wider mt-0.5">
                                            <span className="material-symbols-outlined text-[12px]">location_on</span>
                                            Cuernavaca, Centro
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-600 transition-all opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-slate-400 hover:text-primary">visibility</span>
                                    </button>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-primary/5 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">24 Oct 2023</div>
                                    <div className="text-[11px] font-medium text-slate-400">12:10:04 hrs</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400 font-black tracking-wider text-xs border border-blue-200 dark:border-blue-800/50">AG</div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">Ana García</div>
                                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Supervisor</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg text-[10px] uppercase font-black tracking-wider bg-blue-100/50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-200 dark:border-blue-800/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        Actualización vacuna
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Inmunización</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-mono text-slate-500 font-medium">187.12.105.33</span>
                                        <span className="text-[10px] font-bold text-primary flex items-center gap-1 uppercase tracking-wider mt-0.5">
                                            <span className="material-symbols-outlined text-[12px]">location_on</span>
                                            Jiutepec, Morelos
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-600 transition-all opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-slate-400 hover:text-primary">visibility</span>
                                    </button>
                                </td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-primary/5 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">24 Oct 2023</div>
                                    <div className="text-[11px] font-medium text-slate-400">09:45:30 hrs</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400 font-black tracking-wider text-xs border border-purple-200 dark:border-purple-800/50">ER</div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">Elena Ruiz</div>
                                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Admin</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg text-[10px] uppercase font-black tracking-wider bg-purple-100/50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400 border border-purple-200 dark:border-purple-800/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                        Cambio de rol
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Seguridad</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-mono text-slate-500 font-medium">189.155.20.90</span>
                                        <span className="text-[10px] font-bold text-primary flex items-center gap-1 uppercase tracking-wider mt-0.5">
                                            <span className="material-symbols-outlined text-[12px]">location_on</span>
                                            Cuernavaca, Oficina
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-600 transition-all opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-slate-400 hover:text-primary">visibility</span>
                                    </button>
                                </td>
                            </tr>
                            {/* Row 4 */}
                            <tr className="hover:bg-primary/5 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">23 Oct 2023</div>
                                    <div className="text-[11px] font-medium text-slate-400">18:22:11 hrs</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 font-black tracking-wider text-xs border border-slate-200 dark:border-slate-700">JS</div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">Juan Soto</div>
                                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Soporte</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg text-[10px] uppercase font-black tracking-wider bg-slate-100/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                        Inicio de sesión
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Acceso</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-mono text-slate-500 font-medium">201.12.89.44</span>
                                        <span className="text-[10px] font-bold text-primary flex items-center gap-1 uppercase tracking-wider mt-0.5">
                                            <span className="material-symbols-outlined text-[12px]">location_on</span>
                                            Temixco, Morelos
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg border border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-600 transition-all opacity-0 group-hover:opacity-100">
                                        <span className="material-symbols-outlined text-slate-400 hover:text-primary">visibility</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 bg-slate-50/80 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">Mostrando 1-10 de 1,240 registros</p>
                    <div className="flex gap-1">
                        <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-not-allowed opacity-50" disabled>
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                        </button>
                        <button className="size-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-sm shadow-primary/20">1</button>
                        <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors font-bold text-sm">2</button>
                        <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors font-bold text-sm">3</button>
                        <span className="size-9 flex items-center justify-center text-slate-400">...</span>
                        <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Summary Footer Info */}
            <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-primary/5 border border-primary/20 rounded-xl px-5 py-4 flex items-center gap-4 grow">
                    <div className="bg-primary/10 p-2.5 rounded-lg text-primary">
                        <span className="material-symbols-outlined text-xl">security</span>
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mb-1">Último cambio de seguridad</p>
                        <p className="text-sm font-black text-slate-900 dark:text-slate-100">Hace 2 horas - Elena Ruiz (Admin)</p>
                    </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-xl px-5 py-4 flex items-center gap-4 grow">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-lg text-blue-600 dark:text-blue-400">
                        <span className="material-symbols-outlined text-xl">database</span>
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mb-1">Integridad del registro</p>
                        <p className="text-sm font-black text-blue-700 dark:text-blue-400">Verificado y Firmado Digitalmente</p>
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
