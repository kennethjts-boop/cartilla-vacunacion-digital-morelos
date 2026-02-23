'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegistrarAplicacionPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simular guardado
        router.push('/citas?success=aplicacion_registrada');
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto w-full">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Link href="/citas" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 rounded-lg text-slate-500 hover:text-primary hover:border-primary/30 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-xl block">arrow_back</span>
                        </Link>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Registrar Aplicación</h2>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium ml-12">Capture la información del biológico aplicado al paciente.</p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 px-4 py-2 rounded-lg flex items-center gap-3 shadow-sm">
                    <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 block animate-pulse">wifi_tethering</span>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 tracking-wider uppercase">Cita Confirmada</span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-8">

                {/* 1. Resumen del Paciente (Solo Lectura) */}
                <section className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 shadow-sm">
                                <span className="material-symbols-outlined text-3xl">face</span>
                            </div>
                            <div>
                                <h3 className="font-black text-lg text-slate-800 dark:text-slate-100 mb-0.5">Carlos Eduardo Ruiz</h3>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">CURP: RUCE981014HMORR05 • 25 Años</p>
                            </div>
                        </div>
                        <div className="w-full md:w-px h-px md:h-12 bg-slate-200 dark:bg-slate-700"></div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 shadow-sm">Vacuna Agendada</p>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-black uppercase tracking-wider border border-blue-200 dark:border-blue-800/50">
                                <span className="material-symbols-outlined text-[14px]">vaccines</span>
                                Influenza Estacional
                            </span>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 2. Captura de Biológico */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">science</span>
                        2. Datos del Biológico
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Número de Lote</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">qr_code_scanner</span>
                                <input required type="text" placeholder="Ej. INF-2526" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all uppercase placeholder:normal-case" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Caducidad del Lote</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">event_available</span>
                                <input required type="date" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-700 dark:text-slate-200" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Sitio de Aplicación</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">accessibility_new</span>
                                <select required className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Seleccione sitio</option>
                                    <option value="brazo_izquierdo">Brazo Izquierdo (Deltoides)</option>
                                    <option value="brazo_derecho">Brazo Derecho (Deltoides)</option>
                                    <option value="muslo_izquierdo">Muslo Izquierdo</option>
                                    <option value="muslo_derecho">Muslo Derecho</option>
                                    <option value="ora">Oral</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 3. Notas Adicionales */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">notes</span>
                        3. Observaciones
                    </h3>
                    <textarea placeholder="Eventos supuestamente atribuibles a la vacunación o inmunización (ESAVI), condición médica especial, etc." rows={3} className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"></textarea>
                </section>

                {/* Acciones */}
                <div className="flex items-center justify-end gap-4 pt-4">
                    <Link href="/citas" className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        Cancelar
                    </Link>
                    <button type="submit" className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-emerald-600/20 hover:-translate-y-0.5">
                        <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                        Completar Registro
                    </button>
                </div>
            </form>
        </div>
    );
}
