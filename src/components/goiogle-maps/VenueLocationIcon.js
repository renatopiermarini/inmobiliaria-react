import L from "leaflet";
import IconSvg from "./icon/venue_location_icon.svg";

export const VenueLocationIcon = L.icon({
  iconUrl: IconSvg,
  iconRetinaUrl: IconSvg,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
