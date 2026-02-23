import React from 'react';

export const renderTableNinos = () => (
    <div className="p-2 lg:p-4 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="border border-slate-200 dark:border-slate-700/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 flex-1 flex flex-col">
            <div className="hidden md:grid grid-cols-12 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest p-4 items-center">
                <div className="col-span-3 pl-2">Vacuna / Inmunógeno</div>
                <div className="col-span-3">Enfermedad Que Previene</div>
                <div className="col-span-2 text-center">Dosis</div>
                <div className="col-span-2 text-center">Edad y Frecuencia</div>
                <div className="col-span-2 text-right pr-2">Fecha y Lote</div>
            </div>

            <div className="flex-1 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 text-xs font-medium text-slate-800 dark:text-slate-200">
                {/* BCG - Única */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden">
                    {/* Left Column: Vaccine & Disease */}
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-blue-50/50 dark:bg-blue-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-blue-900 dark:text-blue-400 text-sm md:text-base tracking-tight pl-3">BCG</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center">Tuberculosis</div>
                        </div>
                    </div>
                    {/* Right Column: Doses */}
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        {/* Dosis 1 */}
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Única</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Al nacer</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 MAY 2022</div>
                                <div className="font-mono text-[9px] text-emerald-700/70 dark:text-emerald-400/70 mt-0.5 uppercase">Lote: A124-B</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hepatitis B */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-orange-50/50 dark:bg-orange-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-orange-700 dark:text-orange-400 text-sm md:text-base tracking-tight pl-3">Hepatitis B</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center">Hepatitis B</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Primera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Al nacer</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 MAY 2022</div>
                                <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase">Lote: HEX-992</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">2 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 JUL 2022</div>
                                <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase">Lote: BCG-001</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Tercera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">6 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 NOV 2022</div>
                                <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase">Lote: SRP-X1</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pentavalente Acelular */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-indigo-50/50 dark:bg-indigo-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-indigo-700 dark:text-indigo-400 text-sm md:text-base tracking-tight pl-3">Hexavalente</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs leading-snug">Difteria, Tosferina, Tétanos, Polio e Infecciones por H. Influenzae</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Primera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">2 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 JUL 2022</div>
                                <div className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">check_circle</span> INF-2022</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">4 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 SEP 2022</div>
                                <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px] text-emerald-500">check_circle</span> RTV-88A</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Tercera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">6 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 NOV 2022</div>
                                <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px] text-emerald-500">check_circle</span> TD-990</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Cuarta</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">18 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-slate-400 dark:text-slate-500">PENDIENTE</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DPT */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-yellow-50/50 dark:bg-yellow-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-yellow-700 dark:text-yellow-500 text-sm md:text-base tracking-tight pl-3">DPT</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center">Difteria, Tosferina, Tétanos</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Refuerzo</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">4 Años</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-slate-400 dark:text-slate-500">MAY 2026</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">hourglass_empty</span> PEND.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rotavirus */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-emerald-50/50 dark:bg-emerald-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-600"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-emerald-800 dark:text-emerald-500 text-sm md:text-base tracking-tight pl-3">Rotavirus</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center">Diarrea (Rotavirus)</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0 shadow-sm">Primera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">2 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 JUL 2022</div>
                                <div className="font-mono text-[9px] text-emerald-700 dark:text-emerald-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px] text-emerald-500">check_circle</span> INF-2022</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">4 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 SEP 2022</div>
                                <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px] text-emerald-500">check_circle</span> A124-B</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Tercera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">6 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 NOV 2022</div>
                                <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px] text-emerald-500">check_circle</span> HEX-992</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Neumococo */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-sky-50/50 dark:bg-sky-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-sky-700 dark:text-sky-500 text-sm md:text-base tracking-tight pl-3">Neumococo</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center">Infección Neumocócica</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0 shadow-sm">Primera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">2 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 JUL 2022</div>
                                <div className="font-mono text-[9px] text-emerald-700 dark:text-emerald-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px] text-emerald-500">check_circle</span> BCG-001</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">4 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 SEP 2022</div>
                                <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px] text-emerald-500">check_circle</span> RTV-88A</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Refuerzo</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">12 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 MAY 2023</div>
                                <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px] text-emerald-500">check_circle</span> NEU-C44</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Influenza */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-pink-50/50 dark:bg-pink-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-pink-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-pink-700 dark:text-pink-500 text-sm md:text-base tracking-tight pl-3">Influenza</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center">Influenza</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0 shadow-sm">Primera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">6 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 NOV 2022</div>
                                <div className="font-mono text-[9px] text-emerald-700 dark:text-emerald-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px] text-emerald-500">check_circle</span> HEX-992</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">7 Meses</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 DIC 2022</div>
                                <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px] text-emerald-500">check_circle</span> TD-990</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Anual</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">Revac. Anual</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-slate-400 dark:text-slate-500">PRÓXIMA</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SRP */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800 rounded-b-2xl md:rounded-b-3xl">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-purple-50/50 dark:bg-purple-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-purple-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-purple-700 dark:text-purple-400 text-sm md:text-base tracking-tight pl-3">SRP</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs leading-snug">Sarampión, Rubeola, Parotiditis</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0 shadow-sm">Primera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">1 Año</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 MAY 2023</div>
                                <div className="font-mono text-[9px] text-emerald-700 dark:text-emerald-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px] text-emerald-500">check_circle</span> NEU-C44</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Refuerzo</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">6 Años</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-slate-400 dark:text-slate-500">MAY 2028</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
);

