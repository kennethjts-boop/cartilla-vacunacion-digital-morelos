import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import CartillaClient from './CartillaClient';

export default async function CartillaPage() {
    const session = await getSession();

    if (!session || !session.user) {
        redirect('/login');
    }

    const { role } = session.user as any;

    // Simulate pulling patient data from a DB based on the logged in user or query param
    // In a real app we'd fetch prisma.patient.findUnique(...)
    const patientData = {
        name: "Juan Pérez García",
        curp: "PEGA200512HDFRRN01",
        ageStr: "2 años",
        ageGroup: "0-9", // Enums: "0-9", "10-19", "20-59", "60+", "riesgo", "viajero"
        healthCenter: "Cuernavaca",
        gender: "M",
        bloodType: "A+"
    };

    return (
        <CartillaClient
            role={role}
            initialPatient={patientData}
        />
    );
}
