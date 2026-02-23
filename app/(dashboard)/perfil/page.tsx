import { getSession } from "@/lib/auth"

export default async function PerfilPage() {
    const session = await getSession()
    const userRole = (session?.role as string) || "ADMIN_ESTATAL"
    const userName = (session?.name as string) || "Administrador del Sistema"
    const userEmail = (session?.email as string) || "admin@salud.morelos.gob.mx"

    return (
        <div className="p-4 md:p-8 space-y-8 max-w-5xl mx-auto w-full">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Configuración del Perfil</h1>
                <p className="text-slate-500 mt-1 italic">Gestione su identidad profesional y preferencias de seguridad.</p>
            </div>

            {/* Profile Overview Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden mb-8">
                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="relative group">
                        <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-slate-50 dark:border-slate-800 shadow-md">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt="Avatar" className="h-full w-full object-cover grayscale" data-alt="Portrait of a professional healthcare administrator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSnPO11CFfiAazqCpCnEhctyQyRw0vzfTH5XJ5a3dfJJt8qoko4he6gWh0N4jZxzjd7J0__XJMOWYwb7gryRZCEhIIJJvmckw6o-mD5gBhCib-4xmB4cxrFkYoVDOiY-YhLFpkDQ25RZEGiO9Pco8ZASbc0w6xdi5VZ31c9HCSGbEL9ignBlsLWnODdaFo3fE7w48cDx7JlxkWolwK3LfZvzSkV-HKkcDT7UK8x0NDs5mv3nEUVylHuVlwTO8zVUZO3_doyr0MiIZY" />
                        </div>
                        <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm">photo_camera</span>
                        </button>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{userName}</h2>
                        <p className="text-slate-500 font-medium capitalize">{userRole.replace('_', ' ').toLowerCase()} | Secretaría de Salud</p>
                        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider border border-primary/20">Personal Activo</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-200">Credenciales Verificadas</span>
                        </div>
                    </div>

                    <div>
                        <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm">
                            Subir Nueva Foto
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personal Information */}
                <section className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-2 mb-6 text-primary">
                            <span className="material-symbols-outlined">person</span>
                            <h3 className="font-bold text-lg uppercase tracking-tight">Información Personal</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Nombre Completo</label>
                                <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-slate-900 dark:text-white" type="text" defaultValue={userName} />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Correo Electrónico</label>
                                <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-slate-900 dark:text-white" type="email" defaultValue={userEmail} disabled />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Teléfono de Contacto</label>
                                <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-slate-900 dark:text-white" type="tel" defaultValue="+52 (777) 123-4567" />
                            </div>
                        </div>
                    </div>

                    {/* Professional Details */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-2 mb-6 text-primary">
                            <span className="material-symbols-outlined">badge</span>
                            <h3 className="font-bold text-lg uppercase tracking-tight">Detalles Profesionales</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Cédula Profesional</label>
                                <p className="text-lg font-mono font-bold text-slate-700 dark:text-slate-300">MX-88942-ADM</p>
                                <p className="text-[10px] text-primary/70 mt-1 italic font-medium">Campo no editable. Contacte administración para cambios.</p>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Rol Institucional</label>
                                <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-slate-900 dark:text-white" defaultValue={userRole}>
                                    <option value="ADMIN_ESTATAL">Administrador Estatal</option>
                                    <option value="MEDICO">Director Médico</option>
                                    <option value="MÉDICO">Médico Especialista</option>
                                    <option value="TUTOR">Tutor / Paciente</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Jurisdicción Asignada</label>
                                <input className="w-full rounded-lg border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-500 cursor-not-allowed" disabled type="text" value="Estatal - Todas las Jurisdicciones" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Account Security */}
                <section className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-2 mb-6 text-primary">
                            <span className="material-symbols-outlined">security</span>
                            <h3 className="font-bold text-lg uppercase tracking-tight">Seguridad de la Cuenta</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-slate-100">Contraseña</p>
                                        <p className="text-xs text-slate-500">Último cambio hace 45 días</p>
                                    </div>
                                    <button className="text-primary hover:underline text-sm font-bold">Cambiar</button>
                                </div>
                                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg flex items-center justify-between border border-dashed border-slate-300 dark:border-slate-700">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded">
                                            <span className="material-symbols-outlined">verified_user</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Autenticación de 2 Factores</p>
                                            <p className="text-xs text-slate-500">Estado: <span className="text-green-600 font-bold uppercase">Activo</span></p>
                                        </div>
                                    </div>
                                    <div className="relative inline-flex items-center cursor-pointer">
                                        <div className="w-11 h-6 bg-primary rounded-full peer"></div>
                                        <div className="absolute left-[26px] top-[2px] bg-white border-gray-300 border rounded-full h-5 w-5 transition-all"></div>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-slate-100 dark:border-slate-800" />
                            <div>
                                <p className="font-bold text-slate-900 dark:text-slate-100 mb-2">Dispositivos Conectados</p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="material-symbols-outlined text-slate-400">desktop_windows</span>
                                        <div className="flex-1">
                                            <p className="font-medium text-slate-900 dark:text-slate-200">Windows 11 • Cuernavaca</p>
                                            <p className="text-xs text-slate-500">Chrome Browser • Sesión actual</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="material-symbols-outlined text-slate-400">smartphone</span>
                                        <div className="flex-1">
                                            <p className="font-medium text-slate-900 dark:text-slate-200">iPhone 14 • Jiutepec</p>
                                            <p className="text-xs text-slate-500">hace 2 horas</p>
                                        </div>
                                        <button className="text-xs text-red-500 hover:underline">Revocar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Login Activity History */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined">history</span>
                                <h3 className="font-bold text-lg uppercase tracking-tight">Actividad Reciente</h3>
                            </div>
                            <button className="text-xs font-bold text-slate-400 uppercase hover:text-primary transition-colors">Ver Todo</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-1 bg-primary/20 rounded-full"></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Inicio de Sesión Exitoso</p>
                                    <p className="text-[10px] text-slate-500">Hoy a las 08:42 AM • IP: 189.168.1.45</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Contraseña Actualizada</p>
                                    <p className="text-[10px] text-slate-500">15 de Junio, 2026 • Solicitud Automática</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Action Footer */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-end gap-4 py-6 border-t border-slate-200 dark:border-slate-800">
                <button className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Descartar Cambios
                </button>
                <button className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">save</span>
                    Guardar Configuración
                </button>
            </div>

            {/* Data Protection Notice */}
            <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800/30 rounded-lg flex gap-4 border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-primary">info</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                    Esta información forma parte del Registro Nacional de Personal de Salud. Al guardar cambios, usted afirma que todos los datos proporcionados son precisos y veraces. La modificación no autorizada de roles institucionales puede resultar en sanciones administrativas.
                </p>
            </div>
        </div>
    );
}
