'use client'

import { useState, useTransition, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { login } from '@/app/actions/auth'

function LoginForm() {
    const [error, setError] = useState('')
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const searchParams = useSearchParams()
    const defaultRole = searchParams.get('role') || 'Administrador'

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError('')
        const formData = new FormData(event.currentTarget)

        startTransition(async () => {
            const response = await login(formData)
            if (response.success) {
                router.push('/')
            } else {
                setError(response.error || 'Error al iniciar sesión')
            }
        })
    }
    return (
        <div className="bg-[#f5f8f7] dark:bg-slate-900 font-display min-h-screen flex flex-col relative"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDn98wgRWbcRb7uZq3YcPELrB4VeZqkPBEW7Xv9RAD6YXZXebwMIIxTYqheykXgGSLsdBMicRuzyfgOZ2y7ZK-orYcThqrktEWWk1mDCx3lO3TaHeuEo7XVq4C3l160wiKVK4jrR3OePn0UC-MO5ZeRdJNe1ElQt25mtB8hpp3qdNus_m2HxaiMAN74sYJtiq_LKA2h-epW0kxfRSZhaAWSXyR_-DZzhxyR0GSdcwFH24U5qGZfQsSiqpa3l2IWQMcMuJnQz0esjQri')" }}>

            {/* Top Navigation / Header */}
            <header className="w-full bg-white dark:bg-slate-950 border-b border-primary/10 px-4 md:px-10 py-4 flex items-center justify-between z-10 relative">
                <div className="flex items-center gap-3">
                    <div className="bg-primary p-2 rounded-lg text-white">
                        <span className="material-symbols-outlined text-2xl">shield</span>
                    </div>
                    <div>
                        <h1 className="text-primary font-extrabold text-lg leading-none tracking-tight">Cartilla Digital</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-widest">Vacunación México</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                    <span className="text-sm font-semibold">Portal Institucional Seguro</span>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
                {/* Subtle Map/Iconography Background Element */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        alt="Subtle geographic outline of Morelos Mexico area"
                        className="w-full h-full object-cover opacity-5 dark:opacity-10 grayscale"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_laP9bqAofkEA8TY5TYC_lR9LIuFgZ-PT0mhQU6l2aZ24kfwg7t1ZXP0QoQEHI-1tSTLsNKViaJo4ErAWYjfen2i_c9dFVVF43uFX6TNGVg9dsBKuXty20-kT1LpfOSkZJ5FWCIfQzsezZyM-k3NH5gZy6Pfq4suqPtt-plRK7TPO_a6o1ZmoJaQdmbgtusqxGQPA66_hJ3yyEybhQzFJDnybFqRg4Z4g3s4R0UyC4jUnPXK1JFlJrWd3rtCPAOJJroDyxu"
                    />
                </div>

                <div className="relative z-10 w-full max-w-md">
                    {/* Auth Card */}
                    <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-xl border border-primary/5 p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">Bienvenido</h2>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">Ingrese sus credenciales para acceder</p>
                        </div>

                        {/* Role Selector */}
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-3">Tipo de Usuario</label>
                            <div className="flex h-12 w-full items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-800 p-1 border border-primary/10">
                                <label className="flex cursor-pointer h-full grow items-center justify-center rounded-md px-2 transition-all has-[:checked]:bg-primary has-[:checked]:text-white text-slate-500 dark:text-slate-400 text-sm font-bold">
                                    <span className="truncate">Administrador</span>
                                    <input className="sr-only" name="role" type="radio" value="Administrador" defaultChecked={defaultRole === 'Administrador'} />
                                </label>
                                <label className="flex cursor-pointer h-full grow items-center justify-center rounded-md px-2 transition-all has-[:checked]:bg-primary has-[:checked]:text-white text-slate-500 dark:text-slate-400 text-sm font-bold">
                                    <span className="truncate">Médico</span>
                                    <input className="sr-only" name="role" type="radio" value="Médico" defaultChecked={defaultRole === 'Medico' || defaultRole === 'Médico'} />
                                </label>
                                <label className="flex cursor-pointer h-full grow items-center justify-center rounded-md px-2 transition-all has-[:checked]:bg-primary has-[:checked]:text-white text-slate-500 dark:text-slate-400 text-sm font-bold">
                                    <span className="truncate">Tutor</span>
                                    <input className="sr-only" name="role" type="radio" value="Tutor" defaultChecked={defaultRole === 'Tutor'} />
                                </label>
                            </div>
                        </div>

                        {/* Form Section */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="p-4 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800 font-bold mb-4 text-sm">
                                    {error}
                                </div>
                            )}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Correo Electrónico</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                                    <input
                                        name="email"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400"
                                        placeholder="ejemplo@salud.gob.mx"
                                        type="email"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200">Contraseña</label>
                                    <Link href="/recuperacion" className="text-xs font-bold text-primary hover:underline">¿Olvidó su contraseña?</Link>
                                </div>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                                    <input
                                        name="password"
                                        required
                                        className="w-full pl-10 pr-12 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400"
                                        placeholder="••••••••"
                                        type="password"
                                    />
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" type="button">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pb-2">
                                <div className="flex items-center gap-2">
                                    <input className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary accent-primary" id="remember" type="checkbox" />
                                    <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="remember">Mantener sesión iniciada</label>
                                </div>
                            </div>

                            <button disabled={isPending} className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50" type="submit">
                                <span>{isPending ? 'Iniciando...' : 'Iniciar Sesión'}</span>
                                <span className="material-symbols-outlined">login</span>
                            </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                ¿Es tutor y no tiene cuenta?{" "}
                                <a href="/registro" className="text-primary font-bold hover:underline cursor-pointer">Regístrese aquí ahora</a>
                            </p>
                        </div>
                    </div>

                    {/* Security Badge */}
                    <div className="mt-6 flex justify-center items-center gap-2 text-slate-400 dark:text-slate-500">
                        <span className="material-symbols-outlined text-sm">lock</span>
                        <span className="text-xs font-medium uppercase tracking-tighter">Conexión cifrada de punto a punto (SSL)</span>
                    </div>
                </div>
            </main>

            {/* Institutional Footer */}
            <footer className="w-full bg-white dark:bg-slate-950 border-t border-primary/10 py-10 px-4 md:px-20 z-10 relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-8 grayscale opacity-70">
                        <div className="flex flex-col items-center">
                            <span className="material-symbols-outlined text-3xl">account_balance</span>
                            <span className="text-[10px] font-bold uppercase mt-1">Gobierno de México</span>
                        </div>
                        <div className="h-10 w-px bg-slate-300 dark:bg-slate-700"></div>
                        <div className="flex flex-col items-center">
                            <span className="material-symbols-outlined text-3xl">medical_services</span>
                            <span className="text-[10px] font-bold uppercase mt-1">Secretaría de Salud</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
                        <a className="hover:text-primary transition-colors" href="/">Aviso de Privacidad</a>
                        <a className="hover:text-primary transition-colors" href="/">Términos y Condiciones</a>
                        <a className="hover:text-primary transition-colors" href="/">Contacto</a>
                        <a className="hover:text-primary transition-colors" href="/">Accesibilidad</a>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">© 2026 Cartilla de Vacunación Digital Morelos (CVD -Morelos)</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Soporte Técnico: 800-SALUD-MX</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#f5f8f7] dark:bg-slate-900 grid place-items-center"><div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div></div>}>
            <LoginForm />
        </Suspense>
    )
}
