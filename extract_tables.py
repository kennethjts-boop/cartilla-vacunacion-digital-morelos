import os

filepath = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(dashboard)/cartilla/CartillaClient.tsx'
with open(filepath, 'r') as f:
    lines = f.readlines()

output_lines = ["import React from 'react';\n\n"]
output_lines.extend(lines[70:844]) # 0-indexed, so 71 to 844

out_filepath = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/components/dashboard/VaccineTables.tsx'
with open(out_filepath, 'w') as f:
    f.writelines(["export " + line if line.startswith("const renderTable") else line for line in output_lines])

print("Extracted to VaccineTables.tsx")
