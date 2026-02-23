import os

fp1 = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(dashboard)/cartilla/CartillaClient.tsx'
with open(fp1, 'r') as f:
    lines1 = f.read().split('\n')

import_line = "    import { renderTableNinos, renderTableAdolescentes, renderTableAdultos, renderTableMayores, renderTableRiesgo } from '@/app/components/dashboard/VaccineTables';"
if import_line in lines1:
    lines1.remove(import_line)
    lines1.insert(4, "import { renderTableNinos, renderTableAdolescentes, renderTableAdultos, renderTableMayores, renderTableRiesgo } from '@/app/components/dashboard/VaccineTables';")
    with open(fp1, 'w') as f:
        f.write('\n'.join(lines1))

fp2 = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/certificado/page.tsx'
with open(fp2, 'r') as f:
    lines2 = f.read().split('\n')

for i, line in enumerate(lines2):
    if "{/* Footer Section / Security */}" in line:
        lines2.insert(i, "                        </section>")
        break

with open(fp2, 'w') as f:
    f.write('\n'.join(lines2))

print("Fixed syntax errors!")
