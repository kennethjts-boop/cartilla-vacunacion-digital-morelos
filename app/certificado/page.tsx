'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import QRCode from 'qrcode';
import { renderTableNinos, renderTableAdolescentes, renderTableAdultos, renderTableMayores, renderTableRiesgo } from '@/app/components/dashboard/VaccineTables';

function CertificadoContent() {
    const searchParams = useSearchParams();
    const curp = searchParams.get('curp') || '{curp}';
    const name = searchParams.get('name') || '{name}';
    const bloodType = searchParams.get('bloodType') || '';
    const activeGroup = searchParams.get('group') || '0-9';

    const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

    useEffect(() => {
        const generateQR = async () => {
            try {
                // Generate verification URL or data string
                const verificationData = `${window.location.origin}/verificar?curp=${curp}&folio=MOR-24-88A`;

                const url = await QRCode.toDataURL(verificationData, {
                    width: 200,
                    margin: 2,
                    color: {
                        dark: '#000000',
                        light: '#ffffff',
                    },
                });
                setQrCodeUrl(url);
            } catch (err) {
                console.error('Error generating QR code:', err);
            }
        };

        generateQR();
        generateQR();
    }, [curp]);

    const handlePrint = () => {
        const page = document.querySelector(".pdf-page") as HTMLElement | null;
        const scaleEl = document.getElementById("pdf-scale") as HTMLElement | null;
        const measureEl = document.getElementById("pdf-measure") as HTMLElement | null;

        if (!page || !scaleEl || !measureEl) {
            window.print();
            return;
        }

        // Medida A4 en px para la vista actual (asegurándonos de que refleje el alto de 297mm en pixels en la pantalla del usuario)
        const maxH = measureEl.getBoundingClientRect().height;

        // Medimos altura real del contenido (sin escala)
        scaleEl.style.setProperty("--pdf-scale", "1");
        const contentH = scaleEl.scrollHeight;

        // Si cabe, escala 1
        if (contentH <= maxH) {
            scaleEl.style.setProperty("--pdf-scale", "1");
        } else {
            // Se pasa, calculamos escala
            let s = maxH / contentH;
            if (s < 0.72) s = 0.72; // mínimo
            if (s > 1) s = 1;
            scaleEl.style.setProperty("--pdf-scale", String(s));
        }

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                window.print();
            });
        });
    };

    return (
        <div className="bg-slate-100 font-display text-slate-900 antialiased min-h-screen flex flex-col">
            {/* Navigation / Toolbar */}
            <nav className="no-print sticky top-0 z-50 w-full bg-white border-b border-primary/10 px-6 py-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="bg-[#066046]/10 p-2 rounded-xl text-[#066046]">
                        <span className="material-symbols-outlined text-3xl">verified_user</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-black text-slate-800 tracking-tight">Morelos Digital</h1>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Sistema de Certificación</p>
                    </div>
                </div>
                <button onClick={handlePrint} className="group flex items-center gap-3 bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                    <span className="material-symbols-outlined text-lg group-hover:animate-pulse">print</span>
                    Imprimir Certificado
                </button>
            </nav>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media print {
                    @page { size: A4 portrait; margin: 0; }
                    .no-print { display: none !important; }
                    html, body { height: auto !important; overflow: visible !important; }
                    body { background-color: white !important; padding: 0 !important; margin: 0 !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                    
                    /* Configuración de Impresión Obligatoria */
                    .pdf-page {
                        box-shadow: none !important;
                        margin: 0 !important;
                        border: none !important;
                        width: 210mm;
                        min-height: 297mm;
                        height: auto !important;
                        box-sizing: border-box;
                        overflow: visible !important;
                        page-break-inside: avoid;
                    }

                    /* Make sure background prints */
                    * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
                    
                    .vaccine-grid {
                        display: block !important;
                        column-count: 2;
                        column-gap: 10px;
                    }
                    .vaccine-grid > * { break-inside: avoid; page-break-inside: avoid; margin-bottom: 6px; }
                }

                /* Contenedor A4 Dinámico */
                .pdf-page {
                    width: 210mm;
                    min-height: 297mm;
                    height: auto !important;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    overflow: visible !important;
                    background: white;
                    position: relative;
                    margin: 40px auto;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    page-break-inside: avoid;
                }

                .pdf-scale {
                    transform-origin: top left;
                    transform: scale(var(--pdf-scale, 1));
                    width: calc(100% / var(--pdf-scale, 1));
                    position: relative;
                    min-height: 297mm;
                    padding: 8mm 12mm;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                /* Layout blocks */
                .pdf-header { flex-shrink: 0; }
                .pdf-user-info { flex-shrink: 0; }
                .pdf-vaccines { flex: 1; display: flex; flex-direction: column; overflow: visible !important; }
                .pdf-footer { flex-shrink: 0; margin-top: 6mm; display: flex; justify-content: space-between; align-items: flex-end; }
                
                .qr-fixed { width: 90px; height: 90px; }

                .pattern-dots {
                    background-image: radial-gradient(#066046 1px, transparent 1px);
                    background-size: 20px 20px;
                    opacity: 0.05;
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 0;
                }
                
                /* Grid de 2 columnas para el esquema de vacunas en visualización normal */
                .vaccine-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 6px;
                    align-items: start;
                    width: 100%;
                }
                
                /* Auto-reduce font si hay mucho contenido - CSS Only Approach */
                @media print {
                    .pdf-vaccines { font-size: 9px !important; }
                    .pdf-vaccines .p-4 { padding: 3px !important; }
                    .pdf-vaccines .p-3 { padding: 2px !important; }
                    .pdf-footer { margin-top: auto; }
                }
            `}} />

            {/* Document Container */}
            <div className="flex justify-center p-4 sm:p-8 flex-1 bg-slate-100">
                <div className="pdf-page">
                    <div id="pdf-measure" style={{ position: 'absolute', top: 0, left: 0, height: '297mm', width: '210mm', visibility: 'hidden', pointerEvents: 'none', zIndex: -1 }}></div>
                    <div id="pdf-scale" className="pdf-scale">
                        {/* Background Graphics / Premium Abstract Design */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#066046]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"></div>
                        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none z-0"></div>
                        <div className="pattern-dots"></div>

                        {/* Left Decorative Bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b from-[#066046] via-emerald-500 to-[#066046] z-10"></div>

                        <div className="flex-1 flex flex-col relative z-20 w-full h-full pl-6">
                            {/* A) HEADER */}
                            <header className="pdf-header flex justify-between items-start mb-4">
                                <div className="flex gap-4 items-center">
                                    <img alt="Logotipo Gobierno de Morelos" className="h-[60px] w-auto drop-shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmZgwRyRHxqtGhvPaIzuIL5KVr2N5AKznrp-XFpIijTUgM9CUNHhJXGHGZ_Q6RJ2sGnDY-3yFRZjLwgcohzcdQjP0W1HKDSqhrCy50sOMwFhh4smag8uuxaEfxyxWjo4ch1ySvxJ5W_dqzedtgir2tA_2da6Gzl44P9w_4Sbi1BrVVb-UG8Xok1-VZGP29bwqQmwdylXpR6ytd7IBxv8GLYcmJKauMTaIpPOuVOM03L4fn9-ds0i38JEilv3uAIwBwpBv5WmVPwFAm" />
                                    <div className="h-12 w-px bg-slate-200"></div>
                                    <div>
                                        <h2 className="text-2xl font-black text-slate-900 tracking-tighter leading-none mb-1">Certificado<br /><span className="text-[#066046]">Oficial de Vacunación</span></h2>
                                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">Secretaría de Salud · Morelos</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="inline-block bg-slate-900 text-white px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase mb-2 shadow-sm">Validez Oficial</div>
                                    <div className="flex flex-col gap-0.5 items-end">
                                        <p className="text-[8px] uppercase font-bold text-slate-400 tracking-widest">Folio</p>
                                        <p className="font-mono text-[10px] font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">MOR-24-88A</p>
                                    </div>
                                </div>
                            </header>

                            {/* B) DATOS DEL USUARIO */}
                            <section className="pdf-user-info bg-gradient-to-br from-[#066046]/[0.02] to-emerald-500/[0.05] rounded-xl p-3 border border-[#066046]/10 shadow-sm mb-4 relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 p-6 opacity-5 rotate-12 pointer-events-none">
                                    <span className="material-symbols-outlined text-[100px]">verified</span>
                                </div>

                                <div className="flex items-center gap-2 mb-3 relative z-10">
                                    <div className="bg-white text-[#066046] p-1 rounded-md shadow-sm border border-slate-100">
                                        <span className="material-symbols-outlined text-sm">account_circle</span>
                                    </div>
                                    <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Datos del Titular</h3>
                                </div>

                                <div className="grid grid-cols-4 gap-2 relative z-10">
                                    <div className="col-span-2 bg-white rounded-xl p-2.5 shadow-[0_1px_5px_-2px_rgba(0,0,0,0.1)] border border-slate-100/50">
                                        <p className="text-[8px] uppercase font-bold text-slate-400 tracking-widest mb-0.5 flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">badge</span>Nombre Completo</p>
                                        <p className="text-xs font-black text-slate-900 truncate">{name}</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-2.5 shadow-[0_1px_5px_-2px_rgba(0,0,0,0.1)] border border-slate-100/50">
                                        <p className="text-[8px] uppercase font-bold text-slate-400 tracking-widest mb-0.5 flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">pin</span>CURP</p>
                                        <p className="text-[10px] font-bold text-[#066046] font-mono truncate">{curp}</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-2.5 shadow-[0_1px_5px_-2px_rgba(0,0,0,0.1)] border border-slate-100/50">
                                        <p className="text-[8px] uppercase font-bold text-slate-400 tracking-widest mb-0.5 flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">cake</span>Nacimiento</p>
                                        <p className="text-[10px] font-bold text-slate-800">12 MAY 2022</p>
                                    </div>
                                </div>
                            </section>

                            {/* C) ESQUEMA DE VACUNACIÓN */}
                            <section className="pdf-vaccines flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-2 px-1 flex-shrink-0">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-slate-900 text-white p-1 rounded-md">
                                            <span className="material-symbols-outlined text-[14px]">medical_information</span>
                                        </div>
                                        <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Esquema Aplicado</h3>
                                    </div>
                                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                        </span>
                                        Esquema Oficial
                                    </div>
                                </div>

                                {/* Dynamic Table Render */}
                                <div className="flex-grow flex flex-col font-sans overflow-hidden">
                                    {activeGroup === '0-9' && renderTableNinos(undefined, true)}
                                    {activeGroup === '10-19' && renderTableAdolescentes(undefined, true)}
                                    {activeGroup === '20-59' && renderTableAdultos(undefined, true)}
                                    {activeGroup === '60+' && renderTableMayores(undefined, true)}
                                    {activeGroup === 'riesgo' && renderTableRiesgo(undefined, true)}
                                </div>

                            </section>
                            {/* D) FOOTER + QR */}
                            <footer className="pdf-footer mt-4 pt-3 relative z-10 border-t border-slate-200/50">
                                <div className="flex-1 flex gap-3 items-center">
                                    <div className="p-1 border border-[#066046]/20 rounded-lg bg-white shadow-xs inline-block shrink-0 relative">
                                        <div className="absolute -top-1 -right-1 bg-emerald-500 text-white p-0.5 rounded-full shadow-sm">
                                            <span className="material-symbols-outlined text-[8px] block">verified</span>
                                        </div>
                                        {qrCodeUrl ? (
                                            <img alt="QR Code" className="qr-fixed rounded" src={qrCodeUrl} />
                                        ) : (
                                            <div className="qr-fixed bg-slate-100 animate-pulse rounded"></div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[9px] font-black uppercase text-slate-800 tracking-widest mb-0.5 flex items-center gap-1"><span className="material-symbols-outlined text-[10px] text-emerald-500">lock</span> Verificación Criptográfica</h4>
                                        <p className="text-[7px] text-slate-500 leading-tight max-w-sm mb-1 text-justify">
                                            Certificado electrónico con validez legal. Escanee el QR para verificación en blockchain. <strong className="text-slate-700">La falsificación es delito.</strong>
                                        </p>
                                        <div className="flex gap-2 items-center">
                                            <div className="font-mono text-[6px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 break-all w-full max-w-[200px]">
                                                0x8F9E1A2B3D...5A6B7C8D9E0F
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right flex flex-col items-end shrink-0">
                                    <p className="text-[8px] font-bold text-[#066046] uppercase tracking-[0.2em] mb-1 flex items-center gap-0.5 justify-end">Cuernavaca <span className="material-symbols-outlined text-[10px]">location_on</span></p>
                                    <div className="h-px w-8 bg-emerald-500 rounded-full mb-1"></div>
                                    <p className="text-[7px] text-slate-400 font-bold uppercase tracking-widest">Secretaría de Salud</p>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function CertificadoPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-100 text-slate-500 font-bold">Cargando certificado oficial...</div>}>
            <CertificadoContent />
        </Suspense>
    );
}
