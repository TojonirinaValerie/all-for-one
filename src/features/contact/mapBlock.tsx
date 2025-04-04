"use client";

import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import customIcon from "./customIcon";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export function MapBlock() {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div className="h-80 w-full not-lg:h-52 rounded-4xl overflow-hidden mt-20 z-0">
      <MapContainer
        center={[-18.92453335217809, 47.549102356743894]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        className="-z-0"
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[-18.92453335217809, 47.549102356743894]}
          icon={customIcon || undefined}
        >
          <Popup>AllForOne Madagascar</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
