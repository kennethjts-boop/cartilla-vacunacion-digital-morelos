import os

fp1 = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(dashboard)/roles/page.tsx'
with open(fp1, 'r') as f:
    t1 = f.read()

t1 = "import Link from 'next/link';\n\n" + t1

old1 = """                <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm hover:shadow-md w-full md:w-auto">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Crear Nuevo Rol
                </button>"""
new1 = """                <Link href="/roles/nuevo" className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm hover:shadow-md w-full md:w-auto">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Crear Nuevo Rol
                </Link>"""
t1 = t1.replace(old1, new1)

with open(fp1, 'w') as f:
    f.write(t1)


fp2 = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(dashboard)/soporte/page.tsx'
with open(fp2, 'r') as f:
    t2 = f.read()

t2 = "import Link from 'next/link';\n\n" + t2

old2 = """                        <button className="bg-primary text-white rounded-lg p-2 hover:scale-105 transition-transform flex items-center justify-center shadow-md shadow-primary/20">
                            <span className="material-symbols-outlined">send</span>
                        </button>"""
new2 = """                        <Link href="/soporte/nuevo" className="bg-primary text-white rounded-lg p-2 hover:scale-105 transition-transform flex items-center justify-center shadow-md shadow-primary/20">
                            <span className="material-symbols-outlined">add</span>
                        </Link>"""
t2 = t2.replace(old2, new2)

with open(fp2, 'w') as f:
    f.write(t2)

print("Linked Roles & Soporte!")
