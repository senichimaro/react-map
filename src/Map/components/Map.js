import React, {
  useState
}
from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
}
from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import './Map.css'





function LocationMarker() {
  const [position, setPosition] = useState(null);


  const map = useMapEvents({
    click(e) {
        // map.locate();
        // console.log(e);
        setPosition(e.latlng);
      },
      locationfound(event) {
        setPosition(event.latlng);
        map.flyTo(event.latlng, map.getZoom());
      },
  });

  return position === null
  ? null
  : (
      <Marker
        position={ position }
      >
        <Popup>You are Here!</Popup>
      </Marker>
  )
}

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{height: '30rem'}}
    >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker />
    </MapContainer>
  );
};

export default Map;
