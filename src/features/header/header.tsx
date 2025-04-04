"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Icônes pour le menu
import Image from "next/image";
import { MenuHeader } from "./menu";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = activeSection; // Garder la dernière valeur si aucune section n'est valide

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        if (!sectionId) return; // Ignorer les sections sans ID

        const sectionTop = section.offsetTop - 120; // Ajuste pour tenir compte du header
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId; // Mettre à jour uniquement si la section a un ID
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);
  // Fonction pour fermer le menu mobile lorsqu'on clique sur un lien
  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-[#dce4ef98] shadow-md fixed w-full backdrop-blur-lg z-[100]">
      <div className="h-[60px] md:h-[80px] px-6 xl:px-48 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/assets/AfoLogoMobile.webp" alt="Logo Mobile" width={60} height={60} className="lg:block" />
          <Image src="/assets/AfoLogoDesk.webp" alt="Logo Desktop" width={120} height={40} className="not-lg:hidden" />
        </div>

        <nav className="hidden md:flex xl:gap-6 not-xl:gap-2 h-full">
          <MenuHeader active={activeSection === "accueil"} link="#accueil" title="Accueil" />
          <MenuHeader active={activeSection === "services"} link="#services" title="Services" />
          <MenuHeader active={activeSection === "projects"} link="#projects" title="Projets" />
          <MenuHeader active={activeSection === "technologie"} link="#technologie" title="Technologies" />
          <MenuHeader active={activeSection === "contact"} link="#contact" title="Contact" />
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#DCE4EF] absolute top-[60px] backdrop-blur-lg left-0 w-full shadow-lg z-50">
          <nav className="flex flex-col items-center gap-4 py-6">
            <MenuHeader active={activeSection === "accueil"} link="#accueil" title="Accueil" onClick={handleMenuClick} />
            <MenuHeader active={activeSection === "services"} link="#services" title="Services" onClick={handleMenuClick} />
            <MenuHeader active={activeSection === "projects"} link="#projects" title="Projets" onClick={handleMenuClick} />
            <MenuHeader active={activeSection === "technologie"} link="#technologie" title="Technologies" onClick={handleMenuClick} />
            <MenuHeader active={activeSection === "contact"} link="#contact" title="Contact" onClick={handleMenuClick} />
          </nav>
        </div>
      )}
    </header>
  );
}
