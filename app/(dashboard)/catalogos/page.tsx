import { getMunicipios, getUnidadesSalud } from "@/app/actions/catalogos";
import Link from "next/link";
import CatalogoTableClient from "@/app/components/dashboard/CatalogoTableClient";

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
                    <CatalogoTableClient unidades={unidades} />
                </div>
            </div>
        </div>
    );
}
