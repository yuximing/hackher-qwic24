import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";

const NearMePage = () => {
    const markers = [
        {
            geocode: [48.86, 2.3522],
            popUp: "Hello, I am pop up 1"
        },
        {
            geocode: [48.85, 2.3522],
            popUp: "Hello, I am pop up 2"
        },
        {
            geocode: [48.855, 2.34],
            popUp: "Hello, I am pop up 3"
        }
    ];

    const customIcon = new Icon({
        iconUrl: require("./../icons/pin.png"),
        iconSize: [38, 38] // size of the icon
    });

  return (
    <div className='flex h-screen w-screen'>
      <MapContainer
        className='h-screen w-screen'
        center={[48.8566, 2.3522]}
        zoom={13}
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
      </MapContainer>
    </div>
  );
};

export default NearMePage;
