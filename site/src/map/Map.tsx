import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngTuple, Map as LeafletMap } from 'leaflet';
// For now, the zip file URL is an empty .zip, signalling nothing to read

import ShapeRenderer from './MapRenderer';

const DashboardMap = () => {
    const mapRef = React.useRef<LeafletMap>();
    React.useEffect(() => {
        if (mapRef.current) {
            const mapEl = mapRef.current;
            mapEl.setView([34.74161249883172, 18.6328125], 2);
        }
    }, [mapRef.current]);

    const position: LatLngTuple = [36.545, -96.987]
    return (
        <MapContainer
            center={position}
            zoom={4}
            style={{
                width: '80%',
                height: '60vh',
                position: 'relative',
                zIndex: 0
            }}
            zoomControl={false}
            whenCreated={(instance) => {mapRef.current = instance}}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <ShapeRenderer zipURL={`${window.location.toString()}tech-comm-maps/US_State_Boundaries.zip`}/>
        </MapContainer>
    )
}

export default DashboardMap;