import Link from "next/link";

export default function RecuperacionPage() {
    return (
        <main className="flex-grow flex items-center justify-center p-4 min-h-screen bg-background-light dark:bg-background-dark">
            <div className="w-full max-w-[480px] bg-white dark:bg-slate-900 shadow-xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                {/* Header with Logo */}
                <div className="px-8 pt-10 pb-6 flex flex-col items-center">
                    <div className="mb-8 flex justify-center w-full">
                        <img alt="Logotipo oficial de la Cartilla de Vacunación Digital Morelos (CVD -Morelos)" className="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCearFhMQakWavxAnMp05wmPeqVyPKR2O10w0nFPkLv21ByeW_llWRNDlw2q8HlWgQ9My-mLge87hT3ZiFgC9rMELZpTER_Jn82T2q6LrdoWgYvsuNiXqmToxBmvWvFc3KABg7ycMYPHoUR3biiOU4m7Y-QNVWv6NO6xvBt7o2GvzbgT246p63Rj4j_3sYy-tdjWtVONgeXuPskfFAty5LoJPeUJeBCYqtwo8Q2j2sVgnfA2vZLMtdCP4LbWhZuROlrr2I48xGzR-wh" />
                    </div>
                    <div className="text-center">
                        <h1 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight mb-2">
                            Recuperar Contraseña
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed">
                            Ingresa el correo electrónico registrado del tutor para recibir las instrucciones de recuperación de cuenta.
                        </p>
                    </div>
                </div>

                {/* Form Section */}
                <form className="px-8 pb-10 space-y-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-900 dark:text-slate-200 text-sm font-medium" htmlFor="email">
                            Correo electrónico
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <span className="material-symbols-outlined text-lg">mail</span>
                            </div>
                            <input className="form-input flex w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary h-12 pl-10 pr-4 placeholder:text-slate-400 text-sm outline-none transition-all" id="email" name="email" placeholder="ejemplo@correo.mx" required type="email" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-2">
                        <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-colors shadow-sm" type="submit">
                            <span>Enviar Instrucciones</span>
                        </button>
                        <Link href="/login" className="flex items-center justify-center gap-1 text-primary dark:text-primary/90 text-sm font-medium hover:underline py-2">
                            <span className="material-symbols-outlined text-base">arrow_back</span>
                            Volver al inicio de sesión
                        </Link>
                    </div>
                </form>

                {/* Security Notice */}
                <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">security</span>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                            Este es un portal seguro. Sus datos personales están protegidos de acuerdo con la Ley General de Protección de Datos Personales.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
