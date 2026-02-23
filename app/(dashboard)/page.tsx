import { getDashboardStats } from "@/app/actions/dashboard";
import { StatCard } from "@/app/components/dashboard/StatCard";
import CoverageChart from "@/app/components/dashboard/CoverageChart";
import HeatmapWidget from "@/app/components/dashboard/HeatmapWidget";
import RecentActivityList from "@/app/components/dashboard/RecentActivityList";

export default async function Home() {
  const {
    totalChildren = 0,
    completeSchedulePercentage = 0,
    delayedVaccinesPercentage = 0,
    urgentAlerts = 0
  } = await getDashboardStats();

  return (
    <div className="p-8 space-y-8">
      {/* Welcome Section */}
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Niños Registrados"
          value={totalChildren.toLocaleString()}
          percentageChange="2.4%"
          percentageChangePositive={true}
          icon="child_care"
          colorClass="bg-blue-50 dark:bg-blue-900/20 text-blue-600"
          progressClass="bg-blue-500"
          progressValue={75}
        />
        <StatCard
          title="Esquema Completo"
          value={`${completeSchedulePercentage}%`}
          percentageChange="0.5%"
          percentageChangePositive={true}
          icon="verified"
          colorClass="bg-primary/10 text-primary"
          progressClass="bg-primary"
          progressValue={completeSchedulePercentage}
        />
        <StatCard
          title="Vacunas Atrasadas"
          value={`${delayedVaccinesPercentage}%`}
          percentageChange="1.2%"
          percentageChangePositive={false}
          icon="pending_actions"
          colorClass="bg-amber-50 dark:bg-amber-900/20 text-amber-600"
          progressClass="bg-amber-500"
          progressValue={delayedVaccinesPercentage}
        />
        <StatCard
          title="Alertas Urgentes"
          value={urgentAlerts.toLocaleString()}
          percentageChange="5%"
          percentageChangePositive={false}
          icon="emergency_home"
          colorClass="bg-red-50 dark:bg-red-900/20 text-red-600"
          progressClass="bg-red-500"
          progressValue={45}
        />
      </div>

      {/* Main Chart and Sidebar widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CoverageChart />
        <HeatmapWidget />
      </div>

      {/* Recent Activity Table Component */}
      <RecentActivityList />

      {/* Footer Branding */}
      <footer className="mt-8 px-0 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest border-t border-slate-100 dark:border-slate-800">
        <p>© 2026 Gobierno del Estado de Morelos - Salud Digital</p>
        <div className="flex gap-4">
          <a className="hover:text-primary transition-colors" href="/">Aviso de Privacidad</a>
          <a className="hover:text-primary transition-colors" href="/">Soporte Técnico</a>
        </div>
      </footer>
    </div>
  );
}
