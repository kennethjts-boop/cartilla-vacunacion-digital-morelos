    const renderTableNinos = () => (
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
                    
                    {/* BCG */}
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full"></div>
                        <div className="col-span-3 flex items-center font-bold pl-4 text-sm md:text-sm">BCG</div>
                        <div className="col-span-3 text-slate-500 dark:text-slate-400 pl-4 md:pl-0">Tuberculosis</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Única</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">Al nacer</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 MAY 2022</div>
                            <div className="font-mono text-[10px] text-emerald-700/70 dark:text-emerald-400/70 mt-0.5 uppercase">Lote: A124-B</div>
                        </div>
                    </div>

                    {/* Hep B */}
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-r-full"></div>
                        <div className="col-span-3 flex items-center font-bold pl-4 text-sm md:text-sm">Hepatitis B</div>
                        <div className="col-span-3 text-slate-500 dark:text-slate-400 pl-4 md:pl-0">Hepatitis B</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Primera</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">Al nacer</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 MAY 2022</div>
                            <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase">Lote: HEX-992</div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-400 opacity-50 rounded-r-full"></div>
                        <div className="col-span-3 flex items-center font-bold text-slate-400 dark:text-slate-500 pl-4 text-sm md:text-sm">Hepatitis B</div>
                        <div className="col-span-3 text-slate-400 dark:text-slate-500 pl-4 md:pl-0">Hepatitis B</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">2 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 JUL 2022</div>
                            <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase">Lote: BCG-001</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-300 opacity-50 rounded-r-full"></div>
                        <div className="col-span-3 flex items-center font-bold text-slate-400 dark:text-slate-500 pl-4 text-sm md:text-sm">Hepatitis B</div>
                        <div className="col-span-3 text-slate-400 dark:text-slate-500 pl-4 md:pl-0">Hepatitis B</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Tercera</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">6 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 NOV 2022</div>
                            <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase">Lote: SRP-X1</div>
                        </div>
                    </div>

                    {/* Pentavalente */}
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-r-full"></div>
                        <div className="col-span-3 flex flex-col font-bold pl-4 text-sm md:text-sm">Hexavalente</div>
                        <div className="col-span-3 text-slate-500 dark:text-slate-400 leading-tight pl-4 md:pl-0">Difteria, Tosferina,<br/>Tétanos, Polio</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Primera</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">2 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 JUL 2022</div>
                            <div className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">check_circle</span> INF-2022</div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-400 opacity-50 rounded-r-full"></div>
                        <div className="col-span-3 flex items-center font-bold text-slate-400 dark:text-slate-500 pl-4 text-sm md:text-sm">Hexavalente</div>
                        <div className="col-span-3 text-slate-400 dark:text-slate-500 leading-tight pl-4 md:pl-0">Difteria, Tosferina, ...</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">4 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 SEP 2022</div>
                            <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-emerald-500">check_circle</span> RTV-88A</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-300 opacity-50 rounded-r-full"></div>
                        <div className="col-span-3 flex items-center font-bold text-slate-400 dark:text-slate-500 pl-4 text-sm md:text-sm">Hexavalente</div>
                        <div className="col-span-3 text-slate-400 dark:text-slate-500 leading-tight pl-4 md:pl-0">Difteria, Tosferina, ...</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Tercera</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">6 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 NOV 2022</div>
                            <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-emerald-500">check_circle</span> TD-990</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-200 opacity-50 rounded-r-full"></div>
                        <div className="col-span-3 flex items-center font-bold text-slate-400 dark:text-slate-500 pl-4 text-sm md:text-sm">Hexavalente</div>
                        <div className="col-span-3 text-slate-400 dark:text-slate-500 leading-tight pl-4 md:pl-0">Difteria, Tosferina, ...</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Cuarta</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">18 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-slate-400 dark:text-slate-500">PENDIENTE</div>
                        </div>
                    </div>
                    
                    {/* DPT */}
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 rounded-r-full"></div>
                        <div className="col-span-3 flex items-center font-bold pl-4 text-sm md:text-sm">DPT</div>
                        <div className="col-span-3 text-slate-500 dark:text-slate-400 pl-4 md:pl-0">Difteria, Tosferina, Tétanos</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Refuerzo</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">4 Años</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-slate-400 dark:text-slate-500">MAY 2026</div>
                            <div className="font-mono text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">hourglass_empty</span> PEND.</div>
                        </div>
                    </div>

                    {/* Rotavirus */}
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600 rounded-r-full"></div>
                        <div className="col-span-3 flex flex-col font-bold pl-4 text-sm md:text-sm">Rotavirus</div>
                        <div className="col-span-3 text-slate-500 dark:text-slate-400 pl-4 md:pl-0">Diarrea (Rotavirus)</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm relative shrink-0">Primera</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">2 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 JUL 2022</div>
                            <div className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-emerald-500">check_circle</span> INF-2022</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 opacity-50 rounded-r-full"></div>
                        <div className="col-span-3 flex flex-col font-bold text-slate-400 dark:text-slate-500 pl-4 text-sm md:text-sm">Rotavirus</div>
                        <div className="col-span-3 text-slate-400 dark:text-slate-500 pl-4 md:pl-0">Diarrea (Rotavirus)</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">4 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 SEP 2022</div>
                            <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-emerald-500">check_circle</span> A124-B</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-300 opacity-50 rounded-r-full"></div>
                        <div className="col-span-3 flex flex-col font-bold text-slate-400 dark:text-slate-500 pl-4 text-sm md:text-sm">Rotavirus</div>
                        <div className="col-span-3 text-slate-400 dark:text-slate-500 pl-4 md:pl-0">Diarrea (Rotavirus)</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Tercera</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">6 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 NOV 2022</div>
                            <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-emerald-500">check_circle</span> HEX-992</div>
                        </div>
                    </div>

                    {/* Neumococo */}
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500 rounded-r-full"></div>
                        <div className="col-span-3 flex flex-col font-bold pl-4 text-sm md:text-sm">Neumococo</div>
                        <div className="col-span-3 text-slate-500 dark:text-slate-400 pl-4 md:pl-0">Infección Neumocócica</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm relative shrink-0">Primera</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">2 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 JUL 2022</div>
                            <div className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-emerald-500">check_circle</span> BCG-001</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-400 opacity-50 rounded-r-full"></div>
                        <div className="col-span-3 flex flex-col font-bold text-slate-400 dark:text-slate-500 pl-4 text-sm md:text-sm">Neumococo</div>
                        <div className="col-span-3 text-slate-400 dark:text-slate-500 pl-4 md:pl-0">Infección Neumocócica</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">4 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 SEP 2022</div>
                            <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-emerald-500">check_circle</span> RTV-88A</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-300 opacity-50 rounded-r-full"></div>
                        <div className="col-span-3 flex flex-col font-bold text-slate-400 dark:text-slate-500 pl-4 text-sm md:text-sm">Neumococo</div>
                        <div className="col-span-3 text-slate-400 dark:text-slate-500 pl-4 md:pl-0">Infección Neumocócica</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Refuerzo</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">12 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 MAY 2023</div>
                            <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-emerald-500">check_circle</span> NEU-C44</div>
                        </div>
                    </div>

                    {/* Influenza */}
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500 rounded-r-full"></div>
                        <div className="col-span-3 flex flex-col font-bold pl-4 text-sm md:text-sm">Influenza</div>
                        <div className="col-span-3 text-slate-500 dark:text-slate-400 pl-4 md:pl-0">Influenza</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm relative shrink-0">Primera</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">6 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 NOV 2022</div>
                            <div className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-emerald-500">check_circle</span> HEX-992</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-400 opacity-50 rounded-r-full"></div>
                        <div className="col-span-3 flex flex-col font-bold text-slate-400 dark:text-slate-500 pl-4 text-sm md:text-sm">Influenza</div>
                        <div className="col-span-3 text-slate-400 dark:text-slate-500 pl-4 md:pl-0">Influenza</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Segunda</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">7 Meses</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 DIC 2022</div>
                            <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-emerald-500">check_circle</span> TD-990</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-300 opacity-50 rounded-r-full"></div>
                        <div className="col-span-3 flex flex-col font-bold text-slate-400 dark:text-slate-500 pl-4 text-sm md:text-sm">Influenza</div>
                        <div className="col-span-3 text-slate-400 dark:text-slate-500 pl-4 md:pl-0">Influenza</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Revacunación</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">Anual</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-slate-400 dark:text-slate-500">PRÓXIMA</div>
                        </div>
                    </div>

                    {/* SRP */}
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-r-full"></div>
                        <div className="col-span-3 flex flex-col font-bold pl-4 text-sm md:text-sm">SRP</div>
                        <div className="col-span-3 text-slate-500 dark:text-slate-400 pl-4 md:pl-0 leading-tight">Sarampión, Rubeola, Parotiditis</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm relative shrink-0">Primera</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">1 Año</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-emerald-600 dark:text-emerald-400">12 MAY 2023</div>
                            <div className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 mt-0.5 uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-emerald-500">check_circle</span> NEU-C44</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 items-center p-4 relative hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors gap-y-2">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-400 opacity-50 rounded-r-full"></div>
                        <div className="col-span-3 flex flex-col font-bold text-slate-400 dark:text-slate-500 pl-4 text-sm md:text-sm">SRP</div>
                        <div className="col-span-3 text-slate-400 dark:text-slate-500 pl-4 md:pl-0 leading-tight">Sarampión, Rubeola, Parotiditis</div>
                        <div className="col-span-2 flex justify-start md:justify-center pl-4 md:pl-0">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider relative shrink-0">Refuerzo</span>
                        </div>
                        <div className="col-span-2 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest pl-4 md:pl-0">6 Años</div>
                        <div className="col-span-2 flex flex-col items-start md:items-end justify-center pr-2 pl-4 md:pl-0">
                            <div className="font-bold text-slate-400 dark:text-slate-500">MAY 2028</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
