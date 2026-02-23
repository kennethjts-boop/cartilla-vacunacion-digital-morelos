'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NuevoTicketPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/soporte?success=ticket_creado');
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto w-full">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Link href="/soporte" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 rounded-lg text-slate-500 hover:text-primary hover:border-primary/30 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-xl block">arrow_back</span>
                        </Link>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Levantar Reporte Técnico</h2>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium ml-12">Describa la incidencia técnica para que el equipo de soporte de Morelos le asista.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-8">

                {/* 1. Categorización */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">category</span>
                        1. Clasificación del Problema
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Título Corto / Asunto</label>
                            <input required type="text" placeholder="Ej. Error al intentar registrar vacuna BCG" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Módulo Afectado</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">dashboard</span>
                                <select required className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Seleccione módulo...</option>
                                    <option value="registro">Registro de Pacientes</option>
                                    <option value="citas">Gestión de Citas</option>
                                    <option value="inventario">Inventario / Trazabilidad</option>
                                    <option value="reportes">Reportes y Exportación</option>
                                    <option value="acceso">Problemas de Acceso / Contraseña</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Nivel de Urgencia</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">priority_high</span>
                                <select required className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                    <option value="baja">Baja (Duda o sugerencia operativa)</option>
                                    <option value="media">Media (Error no bloqueante, hay alternativa)</option>
                                    <option value="alta">Alta (Módulo completo caído, bloquea operación local)</option>
                                    <option value="critica">CRÍTICA (Falla general que detiene procesos estatales)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 2. Detalles */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">description</span>
                        2. Detalles de la Incidencia
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Descripción Detallada</label>
                            <textarea required placeholder="Por favor, describe paso a paso cómo replicar el error, qué esperabas que ocurriera y qué ocurrió realmente." rows={5} className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y"></textarea>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center justify-between">
                                Captura de Pantalla o Evidencia Gráfica
                                <span className="font-medium lowercase text-slate-400">(Opcional)</span>
                            </label>
                            <div className="w-full border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 rounded-xl p-6 text-center hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">upload_file</span>
                                </div>
                                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Arrastra tu archivo aquí o haz clic</h4>
                                <p className="text-xs text-slate-500 font-medium">Soporta imágenes (JPG, PNG) o PDF hasta 5MB</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Acciones */}
                <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <Link href="/soporte" className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        Cancelar
                    </Link>
                    <button type="submit" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-primary/20 hover:-translate-y-0.5">
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        Enviar Ticket
                    </button>
                </div>
            </form>
        </div>
    );
}
