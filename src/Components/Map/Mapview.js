import React, { useState, useCallback, useEffect } from 'react';
import { Map, Marker, Popup } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'
import './Mapview.css'
import station from '../data/station.json'
import zIndex from '@material-ui/core/styles/zIndex';

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
        mapRender.addSource('station',{
            'type': "geojson",
            'data' : station.features.map(stations => {
    const popup = new Popup({offset :25}).setText(
        stations.properties.NAMET
    );   
    
    const marker = new Marker()
    .setLngLat([stations.geometry.coordinates[0],stations.geometry.coordinates[1]])
    .setPopup(popup)
    .addTo(mapRender);
            })
        });
    })    

        setMount(mapRender);
    });
    useEffect(() => {
        if (!mount) {
            initMap();
        }
    }, [mount, initMap])
    return (
        <div id="map1" style={{ width: "100vw", height: "100vh"}} className="map-option">
            <ul className ="menu--nav">
                <li>Home</li>
                <li>About</li>
                <li>Education</li>
            </ul>
        </div>
    );
};

export default Mapview;