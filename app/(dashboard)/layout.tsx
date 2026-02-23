import Sidebar from "@/app/components/layout/Sidebar";
import Topbar from "@/app/components/layout/Topbar";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getSession();

    // Si no hay sesión, al login
    if (!session || !session.user) {
        redirect('/login');
    }

    const { role } = session.user as any;

    // Si es padre de familia, no debe ver el layout completo del dashboard con la barra lateral izquierda.
    // Solo debe ver la vista individual (Cartilla). El padding será distinto.
    const isParent = role === 'PADRE';

    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
            {!isParent && <Sidebar role={role} />}
            <main className={`flex-1 flex flex-col overflow-y-auto ${isParent ? 'w-full' : ''}`}>
                <Topbar user={session.user as any} />
                {children}
            </main>
        </div>
    );
}
