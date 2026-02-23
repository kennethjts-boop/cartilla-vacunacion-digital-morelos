import Link from "next/link";

export default function GuiaUsuarioPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-primary/10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-4">
                            <Link href="/inicio" className="flex items-center gap-4 hover:opacity-90">
                                <img alt="Logotipo Oficial Gobierno de Morelos" className="h-12 w-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white dark:rounded-xl dark:px-2" src="/logos/logo_morelos_oficial.png" />
                                <div className="hidden md:block h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                                <div className="hidden md:flex flex-col">
                                    <span className="text-primary font-bold text-lg leading-tight uppercase tracking-tight">Cartilla Digital</span>
                                    <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-widest">Manual para Personal Médico</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg transition-colors">
                                <span className="material-symbols-outlined text-xl">help</span>
                                Soporte Técnico
                            </button>
                            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-md active:scale-95">
                                <span className="material-symbols-outlined text-xl">print</span>
                                Imprimir Guía
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-72 flex-shrink-0">
                        <nav className="sticky top-28 space-y-1">
                            <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">Contenido del Manual</p>
                            <a className="group flex items-center px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all" href="#introduccion">
                                <span className="material-symbols-outlined mr-3 text-primary group-hover:scale-110 transition-transform">info</span>
                                Introducción
                            </a>
                            <a className="group flex items-center px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-all mt-1" href="#registro">
                                <span className="material-symbols-outlined mr-3 text-slate-400 group-hover:text-primary transition-colors">person_add</span>
                                Registro de Pacientes
                            </a>
                            <a className="group flex items-center px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-all mt-1" href="#aplicacion">
                                <span className="material-symbols-outlined mr-3 text-slate-400 group-hover:text-primary transition-colors">syringe</span>
                                Aplicación de Vacunas
                            </a>
                            <a className="group flex items-center px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-all mt-1" href="#citas">
                                <span className="material-symbols-outlined mr-3 text-slate-400 group-hover:text-primary transition-colors">calendar_month</span>
                                Gestión de Citas
                            </a>
                            <a className="group flex items-center px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-all mt-1" href="#certificados">
                                <span className="material-symbols-outlined mr-3 text-slate-400 group-hover:text-primary transition-colors">verified</span>
                                Generación de Certificados
                            </a>
                            <div className="mt-8 p-5 bg-primary/5 rounded-xl border border-primary/10">
                                <p className="text-xs font-bold text-primary uppercase mb-2">Consejo Profesional</p>
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Asegúrese siempre de verificar la CURP del paciente antes de realizar cualquier registro de dosis.
                                </p>
                            </div>
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 space-y-12 pb-20">
                        {/* Hero Section */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700" id="introduccion">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white leading-tight mb-4 tracking-tight">
                                        Bienvenido al Sistema de la <span className="text-primary">Cartilla Digital</span>
                                    </h1>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                        Esta guía operativa ha sido diseñada para facilitar el trabajo diario del personal de salud en el estado de Morelos. La plataforma permite un seguimiento puntual, seguro y digital del esquema de vacunación de cada ciudadano.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">Versión 2.4.0</span>
                                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold rounded-full uppercase tracking-wider">Actualizado Oct 2026</span>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center p-6 border border-primary/10">
                                    <span className="material-symbols-outlined text-primary text-8xl opacity-80">medical_services</span>
                                </div>
                            </div>
                        </section>

                        {/* Section: Registro de Pacientes */}
                        <section className="scroll-mt-28" id="registro">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined">person_add</span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Registro y Búsqueda de Pacientes</h2>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Para iniciar cualquier proceso, primero debe localizar al paciente en la base de datos estatal.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <span className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">1</span>
                                            <p className="text-sm text-slate-700 dark:text-slate-300"><span className="font-bold">Ingrese la CURP:</span> Es el identificador único. Si no la tiene, puede realizar búsqueda por datos generales.</p>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">2</span>
                                            <p className="text-sm text-slate-700 dark:text-slate-300"><span className="font-bold">Verificar Identidad:</span> Confirme nombre y fecha de nacimiento con el paciente.</p>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">3</span>
                                            <p className="text-sm text-slate-700 dark:text-slate-300"><span className="font-bold">Nuevo Registro:</span> Si el paciente no existe, haga clic en el botón "Nuevo Paciente" y complete los campos obligatorios.</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* Mockup Capture */}
                                <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-inner">
                                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
                                        <div className="bg-slate-50 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
                                            <div className="flex gap-1.5">
                                                <div className="size-2 rounded-full bg-red-400"></div>
                                                <div className="size-2 rounded-full bg-yellow-400"></div>
                                                <div className="size-2 rounded-full bg-green-400"></div>
                                            </div>
                                            <span className="text-[10px] text-slate-400 font-mono">busqueda_pacientes.html</span>
                                        </div>
                                        <div className="p-6">
                                            <div className="w-full h-8 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 mb-4 flex items-center px-3">
                                                <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
                                                <div className="ml-2 w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="w-full h-12 border border-primary/20 bg-primary/5 rounded flex items-center px-3 gap-3">
                                                    <div className="size-6 rounded-full bg-primary/20"></div>
                                                    <div className="flex-1 space-y-1.5">
                                                        <div className="w-2/3 h-2 bg-primary/20 rounded"></div>
                                                        <div className="w-1/3 h-1.5 bg-primary/10 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center text-[10px] text-slate-400 mt-3 italic underline">Interfaz de búsqueda rápida</p>
                                </div>
                            </div>
                        </section>

                        {/* Section: Aplicación de Vacunas */}
                        <section className="scroll-mt-28" id="aplicacion">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined">syringe</span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Aplicación de Vacunas</h2>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm">
                                <div className="p-8">
                                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                                        Una vez seleccionado el paciente, acceda a su expediente para registrar una nueva dosis aplicada.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="relative p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border-t-4 border-primary">
                                            <span className="absolute -top-3 left-6 px-2 bg-primary text-white text-[10px] font-bold rounded">PASO 1</span>
                                            <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Selección</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">Elija el biológico correspondiente del catálogo actualizado por la SSA.</p>
                                        </div>
                                        <div className="relative p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border-t-4 border-primary">
                                            <span className="absolute -top-3 left-6 px-2 bg-primary text-white text-[10px] font-bold rounded">PASO 2</span>
                                            <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Lote y Caducidad</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">Capture el número de lote y verifique que el biológico sea vigente.</p>
                                        </div>
                                        <div className="relative p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border-t-4 border-primary">
                                            <span className="absolute -top-3 left-6 px-2 bg-primary text-white text-[10px] font-bold rounded">PASO 3</span>
                                            <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Confirmación</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">Guarde el registro para que se refleje de inmediato en la cartilla digital.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-700">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-amber-500">warning</span>
                                        <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Recuerde que los registros son auditables y permanentes.</p>
                                    </div>
                                    <button className="text-xs font-bold text-primary hover:underline">Ver tutorial en video</button>
                                </div>
                            </div>
                        </section>

                        {/* Section: Gestión de Citas */}
                        <section className="scroll-mt-28" id="citas">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined">calendar_month</span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Gestión de Citas y Agenda</h2>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                                        <span className="material-symbols-outlined text-primary">event_note</span>
                                        Agenda Diaria
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-700">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">09:00</div>
                                                <span className="text-sm font-medium text-slate-900 dark:text-white">Paciente #4482 (Refuerzo)</span>
                                            </div>
                                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 text-[10px] font-bold rounded">PUNTUAL</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-700">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">10:30</div>
                                                <span className="text-sm font-medium text-slate-900 dark:text-white">Paciente #9210 (Esquema Básico)</span>
                                            </div>
                                            <span className="px-2 py-0.5 bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 text-[10px] font-bold rounded">PENDIENTE</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 space-y-4">
                                    <h3 className="font-bold text-slate-900 dark:text-white">Programación Automática</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        El sistema calcula automáticamente la fecha de la siguiente dosis basándose en los intervalos recomendados por la normativa oficial de salud.
                                    </p>
                                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                                        <p className="text-xs font-semibold text-primary mb-1 italic">Nota del Sistema:</p>
                                        <p className="text-xs text-slate-600 dark:text-slate-400">Si el paciente presenta reacciones adversas, utilice el módulo de reportes ESAVI disponible en el menú lateral.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section: Generación de Certificados */}
                        <section className="scroll-mt-28" id="certificados">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined">verified</span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Generación de Certificados</h2>
                            </div>
                            <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 text-white">
                                {/* Abstract pattern */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-3">Documento Oficial con Validez QR</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                            Al finalizar el esquema o a petición del paciente, podrá emitir el Certificado Digital. Este documento incluye un código QR único para validación institucional inmediata.
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                                <span className="text-xs font-medium">Exportar PDF</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                                <span className="text-xs font-medium">Envío por Email</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                                <span className="text-xs font-medium">Impresión Láser</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-40 h-52 bg-white rounded shadow-2xl flex flex-col p-3 shrink-0 rotate-3">
                                        <div className="h-4 w-2/3 bg-slate-300 rounded mb-2"></div>
                                        <div className="h-2 w-full bg-slate-200 rounded mb-1"></div>
                                        <div className="h-2 w-full bg-slate-200 rounded mb-4"></div>
                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                            <div className="h-10 bg-slate-100 border border-slate-200 rounded"></div>
                                            <div className="h-10 bg-slate-100 border border-slate-200 rounded"></div>
                                        </div>
                                        <div className="mt-auto flex justify-end">
                                            <div className="size-10 bg-slate-800 rounded p-1">
                                                <div className="size-full border border-white/20 opacity-40"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Help/Contact Section */}
                        <section className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center mt-12">
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">¿Necesita asistencia adicional?</h3>
                            <p className="text-slate-500 text-sm mb-6">Nuestro centro de atención para personal de salud está disponible de lunes a viernes de 8:00 AM a 4:00 PM.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/soporte" className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
                                    <span className="material-symbols-outlined text-primary">support_agent</span>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">Centro de Soporte Módulo</span>
                                </Link>
                                <a href="mailto:soporte.salud@morelos.gob.mx" className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
                                    <span className="material-symbols-outlined text-primary">mail</span>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">soporte.salud@morelos.gob.mx</span>
                                </a>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            {/* Institutional Footer */}
            <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-4">
                            <img alt="Escudo del Estado de Morelos" className="h-10 w-auto opacity-70 grayscale hover:grayscale-0 transition-all mix-blend-multiply dark:mix-blend-normal dark:bg-white dark:rounded-md dark:p-1" src="/logos/logo_morelos_oficial.png" />
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Gobierno del Estado de Morelos</span>
                                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Secretaría de Salud Estatal</span>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <div className="text-center md:text-left">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Marco Legal</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/" className="text-xs text-slate-500 hover:text-primary transition-colors">Aviso de Privacidad</Link></li>
                                    <li><Link href="/" className="text-xs text-slate-500 hover:text-primary transition-colors">Normativa Estatal</Link></li>
                                </ul>
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Enlaces Rápidos</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/inicio" className="text-xs text-slate-500 hover:text-primary transition-colors">Menú Principal</Link></li>
                                    <li><Link href="/login" className="text-xs text-slate-500 hover:text-primary transition-colors">Acceso al Sistema</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
                        <p className="text-[10px] text-slate-400">© 2026 Todos los derechos reservados. Servicios de Salud de Morelos. La información contenida es confidencial y para uso exclusivo de personal autorizado.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
