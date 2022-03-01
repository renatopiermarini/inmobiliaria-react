import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.css";
import "leaflet/dist/leaflet.css";
import { VenueLocationIcon } from "./VenueLocationIcon";

export const GoogleMaps = ({ coordenadas, titulo }) => {
  const { currentLocation } = coordenadas;

  return (
    <MapContainer
      center={currentLocation}
      zoom={14}
      className="leaflet-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={currentLocation} icon={VenueLocationIcon}>
        <Popup>{titulo}</Popup>
      </Marker>
    </MapContainer>
  );
};
