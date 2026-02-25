import React from 'react';

const findRecord = (records: any[], vaccineName: string, doseName: string) => {
    return records.find(r =>
        r.vaccine.name.toLowerCase().includes(vaccineName.toLowerCase()) &&
        (r.doseName === doseName || !doseName) // Some vaccines only have one dose
    );
};

const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-MX', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

const colorMap: any = {
    emerald: {
        bg: 'bg-emerald-50/50 dark:bg-emerald-900/10',
        border: 'bg-emerald-500',
        text: 'text-emerald-800 dark:text-emerald-500'
    },
    sky: {
        bg: 'bg-sky-50/50 dark:bg-sky-900/10',
        border: 'bg-sky-500',
        text: 'text-sky-800 dark:text-sky-500'
    },
    pink: {
        bg: 'bg-pink-50/50 dark:bg-pink-900/10',
        border: 'bg-pink-500',
        text: 'text-pink-800 dark:text-pink-500'
    },
    purple: {
        bg: 'bg-purple-50/50 dark:bg-purple-900/10',
        border: 'bg-purple-500',
        text: 'text-purple-800 dark:text-purple-500'
    },
    orange: {
        bg: 'bg-orange-50/50 dark:bg-orange-900/10',
        border: 'bg-orange-500',
        text: 'text-orange-800 dark:text-orange-500'
    },
    red: {
        bg: 'bg-red-50/50 dark:bg-red-900/10',
        border: 'bg-red-500',
        text: 'text-red-800 dark:text-red-500'
    },
    yellow: {
        bg: 'bg-yellow-50/50 dark:bg-yellow-900/10',
        border: 'bg-yellow-500',
        text: 'text-yellow-800 dark:text-yellow-500'
    },
    indigo: {
        bg: 'bg-indigo-50/50 dark:bg-indigo-900/10',
        border: 'bg-indigo-500',
        text: 'text-indigo-800 dark:text-indigo-500'
    },
    fuchsia: {
        bg: 'bg-fuchsia-50/50 dark:bg-fuchsia-900/10',
        border: 'bg-fuchsia-500',
        text: 'text-fuchsia-800 dark:text-fuchsia-500'
    }
};

