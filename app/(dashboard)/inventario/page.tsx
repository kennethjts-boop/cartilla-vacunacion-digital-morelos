'use client';
import { useState, useEffect } from 'react';
import ExportModal from '@/app/components/dashboard/ExportModal';
import Link from 'next/link';
import { getInventory } from '@/app/actions/inventory';

export default function InventarioPage() {
    const [isExportOpen, setIsExportOpen] = useState(false);
    const [exportType, setExportType] = useState<'excel' | 'pdf' | 'csv'>('excel');
    const [inventory, setInventory] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        async function loadInventory() {
            const res = await getInventory();
            if (res.success) {
                setInventory(res.data || []);
            }
            setLoading(false);
        }
        loadInventory();
    }, []);

    const handleExport = (type: 'excel' | 'pdf' | 'csv') => {
        setExportType(type);
        setIsExportOpen(true);
    };

    // Calculate metrics
    const totalDoses = inventory.reduce((acc, curr) => acc + curr.stock, 0);
    const criticalLots = inventory.filter(i => i.status === 'CRITICO').length;
    const nearExpiry = inventory.filter(i => {
        const expiry = new Date(i.expirationDate);
        const today = new Date();
        const diffTime = expiry.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 && diffDays < 90; // Less than 3 months
    }).length;

    const filteredInventory = inventory.filter(i =>
        i.vaccine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.lotNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.healthCenter.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const formatDate = (date: Date | string) => {
        return new Date(date).toLocaleDateString('es-MX', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
            {/* Action Buttons & Title */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Resumen de Inventario</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Gestión y control de vacunas disponibles en el estado.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <button className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm" onClick={() => handleExport('excel')}>
                        <span className="material-symbols-outlined text-lg">download</span>
                        Exportar Reporte
                    </button>
                    <Link href="/inventario/transferencia" className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-lg">sync_alt</span>
                        Transferencia
                    </Link>
                    <Link href="/inventario/nuevo" className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-lg">add_circle</span>
                        Nuevo Cargamento
                    </Link>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total de Dosis</p>
                        <h3 className="text-3xl font-black mt-2 text-slate-900 dark:text-white">{loading ? '...' : totalDoses.toLocaleString()}</h3>
                        <p className="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">trending_up</span> Actualizado ahora
                        </p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">vaccines</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Lotes Críticos</p>
                        <h3 className="text-3xl font-black mt-2 text-red-600">{loading ? '...' : criticalLots}</h3>
                        <p className="text-xs text-red-500 font-bold mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">warning</span> {criticalLots > 0 ? 'Atención inmediata' : 'Sin alertas'}
                        </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg dark:bg-red-900/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-600">error</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Próximas a Vencer</p>
                        <h3 className="text-3xl font-black mt-2 text-amber-600">{loading ? '...' : nearExpiry}</h3>
                        <p className="text-xs text-amber-500 font-bold mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">timer</span> {'<'} 90 días
                        </p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg dark:bg-amber-900/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-600">event_busy</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Lotes Totales</p>
                        <h3 className="text-3xl font-black mt-2 text-slate-900 dark:text-white">{loading ? '...' : inventory.length}</h3>
                        <p className="text-xs text-slate-500 font-bold mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">inventory_2</span> Registrados
                        </p>
                    </div>
                    <div className="bg-slate-100 p-3 rounded-lg dark:bg-slate-800 flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">move_to_inbox</span>
                    </div>
                </div>
            </div>

            {/* Main Inventory Table Container */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">Detalle de Existencias por Sede</h3>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                            <input
                                type="text"
                                placeholder="Filtrar lote, vacuna o centro..."
                                className="pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-full sm:w-auto"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-slate-50/80 dark:bg-slate-800/50">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Vacuna</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Centro de Salud / Almacén</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Stock Actual</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Vencimiento</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Estado</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-10 text-center text-slate-500">Cargando inventario...</td>
                                </tr>
                            ) : filteredInventory.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                                                <span className="material-symbols-outlined text-lg">science</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-slate-100">{item.vaccine.name}</p>
                                                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">LOTE: {item.lotNumber}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-slate-900 dark:text-slate-200 font-medium">{item.healthCenter.name}</p>
                                        <p className="text-[11px] text-slate-500">{item.healthCenter.municipality}</p>
                                    </td>
                                    <td className="px-6 py-4 font-black text-slate-900 dark:text-white text-lg">{item.stock.toLocaleString()} <span className="text-xs font-medium text-slate-400 lowercase">dosis</span></td>
                                    <td className="px-6 py-4">
                                        <p className="text-slate-700 dark:text-slate-300 font-bold text-sm">{formatDate(item.expirationDate)}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${item.status === 'EN_STOCK' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50' :
                                            item.status === 'STOCK_BAJO' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800/50' :
                                                'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800/50'
                                            }`}>
                                            {item.status.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-colors p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 opacity-0 group-hover:opacity-100">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {!loading && filteredInventory.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-10 text-center text-slate-500">No se encontraron registros.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
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
