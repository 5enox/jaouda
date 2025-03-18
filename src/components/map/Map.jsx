import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import L from "leaflet";

// Custom Marker Implementation
const CustomMarker = ({ position, popupText }) => {
  const map = useMap();
 
  useEffect(() => {
    const svgIcon = L.divIcon({
      html: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
          <path d="M12 0c-4.4 0-8 3.6-8 8 0 5.4 7 13.4 7.3 13.7.2.2.5.3.7.3s.5-.1.7-.3c.3-.3 7.3-8.3 7.3-13.7 0-4.4-3.6-8-8-8z"
                 fill="red" stroke="#000" stroke-width="1"/>
          <circle cx="12" cy="8" r="3" fill="white"/>
        </svg>
      `,
      className: "custom-svg-marker",
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -36],
    });

    const marker = L.marker(position, { icon: svgIcon }).addTo(map);
    marker
      .bindPopup(`<div class="custom-popup-content">${popupText}</div>`)
      .openPopup();

    return () => {
      map.removeLayer(marker);
    };
  }, [map, position, popupText]);

  return null;
};

const MapComponent = ({
  coordinates = [51.505, -0.09],
  zoom = 13,
  popupText = "Jaouda Location",
}) => {
  const [position, setPosition] = useState(coordinates);

  useEffect(() => {
    setPosition(coordinates);
  }, [coordinates]);

  const cartoDBUrl =
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

  return (
    <div className="map-container-wrapper">
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: "400px", width: "100%" }}
        className="custom-map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={cartoDBUrl}
        />
        <CustomMarker position={position} popupText={popupText} />
      </MapContainer>

      <div className="google-maps-button-wrapper">
        <a
          href="https://maps.app.goo.gl/kfTRZZ1HD1kTv8na8"
          target="_blank"
          rel="noopener noreferrer"
          className="google-maps-button"
        >
          Find us on Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapComponent;
