'use client';

import { useState } from 'react';
import { StatCard } from "@/app/components/dashboard/StatCard";
import DashboardFilters from "@/app/components/dashboard/DashboardFilters";
import DetailPanel from "@/app/components/dashboard/DetailPanel";
import CoverageChart from "@/app/components/dashboard/CoverageChart";
import HeatmapWidget from "@/app/components/dashboard/HeatmapWidget";
import RecentActivityList from "@/app/components/dashboard/RecentActivityList";

interface DashboardClientProps {
    stats: {
        totalChildren: number;
        completeSchedulePercentage: number;
        delayedVaccinesPercentage: number;
        urgentAlerts: number;
    };
    municipios: any[];
}

export default function DashboardClient({ stats, municipios }: DashboardClientProps) {
    const [selectedDetail, setSelectedDetail] = useState<{ title: string; subtitle: string; content: React.ReactNode } | null>(null);

    const openPanel = (title: string, subtitle: string, formula: string, source: string) => {
        setSelectedDetail({
            title,
            subtitle,
            content: (
                <div className="space-y-6">
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <label className="text-[10px] font-black text-primary uppercase tracking-widest">Fórmula del Indicador</label>
                        <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">{formula}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                            <label className="text-[10px] font-black text-slate-400调节 uppercase tracking-widest">Fuente</label>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-200 mt-1">{source}</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Actualización</label>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-200 mt-1">Tiempo Real</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">Desglose por Jurisdicción</h4>
                        <div className="space-y-2">
                            {[
                                { name: 'Jurisdicción I - Cuernavaca', val: '45%', color: 'bg-blue-500' },
                                { name: 'Jurisdicción II - Jojutla', val: '30%', color: 'bg-emerald-500' },
                                { name: 'Jurisdicción III - Cuautla', val: '25%', color: 'bg-amber-500' }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-1.5">
                                    <div className="flex justify-between text-xs font-bold">
                                        <span className="text-slate-600 dark:text-slate-400">{item.name}</span>
                                        <span className="text-slate-900 dark:text-white">{item.val}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color}`} style={{ width: item.val }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        });
    };

    return (
        <div className="p-8 space-y-8">
            {/* Header / Welcome Section */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Panel de Control Estatal</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Monitoreo en tiempo real de la cobertura de vacunación infantil en Morelos.</p>
                </div>
                <button className="bg-primary text-white px-5 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm hover:opacity-90 transition-opacity">
                    <span className="material-symbols-outlined text-lg">file_download</span>
                    Exportar Reporte Mensual
                </button>
            </div>

            {/* Global Filters */}
            <DashboardFilters municipios={municipios} />

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Niños Registrados"
                    value={stats.totalChildren.toLocaleString()}
                    percentageChange="2.4%"
                    percentageChangePositive={true}
                    icon="child_care"
                    colorClass="bg-blue-50 dark:bg-blue-900/20 text-blue-600"
                    progressClass="bg-blue-500"
                    progressValue={75}
                    onClick={() => openPanel(
                        "Niños Registrados",
                        "Censo Nominal Estatal",
                        "Count(Patient.id)",
                        "Base de Datos Unificada Morelos"
                    )}
                />
                <StatCard
                    title="Esquema Completo"
                    value={`${stats.completeSchedulePercentage}%`}
                    percentageChange="0.5%"
                    percentageChangePositive={true}
                    icon="verified"
                    colorClass="bg-primary/10 text-primary"
                    progressClass="bg-primary"
                    progressValue={stats.completeSchedulePercentage}
                    onClick={() => openPanel(
                        "Esquema de Vacunación",
                        "Cobertura Total",
                        "(Pacientes con Esquema Completo / Población Objetivo) * 100",
                        "INEGI + Registros Clínicos"
                    )}
                />
                <StatCard
                    title="Vacunas Atrasadas"
                    value={`${stats.delayedVaccinesPercentage}%`}
                    percentageChange="1.2%"
                    percentageChangePositive={false}
                    icon="pending_actions"
                    colorClass="bg-amber-50 dark:bg-amber-900/20 text-amber-600"
                    progressClass="bg-amber-500"
                    progressValue={stats.delayedVaccinesPercentage}
                    onClick={() => openPanel(
                        "Dosis de Rezagos",
                        "Alertas Preventivas",
                        "(Dosis no Aplicadas en Tiempo / Programadas) * 100",
                        "Seguimiento Individualizado"
                    )}
                />
                <StatCard
                    title="Alertas Urgentes"
                    value={stats.urgentAlerts.toLocaleString()}
                    percentageChange="5%"
                    percentageChangePositive={false}
                    icon="emergency_home"
                    colorClass="bg-red-50 dark:bg-red-900/20 text-red-600"
                    progressClass="bg-red-500"
                    progressValue={45}
                    onClick={() => openPanel(
                        "Notificaciones de Riesgo",
                        "Vigilancia Epidemiológica",
                        "Count(Outbreaks + Local Stagnation Alerts)",
                        "DGIS + Sistema de Alertas Morelos"
                    )}
                />
            </div>

            {/* Main Charts area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 cursor-pointer hover:shadow-xl transition-all" onClick={() => openPanel("Análisis de Cobertura", "Evolución Mensual", "∑ Dosis Aplicadas / Mes", "Registros Electrónicos")}>
                    <CoverageChart />
                </div>
                <div className="cursor-pointer hover:shadow-xl transition-all" onClick={() => openPanel("Mapa de Calor", "Densidad Poblacional", "Puntos Activos", "Georreferenciación CLUES")}>
                    <HeatmapWidget />
                </div>
            </div>

            {/* Activity list */}
            <RecentActivityList />

            {/* Sidebar Data Detail */}
            {selectedDetail && (
                <DetailPanel
                    isOpen={!!selectedDetail}
                    onClose={() => setSelectedDetail(null)}
                    title={selectedDetail.title}
                    subtitle={selectedDetail.subtitle}
                >
                    {selectedDetail.content}
                </DetailPanel>
            )}
        </div>
    );
}
