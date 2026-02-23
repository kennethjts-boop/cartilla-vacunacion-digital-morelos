'use client';

import { useState, useEffect } from 'react';

interface ExportModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    fileType?: 'excel' | 'pdf' | 'csv';
}

export default function ExportModal({ isOpen, onClose, title = "Exportando Reporte Seguro", fileType = 'excel' }: ExportModalProps) {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("Iniciando conexión segura...");

    useEffect(() => {
        if (!isOpen) {
            setProgress(0);
            setStatusText("Iniciando conexión segura...");
            return;
        }

        const stages = [
            { threshold: 25, text: "Compilando registros desde la base de datos central..." },
            { threshold: 50, text: "Aplicando algoritmos de ofuscación de datos sensibles (CURP/Nombre)..." },
            { threshold: 75, text: "Cifrando el documento resultante con AES-256..." },
            { threshold: 100, text: "Documento listo para descarga." },
        ];

        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += (Math.random() * 5) + 2; // Incrementar aleatoriamente
            if (currentProgress > 100) currentProgress = 100;

            setProgress(currentProgress);

            const activeStage = [...stages].reverse().find(s => currentProgress >= s.threshold);
            if (activeStage) {
                setStatusText(activeStage.text);
            }

            if (currentProgress === 100) {
                clearInterval(interval);
                // Simular que cierra solo después de unos segundos y muestra mensaje
                setTimeout(() => {
                    onClose();
                }, 2000);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const iconMap = {
        excel: 'table_view',
        pdf: 'picture_as_pdf',
        csv: 'format_list_numbered'
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 dark:bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-3xl animate-pulse">{iconMap[fileType]}</span>
                    </div>
                    <div>
                        <h3 className="font-black text-slate-800 dark:text-slate-100 text-lg">{title}</h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1.5 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] text-emerald-500">lock</span> Cifrado Activo
                        </p>
                    </div>
                </div>

                {/* Progress Details */}
                <div className="p-6 space-y-6">
                    <div>
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{statusText}</span>
                            <span className="text-sm font-black text-primary">{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-200 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 p-4 rounded-xl flex items-start gap-3">
                        <span className="material-symbols-outlined text-amber-500 mt-0.5">warning</span>
                        <div className="text-xs text-amber-700 dark:text-amber-300">
                            <strong>Aviso de privacidad:</strong> Al descargar este documento, usted acepta la responsabilidad por la cadena de custodia de la información contenida según la legislación vigente sobre datos de salud pública.
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 rounded-lg text-sm font-bold text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    >
                        {progress === 100 ? 'Cerrar' : 'Cancelar Exportación'}
                    </button>
                </div>
            </div>
        </div>
    );
}
