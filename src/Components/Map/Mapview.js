import React, { useState, useCallback, useEffect } from 'react';
import { Map, Marker, Popup } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'
import './Mapview.css'
const Mapview = () => {
    const [mount, setMount] = useState(undefined)
    const initMap = useCallback(() => {
        const mapRender = new Map({
            container: "map1",
            style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
            center: [101.554894, 13.721237],
            zoom: 10
        });
        mapRender.on('click', function () {
            const popup = new Popup({ offset:25}).setText('กรุงเทพมหานคร');

            const el = document.createElement('div');
            el.className = 'marker';
        
        mapRender.on('load',function(){
            const marker = new Marker(el).setLngLat([100.523186, 13.736717]).setPopup(popup).addTo(mapRender);
        })
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