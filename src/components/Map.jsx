import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map = ({ center }) => {
  return (
    <MapContainer
      center={center ? [51, -0.09] : [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg "
    >
      <TileLayer
        url={url}
        attribution={attribution}
      />
      {center && (
        <Marker position={center} />
      )}
    </MapContainer>
  );
};

export default Map;