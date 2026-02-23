import os

filepath = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(dashboard)/citas/page.tsx'
with open(filepath, 'r') as f:
    text = f.read()

# Add import
text = "import Link from 'next/link';\n\n" + text

# Replace 'Nueva Cita' button
old_btn_1 = """                    <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm shadow-primary/20">
                        <span className="material-symbols-outlined text-sm">add</span>
                        Nueva Cita
                    </button>"""
new_btn_1 = """                    <Link href="/citas/nueva" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm shadow-primary/20">
                        <span className="material-symbols-outlined text-sm">add</span>
                        Nueva Cita
                    </Link>"""
text = text.replace(old_btn_1, new_btn_1)

# Replace 'REGISTRAR APLICACIÓN' button
old_btn_2 = """<button className="bg-primary text-white text-[10px] font-black tracking-wider px-3 py-1.5 rounded-lg border border-primary/20 hover:bg-primary/90 transition-all w-full">REGISTRAR APLICACIÓN</button>"""
new_btn_2 = """<Link href="/citas/registrar" className="inline-block bg-primary text-white text-[10px] font-black tracking-wider px-3 py-1.5 rounded-lg border border-primary/20 hover:bg-primary/90 transition-all w-full text-center">REGISTRAR APLICACIÓN</Link>"""
text = text.replace(old_btn_2, new_btn_2)

with open(filepath, 'w') as f:
    f.write(text)

print("Buttons updated in citas/page.tsx")
