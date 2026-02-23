import os
import re

files = [
    '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(dashboard)/reportes/page.tsx',
    '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(dashboard)/auditoria/page.tsx',
    '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(dashboard)/inventario/page.tsx',
    '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(dashboard)/citas/page.tsx'
]

state_code = """
    const [isExportOpen, setIsExportOpen] = useState(false);
    const [exportType, setExportType] = useState<'excel'|'pdf'|'csv'>('excel');

    const handleExport = (type: 'excel'|'pdf'|'csv') => {
        setExportType(type);
        setIsExportOpen(true);
    };
"""

modal_code = """
            <ExportModal 
                isOpen={isExportOpen} 
                onClose={() => setIsExportOpen(false)} 
                fileType={exportType}
            />
        </div>
"""

for fp in files:
    with open(fp, 'r') as f:
        text = f.read()
    
    # 1. Add imports
    imports = "'use client';\nimport { useState } from 'react';\nimport ExportModal from '@/app/components/dashboard/ExportModal';\n\n"
    if 'use client' not in text:
        text = imports + text
    
    # 2. Add state
    # Find export default function XYZ() {
    func_match = re.search(r'export default function [A-Za-z0-9_]+\s*\([^)]*\)\s*\{', text)
    if func_match:
        idx = func_match.end()
        text = text[:idx] + state_code + text[idx:]

    # 3. Add modal at the end before last closing div
    # Find last </div>
    last_div_idx = text.rfind('</div>')
    if last_div_idx != -1:
        text = text[:last_div_idx] + modal_code + text[last_div_idx+6:]

    # 4. Modify buttons
    # "Exportar Excel" -> onClick={() => handleExport('excel')}
    text = re.sub(r'(<button[^>]*?)>(\s*<span[^>]*>[^<]*</span>\s*Exportar Excel\s*)</button>', r"\1 onClick={() => handleExport('excel')}>\2</button>", text, flags=re.IGNORECASE)
    
    # "Informe Mensual PDF" / "Exportar PDF"
    text = re.sub(r'(<button[^>]*?)>(\s*<span[^>]*>[^<]*</span>\s*Informe Mensual PDF\s*)</button>', r"\1 onClick={() => handleExport('pdf')}>\2</button>", text, flags=re.IGNORECASE)
    text = re.sub(r'(<button[^>]*?)>(\s*<span[^>]*>[^<]*</span>\s*Exportar PDF\s*)</button>', r"\1 onClick={() => handleExport('pdf')}>\2</button>", text, flags=re.IGNORECASE)
    
    # "Exportar Reporte" (inventario)
    text = re.sub(r'(<button[^>]*?)>(\s*<span[^>]*>[^<]*</span>\s*Exportar Reporte\s*)</button>', r"\1 onClick={() => handleExport('excel')}>\2</button>", text, flags=re.IGNORECASE)

    # "Descargar CSV" (citas) -> onClick={() => handleExport('csv')}
    text = re.sub(r'(<button[^>]*?)>(\s*<span[^>]*>[^<]*</span>\s*Descargar Lista\s*)</button>', r"\1 onClick={() => handleExport('excel')}>\2</button>", text, flags=re.IGNORECASE)

    with open(fp, 'w') as f:
        f.write(text)

print("Export Modals added to 4 pages!")
