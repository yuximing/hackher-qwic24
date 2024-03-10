import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Icon } from "leaflet";

const Map = ({loc}) => {
    const markers = [
        {
            geocode: [44.2300392, -76.4998722],
            popUp: "Food Bank 1"
        },
        {
            geocode: [44.2330713, -76.4994524],
            popUp: "Food Bank 2"
        },
        {
            geocode: [44.2224191, -76.5023496],
            popUp: "Food Bank 3"
        }
    ];

    const customIcon = new Icon({
        iconUrl: require("./../icons/pin.png"),
        iconSize: [38, 38] // size of the icon
    });
  
    
    const youIcon = new Icon({
      iconUrl: require("./../icons/929426.png"),
      iconSize: [38, 38] // size of the icon
    });

  return (
    <div className='flex h-screen justify-center'>
      <MapContainer
        className='h-[60vh] w-[60vw] rounded-3xl'
        center={loc}
        zoom={15}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
        <Marker position={loc} icon={youIcon}>
            <Popup>Your location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