export const renderTableAdolescentes = () => (
    <div className="p-2 lg:p-4 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="border border-slate-200 dark:border-slate-700/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 flex-1 flex flex-col">
            <div className="hidden md:grid grid-cols-12 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest p-4 items-center">
                <div className="col-span-3 pl-2">Vacuna / Inmunógeno</div>
                <div className="col-span-3">Enfermedad Que Previene</div>
                <div className="col-span-2 text-center">Dosis</div>
                <div className="col-span-2 text-center">Edad y Frecuencia</div>
                <div className="col-span-2 text-right pr-2">Fecha y Lote</div>
            </div>

            <div className="flex-1 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 text-xs font-medium text-slate-800 dark:text-slate-200">

                {/* Hepatitis B */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-orange-50/50 dark:bg-orange-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-orange-700 dark:text-orange-400 text-sm md:text-base tracking-tight pl-3">Hepatitis B</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs flex items-center">Hepatitis B</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Primera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">11 años</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 ABR 2018</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: HEP-11A</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">4 semanas después</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">10 MAY 2018</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: HEP-11B</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Td */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-yellow-50/50 dark:bg-yellow-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-yellow-700 dark:text-yellow-400 text-sm md:text-base tracking-tight pl-3">Td</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs flex items-center">Tétanos y Difteria</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Refuerzo</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">A partir 15 años</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-slate-400 dark:text-slate-500">MAY 2027</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">hourglass_empty</span> PEND.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tdpa */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-indigo-50/50 dark:bg-indigo-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-indigo-700 dark:text-indigo-400 text-sm md:text-base tracking-tight pl-3">Tdpa</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs flex items-center">Tétanos, difteria, tosferina</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Única</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Gestantes sem 20+</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-slate-400 dark:text-slate-500">PENDIENTE</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">hourglass_empty</span> N/A</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SR */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-orange-50/50 dark:bg-orange-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-orange-700 dark:text-orange-400 text-sm md:text-base tracking-tight pl-3">SR</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs flex items-center">Sarampión y Rubéola</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Adicional</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Sin esquema previo</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">18 FEB 2011</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: SR-8A</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* VPH */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-fuchsia-50/50 dark:bg-fuchsia-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-fuchsia-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-fuchsia-700 dark:text-fuchsia-400 text-sm md:text-base tracking-tight pl-3">VPH</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs flex items-center">Virus Papiloma Humano</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Primera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">11 años</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">01 SEP 2023</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: VPH-XA</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">6 meses depsués</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">05 MAR 2026</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: VPH-XB</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Influenza */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800 rounded-b-2xl md:rounded-b-3xl">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-pink-50/50 dark:bg-pink-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-pink-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-pink-700 dark:text-pink-400 text-sm md:text-base tracking-tight pl-3">Influenza</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs flex items-center">Influenza Estacional</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Anual</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Grupos de riesgo</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">15 OCT 2026</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: INF-25A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const renderTableMayores = () => (
    <div className="p-2 lg:p-4 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="border border-slate-200 dark:border-slate-700/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 flex-1 flex flex-col">
            <div className="hidden md:grid grid-cols-12 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest p-4 items-center">
                <div className="col-span-3 pl-2">Vacuna / Inmunógeno</div>
                <div className="col-span-3">Enfermedad Que Previene</div>
                <div className="col-span-2 text-center">Dosis</div>
                <div className="col-span-2 text-center">Edad y Frecuencia</div>
                <div className="col-span-2 text-right pr-2">Fecha y Lote</div>
            </div>

            <div className="flex-1 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 text-xs font-medium text-slate-800 dark:text-slate-200">

                {/* Neumocócica */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-sky-50/50 dark:bg-sky-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-sky-700 dark:text-sky-400 text-sm md:text-base tracking-tight pl-3">Neumocócica <br />Polisacárida</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs flex items-center">Neumonía por neumococo</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Única</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">A partir 65 años</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">14 ENE 2026</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: NEU-23P</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Td */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-yellow-50/50 dark:bg-yellow-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-yellow-700 dark:text-yellow-400 text-sm md:text-base tracking-tight pl-3">Td</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs flex items-center">Tétanos y Difteria</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Refuerzo</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Cada 10 años</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">02 FEB 2021</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: TD-88A</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Influenza */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800 rounded-b-2xl md:rounded-b-3xl">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-pink-50/50 dark:bg-pink-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-pink-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-pink-700 dark:text-pink-400 text-sm md:text-base tracking-tight pl-3">Influenza</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs flex items-center">Influenza Estacional</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Anual</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Temporada Invernal</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">15 OCT 2026</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: INF-2526</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const renderTableAdultos = () => (
    <div className="p-2 lg:p-4 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="border border-slate-200 dark:border-slate-700/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 flex-1 flex flex-col">
            <div className="hidden md:grid grid-cols-12 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest p-4 items-center">
                <div className="col-span-3 pl-2">Vacuna / Inmunógeno</div>
                <div className="col-span-3">Enfermedad Que Previene</div>
                <div className="col-span-2 text-center">Dosis</div>
                <div className="col-span-2 text-center">Edad y Frecuencia</div>
                <div className="col-span-2 text-right pr-2">Fecha y Lote</div>
            </div>

            <div className="flex-1 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 text-xs font-medium text-slate-800 dark:text-slate-200">

                {/* SR */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-orange-50/50 dark:bg-orange-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-orange-700 dark:text-orange-400 text-sm md:text-base tracking-tight pl-3">SR</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center">Sarampión y Rubéola</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Adicional</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Riesgo o Brote</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">12 ABR 2010</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: A124-B</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TD */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-yellow-50/50 dark:bg-yellow-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-yellow-700 dark:text-yellow-400 text-sm md:text-base tracking-tight pl-3">Td</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs flex items-center">Tétanos y Difteria</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Refuerzo</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Cada 10 Años</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">15 MAR 2018</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: HEX-992</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* INFLUENZA */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800 rounded-b-2xl md:rounded-b-3xl">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-pink-50/50 dark:bg-pink-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-pink-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-pink-700 dark:text-pink-500 text-sm md:text-base tracking-tight pl-3">Influenza</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs flex items-center">Influenza</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Anual</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Temporada Invernal</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-slate-400 dark:text-slate-500">PRÓXIMA (OCT)</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">hourglass_empty</span> PEND.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
);

export const renderTableRiesgo = () => (
    <div className="p-2 lg:p-4 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="border border-slate-200 dark:border-slate-700/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 flex-1 flex flex-col">
            <div className="hidden md:grid grid-cols-12 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest p-4 items-center">
                <div className="col-span-3 pl-2 flex items-center gap-2">Vacuna <span className="text-red-600 bg-red-100 dark:bg-red-900/40 px-2 py-0.5 rounded-full text-[8px] font-bold">RIESGO</span></div>
                <div className="col-span-3">Enfermedad Que Previene</div>
                <div className="col-span-2 text-center">Dosis</div>
                <div className="col-span-2 text-center">Edad y Frecuencia</div>
                <div className="col-span-2 text-right pr-2">Fecha y Lote</div>
            </div>

            <div className="flex-1 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 text-xs font-medium text-slate-800 dark:text-slate-200">

                {/* HEPATITIS B */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-orange-50/50 dark:bg-orange-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-orange-700 dark:text-orange-400 text-sm md:text-base tracking-tight pl-3">Hepatitis B</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center">Hepatitis B</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Primera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Al Ingreso<br />(0 Meses)</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">10 ENE 2020</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: BCG-001</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">1 Mes Después</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">10 FEB 2020</div>
                                <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase">Lote: SRP-X1</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Tercera</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight">6 Meses Después</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">10 JUL 2020</div>
                                <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase">Lote: INF-2022</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* INFLUENZA */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-pink-50/50 dark:bg-pink-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-pink-500"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-pink-700 dark:text-pink-500 text-sm md:text-base tracking-tight pl-3">Influenza</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center">Influenza</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Anual</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Cada Campaña<br />Invernal</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-emerald-600 dark:text-emerald-400">01 NOV 2023</div>
                                <div className="font-mono text-[9px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase">Lote: RTV-88A</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COVID-19 */}
                <div className="flex flex-col md:flex-row relative group bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-200 dark:border-slate-800 rounded-b-2xl md:rounded-b-3xl">
                    <div className="md:w-1/2 flex items-center p-4 md:p-5 relative bg-red-50/50 dark:bg-red-900/10 border-b md:border-b-0 border-slate-100 dark:border-slate-800">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600"></div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="font-black text-red-700 dark:text-red-500 text-sm md:text-base tracking-tight pl-3">COVID-19</div>
                            <div className="text-slate-600 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center">SARS-CoV-2</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900">
                        <div className="flex items-center p-3 md:p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="w-1/3 md:w-1/4 flex justify-start md:justify-center">
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Refuerzo</span>
                            </div>
                            <div className="w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight">Anual</div>
                            <div className="w-1/3 md:w-1/2 flex flex-col items-end pr-2">
                                <div className="font-bold text-slate-400 dark:text-slate-500">PENDIENTE</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
);
