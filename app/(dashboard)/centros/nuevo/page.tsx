'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NuevoCentroPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulating API call for creation
        await new Promise(resolve => setTimeout(resolve, 800));

        router.push('/centros');
        router.refresh(); // Refresh the list
    };

    return (
        <div className="p-4 md:p-8 space-y-6 max-w-4xl mx-auto w-full">
            {/* Header / Breadcrumb */}
            <div className="flex flex-col gap-2 border-b border-slate-100 dark:border-slate-800 pb-6">
                <Link href="/centros" className="text-sm font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-1 w-fit">
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    Regresar a Centros de Salud
                </Link>
                <div className="flex items-center gap-3 mt-2">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                        <span className="material-symbols-outlined block text-[24px]">domain_add</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Registrar Nuevo Centro</h2>
                        <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm">Ingrese los datos para dar de alta una nueva unidad médica en la red estatal de Morelos.</p>
                    </div>
                </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 md:p-8 space-y-10">

                    {/* Section 1: General Info */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center text-xs">1</span>
                            Información General
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Nombre de la Unidad Médica *</label>
                                <input required type="text" placeholder="Ej. Hospital General G. Parres" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-shadow dark:text-white" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Clave CLUES *</label>
                                <input required type="text" placeholder="Ej. MSSSA001234" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-shadow uppercase dark:text-white" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Institución *</label>
                                <select required className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-shadow font-medium text-slate-700 dark:text-slate-200">
                                    <option value="" disabled selected>Seleccione institución</option>
                                    <option value="SSM">Servicios de Salud de Morelos (SSM)</option>
                                    <option value="IMSS">IMSS (Ordinario)</option>
                                    <option value="IMSS_BIENESTAR">IMSS-Bienestar</option>
                                    <option value="ISSSTE">ISSSTE</option>
                                    <option value="SEDENA">SEDENA</option>
                                    <option value="PRIVADO">Sector Privado</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <hr className="border-slate-100 dark:border-slate-800" />

                    {/* Section 2: Location */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center text-xs">2</span>
                            Ubicación
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Jurisdicción Sanitaria *</label>
                                <select required className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-shadow font-medium text-slate-700 dark:text-slate-200">
                                    <option value="" disabled selected>Asignar jurisdicción</option>
                                    <option value="1">Jurisdicción I - Cuernavaca</option>
                                    <option value="2">Jurisdicción II - Jojutla</option>
                                    <option value="3">Jurisdicción III - Cuautla</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Municipio *</label>
                                <select required className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-shadow font-medium text-slate-700 dark:text-slate-200">
                                    <option value="" disabled selected>Seleccione municipio</option>
                                    <option value="Cuernavaca">Cuernavaca</option>
                                    <option value="Jiutepec">Jiutepec</option>
                                    <option value="Cuautla">Cuautla</option>
                                    <option value="Jojutla">Jojutla</option>
                                    <option value="Temixco">Temixco</option>
                                    <option value="Tepoztlan">Tepoztlán</option>
                                    <option value="Yautepec">Yautepec</option>
                                    <option value="Emiliano Zapata">Emiliano Zapata</option>
                                    <option value="Xochitepec">Xochitepec</option>
                                    {/* Additional municipalities could go here */}
                                    <option value="Otro">Otro (Especificar en dirección)</option>
                                </select>
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Dirección Física Completa</label>
                                <textarea rows={2} placeholder="Calle, Número, Colonia, Código Postal" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-shadow dark:text-white" />
                            </div>
                        </div>
                    </div>

                    <hr className="border-slate-100 dark:border-slate-800" />

                    {/* Section 3: Capacity */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center text-xs">3</span>
                            Capacidad Operativa
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Estado Operativo *</label>
                                <div className="flex gap-4 mt-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="status" value="ACTIVO" defaultChecked className="w-4 h-4 text-primary focus:ring-primary" />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Activo</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="status" value="INACTIVO" className="w-4 h-4 text-slate-400 focus:ring-slate-500" />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Inactivo / Apertura Pendiente</span>
                                    </label>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Red de Frío (Almacenaje de Vacunas) *</label>
                                <div className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400">ac_unit</span>
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Cuenta con refrigerador avalado</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Actions */}
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
                    <Link href="/centros" className="px-5 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
                        Cancelar
                    </Link>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center min-w-[140px] px-6 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                            <>
                                <span className="material-symbols-outlined mr-2 text-[20px]">save</span>
                                Guardar Centro
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