export const renderTableNinos = (records: any[] = [], isCompact: boolean = false) => (
    <div className={`p-2 lg:p-4 bg-slate-50/50 dark:bg-slate-900/20 ${isCompact ? 'h-full flex flex-col' : ''}`}>
        <div className={`border border-slate-200 dark:border-slate-700/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 flex flex-col ${isCompact ? 'flex-1 h-full' : ''}`}>
            {/* Header only shows if NOT compact, OR we render a simplified header for compact mode */}
            <div className={`hidden md:grid grid-cols-12 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest p-4 items-center ${isCompact ? 'print:hidden' : ''}`}>
                <div className="col-span-3 pl-2">Vacuna / Inmunógeno</div>
                <div className="col-span-3">Enfermedad Que Previene</div>
                <div className="col-span-2 text-center">Dosis</div>
                <div className="col-span-2 text-center">Edad y Frecuencia</div>
                <div className="col-span-2 text-right pr-2">Fecha y Lote</div>
            </div>

            <div className={`flex-1 flex flex-col font-medium text-slate-800 dark:text-slate-200 ${isCompact ? 'vaccine-grid flex-row flex-wrap items-stretch p-1 bg-slate-100' : 'divide-y divide-slate-100 dark:divide-slate-800/50 text-xs'}`}>
                {/* BCG - Única */}
                {(() => {
                    const rec = findRecord(records, 'BCG', '');
                    return (
                        <div className={`flex flex-col relative group bg-white dark:bg-slate-900 overflow-hidden ${isCompact ? 'rounded-xl border border-slate-200 flex-1 table-vaccines' : 'md:flex-row'}`}>
                            <div className={`${isCompact ? 'p-2 pb-1 border-b' : 'md:w-1/2 p-4 md:p-5 border-b md:border-b-0'} flex items-center relative bg-blue-50/50 dark:bg-blue-900/10 border-slate-100 dark:border-slate-800`}>
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500"></div>
                                <div className={`flex-1 flex ${isCompact ? 'flex-col gap-0' : 'grid grid-cols-2 gap-4'}`}>
                                    <div className={`font-black text-blue-900 dark:text-blue-400 tracking-tight pl-2 ${isCompact ? 'text-[11px]' : 'text-sm md:text-base pl-3'}`}>BCG</div>
                                    <div className={`text-slate-600 dark:text-slate-400 font-medium flex items-center ${isCompact ? 'text-[9px] pl-2 leading-tight' : 'text-xs md:text-sm'}`}>Tuberculosis</div>
                                </div>
                            </div>
                            <div className={`${isCompact ? 'w-full' : 'md:w-1/2'} flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900`}>
                                <div className={`flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${isCompact ? 'p-1.5' : 'p-3 md:p-4'}`}>
                                    <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/4 flex justify-start md:justify-center'}`}>
                                        <span className={`bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-bold relative shrink-0 ${isCompact ? 'text-[8px] px-1.5 py-0.5' : 'px-3 py-1 text-[10px] uppercase tracking-wider'}`}>Única</span>
                                    </div>
                                    <div className={`${isCompact ? 'w-1/3 text-[8px] font-bold text-slate-500 leading-tight' : 'w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight'}`}>Al nacer</div>
                                    <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/2'} flex flex-col items-end pr-1`}>
                                        <div className={`font-bold ${isCompact ? 'text-[9px]' : ''} ${rec ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                                            {rec ? formatDate(rec.dateAdministered) : 'PENDIENTE'}
                                        </div>
                                        {rec && <div className={`font-mono text-emerald-700/70 dark:text-emerald-400/70 mt-0.5 uppercase ${isCompact ? 'text-[7px]' : 'text-[9px]'}`}>Lote: {rec.lotNumber || 'A124-B'}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })()}

                {/* Hepatitis B */}
                {(() => {
                    const rec1 = findRecord(records, 'Hepatitis B', 'Primera');
                    const rec2 = findRecord(records, 'Hepatitis B', 'Segunda');
                    const rec3 = findRecord(records, 'Hepatitis B', 'Tercera');
                    return (
                        <div className={`flex flex-col relative group bg-white dark:bg-slate-900 overflow-hidden ${isCompact ? 'rounded-xl border border-slate-200 flex-1 table-vaccines' : 'md:flex-row border-t border-slate-200 dark:border-slate-800'}`}>
                            <div className={`${isCompact ? 'p-2 pb-1 border-b' : 'md:w-1/2 p-4 md:p-5 border-b md:border-b-0'} flex items-center relative bg-orange-50/50 dark:bg-orange-900/10 border-slate-100 dark:border-slate-800`}>
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500"></div>
                                <div className={`flex-1 flex ${isCompact ? 'flex-col gap-0' : 'grid grid-cols-2 gap-4'}`}>
                                    <div className={`font-black text-orange-700 dark:text-orange-400 tracking-tight pl-2 ${isCompact ? 'text-[11px]' : 'text-sm md:text-base pl-3'}`}>Hepatitis B</div>
                                    <div className={`text-slate-600 dark:text-slate-400 font-medium flex items-center ${isCompact ? 'text-[9px] pl-2 leading-tight' : 'text-xs md:text-sm'}`}>Hepatitis B</div>
                                </div>
                            </div>
                            <div className={`${isCompact ? 'w-full' : 'md:w-1/2'} flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900`}>
                                {/* Dosis 1 */}
                                <div className={`flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${isCompact ? 'p-1.5' : 'p-3 md:p-4'}`}>
                                    <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/4 flex justify-start md:justify-center'}`}>
                                        <span className={`bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-bold relative shrink-0 ${isCompact ? 'text-[8px] px-1.5 py-0.5' : 'px-3 py-1 text-[10px] uppercase tracking-wider'}`}>Primera</span>
                                    </div>
                                    <div className={`${isCompact ? 'w-1/3 text-[8px] font-bold text-slate-500 leading-tight' : 'w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight'}`}>Al nacer</div>
                                    <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/2'} flex flex-col items-end pr-1`}>
                                        <div className={`font-bold ${isCompact ? 'text-[9px]' : ''} ${rec1 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                                            {rec1 ? formatDate(rec1.dateAdministered) : 'PENDIENTE'}
                                        </div>
                                        {rec1 && <div className={`font-mono text-slate-500 dark:text-slate-400 mt-0.5 uppercase ${isCompact ? 'text-[7px]' : 'text-[9px]'}`}>Lote: {rec1.lotNumber || 'HEX-992'}</div>}
                                    </div>
                                </div>
                                {/* Dosis 2 */}
                                <div className={`flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${isCompact ? 'p-1.5' : 'p-3 md:p-4'}`}>
                                    <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/4 flex justify-start md:justify-center'}`}>
                                        <span className={`bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-bold relative shrink-0 ${isCompact ? 'text-[8px] px-1.5 py-0.5' : 'px-3 py-1 text-[10px] uppercase tracking-wider'}`}>Segunda</span>
                                    </div>
                                    <div className={`${isCompact ? 'w-1/3 text-[8px] font-bold text-slate-500 leading-tight' : 'w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight'}`}>2 Meses</div>
                                    <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/2'} flex flex-col items-end pr-1`}>
                                        <div className={`font-bold ${isCompact ? 'text-[9px]' : ''} ${rec2 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                                            {rec2 ? formatDate(rec2.dateAdministered) : 'PENDIENTE'}
                                        </div>
                                        {rec2 && <div className={`font-mono text-slate-500 dark:text-slate-400 mt-0.5 uppercase ${isCompact ? 'text-[7px]' : 'text-[9px]'}`}>Lote: {rec2.lotNumber || 'BCG-001'}</div>}
                                    </div>
                                </div>
                                {/* Dosis 3 */}
                                <div className={`flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${isCompact ? 'p-1.5' : 'p-3 md:p-4'}`}>
                                    <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/4 flex justify-start md:justify-center'}`}>
                                        <span className={`bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-bold relative shrink-0 ${isCompact ? 'text-[8px] px-1.5 py-0.5' : 'px-3 py-1 text-[10px] uppercase tracking-wider'}`}>Tercera</span>
                                    </div>
                                    <div className={`${isCompact ? 'w-1/3 text-[8px] font-bold text-slate-500 leading-tight' : 'w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight'}`}>6 Meses</div>
                                    <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/2'} flex flex-col items-end pr-1`}>
                                        <div className={`font-bold ${isCompact ? 'text-[9px]' : ''} ${rec3 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                                            {rec3 ? formatDate(rec3.dateAdministered) : 'PENDIENTE'}
                                        </div>
                                        {rec3 && <div className={`font-mono text-slate-500 dark:text-slate-400 mt-0.5 uppercase ${isCompact ? 'text-[7px]' : 'text-[9px]'}`}>Lote: {rec3.lotNumber || 'SRP-X1'}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })()}

                {/* Hexavalente */}
                {(() => {
                    const doses = ['Primera', 'Segunda', 'Tercera', 'Cuarta'].map(d => ({
                        name: d,
                        rec: findRecord(records, 'Hexavalente', d),
                        age: d === 'Primera' ? '2 Meses' : d === 'Segunda' ? '4 Meses' : d === 'Tercera' ? '6 Meses' : '18 Meses'
                    }));
                    return (
                        <div className={`flex flex-col relative group bg-white dark:bg-slate-900 overflow-hidden ${isCompact ? 'rounded-xl border border-slate-200 flex-1 table-vaccines' : 'md:flex-row border-t border-slate-200 dark:border-slate-800'}`}>
                            <div className={`${isCompact ? 'p-2 pb-1 border-b' : 'md:w-1/2 p-4 md:p-5 border-b md:border-b-0'} flex items-center relative bg-indigo-50/50 dark:bg-indigo-900/10 border-slate-100 dark:border-slate-800`}>
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500"></div>
                                <div className={`flex-1 flex ${isCompact ? 'flex-col gap-0' : 'grid grid-cols-2 gap-4'}`}>
                                    <div className={`font-black text-indigo-700 dark:text-indigo-400 tracking-tight pl-2 ${isCompact ? 'text-[11px]' : 'text-sm md:text-base pl-3'}`}>Hexavalente</div>
                                    <div className={`text-slate-600 dark:text-slate-400 font-medium flex items-center ${isCompact ? 'text-[9px] pl-2 leading-tight' : 'text-xs md:text-sm'}`}>Difteria, Tosferina, ... e H. Influenzae</div>
                                </div>
                            </div>
                            <div className={`${isCompact ? 'w-full' : 'md:w-1/2'} flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900`}>
                                {doses.map((d, i) => (
                                    <div key={i} className={`flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${isCompact ? 'p-1.5' : 'p-3 md:p-4'}`}>
                                        <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/4 flex justify-start md:justify-center'}`}>
                                            <span className={`bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full font-bold relative shrink-0 ${isCompact ? 'text-[8px] px-1.5 py-0.5' : 'px-3 py-1 text-[10px] uppercase tracking-wider'}`}>{d.name}</span>
                                        </div>
                                        <div className={`${isCompact ? 'w-1/3 text-[8px] font-bold text-slate-500 leading-tight' : 'w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight'}`}>{d.age}</div>
                                        <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/2'} flex flex-col items-end pr-1`}>
                                            <div className={`font-bold ${isCompact ? 'text-[9px]' : ''} ${d.rec ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                                                {d.rec ? formatDate(d.rec.dateAdministered) : 'PENDIENTE'}
                                            </div>
                                            {d.rec && <div className={`font-mono text-emerald-600 dark:text-emerald-400 mt-0.5 uppercase flex items-center gap-1 ${isCompact ? 'text-[7px]' : 'text-[9px]'}`}><span className={`material-symbols-outlined ${isCompact ? 'text-[8px]' : 'text-[10px]'}`}>check_circle</span> {d.rec.lotNumber || 'LOTE'}</div>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })()}

                {/* DPT */}
                {(() => {
                    const rec = findRecord(records, 'DPT', '');
                    return (
                        <div className={`flex flex-col relative group bg-white dark:bg-slate-900 overflow-hidden ${isCompact ? 'rounded-xl border border-slate-200 flex-1 table-vaccines' : 'md:flex-row border-t border-slate-200 dark:border-slate-800'}`}>
                            <div className={`${isCompact ? 'p-2 pb-1 border-b' : 'md:w-1/2 p-4 md:p-5 border-b md:border-b-0'} flex items-center relative bg-yellow-50/50 dark:bg-yellow-900/10 border-slate-100 dark:border-slate-800`}>
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500"></div>
                                <div className={`flex-1 flex ${isCompact ? 'flex-col gap-0' : 'grid grid-cols-2 gap-4'}`}>
                                    <div className={`font-black text-yellow-700 dark:text-yellow-500 tracking-tight pl-2 ${isCompact ? 'text-[11px]' : 'text-sm md:text-base pl-3'}`}>DPT</div>
                                    <div className={`text-slate-600 dark:text-slate-400 font-medium flex items-center ${isCompact ? 'text-[9px] pl-2 leading-tight' : 'text-xs md:text-sm'}`}>Difteria, Tosferina, Tétanos</div>
                                </div>
                            </div>
                            <div className={`${isCompact ? 'w-full' : 'md:w-1/2'} flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900`}>
                                <div className={`flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${isCompact ? 'p-1.5' : 'p-3 md:p-4'}`}>
                                    <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/4 flex justify-start md:justify-center'}`}>
                                        <span className={`bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full font-bold relative shrink-0 ${isCompact ? 'text-[8px] px-1.5 py-0.5' : 'px-3 py-1 text-[10px] uppercase tracking-wider'}`}>Refuerzo</span>
                                    </div>
                                    <div className={`${isCompact ? 'w-1/3 text-[8px] font-bold text-slate-500 leading-tight' : 'w-1/3 md:w-1/4 text-left md:text-center text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-tight'}`}>4 Años</div>
                                    <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/2'} flex flex-col items-end pr-1`}>
                                        <div className={`font-bold ${isCompact ? 'text-[9px]' : ''} ${rec ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                                            {rec ? formatDate(rec.dateAdministered) : 'PENDIENTE'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })()}

                {/* Rotavirus, Neumococo, Influenza, SRP (Simplified pattern for time) */}
                {['Rotavirus', 'Neumococo', 'Influenza', 'SRP'].map(vaccine => {
                    // This is a mapping helper for the demo to handle multiple doses without repeating too much code
                    const config: any = {
                        'Rotavirus': { color: 'emerald', disease: 'Diarrea (Rotavirus)', doses: [{ n: 'Primera', a: '2 Meses' }, { n: 'Segunda', a: '4 Meses' }, { n: 'Tercera', a: '6 Meses' }] },
                        'Neumococo': { color: 'sky', disease: 'Infección Neumocócica', doses: [{ n: 'Primera', a: '2 Meses' }, { n: 'Segunda', a: '4 Meses' }, { n: 'Refuerzo', a: '12 Meses' }] },
                        'Influenza': { color: 'pink', disease: 'Influenza', doses: [{ n: 'Primera', a: '6 Meses' }, { n: 'Segunda', a: '7 Meses' }, { n: 'Anual', a: 'Revac. Anual' }] },
                        'SRP': { color: 'purple', disease: 'Sarampión, Rubeola, Parotiditis', doses: [{ n: 'Primera', a: '1 Año' }, { n: 'Refuerzo', a: '6 Años' }] }
                    };

                    const c = config[vaccine];
                    const styles = colorMap[c.color];
                    return (
                        <div key={vaccine} className={`flex flex-col relative group bg-white dark:bg-slate-900 overflow-hidden ${isCompact ? 'rounded-xl border border-slate-200 flex-1 table-vaccines' : 'md:flex-row border-t border-slate-200 dark:border-slate-800'}`}>
                            <div className={`${isCompact ? 'p-2 pb-1 border-b' : 'md:w-1/2 p-4 md:p-5 border-b md:border-b-0'} flex items-center relative ${styles.bg} border-slate-100 dark:border-slate-800`}>
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${styles.border}`}></div>
                                <div className={`flex-1 flex ${isCompact ? 'flex-col gap-0' : 'grid grid-cols-2 gap-4'}`}>
                                    <div className={`font-black ${styles.text} tracking-tight pl-2 ${isCompact ? 'text-[11px]' : 'text-sm md:text-base pl-3'}`}>{vaccine === 'Neumococo' ? 'Neumocócica' : vaccine}</div>
                                    <div className={`text-slate-600 dark:text-slate-400 font-medium flex items-center ${isCompact ? 'text-[9px] pl-2 leading-tight' : 'text-xs md:text-sm'}`}>{c.disease}</div>
                                </div>
                            </div>
                            <div className={`${isCompact ? 'w-full' : 'md:w-1/2'} flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900`}>
                                {c.doses.map((d: any, i: number) => {
                                    const rec = findRecord(records, vaccine, d.n);
                                    return (
                                        <div key={i} className={`flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${isCompact ? 'p-1.5' : 'p-3 md:p-4'}`}>
                                            <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/4 flex justify-start md:justify-center'}`}>
                                                <span className={`bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full font-bold relative shrink-0 ${isCompact ? 'text-[8px] px-1.5 py-0.5' : 'px-3 py-1 text-[10px] uppercase tracking-wider'}`}>{d.n}</span>
                                            </div>
                                            <div className={`${isCompact ? 'w-1/3 text-[8px] font-bold text-slate-500 leading-tight' : 'w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight'}`}>{d.a}</div>
                                            <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/2'} flex flex-col items-end pr-1`}>
                                                <div className={`font-bold ${isCompact ? 'text-[9px]' : ''} ${rec ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                                                    {rec ? formatDate(rec.dateAdministered) : 'PENDIENTE'}
                                                </div>
                                                {rec && <div className={`font-mono text-emerald-700 dark:text-emerald-400 mt-0.5 uppercase flex items-center gap-1 ${isCompact ? 'text-[7px]' : 'text-[9px]'}`}><span className={`material-symbols-outlined text-emerald-500 ${isCompact ? 'text-[8px]' : 'text-[10px]'}`}>check_circle</span> {rec.lotNumber || 'LOTE'}</div>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
);

export const renderTableAdolescentes = (records: any[] = [], isCompact: boolean = false) => (
    <div className={`p-2 lg:p-4 bg-slate-50/50 dark:bg-slate-900/20 ${isCompact ? 'h-full flex flex-col' : ''}`}>
        <div className={`border border-slate-200 dark:border-slate-700/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 flex flex-col ${isCompact ? 'flex-1 h-full' : ''}`}>
            {/* Header only shows if NOT compact, OR we render a simplified header for compact mode */}
            <div className={`hidden md:grid grid-cols-12 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest p-4 items-center ${isCompact ? 'print:hidden' : ''}`}>
                <div className="col-span-3 pl-2">Vacuna / Inmunógeno</div>
                <div className="col-span-3">Enfermedad Que Previene</div>
                <div className="col-span-2 text-center">Dosis</div>
                <div className="col-span-2 text-center">Edad y Frecuencia</div>
                <div className="col-span-2 text-right pr-2">Fecha y Lote</div>
            </div>

            <div className={`flex-1 flex flex-col font-medium text-slate-800 dark:text-slate-200 ${isCompact ? 'vaccine-grid flex-row flex-wrap items-stretch p-1 bg-slate-100' : 'divide-y divide-slate-100 dark:divide-slate-800/50 text-xs'}`}>
                {['Hepatitis B', 'Td', 'Tdpa', 'SR', 'VPH', 'Influenza'].map(vaccine => {
                    const config: any = {
                        'Hepatitis B': { color: 'orange', disease: 'Hepatitis B', doses: [{ n: 'Primera', a: '11 años' }, { n: 'Segunda', a: '4 semanas después' }] },
                        'Td': { color: 'yellow', disease: 'Tétanos y Difteria', doses: [{ n: 'Refuerzo', a: 'A partir 15 años' }] },
                        'Tdpa': { color: 'indigo', disease: 'Tétanos, difteria, tosferina', doses: [{ n: 'Única', a: 'Gestantes sem 20+' }] },
                        'SR': { color: 'pink', disease: 'Sarampión y Rubéola', doses: [{ n: 'Adicional', a: 'Sin esquema previo' }] },
                        'VPH': { color: 'fuchsia', disease: 'Virus Papiloma Humano', doses: [{ n: 'Primera', a: '11 años' }, { n: 'Segunda', a: '6 meses después' }] },
                        'Influenza': { color: 'pink', disease: 'Influenza Estacional', doses: [{ n: 'Anual', a: 'Grupos de riesgo' }] }
                    };
                    const c = config[vaccine];
                    const styles = colorMap[c.color];
                    return (
                        <div key={vaccine} className={`flex flex-col relative group bg-white dark:bg-slate-900 overflow-hidden ${isCompact ? 'rounded-xl border border-slate-200 flex-1 table-vaccines' : 'md:flex-row border-t border-slate-200 dark:border-slate-800'}`}>
                            <div className={`${isCompact ? 'p-2 pb-1 border-b' : 'md:w-1/2 p-4 md:p-5 border-b md:border-b-0'} flex items-center relative ${styles.bg} border-slate-100 dark:border-slate-800`}>
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${styles.border}`}></div>
                                <div className={`flex-1 flex ${isCompact ? 'flex-col gap-0' : 'grid grid-cols-2 gap-4'}`}>
                                    <div className={`font-black ${styles.text} tracking-tight pl-2 ${isCompact ? 'text-[11px]' : 'text-sm md:text-base pl-3'}`}>{vaccine}</div>
                                    <div className={`text-slate-600 dark:text-slate-400 font-medium flex items-center ${isCompact ? 'text-[9px] pl-2 leading-tight' : 'text-xs md:text-sm'}`}>{c.disease}</div>
                                </div>
                            </div>
                            <div className={`${isCompact ? 'w-full' : 'md:w-1/2'} flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900`}>
                                {c.doses.map((d: any, i: number) => {
                                    const rec = findRecord(records, vaccine, d.n);
                                    return (
                                        <div key={i} className={`flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${isCompact ? 'p-1.5' : 'p-3 md:p-4'}`}>
                                            <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/4 flex justify-start md:justify-center'}`}>
                                                <span className={`bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full font-bold relative shrink-0 ${isCompact ? 'text-[8px] px-1.5 py-0.5' : 'px-3 py-1 text-[10px] uppercase tracking-wider'}`}>{d.n}</span>
                                            </div>
                                            <div className={`${isCompact ? 'w-1/3 text-[8px] font-bold text-slate-500 leading-tight' : 'w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight'}`}>{d.a}</div>
                                            <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/2'} flex flex-col items-end pr-1`}>
                                                <div className={`font-bold ${isCompact ? 'text-[9px]' : ''} ${rec ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                                                    {rec ? formatDate(rec.dateAdministered) : 'PENDIENTE'}
                                                </div>
                                                {rec && <div className={`font-mono text-slate-400 dark:text-slate-500 mt-0.5 uppercase flex items-center gap-1 ${isCompact ? 'text-[7px]' : 'text-[9px]'}`}><span className={`material-symbols-outlined text-emerald-500 ${isCompact ? 'text-[8px]' : 'text-[10px]'}`}>check_circle</span> {rec.lotNumber || 'LOTE'}</div>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
);

export const renderTableMayores = (records: any[] = [], isCompact: boolean = false) => (
    <div className={`p-2 lg:p-4 bg-slate-50/50 dark:bg-slate-900/20 ${isCompact ? 'h-full flex flex-col' : ''}`}>
        <div className={`border border-slate-200 dark:border-slate-700/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 flex flex-col ${isCompact ? 'flex-1 h-full' : ''}`}>
            {/* Header only shows if NOT compact, OR we render a simplified header for compact mode */}
            <div className={`hidden md:grid grid-cols-12 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest p-4 items-center ${isCompact ? 'print:hidden' : ''}`}>
                <div className="col-span-3 pl-2">Vacuna / Inmunógeno</div>
                <div className="col-span-3">Enfermedad Que Previene</div>
                <div className="col-span-2 text-center">Dosis</div>
                <div className="col-span-2 text-center">Edad y Frecuencia</div>
                <div className="col-span-2 text-right pr-2">Fecha y Lote</div>
            </div>

            <div className={`flex-1 flex flex-col font-medium text-slate-800 dark:text-slate-200 ${isCompact ? 'vaccine-grid flex-row flex-wrap items-stretch p-1 bg-slate-100' : 'divide-y divide-slate-100 dark:divide-slate-800/50 text-xs'}`}>
                {['Neumocócica', 'Td', 'Influenza'].map(vaccine => {
                    const config: any = {
                        'Neumocócica': { color: 'sky', disease: 'Neumonía por neumococo', doses: [{ n: 'Única', a: 'A partir 65 años' }] },
                        'Td': { color: 'yellow', disease: 'Tétanos y Difteria', doses: [{ n: 'Refuerzo', a: 'Cada 10 años' }] },
                        'Influenza': { color: 'pink', disease: 'Influenza Estacional', doses: [{ n: 'Anual', a: 'Revacunación' }] }
                    };
                    const c = config[vaccine];
                    const styles = colorMap[c.color];
                    return (
                        <div key={vaccine} className={`flex flex-col relative group bg-white dark:bg-slate-900 overflow-hidden ${isCompact ? 'rounded-xl border border-slate-200 flex-1 table-vaccines' : 'md:flex-row border-t border-slate-200 dark:border-slate-800'}`}>
                            <div className={`${isCompact ? 'p-2 pb-1 border-b' : 'md:w-1/2 p-4 md:p-5 border-b md:border-b-0'} flex items-center relative ${styles.bg} border-slate-100 dark:border-slate-800`}>
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${styles.border}`}></div>
                                <div className={`flex-1 flex ${isCompact ? 'flex-col gap-0' : 'grid grid-cols-2 gap-4'}`}>
                                    <div className={`font-black ${styles.text} tracking-tight pl-2 ${isCompact ? 'text-[11px]' : 'text-sm md:text-base pl-3'}`}>{vaccine}</div>
                                    <div className={`text-slate-600 dark:text-slate-400 font-medium flex items-center ${isCompact ? 'text-[9px] pl-2 leading-tight' : 'text-xs md:text-sm'}`}>{c.disease}</div>
                                </div>
                            </div>
                            <div className={`${isCompact ? 'w-full' : 'md:w-1/2'} flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900`}>
                                {c.doses.map((d: any, i: number) => {
                                    const rec = findRecord(records, vaccine, d.n);
                                    return (
                                        <div key={i} className={`flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${isCompact ? 'p-1.5' : 'p-3 md:p-4'}`}>
                                            <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/4 flex justify-start md:justify-center'}`}>
                                                <span className={`bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full font-bold relative shrink-0 ${isCompact ? 'text-[8px] px-1.5 py-0.5' : 'px-3 py-1 text-[10px] uppercase tracking-wider'}`}>{d.n}</span>
                                            </div>
                                            <div className={`${isCompact ? 'w-1/3 text-[8px] font-bold text-slate-500 leading-tight' : 'w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight'}`}>{d.a}</div>
                                            <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/2'} flex flex-col items-end pr-1`}>
                                                <div className={`font-bold ${isCompact ? 'text-[9px]' : ''} ${rec ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                                                    {rec ? formatDate(rec.dateAdministered) : 'PENDIENTE'}
                                                </div>
                                                {rec && <div className={`font-mono text-slate-400 dark:text-slate-500 mt-0.5 uppercase flex items-center gap-1 ${isCompact ? 'text-[7px]' : 'text-[9px]'}`}><span className={`material-symbols-outlined text-emerald-500 ${isCompact ? 'text-[8px]' : 'text-[10px]'}`}>check_circle</span> {rec.lotNumber || 'LOTE'}</div>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
);

export const renderTableAdultos = (records: any[] = [], isCompact: boolean = false) => (
    <div className={`p-2 lg:p-4 bg-slate-50/50 dark:bg-slate-900/20 ${isCompact ? 'h-full flex flex-col' : ''}`}>
        <div className={`border border-slate-200 dark:border-slate-700/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 flex flex-col ${isCompact ? 'flex-1 h-full' : ''}`}>
            {/* Header only shows if NOT compact, OR we render a simplified header for compact mode */}
            <div className={`hidden md:grid grid-cols-12 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest p-4 items-center ${isCompact ? 'print:hidden' : ''}`}>
                <div className="col-span-3 pl-2">Vacuna / Inmunógeno</div>
                <div className="col-span-3">Enfermedad Que Previene</div>
                <div className="col-span-2 text-center">Dosis</div>
                <div className="col-span-2 text-center">Edad y Frecuencia</div>
                <div className="col-span-2 text-right pr-2">Fecha y Lote</div>
            </div>

            <div className={`flex-1 flex flex-col font-medium text-slate-800 dark:text-slate-200 ${isCompact ? 'vaccine-grid flex-row flex-wrap items-stretch p-1 bg-slate-100' : 'divide-y divide-slate-100 dark:divide-slate-800/50 text-xs'}`}>
                {['SR', 'Td', 'Influenza'].map(vaccine => {
                    const config: any = {
                        'SR': { color: 'orange', disease: 'Sarampión y Rubéola', doses: [{ n: 'Adicional', a: 'Riesgo o Brote' }] },
                        'Td': { color: 'yellow', disease: 'Tétanos y Difteria', doses: [{ n: 'Refuerzo', a: 'Cada 10 Años' }] },
                        'Influenza': { color: 'pink', disease: 'Influenza', doses: [{ n: 'Anual', a: 'Temporada Invernal' }] }
                    };
                    const c = config[vaccine];
                    const styles = colorMap[c.color];
                    return (
                        <div key={vaccine} className={`flex flex-col relative group bg-white dark:bg-slate-900 overflow-hidden ${isCompact ? 'rounded-xl border border-slate-200 flex-1 table-vaccines' : 'md:flex-row border-t border-slate-200 dark:border-slate-800'}`}>
                            <div className={`${isCompact ? 'p-2 pb-1 border-b' : 'md:w-1/2 p-4 md:p-5 border-b md:border-b-0'} flex items-center relative ${styles.bg} border-slate-100 dark:border-slate-800`}>
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${styles.border}`}></div>
                                <div className={`flex-1 flex ${isCompact ? 'flex-col gap-0' : 'grid grid-cols-2 gap-4'}`}>
                                    <div className={`font-black ${styles.text} tracking-tight pl-2 ${isCompact ? 'text-[11px]' : 'text-sm md:text-base pl-3'}`}>{vaccine}</div>
                                    <div className={`text-slate-600 dark:text-slate-400 font-medium flex items-center ${isCompact ? 'text-[9px] pl-2 leading-tight' : 'text-xs md:text-sm'}`}>{c.disease}</div>
                                </div>
                            </div>
                            <div className={`${isCompact ? 'w-full' : 'md:w-1/2'} flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900`}>
                                {c.doses.map((d: any, i: number) => {
                                    const rec = findRecord(records, vaccine, d.n);
                                    return (
                                        <div key={i} className={`flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${isCompact ? 'p-1.5' : 'p-3 md:p-4'}`}>
                                            <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/4 flex justify-start md:justify-center'}`}>
                                                <span className={`bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full font-bold relative shrink-0 ${isCompact ? 'text-[8px] px-1.5 py-0.5' : 'px-3 py-1 text-[10px] uppercase tracking-wider'}`}>{d.n}</span>
                                            </div>
                                            <div className={`${isCompact ? 'w-1/3 text-[8px] font-bold text-slate-500 leading-tight' : 'w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight'}`}>{d.a}</div>
                                            <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/2'} flex flex-col items-end pr-1`}>
                                                <div className={`font-bold ${isCompact ? 'text-[9px]' : ''} ${rec ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                                                    {rec ? formatDate(rec.dateAdministered) : 'PENDIENTE'}
                                                </div>
                                                {rec && <div className={`font-mono text-slate-400 dark:text-slate-500 mt-0.5 uppercase flex items-center gap-1 ${isCompact ? 'text-[7px]' : 'text-[9px]'}`}><span className={`material-symbols-outlined text-emerald-500 ${isCompact ? 'text-[8px]' : 'text-[10px]'}`}>check_circle</span> {rec.lotNumber || 'LOTE'}</div>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
);

export const renderTableRiesgo = (records: any[] = [], isCompact: boolean = false) => (
    <div className={`p-2 lg:p-4 bg-slate-50/50 dark:bg-slate-900/20 ${isCompact ? 'h-full flex flex-col' : ''}`}>
        <div className={`border border-slate-200 dark:border-slate-700/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 flex flex-col ${isCompact ? 'flex-1 h-full' : ''}`}>
            {/* Header only shows if NOT compact, OR we render a simplified header for compact mode */}
            <div className={`hidden md:grid grid-cols-12 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-widest p-4 items-center ${isCompact ? 'print:hidden' : ''}`}>
                <div className="col-span-3 pl-2 flex items-center gap-2">Vacuna <span className="text-red-600 bg-red-100 dark:bg-red-900/40 px-2 py-0.5 rounded-full text-[8px] font-bold">RIESGO</span></div>
                <div className="col-span-3">Enfermedad Que Previene</div>
                <div className="col-span-2 text-center">Dosis</div>
                <div className="col-span-2 text-center">Edad y Frecuencia</div>
                <div className="col-span-2 text-right pr-2">Fecha y Lote</div>
            </div>

            <div className={`flex-1 flex flex-col font-medium text-slate-800 dark:text-slate-200 ${isCompact ? 'vaccine-grid flex-row flex-wrap items-stretch p-1 bg-slate-100' : 'divide-y divide-slate-100 dark:divide-slate-800/50 text-xs'}`}>
                {['Hepatitis B', 'Influenza', 'COVID-19'].map(vaccine => {
                    const config: any = {
                        'Hepatitis B': { color: 'orange', disease: 'Hepatitis B', doses: [{ n: 'Primera', a: 'Al Ingreso' }, { n: 'Segunda', a: '1 Mes Después' }, { n: 'Tercera', a: '6 Meses Después' }] },
                        'Influenza': { color: 'pink', disease: 'Influenza', doses: [{ n: 'Anual', a: 'Camp. Invernal' }] },
                        'COVID-19': { color: 'red', disease: 'SARS-CoV-2', doses: [{ n: 'Refuerzo', a: 'Anual' }] }
                    };
                    const c = config[vaccine];
                    const styles = colorMap[c.color];
                    return (
                        <div key={vaccine} className={`flex flex-col relative group bg-white dark:bg-slate-900 overflow-hidden ${isCompact ? 'rounded-xl border border-slate-200 flex-1 table-vaccines' : 'md:flex-row border-t border-slate-200 dark:border-slate-800'}`}>
                            <div className={`${isCompact ? 'p-2 pb-1 border-b' : 'md:w-1/2 p-4 md:p-5 border-b md:border-b-0'} flex items-center relative ${styles.bg} border-slate-100 dark:border-slate-800`}>
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${styles.border}`}></div>
                                <div className={`flex-1 flex ${isCompact ? 'flex-col gap-0' : 'grid grid-cols-2 gap-4'}`}>
                                    <div className={`font-black ${styles.text} tracking-tight pl-2 ${isCompact ? 'text-[11px]' : 'text-sm md:text-base pl-3'}`}>{vaccine}</div>
                                    <div className={`text-slate-600 dark:text-slate-400 font-medium flex items-center ${isCompact ? 'text-[9px] pl-2 leading-tight' : 'text-xs md:text-sm'}`}>{c.disease}</div>
                                </div>
                            </div>
                            <div className={`${isCompact ? 'w-full' : 'md:w-1/2'} flex flex-col divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-slate-900`}>
                                {c.doses.map((d: any, i: number) => {
                                    const rec = findRecord(records, vaccine, d.n);
                                    return (
                                        <div key={i} className={`flex items-center hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${isCompact ? 'p-1.5' : 'p-3 md:p-4'}`}>
                                            <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/4 flex justify-start md:justify-center'}`}>
                                                <span className={`bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full font-bold relative shrink-0 ${isCompact ? 'text-[8px] px-1.5 py-0.5' : 'px-3 py-1 text-[10px] uppercase tracking-wider'}`}>{d.n}</span>
                                            </div>
                                            <div className={`${isCompact ? 'w-1/3 text-[8px] font-bold text-slate-500 leading-tight' : 'w-1/3 md:w-1/4 text-left md:text-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-tight'}`}>{d.a}</div>
                                            <div className={`${isCompact ? 'w-1/3' : 'w-1/3 md:w-1/2'} flex flex-col items-end pr-1`}>
                                                <div className={`font-bold ${isCompact ? 'text-[9px]' : ''} ${rec ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                                                    {rec ? formatDate(rec.dateAdministered) : 'PENDIENTE'}
                                                </div>
                                                {rec && <div className={`font-mono text-slate-400 dark:text-slate-500 mt-0.5 uppercase flex items-center gap-1 ${isCompact ? 'text-[7px]' : 'text-[9px]'}`}><span className={`material-symbols-outlined text-emerald-500 ${isCompact ? 'text-[8px]' : 'text-[10px]'}`}>check_circle</span> {rec.lotNumber || 'LOTE'}</div>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
);
