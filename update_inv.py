import os

filepath = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(dashboard)/inventario/page.tsx'
with open(filepath, 'r') as f:
    text = f.read()

text = "import Link from 'next/link';\n\n" + text

old_btn_1 = """                    <button className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-lg">sync_alt</span>
                        Transferencia
                    </button>"""

new_btn_1 = """                    <Link href="/inventario/transferencia" className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-lg">sync_alt</span>
                        Transferencia
                    </Link>"""

old_btn_2 = """                    <button className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-lg">add_circle</span>
                        Nuevo Cargamento
                    </button>"""

new_btn_2 = """                    <Link href="/inventario/nuevo" className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-lg">add_circle</span>
                        Nuevo Cargamento
                    </Link>"""

text = text.replace(old_btn_1, new_btn_1).replace(old_btn_2, new_btn_2)

with open(filepath, 'w') as f:
    f.write(text)

print("Linked Inventory forms")
