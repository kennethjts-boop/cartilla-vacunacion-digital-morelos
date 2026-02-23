'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NuevoCargamentoPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/inventario?success=cargamento_registrado');
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto w-full">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Link href="/inventario" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 rounded-lg text-slate-500 hover:text-primary hover:border-primary/30 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-xl block">arrow_back</span>
                        </Link>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Registrar Nuevo Cargamento</h2>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium ml-12">Capture la recepción de un nuevo lote de biológicos en el almacén estatal o jurisdiccional.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-8">
                {/* 1. Datos del Lote */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">qr_code_2</span>
                        1. Identificación del Biológico
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Tipo de Vacuna</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">vaccines</span>
                                <select required className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Seleccione un biológico de catálogo...</option>
                                    <option value="bcg">BCG (Tuberculosis)</option>
                                    <option value="hepatitisb">Hepatitis B</option>
                                    <option value="pentavalente">Pentavalente Acelular</option>
                                    <option value="rotavirus">Rotavirus</option>
                                    <option value="neumococo">Neumocócica Conjugada</option>
                                    <option value="srp">SRP (Sarampión, Rubéola, Parotiditis)</option>
                                    <option value="dpt">DPT (Difteria, Tos ferina, Tétanos)</option>
                                    <option value="influenza">Influenza Estacional</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Presentación</label>
                            <select required className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                <option value="unidosis">Unidosis (1 dosis)</option>
                                <option value="multidosis_5">Multidosis (5 dosis)</option>
                                <option value="multidosis_10">Multidosis (10 dosis)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Lote de Fabricante</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">tag</span>
                                <input required type="text" placeholder="Ej. L-84736" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all uppercase placeholder:normal-case" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Fecha de Caducidad</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">event_busy</span>
                                <input required type="date" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-700 dark:text-slate-200" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Laboratorio</label>
                            <input required type="text" placeholder="Fabricante" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 2. Cantidad e Ingreso */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">inventory_2</span>
                        2. Detalles de Recepción
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Cantidad de Viales (Unidades)</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">numbers</span>
                                <input required type="number" min="1" placeholder="0" className="w-full text-sm font-bold bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-700 dark:text-slate-200" />
                            </div>
                            <p className="text-[10px] text-slate-400 mt-1.5">El total de dosis se calculará automáticamente basado en la presentación elegida.</p>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Almacén de Recepción</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">store</span>
                                <select required className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Seleccione almacén destino...</option>
                                    <option value="estatal">Almacén Central Estatal (Cuernavaca)</option>
                                    <option value="j1">Cámara de Frío Jurisdicción I</option>
                                    <option value="j2">Cámara de Frío Jurisdicción II</option>
                                    <option value="j3">Cámara de Frío Jurisdicción III</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Origen del Cargamento / Número de Remisión</label>
                            <input required type="text" placeholder="Ej. Secretaría de Salud Federal - Remisión #99824" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 3. Recepción Física (Cadena de frío) */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">ac_unit</span>
                        3. Control de Calidad y Cadena de Frío
                    </h3>
                    <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/50 rounded-xl p-5 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-blue-800 dark:text-blue-300 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Temperatura de Recepción (°C)</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">thermostat</span>
                                    <input required type="number" step="0.1" placeholder="Ej. 4.5" className="w-full text-sm font-bold bg-white dark:bg-slate-800/80 border border-blue-200 dark:border-blue-800/50 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-700 dark:text-slate-200" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-blue-800 dark:text-blue-300 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Estado Físico del Empaque</label>
                                <select required className="w-full text-sm font-medium bg-white dark:bg-slate-800/80 border border-blue-200 dark:border-blue-800/50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none cursor-pointer">
                                    <option value="optimo">Óptimo (Sin daños)</option>
                                    <option value="daño_menor">Daño Menor (Solo empaque exterior)</option>
                                    <option value="revision">Requiere Revisión (Posible daño en viales)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Observaciones adicionales</label>
                        <textarea placeholder="Registro de termo-graficador, anomalías, etc..." rows={3} className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"></textarea>
                    </div>
                </section>

                {/* Acciones */}
                <div className="flex items-center justify-end gap-4 pt-4">
                    <Link href="/inventario" className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        Cancelar
                    </Link>
                    <button type="submit" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-primary/20 hover:-translate-y-0.5">
                        <span className="material-symbols-outlined text-[18px]">add_circle</span>
                        Ingresar Cargamento
                    </button>
                </div>
            </form>
        </div>
    );
}
