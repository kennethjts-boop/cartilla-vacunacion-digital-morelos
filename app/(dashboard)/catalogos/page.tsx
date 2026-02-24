import { getMunicipios, getUnidadesSalud } from "@/app/actions/catalogos";
import Link from "next/link";
import SafeMap from "@/app/components/dashboard/SafeMap";

export default async function CatalogoPage({ searchParams }: { searchParams: { municipio?: string, institucion?: string } }) {
    const [munRes, unitRes] = await Promise.all([
        getMunicipios(),
        getUnidadesSalud({ municipio: searchParams.municipio, institucion: searchParams.institucion })
    ]);

    const municipios = munRes.success ? munRes.data || [] : [];
    const unidades = unitRes.success ? unitRes.data || [] : [];

    return (
        <div className="p-8 space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Catálogo de Salud Morelos</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Directorio oficial de unidades médicas SSA, IMSS e ISSSTE por municipio.</p>
                </div>
                <div className="flex gap-4 px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-center px-4">
                        <p className="text-[10px] font-black text-primary/70 uppercase">Municipios</p>
                        <p className="text-xl font-black text-primary">{municipios.length}</p>
                    </div>
                    <div className="w-px h-8 bg-primary/20 self-center"></div>
                    <div className="text-center px-4">
                        <p className="text-[10px] font-black text-primary/70 uppercase">Unidades</p>
                        <p className="text-xl font-black text-primary">{unidades.length}</p>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-wrap gap-4 items-center shadow-sm">
                <form className="flex flex-wrap gap-4 w-full" method="GET">
                    <div className="flex-1 min-w-[250px]">
                        <select
                            name="municipio"
                            defaultValue={searchParams.municipio}
                            className="w-full text-sm border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 focus:ring-primary h-10 px-3"
                        >
                            <option value="">Todos los Municipios</option>
                            {municipios.map(m => (
                                <option key={m.cve_mun} value={m.cve_mun}>{m.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <select
                            name="institucion"
                            defaultValue={searchParams.institucion}
                            className="w-full text-sm border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 focus:ring-primary h-10 px-3"
                        >
                            <option value="">Todas las Instituciones</option>
                            <option value="SSA">SSA (Secretaría de Salud)</option>
                            <option value="IMSS">IMSS</option>
                            <option value="ISSSTE">ISSSTE</option>
                        </select>
                    </div>
                    <button type="submit" className="px-6 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                        Filtrar Catálogo
                    </button>
                    <Link href="/catalogos" className="px-3 h-10 flex items-center text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">filter_alt_off</span>
                    </Link>
                </form>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Units List */}
                <div className="lg:col-span-12">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                <tr>
                                    <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Institución</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Nombre de la Unidad</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Tipo / Nivel</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">CLUES</th>
                                    <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Acción</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {unidades.map((unit: any) => (
                                    <tr key={unit.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-black tracking-widest uppercase ${unit.institucion === 'IMSS' ? 'bg-emerald-100 text-emerald-800' :
                                                    unit.institucion === 'ISSSTE' ? 'bg-blue-100 text-blue-800' :
                                                        'bg-primary/10 text-primary'
                                                }`}>
                                                {unit.institucion}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">{unit.nombre_unidad}</p>
                                            <p className="text-[10px] text-slate-500 font-medium uppercase mt-0.5">{unit.direccion || 'Domicilio Conocido'}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{unit.tipo_unidad}</p>
                                            <p className="text-[10px] text-slate-500">{unit.nivel_atencion || 'Primer Nivel'}</p>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-xs text-slate-400 font-medium">{unit.clues || 'N/A'}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-primary hover:underline text-xs font-bold">Ver Detalles</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {unidades.length === 0 && (
                            <div className="p-12 text-center">
                                <span className="material-symbols-outlined text-4xl text-slate-200 mb-4 scale-150">domain_disabled</span>
                                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">No se encontraron unidades con estos criterios.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
