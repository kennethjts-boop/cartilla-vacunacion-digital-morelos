'use client';

import Link from 'next/link';
import { useState } from 'react';
import { renderTableNinos, renderTableAdolescentes, renderTableAdultos, renderTableMayores, renderTableRiesgo } from '@/app/components/dashboard/VaccineTables';
import { useEffect } from 'react';
import { getPatientVaccineRecords, getVaccines, registerVaccineApplication } from '@/app/actions/vaccines';
import { useRouter } from 'next/navigation';

function parseAgeFromCURP(curp: string) {
    if (!curp || curp.length < 18) return { age: 0, ageStr: "0 años", ageGroup: "0-9" };

    const yearStr = curp.substring(4, 6);
    const monthStr = curp.substring(6, 8);
    const dayStr = curp.substring(8, 10);
    const centuryChar = curp.charAt(16);

    let year = parseInt(yearStr, 10);
    if (/[0-9]/.test(centuryChar)) {
        year += 1900;
    } else {
        year += 2000;
    }

    const birthDate = new Date(year, parseInt(monthStr, 10) - 1, parseInt(dayStr, 10));
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    let ageGroup = "0-9";
    if (age >= 10 && age <= 19) ageGroup = "10-19";
    else if (age >= 20 && age <= 59) ageGroup = "20-59";
    else if (age >= 60) ageGroup = "60+";

    let ageStr = `${age} años`;
    if (age === 0) {
        let months = m < 0 ? 12 + m : m;
        ageStr = months === 0 ? "Días de nacido" : `${months} meses`;
    } else if (age === 1) {
        ageStr = "1 año";
    }

    return { age, ageStr, ageGroup };
}

