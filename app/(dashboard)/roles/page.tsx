import Link from 'next/link';

export default function RolesPage() {
    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-6">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Gestión de Usuarios</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Control de acceso para funcionarios y personal médico del sistema estatal.</p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm hover:shadow-md w-full md:w-auto">
                    <span className="material-symbols-outlined text-[20px]">person_add</span>
                    Nuevo Usuario
                </button>
            </div>

            {/* Filters and Search */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input type="text" placeholder="Buscar por nombre, correo o ID..." className="w-full pl-10 pr-4 py-2.5 bg-background-light dark:bg-background-dark border-transparent focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-lg text-sm font-medium" />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                    <select className="bg-background-light dark:bg-background-dark border-transparent focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-lg text-sm px-4 py-2.5 font-bold text-slate-700 dark:text-slate-300 w-full sm:w-auto">
                        <option>Todos los Roles</option>
                        <option>Admin Nacional</option>
                        <option>Admin Estatal</option>
                        <option>Centro Salud</option>
                        <option>Médico</option>
                    </select>
                    <select className="bg-background-light dark:bg-background-dark border-transparent focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-lg text-sm px-4 py-2.5 font-bold text-slate-700 dark:text-slate-300 w-full sm:w-auto">
                        <option>Todos los Estados</option>
                        <option>Activo</option>
                        <option>Inactivo</option>
                        <option>Pendiente</option>
                    </select>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Usuario</th>
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Rol</th>
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Estado</th>
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {/* Row 1 */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black border border-primary/20 tracking-wider">AR</div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">Dr. Alejandro Ruiz</span>
                                            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">aruiz@salud.gob.mx</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-[10px] font-black uppercase rounded-lg border border-primary/20 bg-primary/10 text-primary tracking-wider">Admin Nacional</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg bg-emerald-100/50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                        Activo
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-primary transition-colors" title="Editar">
                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                        </button>
                                        <button className="p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500 transition-colors" title="Eliminar">
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400 font-black border border-blue-200 dark:border-blue-800/50 tracking-wider">EG</div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">Dra. Elena Gómez</span>
                                            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">egomez@hosp.gob.mx</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-[10px] font-black uppercase rounded-lg border border-blue-200 dark:border-blue-800/50 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 tracking-wider">Médico</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg bg-emerald-100/50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                        Activo
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-primary transition-colors" title="Editar">
                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                        </button>
                                        <button className="p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500 transition-colors" title="Eliminar">
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group opacity-60">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-black border border-slate-200 dark:border-slate-700 tracking-wider">RC</div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">Lic. Roberto Cano</span>
                                            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">rcano@estatal.gob.mx</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-[10px] font-black uppercase rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 tracking-wider">Admin Estatal</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg bg-slate-100/50 text-slate-600 dark:bg-slate-800/50 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                                        Inactivo
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-primary transition-colors" title="Editar">
                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                        </button>
                                        <button className="p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500 transition-colors" title="Eliminar">
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {/* Row 4 */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400 font-black border border-purple-200 dark:border-purple-800/50 tracking-wider">LM</div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">Enf. Lucía Méndez</span>
                                            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">lmendez@centro.gob.mx</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-[10px] font-black uppercase rounded-lg border border-purple-200 dark:border-purple-800/50 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 tracking-wider">Centro Salud</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg bg-emerald-100/50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                        Activo
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-primary transition-colors" title="Editar">
                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                        </button>
                                        <button className="p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500 transition-colors" title="Eliminar">
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Mostrando 1-4 de 24 usuarios registrados</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 md:dark:bg-slate-800 rounded-lg text-xs font-bold text-slate-400 cursor-not-allowed uppercase tracking-wider" disabled>Ant</button>
                        <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 md:dark:bg-slate-800 rounded-lg text-xs font-bold hover:bg-slate-50 hover:text-slate-900 transition-colors uppercase tracking-wider">Sig</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
