'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMap } from 'react-leaflet';
import L from 'leaflet';
// CSS is now loaded in root layout to ensure consistency

// Fix for default marker icon in Leaflet + Next.js
const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
    center?: [number, number];
    zoom?: number;
    points?: Array<{ lat: number; lng: number; label: string; risk?: 'low' | 'medium' | 'high' }>;
    height?: string;
}

export default function InteractiveMap({
    center = [18.88, -99.16],
    zoom = 10,
    points = [],
    height = "100%"
}: MapProps) {
    return (
        <div style={{ height, width: '100%', borderRadius: 'inherit' }} className="z-10 relative min-h-[300px]">
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {points.map((point, idx) => (
                    <CircleMarker
                        key={idx}
                        center={[point.lat, point.lng]}
                        radius={point.risk === 'high' ? 12 : point.risk === 'medium' ? 8 : 6}
                        pathOptions={{
                            fillColor: point.risk === 'high' ? '#ef4444' : point.risk === 'medium' ? '#f59e0b' : '#10b981',
                            color: point.risk === 'high' ? '#b91c1c' : point.risk === 'medium' ? '#b45309' : '#047857',
                            weight: 1,
                            opacity: 1,
                            fillOpacity: 0.6
                        }}
                    >
                        <Popup>
                            <div className="p-1">
                                <p className="font-bold text-slate-900">{point.label}</p>
                                <p className="text-xs text-slate-500 capitalize">Riesgo: {point.risk || 'Normal'}</p>
                            </div>
                        </Popup>
                    </CircleMarker>
                ))}
            </MapContainer>
        </div>
    );
}
