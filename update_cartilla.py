import os

filepath = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(dashboard)/cartilla/CartillaClient.tsx'
with open(filepath, 'r') as f:
    lines = f.readlines()

import_statement = "    import { renderTableNinos, renderTableAdolescentes, renderTableAdultos, renderTableMayores, renderTableRiesgo } from '@/app/components/dashboard/VaccineTables';\n"

# Replace lines 70 to 844 (0-indexed) with the import statement
new_lines = lines[:70] + [import_statement] + lines[844:]

with open(filepath, 'w') as f:
    f.writelines(new_lines)

print("Updated CartillaClient.tsx")
