"use client";

import Image from "next/image";
import { useState } from "react";

interface IconCompoProps {
  src: string;
  hoverSrc: string;
  onClick?: () => void;
}

export function IconCompo({ src, hoverSrc }: Readonly<IconCompoProps>) {
  const [iconSrc, setIconSrc] = useState<string>(src);

  const handleMouseEnter = () => setIconSrc(hoverSrc);
  const handleMouseLeave = () => setIconSrc(src);

  return (
    <div
      className="h-12 w-12 rounded-full content-center hover:bg-primary hover:text-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={iconSrc}
        width={48}
        height={48}
        className="filter transition duration-300  hover:grayscale-0"
        alt={""}
      />
    </div>
  );
}
