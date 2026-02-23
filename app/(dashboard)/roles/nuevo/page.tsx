'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NuevoRolPage() {
    const router = useRouter();
    const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

    const permissionsList = [
        { id: 'view_dashboard', label: 'Ver Panel de Control', desc: 'Acceso de lectura a las métricas iniciales.' },
        { id: 'manage_users', label: 'Administrar Usuarios', desc: 'Crear, editar o eliminar usuarios del sistema.' },
        { id: 'view_inventory', label: 'Ver Inventario', desc: 'Acceso de lectura al stock de vacunas y biológicos.' },
        { id: 'manage_inventory', label: 'Gestión de Inventario', desc: 'Registrar entradas, salidas y transferencias de dosis.' },
        { id: 'manage_appointments', label: 'Gestión de Citas', desc: 'Programar, editar o cancelar citas de vacunación.' },
        { id: 'register_vaccine', label: 'Aplicación de Vacunas', desc: 'Registrar la aplicación clínica a un paciente (requiere firma).' },
        { id: 'view_reports', label: 'Reportes Avanzados', desc: 'Ver módulo de inteligencia y desempeño.' },
        { id: 'export_data', label: 'Exportación de Datos', desc: 'Descargar registros sensibles en formatos PDF/Excel.' },
    ];

    const handleToggle = (id: string) => {
        if (selectedPermissions.includes(id)) {
            setSelectedPermissions(selectedPermissions.filter(p => p !== id));
        } else {
            setSelectedPermissions([...selectedPermissions, id]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/roles?success=rol_creado');
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto w-full">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Link href="/roles" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 rounded-lg text-slate-500 hover:text-primary hover:border-primary/30 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-xl block">arrow_back</span>
                        </Link>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Crear Nuevo Rol</h2>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium ml-12">Defina un perfil de acceso customizado para los operadores del sistema estatal.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-8">

                {/* 1. Datos del Rol */}
                <section>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">badge</span>
                        1. Definición Básica
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Nombre del Rol</label>
                            <input required type="text" placeholder="Ej. Capturista Municipal" className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all uppercase placeholder:normal-case" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 flex items-center gap-1"><span className="text-red-500">*</span> Nivel de Autorización (Jerarquía)</label>
                            <select required className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer">
                                <option value="1">Nivel 1 - Operativo Básico (Consulta)</option>
                                <option value="2">Nivel 2 - Táctico (Registro y Modificación local)</option>
                                <option value="3">Nivel 3 - Estratégico (Jurisdiccional)</option>
                                <option value="4">Nivel 4 - Administrador (Estatal Integral)</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Descripción de responsabilidades</label>
                            <textarea placeholder="Describe el objetivo y alcance de este rol..." rows={2} className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"></textarea>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* 2. Asignación de Permisos */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
                            2. Asignación de Permisos del Sistema
                        </h3>
                        <div className="text-xs font-bold text-slate-400">
                            {selectedPermissions.length} de {permissionsList.length} seleccionados
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {permissionsList.map((perm) => {
                            const isSelected = selectedPermissions.includes(perm.id);
                            return (
                                <div
                                    key={perm.id}
                                    onClick={() => handleToggle(perm.id)}
                                    className={`relative cursor-pointer border rounded-xl p-4 flex gap-3 transition-all ${isSelected
                                            ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-sm'
                                            : 'border-slate-200 dark:border-slate-800 hover:border-primary/50 bg-slate-50/50 dark:bg-slate-800/30'
                                        }`}
                                >
                                    <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'bg-primary border-primary text-white' : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700'
                                        }`}>
                                        {isSelected && <span className="material-symbols-outlined text-[14px]">check</span>}
                                    </div>
                                    <div>
                                        <p className={`text-sm font-bold mb-0.5 ${isSelected ? 'text-primary' : 'text-slate-700 dark:text-slate-300'}`}>{perm.label}</p>
                                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{perm.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Acciones */}
                <div className="flex items-center justify-end gap-4 pt-4 mt-8 border-t border-slate-100 dark:border-slate-800">
                    <Link href="/roles" className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        Cancelar
                    </Link>
                    <button type="submit" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-primary/20 hover:-translate-y-0.5">
                        <span className="material-symbols-outlined text-[18px]">verified_user</span>
                        Guardar Rol
                    </button>
                </div>
            </form>
        </div>
    );
}
