import L from "leaflet";

let customIcon: L.Icon | null = null;

if (typeof window !== "undefined") {
  customIcon = new L.Icon({
    iconUrl: "/assets/location-pin.png",
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
}

export default customIcon;
