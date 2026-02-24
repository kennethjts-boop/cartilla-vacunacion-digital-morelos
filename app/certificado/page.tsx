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
    }, [curp]);

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
                <button onClick={() => window.print()} className="group flex items-center gap-3 bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                    <span className="material-symbols-outlined text-lg group-hover:animate-pulse">print</span>
                    Imprimir Certificado
                </button>
            </nav>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media print {
                    .no-print { display: none !important; }
                    body { background-color: white !important; padding: 0 !important; margin: 0 !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                    .a4-page { 
                        box-shadow: none !important; 
                        margin: 0 !important; 
                        width: 100% !important;
                        height: 100% !important;
                        border: none !important;
                    }
                    /* Ensure background graphics print */
                    * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
                }
                .a4-page {
                    width: 210mm;
                    min-height: 297mm;
                    margin: 40px auto;
                    background: white;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    position: relative;
                    overflow: hidden;
                }
                .pattern-dots {
                    background-image: radial-gradient(#066046 1px, transparent 1px);
                    background-size: 20px 20px;
                    opacity: 0.05;
                }
            `}} />

            {/* Document Container */}
            <div className="flex justify-center p-4 sm:p-8 flex-1">
                <div className="a4-page relative flex flex-col bg-white">
                    {/* Background Graphics / Premium Abstract Design */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#066046]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
                    <div className="absolute inset-0 pattern-dots pointer-events-none"></div>

                    {/* Left Decorative Bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b from-[#066046] via-emerald-500 to-[#066046]"></div>

                    <div className="px-12 py-14 flex-1 flex flex-col relative z-10 w-full">
                        {/* Header Section */}
                        <header className="flex justify-between items-start mb-8">
                            <div className="flex gap-6 items-center">
                                <img alt="Logotipo Gobierno de Morelos" className="h-[72px] w-auto drop-shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmZgwRyRHxqtGhvPaIzuIL5KVr2N5AKznrp-XFpIijTUgM9CUNHhJXGHGZ_Q6RJ2sGnDY-3yFRZjLwgcohzcdQjP0W1HKDSqhrCy50sOMwFhh4smag8uuxaEfxyxWjo4ch1ySvxJ5W_dqzedtgir2tA_2da6Gzl44P9w_4Sbi1BrVVb-UG8Xok1-VZGP29bwqQmwdylXpR6ytd7IBxv8GLYcmJKauMTaIpPOuVOM03L4fn9-ds0i38JEilv3uAIwBwpBv5WmVPwFAm" />
                                <div className="h-16 w-px bg-slate-200"></div>
                                <div>
                                    <h2 className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-1">Certificado<br /><span className="text-[#066046]">Oficial de Vacunación</span></h2>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1.5">Secretaría de Salud · Morelos</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="inline-block bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-3 shadow-md">Validez Oficial</div>
                                <div className="flex flex-col gap-1 items-end">
                                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">Folio de Registro</p>
                                    <p className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded">MOR-24-88A</p>
                                </div>
                            </div>
                        </header>

                        {/* Patient Info Card - Glassmorphism style */}
                        <section className="bg-gradient-to-br from-[#066046]/[0.02] to-emerald-500/[0.05] rounded-3xl p-6 border border-[#066046]/10 shadow-sm mb-8 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 p-6 opacity-5 rotate-12">
                                <span className="material-symbols-outlined text-[150px]">verified</span>
                            </div>

                            <div className="flex items-center gap-3 mb-5 relative z-10">
                                <div className="bg-white text-[#066046] p-1.5 rounded-lg shadow-sm border border-slate-100">
                                    <span className="material-symbols-outlined text-xl">account_circle</span>
                                </div>
                                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Datos del Titular</h3>
                            </div>

                            <div className="grid grid-cols-4 gap-4 relative z-10">
                                <div className="col-span-2 bg-white rounded-2xl p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100/50">
                                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mb-1 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">badge</span>Nombre Completo</p>
                                    <p className="text-[15px] font-black text-slate-900">{name}</p>
                                </div>
                                <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100/50">
                                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mb-1 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">pin</span>CURP</p>
                                    <p className="text-sm font-bold text-[#066046] font-mono">{curp}</p>
                                </div>
                                <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100/50">
                                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mb-1 flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">cake</span>Nacimiento</p>
                                    <p className="text-sm font-bold text-slate-800">12 MAY 2022</p>
                                </div>
                            </div>
                        </section>

                        {/* Modern Grid Table for Vaccines */}
                        <section className="flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-4 px-2">
                                <div className="flex items-center gap-3">
                                    <div className="bg-slate-900 text-white p-1.5 rounded-md">
                                        <span className="material-symbols-outlined text-lg">medical_information</span>
                                    </div>
                                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Esquema Aplicado</h3>
                                </div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    Esquema Oficial Aprobado
                                </div>
                            </div>

                            {/* Dynamic Table Render */}
                            <div className="flex-1 flex flex-col pt-2 [&>div]:h-full [&>div>div]:h-full [&>div>div>div:last-child]:flex-1">
                                {activeGroup === '0-9' && renderTableNinos()}
                                {activeGroup === '10-19' && renderTableAdolescentes()}
                                {activeGroup === '20-59' && renderTableAdultos()}
                                {activeGroup === '60+' && renderTableMayores()}
                                {activeGroup === 'riesgo' && renderTableRiesgo()}
                            </div>

                        </section>
                        {/* Footer Section / Security */}
                        <footer className="mt-6 pt-5 flex justify-between items-end relative z-10">
                            <div className="flex-1 flex gap-5 items-center">
                                <div className="p-1 border border-[#066046]/20 rounded-xl bg-white shadow-sm inline-block shrink-0 relative">
                                    <div className="absolute -top-2 -right-2 bg-emerald-500 text-white p-0.5 rounded-full shadow-sm">
                                        <span className="material-symbols-outlined text-[10px] block">verified</span>
                                    </div>
                                    {qrCodeUrl ? (
                                        <img alt="QR Code" className="w-20 h-20 rounded-lg" src={qrCodeUrl} />
                                    ) : (
                                        <div className="w-20 h-20 bg-slate-100 animate-pulse rounded-lg"></div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[10px] font-black uppercase text-slate-800 tracking-widest mb-1 flex items-center gap-1"><span className="material-symbols-outlined text-[12px] text-emerald-500">lock</span> Verificación Criptográfica</h4>
                                    <p className="text-[8px] text-slate-500 leading-relaxed max-w-sm mb-2 text-justify">
                                        Este certificado electrónico cuenta con validez legal en todo el territorio mexicano. Escanee el código QR para acceder a la representación inalterable alojada en la blockchain estatal de la Secretaría de Salud. <strong className="text-slate-700">La falsificación es un delito grave.</strong>
                                    </p>
                                    <div className="flex gap-4 items-center">
                                        <div className="font-mono text-[7px] text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100 break-all w-full max-w-xs">
                                            0x8F9E1A2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0B1C2D3E4F5A6B7C8D9E0F
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right flex flex-col items-end pb-1 shrink-0">
                                <p className="text-[9px] font-bold text-[#066046] uppercase tracking-[0.3em] mb-1.5 flex items-center gap-1 justify-end">Expedido en Cuernavaca <span className="material-symbols-outlined text-[12px]">location_on</span></p>
                                <div className="h-0.5 w-12 bg-emerald-500 rounded-full mb-1"></div>
                                <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Secretaría de Bienestar Social</p>
                            </div>
                        </footer>
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
