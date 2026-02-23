interface StatCardProps {
    title: string;
    value: string | number;
    percentageChange: string;
    percentageChangePositive: boolean;
    icon: string;
    colorClass: string;
    progressClass?: string;
    progressValue: number;
}

export function StatCard({
    title,
    value,
    percentageChange,
    percentageChangePositive,
    icon,
    colorClass,
    progressClass = "bg-primary",
    progressValue,
}: StatCardProps) {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${colorClass}`}>
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                <span
                    className={`text-xs font-bold px-2 py-1 rounded ${percentageChangePositive
                            ? "text-green-600 bg-green-50 dark:bg-green-900/20"
                            : "text-amber-600 bg-amber-50 dark:bg-amber-900/20" // Or red depending on context
                        }`}
                >
                    {percentageChangePositive ? "+" : ""}
                    {percentageChange}
                </span>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {title}
            </p>
            <h3 className="text-2xl font-black mt-1 text-slate-900 dark:text-white">
                {value}
            </h3>
            <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                    className={`h-full ${progressClass} transition-all duration-1000`}
                    style={{ width: `${progressValue}%` }}
                ></div>
            </div>
        </div>
    );
}