export default function CartillaClient({ role, initialPatient }: any) {
    const [showModal, setShowModal] = useState(false);
    const [records, setRecords] = useState<any[]>([]);
    const [availableVaccines, setAvailableVaccines] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const isTutor = role === 'PADRE';

    // Perfiles de prueba con CURPs reales o que computan a la edad correcta para el esquema
    // PEGA20...A = Año 2020 -> ~5 años
    // SOMA12...B = Año 2012 -> ~13 años
    // MAAA87...0 = Año 1987 -> ~38 años
    // ROAA50...0 = Año 1950 -> ~75 años
    const perfiles = [
        { name: "Juan (0-9)", curp: "PEGA200512HDFRRNA1", bloodType: "O+", gender: "M" },
        { name: "Sofía (10-19)", curp: "SOMA120512MDFRRNB2", bloodType: "A+", gender: "F" },
        { name: "María (20-59)", curp: "MAAA880123MDFRRN02", bloodType: "A-", gender: "F" },
        { name: "Roberto (60+)", curp: "ROAA500123HDFRRN01", bloodType: "B+", gender: "M" },
        { name: "Dr. Carlos (Riesgo)", curp: "CARR820512HDFMED03", bloodType: "AB+", overrideGroup: "riesgo", gender: "M" },
    ];

    const [patient, setPatient] = useState(initialPatient || perfiles[0]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const [vResponse, rResponse] = await Promise.all([
                getVaccines(),
                getPatientVaccineRecords(patient.curp) // Note: In this demo CURP is used as lookup if real ID is missing
            ]);

            if (vResponse.success && vResponse.data) setAvailableVaccines(vResponse.data);
            if (rResponse.success && rResponse.data) setRecords(rResponse.data);
            setIsLoading(false);
        };
        fetchData();
    }, [patient.curp]);

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        formData.append('patientId', patient.curp); // Simplified for demo
        formData.append('healthCenterId', 'hc-123'); // Semi-mocked

        const res = await registerVaccineApplication(formData);
        if (res.success) {
            setShowModal(false);
            // Refresh records
            const rResponse = await getPatientVaccineRecords(patient.curp);
            if (rResponse.success && rResponse.data) setRecords(rResponse.data);
        } else {
            alert(res.error || 'Error al registrar');
        }
        setIsLoading(false);
    };

    const parsedAge = parseAgeFromCURP(patient.curp);
    const displayedAgeStr = patient.ageStr || parsedAge.ageStr; // Fallback to provided ageStr if dynamic parsing is off
    const activeGroup = patient.overrideGroup || patient.ageGroup || parsedAge.ageGroup;


    return (
        <div className="flex-1 flex flex-col min-h-full">
            <main className="flex-1 px-4 lg:px-8 py-4 flex flex-col">
                {/* Simulator controls for demo purposes */}
                {role !== 'PADRE' && (
                    <div className="mb-3 flex flex-wrap gap-2 items-center bg-slate-100 dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                        <span className="text-xs font-bold text-slate-500 uppercase px-2 material-symbols-outlined">psychiatry</span>
                        <span className="text-xs font-bold text-slate-500 uppercase mr-2 tracking-wider">Simular Paciente (Demo):</span>
                        {perfiles.map((p, idx) => {
                            const pAge = parseAgeFromCURP(p.curp);
                            const pGroup = p.overrideGroup || pAge.ageGroup;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setPatient(p)}
                                    className={`px-3 py-1 font-bold rounded-full uppercase tracking-wider transition-colors ${activeGroup === pGroup
                                        ? 'bg-primary text-white shadow-sm shadow-primary/30'
                                        : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 border-slate-700'
                                        }`}
                                >
                                    {p.name}
                                </button>
                            );
                        })}
                    </div>
                )}

                <div className="max-w-[1400px] mx-auto space-y-3 lg:space-y-4 flex flex-col min-h-full bg-slate-50/10 rounded-2xl">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-slate-500 dark:text-slate-400 shrink-0">
                        <Link href="/pacientes/registrar" className="hover:text-primary font-medium transition-colors text-xs lg:text-sm">Pacientes</Link>
                        <span className="material-symbols-outlined">chevron_right</span>
                        <span className="text-slate-900 dark:text-slate-100 font-bold text-xs lg:text-sm">{patient.name}</span>
                    </nav>

                    {/* Profile Section */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl px-4 py-3 lg:p-4 shadow-sm border border-slate-200 dark:border-slate-800 shrink-0">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4 lg:gap-6">
                                <div className="relative shrink-0">
                                    <div className="size-16 lg:size-20 rounded-full border-4 border-slate-100 dark:border-slate-800 bg-cover bg-center overflow-hidden shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHx9XiM-_K-PXDxqjTve5gnLo8yLy1Q4K8p4khZuYVMM6f1iE8wF1pdm1jay71hb1bgU2KRQCYq2siYhKPdiOz3lAnaGU_szIUn5JW13KesZR8gEkYblRuHfLgjdK9gDp2BvOMF4QtNFNMwCCx9XQwAYXn54d4J_vvs-Grh-fbwJtbbv02Eptv1Z2fYsxTTyg00ytl2CtPwsPPeskqPzX4DT9zafmrxrfVXPQaTNisrXi5XisITwhbdtGLaQSK6_kwOUL-znYctEsw")' }}>
                                    </div>
                                    <div className="absolute bottom-0 right-0 bg-primary text-white p-0.5 rounded-full border-2 border-white dark:border-slate-900 shadow-sm">
                                        <span className="material-symbols-outlined block">verified</span>
                                    </div>
                                </div>
                                <div className="space-y-0.5 lg:space-y-1">
                                    <h1 className="lg:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-none">{patient.name}</h1>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 lg:text-slate-500 dark:text-slate-400">
                                        <div className="flex items-center gap-3 font-medium">
                                            <span className="material-symbols-outlined">fingerprint</span>
                                            <span>CURP: <span className="font-bold text-slate-700 dark:text-slate-300">{patient.curp}</span></span>
                                        </div>
                                        <div className="flex items-center gap-3 font-medium">
                                            <span className="material-symbols-outlined">calendar_today</span>
                                            <span><span className="font-bold text-slate-700 dark:text-slate-300">{displayedAgeStr}</span> de edad</span>
                                        </div>
                                        {patient.bloodType && (
                                            <div className="flex items-center gap-2 font-medium bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 px-2.5 py-1 rounded-lg border border-red-100 dark:border-red-900/30">
                                                <span className="material-symbols-outlined text-[16px]">water_drop</span>
                                                <span className="text-sm">Tipo de Sangre: <span className="font-bold uppercase">{patient.bloodType}</span></span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                                {!isTutor && (
                                    <button onClick={() => setShowModal(true)} className="flex items-center justify-center gap-1.5 px-4 h-9 lg:h-10 bg-primary text-white font-bold lg:rounded-lg hover:bg-opacity-90 transition-all shadow-md shadow-primary/20">
                                        <span className="material-symbols-outlined">add_circle</span>
                                        Registrar
                                    </button>
                                )}
                                <Link href={`/certificado?curp=${patient.curp}&name=${encodeURIComponent(patient.name)}&bloodType=${encodeURIComponent(patient.bloodType || '')}&group=${activeGroup}`} target="_blank" className="flex items-center justify-center gap-1.5 px-4 h-9 lg:h-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold lg:rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700">
                                    <span className="material-symbols-outlined">picture_as_pdf</span>
                                    Generar PDF
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Vaccination Timeline Table - COMPACT & RESPONSIVE */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col shrink">
                        <div className="p-2 lg:p-3 border-b border-slate-100 dark:border-slate-800 bg-[#c5e0b4] dark:bg-emerald-900/40 shrink-0">
                            <h2 className="lg:font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">
                                Esquema de Vacunación {activeGroup === 'riesgo' ? '(Personal de Salud)' : activeGroup === '60+' ? '(Adultos Mayores)' : activeGroup === '20-59' ? '(Adultos)' : activeGroup === '10-19' ? '(Adolescentes)' : '(Niñas y Niños)'}
                            </h2>
                        </div>

                        <div className="flex-1 overflow-visible">
                            {activeGroup === '0-9' && renderTableNinos(records)}
                            {activeGroup === '10-19' && renderTableAdolescentes(records)}
                            {activeGroup === '20-59' && renderTableAdultos(records)}
                            {activeGroup === '60+' && renderTableMayores(records)}
                            {activeGroup === 'riesgo' && renderTableRiesgo(records)}
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex justify-between items-center pt-2 shrink-0 border-t border-slate-200/50">
                        <p className="text-xs lg:text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                            ID EXPEDIENTE: {patient.curp.substring(0, 6)}
                        </p>
                        <p className="text-xs lg:text-sm font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1.5 uppercase tracking-wider">
                            <span className="material-symbols-outlined">info</span>
                            Ultima actualización: HOY por Servidor Estatal
                        </p>
                    </div>
                </div>
            </main>

            {/* Modal de Registro de Vacuna */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
                    <form onSubmit={handleRegister} className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transform transition-all w-full">
                        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
                            <h2 className="font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">vaccines</span>
                                Registrar Nueva Aplicación
                            </h2>
                            <button type="button" onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">Vacuna Aplicada</label>
                                <select
                                    name="vaccineId"
                                    required
                                    className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-full"
                                >
                                    <option value="">Seleccione vacuna administrada...</option>
                                    {availableVaccines.map(v => (
                                        <option key={v.id} value={v.id}>{v.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">Lote</label>
                                <input name="lotNumber" type="text" placeholder="Ej: HEX-2023-441" className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none uppercase w-full" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">Fecha de Aplicación</label>
                                    <input name="dateAdministered" type="date" required className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-full" defaultValue={new Date().toISOString().split('T')[0]} />
                                </div>
                                <div>
                                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">Centro Regulador</label>
                                    <input type="text" disabled defaultValue="Jurisdicción Morelos" className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-slate-500 cursor-not-allowed w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3 bg-slate-50 dark:bg-slate-800/50">
                            <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2.5 font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 border border-slate-200 rounded-lg bg-white dark:bg-slate-900">
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-5 py-2.5 font-bold text-white bg-primary hover:bg-opacity-90 rounded-lg flex items-center gap-2 shadow-sm shadow-primary/20 transition-all disabled:opacity-50"
                            >
                                <span className="material-symbols-outlined">{isLoading ? 'hourglass_empty' : 'save'}</span>
                                {isLoading ? 'Guardando...' : 'Guardar Registro'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
