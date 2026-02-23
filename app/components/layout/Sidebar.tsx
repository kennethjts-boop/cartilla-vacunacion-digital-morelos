'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation'
import { logout } from '@/app/actions/auth'

interface SidebarProps {
    role?: string;
}

export default function Sidebar({ role }: SidebarProps) {
    const router = useRouter()

    const handleLogout = async () => {
        await logout()
        router.push('/inicio?fromLogout=true')
    }

    // Role checks
    const isStateAdmin = role === 'ADMIN_ESTATAL';
    const isMedicalStaff = role === 'MEDICO';

    return (
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
            <div className="p-6 flex items-center gap-3">
                <div className="bg-primary text-white p-1.5 rounded-lg">
                    <span className="material-symbols-outlined block">shield_with_heart</span>
                </div>
                <div>
                    <h1 className="text-sm font-bold leading-tight uppercase tracking-wider text-primary">Cartilla Digital</h1>
                    <p className="text-[10px] text-slate-500 font-medium">SECRETARÍA DE SALUD</p>
                </div>
            </div>

            <nav className="flex-1 px-3 space-y-1 overflow-y-auto custom-scrollbar pb-4">
                {/* Principal / Estado - Solo Admin */}
                {isStateAdmin && (
                    <>
                        <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 mt-4 hidden group-hover:block lg:block">Principal</p>
                        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg active-nav group transition-all">
                            <span className="material-symbols-outlined text-[20px]">dashboard</span>
                            <span className="text-sm font-semibold">Dashboard</span>
                        </Link>
                        <Link href="/vigilancia" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group-hover:text-primary">
                            <span className="material-symbols-outlined text-[20px]">monitoring</span>
                            <span className="text-sm font-medium">Vigilancia</span>
                        </Link>
                    </>
                )}
                {/* Operaciones - Admin y Médicos */}
                <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 mt-6 hidden group-hover:block lg:block">Operaciones</p>
                <Link href="/registro" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group-hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                    <span className="text-sm font-medium">Registro</span>
                </Link>
                <Link href="/centros" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group-hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">local_hospital</span>
                    <span className="text-sm font-medium">Centros de Salud</span>
                </Link>
                <Link href="/citas" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group-hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                    <span className="text-sm font-medium">Citas</span>
                </Link>
                <Link href="/cartilla" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group-hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">vaccines</span>
                    <span className="text-sm font-medium">Cartilla Digital</span>
                </Link>
                <Link href="/inventario" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group-hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                    <span className="text-sm font-medium">Inventario</span>
                </Link>
                <Link href="/rastreo" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group-hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">track_changes</span>
                    <span className="text-sm font-medium">Rastreo de Lotes</span>
                </Link>
                {/* Reportes Globales - Solo Admin */}
                {isStateAdmin && (
                    <Link href="/reportes" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group-hover:text-primary">
                        <span className="material-symbols-outlined text-[20px]">description</span>
                        <span className="text-sm font-medium">Reportes</span>
                    </Link>
                )}

                {/* Administración - Solo Admin */}
                {isStateAdmin && (
                    <>
                        <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 mt-6 hidden group-hover:block lg:block">Administración</p>
                        <Link href="/roles" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group-hover:text-primary">
                            <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                            <span className="text-sm font-medium">Roles y Permisos</span>
                        </Link>
                        <Link href="/soporte" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group-hover:text-primary">
                            <span className="material-symbols-outlined text-[20px]">support_agent</span>
                            <span className="text-sm font-medium">Soporte Técnico</span>
                        </Link>
                        <Link href="/auditoria" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group-hover:text-primary">
                            <span className="material-symbols-outlined text-[20px]">shield_person</span>
                            <span className="text-sm font-medium">Auditoría</span>
                        </Link>
                    </>
                )}
            </nav>

            <div className="p-4 mt-auto border-t border-slate-100 dark:border-slate-800">
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Sistema Operativo</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Conexión segura con el servidor estatal de Morelos.</p>
                </div>
                <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-lg">logout</span>
                    Cerrar Sesión
                </button>
            </div>
        </aside>
    );
}
