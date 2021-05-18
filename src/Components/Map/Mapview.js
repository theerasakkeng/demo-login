import React, { useState, useCallback, useEffect } from 'react';
import { Map, Marker, Popup } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'
import './Mapview.css'
import * as station from '../data/station.json'

const Mapview = () => {
    const markerElement = station.features.map(data => {
        const {
            properties:{RRSTID,NAMET},
            geometry :{coordinates}
        } = data;
    }); console.log(markerElement)
    const [mount, setMount] = useState(undefined)
    const initMap = useCallback(() => {
        const mapRender = new Map({
            container: "map1",
            style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
            center: [100.523186, 13.736717],
            zoom: 10
        });
        
   
    
        setMount(mapRender);
    });
    useEffect(() => {
        if (!mount) {
            initMap();
        }
    }, [mount, initMap])
    return (
        <div id="map1" style={{ width: "100vw", height: "100vh" }}>
        </div>
    );
};

export default Mapview;