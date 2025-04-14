import { useEffect, useState } from "react";

export const useIsMediumScreen = () => {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMd(window.innerWidth >= 768); // md = 768px
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return isMd;
};
