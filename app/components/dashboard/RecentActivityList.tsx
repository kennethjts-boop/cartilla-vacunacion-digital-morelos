import { getRecentActivity } from "@/app/actions/dashboard";

export default async function RecentActivityList() {
    const { success, data, error } = await getRecentActivity()

    if (!success || !data) {
        return <div className="p-6 text-sm text-red-500">Error: {error}</div>
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'COMPLETADO':
                return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">COMPLETADO</span>
            case 'PENDIENTE':
                return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">PENDIENTE</span>
            case 'ATRASADO':
                return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">ATRASADO</span>
            default:
                return <span>{status}</span>
        }
    }

    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Actividad Reciente</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Últimos {data.length} registros procesados en el estado</p>
                </div>
                <button className="text-primary text-xs font-bold hover:underline">Ver todos los registros</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/50">
                        <tr>
                            <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Fecha</th>
                            <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Paciente</th>
                            <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Vacuna</th>
                            <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Centro de Salud</th>
                            <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {data.map((record: any) => (
                            <tr key={record.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 text-xs font-medium text-slate-500">
                                    {new Date(record.createdAt).toLocaleDateString('es-MX', {
                                        day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
                                    })}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-600">
                                            {record.patient.firstName[0]}{record.patient.lastName[0]}
                                        </div>
                                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                            {record.patient.firstName} {record.patient.lastName}
                                        </p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-400">
                                    {record.vaccine.name}
                                </td>
                                <td className="px-6 py-4 text-xs text-slate-500">
                                    {record.healthCenter.name}
                                </td>
                                <td className="px-6 py-4">
                                    {getStatusBadge(record.status)}
                                </td>
                            </tr>
                        ))}

                        {data.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-sm text-slate-500">
                                    No hay registros recientes.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
