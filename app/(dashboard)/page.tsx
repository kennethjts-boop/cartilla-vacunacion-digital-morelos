import { getDashboardStats } from "@/app/actions/dashboard";
import { getMunicipios } from "@/app/actions/catalogos";
import DashboardClient from "@/app/components/dashboard/DashboardClient";

export default async function Home() {
  // 1. Fetch official statistics (Existing action)
  const statsData = await getDashboardStats();

  // 2. Fetch official catalog for filters
  const munResponse = await getMunicipios();
  const municipios = munResponse.success ? munResponse.data || [] : [];

  // Transform stats into expected format for client
  const stats = {
    totalChildren: statsData.totalChildren || 0,
    completeSchedulePercentage: statsData.completeSchedulePercentage || 0,
    delayedVaccinesPercentage: statsData.delayedVaccinesPercentage || 0,
    urgentAlerts: statsData.urgentAlerts || 0,
  };

  return (
    <DashboardClient
      stats={stats}
      municipios={municipios}
    />
  );
}
