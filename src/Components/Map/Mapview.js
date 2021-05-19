import React, { useState, useCallback, useEffect } from 'react';
import { Map, Marker, Popup } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'
import './Mapview.css'
import station from '../data/station.json'

const Mapview = () => {
    const [mount, setMount] = useState(undefined)
    const initMap = useCallback(() => {
        const mapRender = new Map({
            container: "map1",
            style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
            center: [100.523186, 13.736717],
            zoom: 10
        });
        mapRender.on('load', function () {
            mapRender.addSource('station', {
                'type': 'geojson',
                'data': station.features.map(stations => {
        mapRender.addLayer({
            'id' : stations.properties.RRSTID
        });
                    const marker = new Marker()
                        .setLngLat([stations.geometry.coordinates[0], stations.geometry.coordinates[1]])
                        .addTo(mapRender)
                })
            });
        });

        mapRender.on('click','RRSTID',function(e){station.features.map(stations => {
            var coordinates = stations.geometry.coordinates.slice();
            var description = stations.properties.NAMET;

            while (Math.abs(e.lngLat.lng - coordinates) > 180) {
                coordinates += e.lngLat.lng > coordinates ? 360 : -360;
                }
               new Popup()
               .setLngLat([stations.geometry.coordinates[1],stations.geometry.coordinates[0]])
               .setHTML(description)
               .addTo(mapRender) 

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