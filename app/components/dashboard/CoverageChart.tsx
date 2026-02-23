export default function CoverageChart() {
    const coverageData = [
        { city: "Cuernavaca", percent: 92, color: "bg-primary" },
        { city: "Jiutepec", percent: 86, color: "bg-primary" },
        { city: "Cuautla", percent: 78, color: "bg-primary" },
        { city: "Temixco", percent: 72, color: "bg-primary/60" },
        { city: "Emiliano Zapata", percent: 65, color: "bg-primary/40" },
    ];

    return (
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cobertura por Municipio</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Porcentaje de esquemas completos por región</p>
                </div>
                <select className="text-xs font-bold bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-primary py-1.5 pl-3 pr-8">
                    <option>Últimos 6 meses</option>
                    <option>Año 2023</option>
                    <option>Todo el tiempo</option>
                </select>
            </div>

            <div className="space-y-6">
                {coverageData.map((item) => (
                    <div key={item.city} className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                            <span>{item.city}</span>
                            <span>{item.percent}%</span>
                        </div>
                        <div className="h-4 w-full bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                                style={{ width: `${item.percent}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
