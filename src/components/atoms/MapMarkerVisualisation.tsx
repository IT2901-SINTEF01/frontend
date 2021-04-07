import React, { useState } from 'react';
import { Map } from 'reactive-atlas';
import { MapPosition } from '../../types/mapposition';

type LngLat = {
    lat: number;
    lng: number;
};

type InitialPositionProps = {
    lngLat?: LngLat;
};

const MapMarkerVisualisation: React.FC<InitialPositionProps> = ({
    lngLat: { lng, lat } = { lat: 63.41864, lng: 10.40274 },
}) => {
    const [currPosition, setCurrPosition] = useState('');
    const mapOnClickHandler = (latLng: google.maps.LatLngLiteral) => {
        fetch(
            `https://finnposisjon.test.geonorge.no/api/positions?firstInput=${latLng.lat}&secondInput=${latLng.lng}&thirdInput=`,
        )
            .then((res) => res.json())
            .then((res) => {
                setCurrPosition(getMunicipalityFromMapPosition(res));
            });
    };

    const getMunicipalityFromMapPosition = (mapPosition: MapPosition): string => {
        const municipality = mapPosition.Positions[0].AddressData.Place;
        const lowercaseMunicipality: string[] = municipality.split(` `).map((w) => w.toLowerCase());
        return lowercaseMunicipality
            .map((w) => {
                if (['i', 'og'].includes(w)) {
                    return w;
                }
                return w.charAt(0).toUpperCase() + w.slice(1);
            })
            .join(` `);
    };

    return (
        <Map
            options={{ zoom: 12, center: { lat, lng } }}
            eventHandlers={[
                [
                    'click',
                    (_, evt) => {
                        mapOnClickHandler({ lat: evt[0].latLng.lat(), lng: evt[0].latLng.lng() });
                    },
                ],
            ]}
        />
    );
};

export default MapMarkerVisualisation;
