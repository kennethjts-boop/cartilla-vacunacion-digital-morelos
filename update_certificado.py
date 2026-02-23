import os

filepath = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/certificado/page.tsx'
with open(filepath, 'r') as f:
    text = f.read()

# Replace imports
old_import = "export default function CertificadoPage() {"
new_import = """import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { renderTableNinos, renderTableAdolescentes, renderTableAdultos, renderTableMayores, renderTableRiesgo } from '@/app/components/dashboard/VaccineTables';

function CertificadoContent() {
    const searchParams = useSearchParams();
    const curp = searchParams.get('curp') || 'PEGA200512HDFRR';
    const name = searchParams.get('name') || 'JUAN PÉREZ GARCÍA';
    const bloodType = searchParams.get('bloodType') || '';
    const activeGroup = searchParams.get('group') || '0-9';
"""
text = text.replace(old_import, new_import)

# Replace hardcoded CURP and Name in the HTML body
text = text.replace('PEGA200512HDFRR', '{curp}')
text = text.replace('JUAN PÉREZ GARCÍA', '{name}')

# The table layout needs to be replaced entirely
# We'll use string manipulation to cut out lines containing the old table
lines = text.split('\n')

start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if '{/* The Modern Table */}' in line:
        start_idx = i
    if '{/* Footer Section / Security */}' in line:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    replacement = """                            {/* Dynamic Table Render */}
                            <div className="flex-1 flex flex-col pt-2 [&>div]:h-full [&>div>div]:h-full [&>div>div>div:last-child]:flex-1">
                                {activeGroup === '0-9' && renderTableNinos()}
                                {activeGroup === '10-19' && renderTableAdolescentes()}
                                {activeGroup === '20-59' && renderTableAdultos()}
                                {activeGroup === '60+' && renderTableMayores()}
                                {activeGroup === 'riesgo' && renderTableRiesgo()}
                            </div>
"""
    new_lines = lines[:start_idx] + [replacement] + lines[end_idx:]
    text = '\n'.join(new_lines)


# Add the exported wrapper at the end
text += """

export default function CertificadoPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-100 text-slate-500 font-bold">Cargando certificado oficial...</div>}>
            <CertificadoContent />
        </Suspense>
    );
}
"""

with open(filepath, 'w') as f:
    f.write(text)

print("Updated CertificadoPage.tsx")
