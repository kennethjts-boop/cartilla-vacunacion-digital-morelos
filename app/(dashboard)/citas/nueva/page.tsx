'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NuevaCitaPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simular guardado
        router.push('/citas?success=cita_creada');
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto w-full">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Link href="/citas" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 rounded-lg text-slate-500 hover:text-primary hover:border-primary/30 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-xl block">arrow_back</span>
                        </Link>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Agendar Nueva Cita</h2>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium ml-12">Complete el formulario para programar una aplicación de vacuna.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-8">
                {/* 1. Búsqueda de Paciente */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">person_search</span>
                        1. Información del Paciente
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> CURP</label>
                            <input required type="text" placeholder="Ingrese los 18 caracteres" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all uppercase placeholder:normal-case" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Nombre Completo (Opcional)</label>
                            <input type="text" placeholder="Nombre para búsqueda alternativa" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 2. Detalles de Vacunación */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">vaccines</span>
                        2. Detalles de Aplicación
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Vacuna a Aplicar</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">syringe</span>
                                <select required className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Seleccione una vacuna</option>
                                    <option value="influenza">Influenza Estacional</option>
                                    <option value="covid19">COVID-19</option>
                                    <option value="bcg">BCG</option>
                                    <option value="hexavalente">Hexavalente</option>
                                    <option value="vph">Virus del Papiloma Humano (VPH)</option>
                                    <option value="srp">SRP (Sarampión, Rubéola, Parotiditis)</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Centro de Salud</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">local_hospital</span>
                                <select required className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                    <option value="">Seleccione una sede</option>
                                    <option value="cs1">Centro de Salud Cuernavaca Centro</option>
                                    <option value="cs2">Hospital General de Jojutla</option>
                                    <option value="cs3">Unidad de Medicina Familiar IMSS #1</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 3. Programación */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">event</span>
                        3. Programación
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Fecha</label>
                            <input required type="date" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-700 dark:text-slate-200" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Hora</label>
                            <input required type="time" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-700 dark:text-slate-200" />
                        </div>
                    </div>
                </section>

                {/* Acciones */}
                <div className="flex items-center justify-end gap-4 pt-4">
                    <Link href="/citas" className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        Cancelar
                    </Link>
                    <button type="submit" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-primary/20 hover:-translate-y-0.5">
                        <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                        Confirmar Cita
                    </button>
                </div>
            </form>
        </div>
    );
}
