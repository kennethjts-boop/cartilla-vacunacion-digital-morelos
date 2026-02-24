'use client';

import Link from 'next/link';
import SafeMap from './SafeMap';

export default function HeatmapWidget() {
    return (
        <div className="bg-primary dark:bg-primary/20 p-6 rounded-xl text-white shadow-lg flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-bold">Mapa de Calor Estatal</h3>
                <p className="text-xs opacity-80 mt-1">Zonas con mayor prioridad de atención</p>
            </div>

            {/* Interactive Map */}
            <div className="my-6 aspect-square bg-[#044c37] dark:bg-primary/10 rounded-lg overflow-hidden relative shadow-inner min-h-[250px]">
                <SafeMap
                    zoom={9}
                    points={[
                        { lat: 18.92, lng: -99.23, label: 'Cuernavaca', risk: 'medium' },
                        { lat: 18.88, lng: -99.17, label: 'Jiutepec', risk: 'high' },
                        { lat: 18.81, lng: -98.94, label: 'Cuautla', risk: 'medium' }
                    ]}
                />
            </div>

            <div className="space-y-3">
                <Link
                    href="/vigilancia"
                    className="w-full py-2 bg-white/20 hover:bg-white/30 text-white text-center font-bold rounded-lg transition-all block relative z-50 cursor-pointer shadow-sm text-xs"
                >
                    Ver Mapa Completo
                </Link>
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
