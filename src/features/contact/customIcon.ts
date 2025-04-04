
"use client";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "/assets/location-pin.png", // Assurez-vous que l'image est bien dans public/assets/
  shadowUrl: "/assets/location-pin.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default customIcon;
