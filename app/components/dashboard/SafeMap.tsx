'use client';

import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./InteractiveMap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-slate-100 dark:bg-slate-800 animate-pulse flex items-center justify-center rounded-lg min-h-[300px]">
            <span className="material-symbols-outlined text-4xl opacity-20">map</span>
        </div>
    )
});

interface SafeMapProps {
    center?: [number, number];
    zoom?: number;
    points?: Array<{ lat: number; lng: number; label: string; risk?: 'low' | 'medium' | 'high' }>;
    height?: string;
}

export default function SafeMap(props: SafeMapProps) {
    return <LeafletMap {...props} />;
}
