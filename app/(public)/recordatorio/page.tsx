import Link from 'next/link';

export default function RecordatorioEmail() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen">
            <div className="flex flex-col items-center justify-start min-h-screen py-8 px-4 sm:px-6">

                {/* Demo Navigation Helper (Not part of actual email) */}
                <div className="w-full max-w-[640px] mb-4 flex justify-between items-center bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 p-3 rounded-lg border border-blue-200 dark:border-blue-800/50 text-sm font-medium">
                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">info</span> Vista previa de plantilla de correo electrónico</span>
                    <Link href="/inicio" className="text-blue-600 dark:text-blue-400 hover:underline">Volver al Inicio</Link>
                </div>

                {/* Email Client Wrapper Simulation */}
                <div className="w-full max-w-[640px] bg-white dark:bg-slate-900 shadow-xl rounded-xl overflow-hidden border border-primary/10">

                    <div className="bg-white border-b border-slate-100 p-6 flex items-center justify-center">
                        <div className="w-full max-w-[500px]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-full h-auto object-contain" alt="Logotipo Institucional Morelos" src="/logo_morelos_oficial.png" />
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="p-8">
                        {/* Greeting */}
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Recordatorio de Vacunación</h1>
                            <p className="text-lg text-slate-700 dark:text-slate-300">Estimado(a) Padre/Tutor de <span className="font-semibold">Juan Pérez</span>,</p>
                        </div>

                        {/* Primary Message Card */}
                        <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-primary">event_upcoming</span>
                                <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                                    Le informamos que la próxima vacuna para su hijo(a) está programada para el próximo <span className="font-bold text-primary">15 de Octubre de 2026</span>. Mantener el esquema al día es vital para su salud.
                                </p>
                            </div>
                        </div>

                        {/* Vaccination Details Table */}
                        <div className="overflow-hidden border border-slate-200 dark:border-slate-700 rounded-lg mb-8">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">Vacuna</th>
                                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">Dosis</th>
                                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">Fecha Sugerida</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-4 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-900 dark:text-white">SRP - Triple Viral</span>
                                                <span className="text-xs text-slate-500">Sarampión, Rubéola y Parotiditis</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">Primera Dosis</td>
                                        <td className="px-4 py-4 text-sm font-medium text-primary">15/10/2026</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="bg-slate-50 dark:bg-slate-800/80 p-4 border-t border-slate-200 dark:border-slate-700">
                                <div className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-slate-400 text-sm mt-0.5">location_on</span>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold">Centro de Salud Asignado</p>
                                        <p className="text-sm text-slate-700 dark:text-slate-300">Centro de Salud Cuernavaca (Centro)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="flex flex-col items-center gap-4">
                            <Link href="/cartilla" className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg w-full sm:w-auto">
                                <span className="material-symbols-outlined mr-2">qr_code_2</span>
                                Ver Cartilla Digital
                            </Link>
                            <p className="text-xs text-slate-400 text-center italic">
                                Presente este código o su cartilla física al llegar al centro de salud.
                            </p>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <footer className="bg-slate-50 dark:bg-slate-800/40 p-8 border-t border-slate-200 dark:border-slate-700 text-center sm:text-left">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-3">Información Institucional</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-2">
                                    Secretaría de Salud del Estado de Morelos<br />
                                    Av. Morelos No. 100, Col. Centro<br />
                                    Cuernavaca, Morelos. C.P. 62000
                                </p>
                                <Link href="/" className="text-xs text-primary font-semibold hover:underline">Aviso de Privacidad</Link>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-3">Emergencias de Salud</h4>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-red-600 text-sm">emergency_home</span>
                                        <span className="text-sm font-bold">911 (Emergencias)</span>
                                    </div>
                                    <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-primary text-sm">call</span>
                                        <span className="text-sm font-bold">800 0044 800</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex gap-4 justify-center">
                                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path></svg>
                                </a>
                                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                    <span className="sr-only">X</span>
                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                                </a>
                            </div>
                            <p className="text-[10px] text-slate-400 uppercase tracking-tighter text-center">
                                © 2026 Gobierno del Estado de Morelos - Todos los derechos reservados
                            </p>
                        </div>
                    </footer>
                </div>

                {/* Utility Links */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-slate-400">
                        ¿Recibiste este correo por error? <Link href="#" className="underline hover:text-primary">Darse de baja</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
