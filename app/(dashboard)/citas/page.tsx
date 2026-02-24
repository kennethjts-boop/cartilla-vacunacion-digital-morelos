'use client';
import { useState, useEffect } from 'react';
import ExportModal from '@/app/components/dashboard/ExportModal';
import Link from 'next/link';
import { getAppointments } from '@/app/actions/appointments';

export default function CitasPage() {
    const [isExportOpen, setIsExportOpen] = useState(false);
    const [exportType, setExportType] = useState<'excel' | 'pdf' | 'csv'>('excel');
    const [appointments, setAppointments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadAppointments() {
            const res = await getAppointments();
            if (res.success) {
                setAppointments(res.data || []);
            }
            setLoading(false);
        }
        loadAppointments();
    }, []);

    const handleExport = (type: 'excel' | 'pdf' | 'csv') => {
        setExportType(type);
        setIsExportOpen(true);
    };

    const appointmentsToday = appointments.filter(a => {
        const today = new Date().toISOString().split('T')[0];
        const appointmentDate = new Date(a.date).toISOString().split('T')[0];
        return today === appointmentDate;
    });

    const attendedCount = appointments.filter(a => a.status === 'COMPLETADO').length;
    const pendingCount = appointments.filter(a => a.status === 'PENDIENTE').length;

    const formatDate = (date: Date | string) => {
        return new Date(date).toLocaleDateString('es-MX', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    const formatTime = (date: Date | string) => {
        return new Date(date).toLocaleTimeString('es-MX', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="p-4 md:p-8 flex flex-col xl:flex-row gap-6 max-w-[1600px] mx-auto w-full">
            {/* Sidebar Izquierda: Calendario y Navegación rápida */}
            <aside className="w-full xl:w-72 flex-shrink-0 space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-slate-700 dark:text-slate-200">
                            {new Date().toLocaleDateString('es-MX', { month: 'long', year: 'numeric' })}
                        </h3>
                    </div>
                    {/* Dummy Calendar remains for aesthetic but could be extended */}
                    <div className="grid grid-cols-7 text-center text-[10px] font-bold text-slate-400 uppercase mb-2">
                        <div>Do</div><div>Lu</div><div>Ma</div><div>Mi</div><div>Ju</div><div>Vi</div><div>Sá</div>
                    </div>
                    <div className="grid grid-cols-7 text-center gap-y-1">
                        {[...Array(31)].map((_, i) => (
                            <div key={i} className={`text-xs py-2 font-medium ${i + 1 === new Date().getDate() ? 'bg-primary text-white rounded-lg shadow-sm shadow-primary/20' : ''}`}>
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 space-y-6">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Gestión de Citas</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Administre y revise el progreso de citas de vacunación programadas.</p>
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Citas Hoy</p>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white">{loading ? '...' : appointmentsToday.length}</h3>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl">calendar_today</span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Atendidos</p>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white">{loading ? '...' : attendedCount}</h3>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                            <span className="material-symbols-outlined text-3xl">check_circle</span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Pendientes</p>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white">{loading ? '...' : pendingCount}</h3>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                            <span className="material-symbols-outlined text-3xl">schedule</span>
                        </div>
                    </div>
                </div>

                {/* Filters Section */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/citas/nueva" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm shadow-primary/20">
                            <span className="material-symbols-outlined text-sm">add</span>
                            Nueva Cita
                        </Link>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <h3 className="font-bold text-slate-800 dark:text-slate-100 tracking-tight text-lg">Próximas Citas</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                                    <th className="px-6 py-3">Fecha / Hora</th>
                                    <th className="px-6 py-3">Paciente</th>
                                    <th className="px-6 py-3">CURP</th>
                                    <th className="px-6 py-3">Vacuna</th>
                                    <th className="px-6 py-3">Estado</th>
                                    <th className="px-6 py-3 text-center">Centro de Salud</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {loading ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-10 text-center text-slate-500">Cargando citas...</td>
                                    </tr>
                                ) : appointments.map((appointment) => (
                                    <tr key={appointment.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-black text-slate-700 dark:text-slate-300">{formatDate(appointment.date)}</div>
                                            <div className="text-xs text-slate-500">{formatTime(appointment.date)}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-slate-900 dark:text-slate-100">{appointment.patient.firstName} {appointment.patient.lastName}</div>
                                            <div className="text-xs text-slate-500 font-medium">{appointment.patient.gender === 'M' ? 'Masculino' : 'Femenino'}</div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium text-xs">{appointment.patient.curp}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-[10px] font-black uppercase tracking-wider border border-blue-200 dark:border-blue-800/50">
                                                {appointment.vaccine.name}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${appointment.status === 'COMPLETADO' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                                                    appointment.status === 'CANCELADO' ? 'bg-red-100 text-red-700 border-red-200' :
                                                        'bg-amber-100 text-amber-700 border-amber-200'
                                                }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${appointment.status === 'COMPLETADO' ? 'bg-emerald-500' :
                                                        appointment.status === 'CANCELADO' ? 'bg-red-500' :
                                                            'bg-amber-500'
                                                    }`}></span>
                                                {appointment.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center text-xs font-bold text-slate-600 dark:text-slate-400">
                                            {appointment.healthCenter.name}
                                        </td>
                                    </tr>
                                ))}
                                {!loading && appointments.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-10 text-center text-slate-500">No hay citas programadas.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <ExportModal
                isOpen={isExportOpen}
                onClose={() => setIsExportOpen(false)}
                fileType={exportType}
            />
        </div>
    );
}
