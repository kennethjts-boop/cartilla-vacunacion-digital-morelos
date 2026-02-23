import Link from 'next/link';

// Static params for demo purposes, could be fetched from DB
export function generateStaticParams() {
    return [
        { lote: 'BCG-001' },
        { lote: 'SRP-X1' },
        { lote: 'INF-2022' }
    ];
}

// Simulador temporal de pacientes por lote
const getPacientesMock = () => {
    return [
        { id: 1, nombre: "María Guadalupe Sánchez", curp: "SAGM850512MDFRXXXX", fecha: "2026-02-20", centro: "UMF No. 20 (IMSS)", aplica: "Enf. R. Martínez" },
        { id: 2, nombre: "José Luis Velázquez", curp: "VEJL901123HDFRXXXX", fecha: "2026-02-19", centro: "H.R. Centenario del ISSSTE", aplica: "Enf. T. Gómez" },
        { id: 3, nombre: "Ana Sofía Herrera", curp: "HEAS150830MDFRXXXX", fecha: "2026-02-19", centro: "C.S. Cuernavaca SSM", aplica: "Dr. A. López" },
        { id: 4, nombre: "Carlos Eduardo Ruiz", curp: "RUCE880405HDFRXXXX", fecha: "2026-02-18", centro: "Hospital General G. Parres", aplica: "Enf. M. Domínguez" },
        { id: 5, nombre: "Elena Ramos", curp: "RAEL920110MDFRXXXX", fecha: "2026-02-18", centro: "C.S. Jiutepec Norte", aplica: "Enf. S. Bautista" },
        { id: 6, nombre: "Roberto Gómez Bolaños", curp: "GOBR290221HDFRXXXX", fecha: "2026-02-17", centro: "UMF No. 24 (IMSS)", aplica: "Enf. P. Fuentes" },
        { id: 7, nombre: "Lucía Méndez", curp: "MELU750315MDFRXXXX", fecha: "2026-02-17", centro: "Hospital del Niño Morelense", aplica: "Dr. L. Castañeda" },
        { id: 8, nombre: "Javier Hernández", curp: "HEJA880601HDFRXXXX", fecha: "2026-02-16", centro: "C.S. Tepoztlán Rural", aplica: "Enf. J. Silva" },
    ];
};

export default function PadronLotePage({ params }: { params: { lote: string } }) {
    const loteDecoded = decodeURIComponent(params.lote);
    const pacientes = getPacientesMock();

    return (
        <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
            {/* Header / Breadcrumbs */}
            <div className="flex flex-col gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                <Link href="/rastreo" className="text-sm font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-1 w-fit">
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    Regresar a Trazabilidad
                </Link>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary p-2.5 rounded-lg flex items-center justify-center border border-primary/20">
                            <span className="material-symbols-outlined block text-[24px]">group</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                                Padrón de Pacientes
                                <span className="text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase tracking-widest px-2.5 py-1 rounded-md align-middle">{loteDecoded}</span>
                            </h2>
                            <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm">Registro detallado de ciudadanos que han sido inmunizados con este lote.</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-lg">description</span>
                            Descargar CSV
                        </button>
                        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                            <span className="material-symbols-outlined text-lg">print</span>
                            Acta (PDF)
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Demographics Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Vacunados</p>
                    <div className="flex items-end gap-2">
                        <span className="text-3xl font-black text-slate-900 dark:text-white">42,150</span>
                        <span className="text-sm font-bold text-emerald-600 mb-1">84% del Lote</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Cobertura Demográfica</p>
                    <span className="text-2xl font-black text-slate-700 dark:text-slate-200 block truncate">12 - 59 Años</span>
                    <span className="text-xs font-medium text-slate-500">Población objetivo primaria</span>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Distribución Salud</p>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mt-4 flex overflow-hidden">
                        <div className="bg-pink-500 h-full" style={{ width: '60%' }}></div> {/* SSM */}
                        <div className="bg-emerald-500 h-full" style={{ width: '30%' }}></div> {/* IMSS */}
                        <div className="bg-blue-500 h-full" style={{ width: '10%' }}></div> {/* ISSSTE */}
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-slate-500 mt-2 uppercase">
                        <span className="text-pink-600">SSM 60%</span>
                        <span className="text-emerald-600">IMSS 30%</span>
                        <span className="text-blue-600">ISSSTE 10%</span>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-slate-900 rounded-xl border border-primary/20 p-5 shadow-sm flex flex-col justify-center">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Última Aplicación</p>
                    <span className="text-lg font-black text-primary">Hace 15 min</span>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400 mt-0.5">Centro de Salud Temixco</span>
                </div>
            </div>

            {/* Padrón Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
                {/* Tools Bar */}
                <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-wrap gap-4 justify-between items-center">
                    <div className="relative w-full sm:w-auto min-w-[300px]">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                        <input
                            type="text"
                            placeholder="Buscar por CURP o Nombre Paciente..."
                            className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                        />
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <select className="text-sm bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 w-full sm:w-auto focus:ring-primary">
                            <option>Todas las Instituciones</option>
                            <option>SSM Morelos</option>
                            <option>IMSS</option>
                            <option>ISSSTE</option>
                        </select>
                    </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap min-w-[800px]">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                            <tr>
                                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Paciente Registrado</th>
                                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">CURP</th>
                                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Fecha y Hora</th>
                                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Punto de Aplicación</th>
                                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Aplicador</th>
                                <th className="px-6 py-4 w-10"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {pacientes.map((p, i) => (
                                <tr key={p.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">{p.nombre.charAt(0)}</div>
                                            <span className="font-bold text-slate-900 dark:text-white text-sm">{p.nombre}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                                        {p.curp}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                                        {p.fecha} <span className="text-slate-400 text-xs ml-1">10:{15 + i} AM</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                                        {p.centro}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded text-xs text-slate-600 dark:text-slate-400 font-medium">
                                            <span className="material-symbols-outlined text-[14px]">badge</span>
                                            {p.aplica}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded opacity-0 group-hover:opacity-100">
                                            <span className="material-symbols-outlined text-xl">open_in_new</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Mostrando 8 de 42,150 vacunados</p>
                    <div className="flex items-center gap-1">
                        <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-bold text-slate-500 cursor-not-allowed opacity-50">Ant</button>
                        <button className="px-3 py-1.5 bg-primary text-white rounded-md text-sm font-bold shadow-sm">1</button>
                        <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">2</button>
                        <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">3</button>
                        <span className="text-slate-400 px-1 text-sm font-bold">...</span>
                        <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">4520</button>
                        <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Sig</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
