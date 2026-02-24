'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface FilterProps {
    municipios: Array<{ cve_mun: string; nombre: string }>;
}

export default function DashboardFilters({ municipios }: FilterProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (params: Record<string, string | null>) => {
            const newSearchParams = new URLSearchParams(searchParams.toString());

            Object.entries(params).forEach(([name, value]) => {
                if (value === null || value === '') {
                    newSearchParams.delete(name);
                } else {
                    newSearchParams.set(name, value);
                }
            });

            return newSearchParams.toString();
        },
        [searchParams]
    );

    const updateFilter = (name: string, value: string) => {
        router.push(pathname + '?' + createQueryString({ [name]: value }));
    };

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-wrap gap-4 items-center shadow-sm">
            {/* Date Range Selector */}
            <div className="flex flex-col gap-1.5 min-w-[150px]">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Rango de Tiempo</label>
                <select
                    className="text-sm border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 focus:ring-primary h-10 px-3 transition-colors"
                    value={searchParams.get('range') || '30d'}
                    onChange={(e) => updateFilter('range', e.target.value)}
                >
                    <option value="today">Hoy</option>
                    <option value="7d">Últimos 7 días</option>
                    <option value="30d">Últimos 30 días</option>
                    <option value="90d">Últimos 90 días</option>
                </select>
            </div>

            {/* Municipio Selector */}
            <div className="flex flex-col gap-1.5 min-w-[200px]">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Municipio</label>
                <select
                    className="text-sm border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 focus:ring-primary h-10 px-3 transition-colors"
                    value={searchParams.get('municipio') || ''}
                    onChange={(e) => updateFilter('municipio', e.target.value)}
                >
                    <option value="">Todos los Municipios</option>
                    {municipios.map(m => (
                        <option key={m.cve_mun} value={m.cve_mun}>{m.nombre}</option>
                    ))}
                </select>
            </div>

            {/* Institucion Selector */}
            <div className="flex flex-col gap-1.5 min-w-[150px]">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Institución</label>
                <select
                    className="text-sm border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 focus:ring-primary h-10 px-3 transition-colors"
                    value={searchParams.get('institucion') || ''}
                    onChange={(e) => updateFilter('institucion', e.target.value)}
                >
                    <option value="">Todas</option>
                    <option value="SSA">SSA</option>
                    <option value="IMSS">IMSS</option>
                    <option value="ISSSTE">ISSSTE</option>
                    <option value="IMSS_BIENESTAR">IMSS Bienestar</option>
                </select>
            </div>

            {/* Clear Filters */}
            <div className="flex-1 flex justify-end items-end h-full pt-5">
                <button
                    onClick={() => router.push(pathname)}
                    className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors flex items-center gap-1"
                >
                    <span className="material-symbols-outlined text-sm">filter_alt_off</span>
                    Limpiar Filtros
                </button>
            </div>
        </div>
    );
}
