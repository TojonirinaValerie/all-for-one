"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { MenuHeader } from "./menu";
import { usePathname } from "next/navigation";

// ShadCN UI components
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"; // Adjust path if needed
import { DialogTitle } from "@radix-ui/react-dialog";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let currentSection = activeSection;

    sections.forEach((section) => {
      const sectionId = section.getAttribute("id");
      if (!sectionId) return;

      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = sectionId;
      }
    });

    setActiveSection(currentSection);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = activeSection;

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        if (!sectionId) return;

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const menuItems = [
    { id: "accueil", link: "#accueil", title: "Accueil" },
    { id: "services", link: "#services", title: "Services" },
    { id: "projects", link: "#projects", title: "Projets" },
    { id: "technologie", link: "#technologie", title: "Technologies" },
    { id: "contact", link: "#contact", title: "Contact" },
  ];

  return (
    <header className="bg-[#dce4ef98] shadow-md fixed w-full backdrop-blur-lg z-[100]">
      <div className="h-[60px] md:h-[80px] px-6 xl:px-48 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/AFO_Logo.png"
            alt="Logo Mobile"
            width={60}
            height={60}
            className="lg:block"
          />
          <Image
            src="/assets/AfoLogoDesk.webp"
            alt="Logo Desktop"
            width={120}
            height={40}
            className="not-lg:hidden"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex xl:gap-6 not-xl:gap-2 h-full">
          {menuItems.map((item) => (
            <MenuHeader
              key={item.id}
              active={activeSection === item.id}
              link={item.link}
              title={item.title}
            />
          ))}
        </nav>

        {/* Mobile drawer trigger */}
        <div className="md:hidden">
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button>
                {isDrawerOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </DrawerTrigger>
            <DrawerContent side="left" className="pt-[80px] z-100">
              <DialogTitle></DialogTitle>
              <nav className="flex flex-col items-start gap-4 px-0">
                {menuItems.map((item) => (
                  <MenuHeader
                    key={item.id}
                    active={activeSection === item.id}
                    link={item.link}
                    title={item.title}
                    onClick={() => {
                      const drawer = document.activeElement as HTMLElement;
                      drawer?.blur();
                      setIsDrawerOpen(false);
                    }}
                  />
                ))}
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
