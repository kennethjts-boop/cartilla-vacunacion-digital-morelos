export default function HeatmapWidget() {
    return (
        <div className="bg-primary dark:bg-primary/20 p-6 rounded-xl text-white shadow-lg flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-bold">Mapa de Calor Estatal</h3>
                <p className="text-xs opacity-80 mt-1">Zonas con mayor prioridad de atención</p>
            </div>

            {/* Decorative Map Placeholder simulating the mockup */}
            <div className="my-6 aspect-square bg-[#044c37] dark:bg-primary/10 rounded-lg overflow-hidden flex items-center justify-center relative bg-white/10">
                <div className="absolute inset-0 opacity-20 bg-[length:10px_10px] bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] text-white/50"></div>
                <span className="material-symbols-outlined text-6xl opacity-30">map</span>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[10px] font-bold bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        Mapa Interactivo
                    </p>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex items-center justify-between text-xs bg-white/10 p-2 rounded-lg">
                    <span className="font-medium">Zona Metropolitana</span>
                    <span className="font-bold">Alta Cobertura</span>
                </div>
                <div className="flex items-center justify-between text-xs bg-white/10 p-2 rounded-lg">
                    <span className="font-medium">Región Sur</span>
                    <span className="font-bold">Atención Requerida</span>
                </div>
            </div>
        </div>
    );
}
