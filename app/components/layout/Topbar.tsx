interface TopbarProps {
    user?: {
        name: string;
        role: string;
        email: string;
    };
}

import Link from 'next/link';

export default function Topbar({ user }: TopbarProps) {
    return (
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10 transition-colors">
            <div className="flex items-center gap-4">
                {/* Escudo y Logos Institucionales */}
                <div className="hidden md:flex items-center h-10 mix-blend-multiply dark:mix-blend-normal dark:bg-white/90 dark:p-1 dark:rounded-md transition-all">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/logos/logo_morelos_oficial.png"
                        alt="Secretaría de Salud - Gobierno del Estado de Morelos"
                        className="h-full w-auto object-contain"
                    />
                </div>
                <div className="hidden md:block h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

                <div className="relative w-64 lg:w-80">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                    <input
                        className="w-full pl-10 pr-4 py-1.5 text-sm bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-1 focus:ring-primary"
                        placeholder="Buscar paciente o centro..."
                        type="text"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                </button>
                <Link href="/perfil" className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                    <span className="material-symbols-outlined">settings</span>
                </Link>
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
                <Link href="/perfil" className="flex items-center gap-3 pl-2 group">
                    {user && user.role !== 'PADRE' && (
                        <div className="text-right hidden sm:block">
                            <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{user.name || 'Usuario'}</p>
                            <p className="text-[10px] text-primary font-semibold">
                                {user.role === 'ADMIN_ESTATAL' ? 'Administrador Estatal' : 'Personal Médico'}
                            </p>
                        </div>
                    )}
                    {user && user.role === 'PADRE' && (
                        <div className="text-right hidden sm:block">
                            <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{user.name || 'Tutor'}</p>
                            <p className="text-[10px] text-primary font-semibold">Ciudadano</p>
                        </div>
                    )}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        alt="User portrait"
                        className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 dark:border-slate-700 group-hover:ring-2 group-hover:ring-primary/50 transition-all cursor-pointer"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIex59eLZhn8AwkyaNAmgqmvU2CW9UlVgrqrk4KUhbFLhN8PoqbqZwZfHxBF_i4Z3vCzvN4tjjJKoOUXNYiIxdAW0viKLO_GCJQHNqVV8oWL5If49zwD38u68ikUm-hQK6qLiYm9wuEjEngEZeXI3V0Rn1qsmpxyvz85h-NCZglo9wW40UHP6ho0wMXV0vYnnVIf5L4yRzz_BW0fWTT2ZSmfnB65guJC2Tw3qO1mwYKQNdUXGYD4si_43pxJZTMEdf_NRnzDm_xkMp"
                    />
                </Link>
            </div>
        </header>
    );
}
