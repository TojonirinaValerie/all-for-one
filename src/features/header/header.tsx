"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icônes pour le menu
import Image from "next/image";
import { MenuHeader } from "./menu";


export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-[#dce4ef98] shadow-md">
      <div className="h-[60px] md:h-[80px] px-6 xl:px-48 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/assets/AfoLogoMobile.webp" alt="Logo Mobile" width={60} height={60} className="lg:block" />
          <Image src="/assets/AfoLogoDesk.webp" alt="Logo Desktop" width={120} height={40} className=" not-lg:hidden" />
        </div>
        <nav className="hidden md:flex xl:gap-6 not-xl:gap-2 h-full">
          <MenuHeader title="Accueil" />
          <MenuHeader title="Services" />
          <MenuHeader title="Projets" />
          <MenuHeader title="Technologies" />
          <MenuHeader title="Contact" />
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute top-24 left-0 w-full shadow-lg z-50">
          <nav className="flex flex-col items-center gap-4 py-6">
            <MenuHeader title="Accueil" /> 
            <MenuHeader title="Services" />
            <MenuHeader title="Projets" />
            <MenuHeader title="Technologies" />
            <MenuHeader title="Contact" />
          </nav>
        </div>
      )}
    </header>
  );
}
