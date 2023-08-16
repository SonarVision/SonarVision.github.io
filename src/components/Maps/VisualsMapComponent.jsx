import React, {useRef, useEffect, useState} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './VisualsMapComponent.css';
import {MaplibreLegendControl} from "@watergis/maplibre-gl-legend";
import '@watergis/maplibre-gl-legend/dist/maplibre-gl-legend.css';


export function VisualsMapComponent() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(2.33504);
    const [lat] = useState(48.85922);
    const [zoom] = useState(11);
    const [pitch] = useState(40);

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://visuals.sonarvision.fr/styles/ContributionsSonarVision/style.json`,
            center: [lng, lat],
            zoom: zoom,
            pitch: pitch
        });

        const targets = {
            'n8dx': "n8dx (Nathan Daix)",
            'la-monf': "la-monf (Augustin Monfret)",
            'Etiennemapper5362': 'Etiennemapper5362',
            'Max_C': 'Max_C',
            'guiguimapper2002': 'guiguimapper2002',
        }

        map.current.addControl(
            new MaplibreLegendControl(
                targets,
                {
                    showDefault: true,
                    title: "Contributions de l'équipe SonarVision",
                }
            ),
            'bottom-right');

    }, [lng, lat, zoom]);

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map"/>
        </div>
    );
}