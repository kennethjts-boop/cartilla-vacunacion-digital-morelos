'use client';

import { useState } from 'react';

type UnidadSalud = {
    id: string;
    nombre_unidad: string;
    institucion: string;
    clues?: string | null;
    tipo_unidad?: string | null;
    nivel_atencion?: string | null;
    direccion?: string | null;
};

export default function CatalogoTableClient({ unidades }: { unidades: UnidadSalud[] }) {
    const [selectedUnit, setSelectedUnit] = useState<UnidadSalud | null>(null);

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest min-w-[120px]">Institución</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest min-w-[250px]">Nombre de la Unidad</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest min-w-[150px]">Tipo / Nivel</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">CLUES</th>
                            <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Acción</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {unidades.map((unit) => (
                            <tr key={unit.id} className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${selectedUnit?.id === unit.id ? 'bg-primary/5 dark:bg-primary/10' : ''}`}>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-black tracking-widest uppercase ${unit.institucion === 'IMSS' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400' :
                                        unit.institucion === 'ISSSTE' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' :
                                            'bg-primary/10 text-primary dark:text-emerald-300'
                                        }`}>
                                        {unit.institucion}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">{unit.nombre_unidad}</p>
                                    <p className="text-[10px] text-slate-500 font-medium uppercase mt-0.5 truncate max-w-[300px]">{unit.direccion || 'Domicilio Conocido, S/N'}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{unit.tipo_unidad || 'Centro de Salud'}</p>
                                    <p className="text-[10px] text-slate-500">{unit.nivel_atencion || 'Primer Nivel'}</p>
                                </td>
                                <td className="px-6 py-4 font-mono text-xs text-slate-400 font-medium">{unit.clues || 'N/A'}</td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => setSelectedUnit(unit)}
                                        className="text-primary hover:text-primary/80 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors text-xs font-bold uppercase tracking-wider"
                                    >
                                        Ver Detalles
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {unidades.length === 0 && (
                    <div className="p-12 text-center">
                        <span className="material-symbols-outlined text-4xl text-slate-200 dark:text-slate-700 mb-4 scale-150">domain_disabled</span>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">No se encontraron unidades con estos criterios.</p>
                    </div>
                )}
            </div>

            {/* Modal de Detalles */}
            {selectedUnit && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-200 dark:border-slate-700 transform animate-in slide-in-from-bottom-4 zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="bg-primary px-6 py-4 flex items-center justify-between border-b border-primary/20">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-white/90 text-2xl">local_hospital</span>
                                <div>
                                    <h3 className="text-white font-bold text-lg leading-tight">Detalles de la Unidad Médica</h3>
                                    <p className="text-white/70 text-xs font-medium uppercase tracking-wider">{selectedUnit.clues || 'Sin CLUES'}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedUnit(null)}
                                className="text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                                <div>
                                    <span className={`inline-block px-2.5 py-1 mb-3 rounded-md text-[10px] font-black tracking-widest uppercase ${selectedUnit.institucion === 'IMSS' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400' :
                                        selectedUnit.institucion === 'ISSSTE' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' :
                                            'bg-primary/10 text-primary dark:text-emerald-300'
                                        }`}>
                                        {selectedUnit.institucion}
                                    </span>
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">{selectedUnit.nombre_unidad}</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 flex items-start gap-1">
                                        <span className="material-symbols-outlined text-base shrink-0 mt-0.5">location_on</span>
                                        {selectedUnit.direccion || 'Dirección no especificada en el catálogo oficial.'}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Tipo de Unidad</p>
                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{selectedUnit.tipo_unidad || 'Centro de Salud'}</p>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Nivel de Atención</p>
                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{selectedUnit.nivel_atencion || 'Primer Nivel'}</p>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Estado</p>
                                    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                        Activo
                                    </p>
                                </div>
                            </div>

                            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-4 border border-primary/10 flex items-center gap-4">
                                <div className="size-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary shrink-0 shadow-sm">
                                    <span className="material-symbols-outlined">inventory_2</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Red de Frío y Biológicos</h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Esta unidad cuenta con certificación estatal para manejo de red de frío y aplicación del esquema de vacunación básico y extendido.</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                            <button
                                onClick={() => setSelectedUnit(null)}
                                className="px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
                            >
                                Cerrar Ventana
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
