"use client";
const MapBlock = () => {
  return (
    <div className="w-full py-5">
      <iframe
        width="100%"
        style={{ margin: "auto", borderRadius: "5px" }}
        height={"335px"}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAKm-Zx_-iTzlH0qbkPqCgfyAg9TJ0D524&q=AllForOne+Madagascar&zoom=17"
      />
    </div>
  );
};

export default MapBlock;
