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
            center: [100.523186, 13.736717],
            zoom: 10
        });
        
        mapRender.on('load',function(){
            const marker = new Marker().setLngLat([100.523186, 13.736717]).addTo(mapRender);
        });
        mapRender.on('click',function (e){
            var coordinates = [100.523186, 13.736717];
            var description = "กรุงเทพ"
            while (Math.abs(e.lngLat.lng - coordinates) > 180) {
                coordinates += e.lngLat.lng > coordinates ? 360 : -360;
                }
        var popup = new Popup().setLngLat(coordinates).setHTML(description).addTo(mapRender)        
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