import { MenuHeader } from "./menu";

const Header = () => {
  return (
    <header className="fixed z-50 w-full">
      <div className="h-24 bg-[#dce4ef66] backdrop-blur-sm px-48 flex items-center justify-end">
        <img src="assets/AfoLogoMobile.webp" alt="" />
        <img src="assets/AfoLogoDesk.webp" alt="afo" />
        <div className="w-full" />
        <MenuHeader title="Accueil" />
        <MenuHeader title="Services" />
        <MenuHeader title="Projets" />
        <MenuHeader title="Technologies" />
        <MenuHeader title="Contact" />
      </div>
    </header>
  );
};

export default Header;
