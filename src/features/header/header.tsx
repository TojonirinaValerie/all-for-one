import { MenuHeader } from "./menu";

const Header = () => {
  return (
    <header>
      <div className="h-24 w-full bg-[#dce4ef66] px-48 flex items-center justify-end fixed">
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
