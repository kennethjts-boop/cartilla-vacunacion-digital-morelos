'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TransferenciaInventarioPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/inventario?success=transferencia_iniciada');
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto w-full">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Link href="/inventario" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 rounded-lg text-slate-500 hover:text-primary hover:border-primary/30 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-xl block">arrow_back</span>
                        </Link>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Transferir Dosis</h2>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium ml-12">Despache biológicos desde un almacén o jurisdicción hacia una unidad médica u otro destino.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-8">

                {/* 1. Origen y Destino */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">route</span>
                        1. Ruta de Distribución
                    </h3>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-full flex-1">
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Origen (Sale de:)</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">storefront</span>
                                <select required className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                    <option value="estatal">Almacén Central Estatal (Cuernavaca)</option>
                                    <option value="j1">Cámara de Frío Jurisdicción I</option>
                                    <option value="j2">Cámara de Frío Jurisdicción II</option>
                                </select>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center justify-center shrink-0 w-12 h-12 bg-slate-50 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700 mt-5">
                            <span className="material-symbols-outlined text-slate-400">arrow_forward</span>
                        </div>
                        <div className="flex md:hidden items-center justify-center -my-2">
                            <span className="material-symbols-outlined text-slate-400 rotate-90">arrow_forward</span>
                        </div>

                        <div className="w-full flex-1">
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Destino (Entra a:)</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">local_hospital</span>
                                <select required className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Seleccione destino...</option>
                                    <optgroup label="Jurisdicción I">
                                        <option value="cs1">CS Cuernavaca Centro</option>
                                        <option value="cs2">Hospital General Parres</option>
                                    </optgroup>
                                    <optgroup label="Jurisdicción II">
                                        <option value="cs3">Hospital General Jojutla</option>
                                        <option value="cs4">CS Tlaquiltenango</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 2. Selección de Lote */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">app_registration</span>
                        2. Lote a Transferir
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Lote de Biológico Existente</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <select required className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Buscar en almacén de origen (Ej. BCG-001)</option>
                                    <option value="l1">BCG - Lote B-992 (4,500 disp.)</option>
                                    <option value="l2">Influenza - Lote INF-22X (12,000 disp.)</option>
                                    <option value="l3">Rotavirus - Lote ROT-51A (800 disp.)</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Termo / Contenedor</label>
                            <input required type="text" placeholder="Ej. Termo KST-04" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Cantidad a Enviar (Viales)</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-amber-500">production_quantity_limits</span>
                                <input required type="number" min="1" placeholder="0" className="w-full text-sm font-bold bg-amber-50/30 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/50 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-slate-700 dark:text-slate-200" />
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 3. Responsables */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">local_shipping</span>
                        3. Responsables del Traslado
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Autoriza (Origen)</label>
                            <input required type="text" defaultValue="Admin Estatal" className="w-full text-sm font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 border fill-slate-200 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none cursor-not-allowed" readOnly />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Personal Transportista / Enfermero(a)</label>
                            <input required type="text" placeholder="Nombre de quien recibe/transporta" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Notas de Transporte (Cadena de frío al salir)</label>
                            <textarea placeholder="Ej. Sale a 4.2°C con geles refrigerantes al 100%..." rows={2} className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"></textarea>
                        </div>
                    </div>
                </section>

                {/* Acciones */}
                <div className="flex items-center justify-end gap-4 pt-4">
                    <Link href="/inventario" className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        Cancelar
                    </Link>
                    <button type="submit" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-primary/20 hover:-translate-y-0.5">
                        <span className="material-symbols-outlined text-[18px]">sync_alt</span>
                        Procesar Transferencia
                    </button>
                </div>
            </form>
        </div>
    );
}
