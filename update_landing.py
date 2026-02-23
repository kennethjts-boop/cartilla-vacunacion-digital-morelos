import sys
import re

file_path = '/Users/kennethjts/Downloads/stitch_dashboard_estatal_morelos 3/webapp/app/(public)/inicio/page.tsx'

with open(file_path, 'r') as f:
    t = f.read()

# 1. Top Logo Replace
old_top_logo = '''                        <div className="flex items-center gap-4">
                            <img alt="Morelos Salud Logo" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqoxbGI2S105PZEQV20_e86534UL9WnfGzBXLTyZM_B8RNvnVNzIsmSS-opjmq9IlzjvjIyqyEDT02ZpZEh_xgofxpj04S5PLNoqUerys-QDu7Pk0jAK6itXOME3gvOsc0Czcnsdd3lJ3JNkr5W8usWfOIY6hyys0-d65cz1wPkm4plntqcm8f8D3DwyEKBLxLv38auFBDw-3Xq67Kcw3asPliih_yvgJkENPNlz-0LVMRJcPcrd_0Re2uJxvVs_XP42RDFKU6pyIs" />
                            <div className="hidden md:block h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                            <h1 className="hidden lg:block text-primary font-bold text-lg leading-tight">
                                Cartilla Digital <br /><span className="text-xs font-medium uppercase tracking-wider text-slate-500">Estado de Morelos</span>
                            </h1>
                        </div>'''

new_top_logo = '''                        <div className="flex items-center gap-3">
                            <div className="bg-primary p-2 rounded-lg text-white shadow-sm">
                                <span className="material-symbols-outlined text-2xl">shield</span>
                            </div>
                            <div>
                                <h1 className="text-primary font-extrabold text-lg leading-none tracking-tight">Cartilla Digital</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-widest mt-0.5">Estado de Morelos</p>
                            </div>
                        </div>'''
                        
t = t.replace(old_top_logo, new_top_logo)

# 2. Main image replacement
old_image = '''<img alt="Salud Familiar" className="rounded-2xl w-full h-auto shadow-inner object-cover aspect-video sm:aspect-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaVkOEEfnM6KblGGDvJJAqQd5Rm2hK-ZPDqkMXXsH-BdhX4Ohwsh9U5j8XbvfRh3i4L7ewRuOmKMNnKWjuJuSP3iZCvoYigdDyLg-Y3OzDOWIH54ZX59qDKp9kFcj_RqXNfOUqNEpgXXue3kxZ-H6fT9RaxG1UCJfsgoHQ_os4SQbinKWci7jyL8Y4_3CkcLuxcJq690iA2Po7VG213L7P9nuDcGctjK9jJiQQMTKHnc6JMe85Q-N6io51Sw7z1bir6vPXbJXzrWaY" />'''
new_image = '''<img alt="Campaña de Vacunación" className="rounded-2xl w-full h-auto shadow-inner object-cover aspect-square sm:aspect-[4/3] object-center" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1200&auto=format&fit=crop" />'''
t = t.replace(old_image, new_image)

# 3. Footer logo removal
old_footer_logo = '''<img alt="Secretaría de Salud Logo" className="h-14 mb-6 opacity-80 mix-blend-luminosity dark:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb-jlJR-OvHQStjmelqZysjnKrBgFCGKVWSlIcCZgMXchs-F5-dWG6A2o--4jZhz1Om4faROa-zhSz3L1C2-U9qnPc0r_vbIwP5toJKKUd62PJvq1xKjrSlXwz9sHML_95QwKqgMJiEagJ3VHWw1t2xUPMCIQI7D5CNEeRUoyunBiYXJ9VJVpsZZJq0_0GmJuB9eK_KgZUcdqSem_ZvXHYLwaOdW9z1e1Y3Qz8CeLrjruw25uo7b14_lBdmf38NkwQpTTGlQ9Ji9Ho" />'''
t = t.replace(old_footer_logo, '<div className="h-8"></div>')

with open(file_path, 'w') as f:
    f.write(t)

print("Landing page components replaced successfully!")
