import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
            {/* Institutional Header */}
            <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-primary/10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-4">
                            <img alt="Morelos Salud Logo" className="h-12 w-auto object-contain" src="/logos/logo_morelos_oficial.png" />
                            <div className="hidden md:block h-8 w-px bg-slate-200 mx-2"></div>
                            <h1 className="hidden lg:block text-primary font-bold text-lg leading-tight">
                                Cartilla Digital <br /><span className="text-xs font-medium uppercase tracking-wider text-slate-500">Estado de Morelos</span>
                            </h1>
                        </div>
                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-semibold hover:text-primary transition-colors cursor-pointer" href="#beneficios">Beneficios</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors cursor-pointer" href="#padres">Ciudadanos</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors cursor-pointer" href="#personal">Personal Salud</a>
                            <a className="text-sm font-semibold hover:text-primary transition-colors cursor-pointer" href="#estadisticas">Estadísticas</a>
                        </nav>
                        <div className="flex items-center gap-3">
                            <Link href="/login" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">login</span>
                                Iniciar Sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative bg-white dark:bg-slate-900 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-32 lg:pb-40">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="z-10 text-left">
                                <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-emerald-400 text-xs font-black uppercase tracking-widest mb-6 border border-primary/20">Oficial • Seguro • Gratuito</span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
                                    Tu salud y la de tu familia, <span className="text-primary dark:text-emerald-400">siempre a la mano.</span>
                                </h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl font-medium leading-relaxed">
                                    Consulta, descarga y gestiona la Cartilla de Vacunación Digital Morelos (CVD -Morelos) oficial. Un documento con validez nacional para el bienestar de todos.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/login" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgb(6,96,70,0.3)] hover:-translate-y-1 transition-all text-center">
                                        Consultar mi Cartilla
                                    </Link>
                                    <Link href="/guia" className="border-2 border-primary/20 dark:border-slate-700 text-primary dark:text-slate-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 dark:hover:bg-slate-800 transition-colors text-center inline-block">
                                        Guía de Usuario
                                    </Link>
                                </div>
                                <div className="mt-8 flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">
                                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-[20px]">verified_user</span> Datos Protegidos</span>
                                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-[20px]">qr_code_2</span> Código Único</span>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center">
                                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-150 -z-10"></div>
                                <div className="relative w-full max-w-lg bg-white dark:bg-slate-800 p-3 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-2xl z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img alt="Familias de Morelos Vacunándose" className="rounded-2xl w-full h-auto object-cover aspect-square sm:aspect-[4/3] shadow-inner" src="/hero/img_familia.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Quick Dashboard */}
                <section className="bg-primary py-12" id="estadisticas">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div className="flex flex-col gap-1">
                                <span className="text-white/70 text-sm font-medium">Niños Protegidos</span>
                                <span className="text-white text-3xl font-black tracking-tight">+500,000</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white/70 text-sm font-medium">Vacunas Aplicadas</span>
                                <span className="text-white text-3xl font-black tracking-tight">1.2M+</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white/70 text-sm font-medium">Municipios Cubiertos</span>
                                <span className="text-white text-3xl font-black tracking-tight">36</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-white/70 text-sm font-medium">Cobertura Estatal</span>
                                <span className="text-white text-3xl font-black tracking-tight">95%</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800" id="beneficios">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">¿Por qué usar la Cartilla Digital?</h3>
                            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">La evolución del sistema de salud para brindar mayor seguridad y comodidad a las familias morelenses.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className="size-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-primary dark:text-emerald-400 mb-6 border border-primary/10">
                                    <span className="material-symbols-outlined text-3xl">shield</span>
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Máxima Seguridad</h4>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Resguardo de datos personales bajo los más altos estándares internacionales de ciberseguridad gubernamental.</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className="size-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-primary dark:text-emerald-400 mb-6 border border-primary/10">
                                    <span className="material-symbols-outlined text-3xl">devices_fold</span>
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">100% Digital</h4>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Acceso inmediato desde cualquier smartphone o computadora. Olvida el papel y lleva tu historial en el bolsillo.</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                                <div className="size-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-primary dark:text-emerald-400 mb-6 border border-primary/10">
                                    <span className="material-symbols-outlined text-3xl">verified</span>
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Validez Oficial</h4>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Documento reconocido por la Secretaría de Salud federal y estatal para trámites escolares y médicos nacionales.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Parent/Citizens Path */}
                <section className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800" id="padres">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h3 className="text-3xl font-black mb-6 text-slate-900 dark:text-white flex items-center gap-3 tracking-tight">
                                    <span className="material-symbols-outlined text-primary text-3xl">family_restroom</span>
                                    Guía para Padres y Tutores
                                </h3>
                                <div className="space-y-8 mt-10">
                                    <div className="flex gap-6">
                                        <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                                        <div>
                                            <h5 className="text-lg font-bold mb-1">Ingresa tu CURP</h5>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium">Utiliza la Clave Única de Registro de Población del menor o la propia para acceder.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                                        <div>
                                            <h5 className="text-lg font-bold mb-1">Verifica tu Historial</h5>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium">Revisa que todas las dosis aplicadas aparezcan correctamente en el sistema digital.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                                        <div>
                                            <h5 className="text-lg font-bold mb-1">Descarga el Comprobante</h5>
                                            <p className="text-slate-600 dark:text-slate-400 font-medium">Genera tu archivo PDF con código QR para cualquier trámite o consulta médica.</p>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/login" className="mt-12 bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-primary/90 transition-all inline-block">
                                    Iniciar consulta ahora
                                </Link>
                            </div>
                            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="h-64 rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700">
                                        <img alt="Consulta móvil" className="w-full h-full object-cover" src="/hero/img_familia.png" />
                                    </div>
                                    <div className="h-40 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center p-6 text-center italic text-primary font-bold">
                                        "Es mucho más fácil no tener que cargar con la cartilla física a todos lados."
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="h-40 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                                        <img alt="Atención Médica" className="w-full h-full object-cover" src="/hero/img_ninos.png" />
                                    </div>
                                    <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                                        <img alt="Escaneo QR" className="w-full h-full object-cover" src="/hero/img_familia.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Health Personnel Path */}
                <section className="py-24 bg-primary text-white relative overflow-hidden" id="personal">
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="bg-white/10 backdrop-blur-md p-8 md:p-16 rounded-[2rem] border border-white/20 shadow-2xl">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <span className="bg-black/20 text-white font-black uppercase tracking-widest text-xs mb-6 inline-block px-3 py-1.5 rounded-lg border border-white/10">
                                        Exclusivo Sector Salud
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">Portal para Personal Médico</h3>
                                    <p className="text-white/80 text-lg mb-10 font-medium leading-relaxed">
                                        Herramienta unificada para el registro de dosis, gestión de lotes y seguimiento de esquemas estatales. Optimiza tu labor diaria con datos en tiempo real.
                                    </p>
                                    <ul className="space-y-4 mb-10 font-bold">
                                        <li className="flex items-center gap-3"><span className="material-symbols-outlined text-emerald-300">check_circle</span> Registro masivo de biológicos</li>
                                        <li className="flex items-center gap-3"><span className="material-symbols-outlined text-emerald-300">check_circle</span> Consulta de historial por CURP</li>
                                        <li className="flex items-center gap-3"><span className="material-symbols-outlined text-emerald-300">check_circle</span> Reportes epidemiológicos automáticos</li>
                                    </ul>
                                    <Link href="/login" className="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2 w-fit">
                                        <span className="material-symbols-outlined font-bold">medical_services</span>
                                        Acceso Institucional (SIISA)
                                    </Link>
                                </div>
                                <div className="hidden lg:flex items-center justify-center relative w-full h-full min-h-[400px]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-[2.5rem] z-10 pointer-events-none"></div>
                                    <img alt="Campaña de Vacunación Infantil" className="absolute inset-0 w-full h-full rounded-[2.5rem] shadow-2xl border-4 border-white/20 z-0 object-cover object-center" src="/hero/img_ninos.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Institutional Footer */}
            <footer className="bg-white dark:bg-slate-950 pt-16 pb-10 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-2">
                            <img alt="Secretaría de Salud de Morelos" src="/logos/logo_morelos_oficial.png" className="h-16 mb-6 opacity-80" />
                            <p className="text-slate-500 max-w-sm text-xs font-medium leading-relaxed">
                                Plataforma oficial del Gobierno del Estado de Morelos. La información contenida es de carácter confidencial y para uso exclusivo del seguimiento de salud pública estatal.
                            </p>
                        </div>
                        <div>
                            <h6 className="font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Enlaces Rápidos</h6>
                            <ul className="space-y-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                <li><a className="hover:text-primary transition-colors cursor-pointer">Aviso de Privacidad</a></li>
                                <li><a className="hover:text-primary transition-colors cursor-pointer">Términos Legales</a></li>
                                <li><a className="hover:text-primary transition-colors cursor-pointer">Centros de Salud</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Contacto</h6>
                            <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                                    <span>Av. Morelos No. 123, Cuernavaca, Morelos. CP 62000</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">call</span>
                                    <span>800 123 4567</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                            © 2026 Gobierno del Estado de Morelos • Secretaría de Salud
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
