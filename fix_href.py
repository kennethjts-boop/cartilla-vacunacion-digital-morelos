import os

fp1 = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(dashboard)/page.tsx'
with open(fp1, 'r') as f:
    t1 = f.read()

t1 = t1.replace('href="#"', 'href="/"')

with open(fp1, 'w') as f:
    f.write(t1)

fp2 = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(auth)/login/page.tsx'
with open(fp2, 'r') as f:
    t2 = f.read()

# Replace Olvido contrasena
t2 = t2.replace('<a className="text-xs font-bold text-primary hover:underline" href="#">¿Olvidó su contraseña?</a>', '<Link href="/recuperacion" className="text-xs font-bold text-primary hover:underline">¿Olvidó su contraseña?</Link>')

# Replace Registrese
t2 = t2.replace('<a className="text-primary font-bold hover:underline" href="#">Regístrese aquí</a>', '<Link href="/registro" className="text-primary font-bold hover:underline">Regístrese aquí</Link>')

# Replace footer links
t2 = t2.replace('href="#"', 'href="/"')

with open(fp2, 'w') as f:
    f.write(t2)

print("Fixed hrefs")
