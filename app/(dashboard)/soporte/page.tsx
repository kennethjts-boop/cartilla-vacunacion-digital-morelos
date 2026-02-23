import Link from 'next/link';

export default function SoportePage() {
    return (
        <div className="flex-1 w-full flex flex-col h-full items-center justify-center p-4">
            <div className="w-full max-w-[500px] flex flex-col drop-shadow-xl h-[90%] max-h-[700px]">
                {/* Chat Header */}
                <div className="bg-primary p-4 rounded-t-xl flex items-center justify-between border-b border-primary/20 shadow-sm relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="size-11 rounded-full bg-white flex items-center justify-center text-primary overflow-hidden border-2 border-white/20 shadow-sm">
                                <img alt="Asistente Virtual Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOC8HnYj4kD2O5R-dGenwgyhMcTD-1maySmcBJ6JxpqnteLByf64W00AVns2TsoTd2P3_bNv5RJVK9ky5zhxR8Lj_kslNMPO25XuouCWUeYxFwwsELXs8YiT5gpR_EhHOV3LfQL-1qwmstM5AgVyrSrp4Agq9uNYx22R8hKRt4jzd47gkLxL1t_4GqnJ1JyyJBSvE00hTv_-DMd_EzTqpbLz9FdG_6aD9sufpHsCONr94IZwP_m6oMt_CwasjKKjJEEQE7V5IPZtQL" />
                            </div>
                            <div className="absolute bottom-0 right-0 size-3.5 bg-emerald-400 border-2 border-primary rounded-full shadow-sm"></div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-white font-bold text-base leading-tight">Soporte Digital Morelos</h3>
                            <p className="text-white/80 text-xs flex items-center gap-1 font-medium mt-0.5">
                                <span className="material-symbols-outlined text-[12px] text-emerald-300">fiber_manual_record</span>
                                En línea ahora
                            </p>
                        </div>
                    </div>
                    <button className="text-white/70 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10">
                        <span className="material-symbols-outlined text-xl">more_vert</span>
                    </button>
                </div>

                {/* Chat Body */}
                <div className="bg-white dark:bg-slate-900 border-x border-slate-200 dark:border-slate-800 flex-1 flex flex-col overflow-hidden">
                    <div className="flex-1 overflow-y-auto p-5 space-y-6">
                        {/* Date Separator */}
                        <div className="flex justify-center">
                            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full shadow-sm">Hoy</span>
                        </div>

                        {/* Assistant Message */}
                        <div className="flex items-end gap-3 max-w-[85%]">
                            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/10 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-[16px]">smart_toy</span>
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-none p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                                <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                                    ¡Hola, Juan! Soy tu asistente virtual de la Cartilla de Vacunación Digital Morelos (CVD -Morelos). ¿En qué puedo ayudarte el día de hoy?
                                </p>
                                <span className="text-[10px] font-bold text-slate-400 block mt-2 text-right uppercase tracking-widest">14:02</span>
                            </div>
                        </div>

                        {/* Automated Options (Quick Replies) */}
                        <div className="flex flex-col gap-2.5 pl-11">
                            <button className="bg-white dark:bg-slate-800 border border-primary text-primary hover:bg-primary hover:text-white transition-all text-xs font-bold py-2.5 px-4 rounded-xl text-left w-fit max-w-full shadow-sm">
                                ¿Cómo registro a un nuevo paciente?
                            </button>
                            <button className="bg-white dark:bg-slate-800 border border-primary text-primary hover:bg-primary hover:text-white transition-all text-xs font-bold py-2.5 px-4 rounded-xl text-left w-fit max-w-full shadow-sm">
                                Actualizar datos de contacto
                            </button>
                            <button className="bg-white dark:bg-slate-800 border border-primary text-primary hover:bg-primary hover:text-white transition-all text-xs font-bold py-2.5 px-4 rounded-xl text-left w-fit max-w-full shadow-sm">
                                Problemas con el inventario
                            </button>
                            <button className="bg-primary/5 dark:bg-primary/10 border border-primary text-primary hover:bg-primary/10 transition-all text-xs font-black py-2.5 px-4 rounded-xl text-left w-fit max-w-full flex items-center gap-2 shadow-sm mt-2">
                                <span className="material-symbols-outlined text-[16px]">support_agent</span>
                                Hablar con humano táctico
                            </button>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 rounded-b-xl shadow-sm relative z-10">
                    <div className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-xl px-4 py-2 border border-slate-200 dark:border-slate-700 shadow-inner">
                        <button className="text-slate-400 hover:text-primary transition-colors p-1 disabled:opacity-50">
                            <span className="material-symbols-outlined text-[20px]">attach_file</span>
                        </button>
                        <input className="bg-transparent border-none focus:ring-0 flex-1 text-sm text-slate-700 dark:text-slate-200 py-2.5 outline-none placeholder:text-slate-400 font-medium" placeholder="Escribe tu mensaje o consulta..." type="text" />
                        <button className="bg-primary text-white rounded-lg p-2 hover:scale-105 transition-transform flex items-center justify-center shadow-md shadow-primary/20">
                            <span className="material-symbols-outlined text-[18px]">send</span>
                        </button>
                    </div>
                    <p className="text-[10px] font-bold text-center text-slate-400 mt-3 uppercase tracking-widest">Plataforma Segura • Servicios de Salud de Morelos</p>
                </div>
            </div>
        </div>
    );
}
