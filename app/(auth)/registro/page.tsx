'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { register } from '@/app/actions/auth'

export default function RegisterPage() {
    const [error, setError] = useState('')
    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError('')
        const formData = new FormData(event.currentTarget)

        startTransition(async () => {
            const response = await register(formData)
            if (response.success) {
                router.push('/cartilla')
            } else {
                setError(response.error || 'Error al registrarse')
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
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <img
                        alt="Subtle geographic outline"
                        className="w-full h-full object-cover opacity-5 dark:opacity-10 grayscale"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_laP9bqAofkEA8TY5TYC_lR9LIuFgZ-PT0mhQU6l2aZ24kfwg7t1ZXP0QoQEHI-1tSTLsNKViaJo4ErAWYjfen2i_c9dFVVF43uFX6TNGVg9dsBKuXty20-kT1LpfOSkZJ5FWCIfQzsezZyM-k3NH5gZy6Pfq4suqPtt-plRK7TPO_a6o1ZmoJaQdmbgtusqxGQPA66_hJ3yyEybhQzFJDnybFqRg4Z4g3s4R0UyC4jUnPXK1JFlJrWd3rtCPAOJJroDyxu"
                    />
                </div>

                <div className="relative z-10 w-full max-w-md">
                    <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-xl border border-primary/5 p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">Crear Cuenta</h2>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">Únase a la plataforma digital de salud</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="p-4 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800 font-bold mb-4 text-sm">
                                    {error}
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Nombre Completo</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">person</span>
                                    <input
                                        name="name"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400"
                                        placeholder="Juan Pérez"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Correo Electrónico</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                                    <input
                                        name="email"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400"
                                        placeholder="ejemplo@correo.com"
                                        type="email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Contraseña</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                                    <input
                                        name="password"
                                        required
                                        className="w-full pl-10 pr-12 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400"
                                        placeholder="••••••••"
                                        type="password"
                                    />
                                </div>
                            </div>

                            <button disabled={isPending} className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50" type="submit">
                                <span>{isPending ? 'Registrando...' : 'Registrarse'}</span>
                                <span className="material-symbols-outlined">person_add</span>
                            </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                ¿Ya tiene una cuenta?{" "}
                                <Link href="/login" className="text-primary font-bold hover:underline">Inicie sesión aquí</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="w-full bg-white dark:bg-slate-950 border-t border-primary/10 py-10 px-4 md:px-20 z-10 relative text-center">
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">© 2026 Cartilla de Vacunación Digital Morelos (CVD -Morelos)</p>
            </footer>
        </div>
    )
}
