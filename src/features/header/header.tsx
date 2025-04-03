import { MenuHeader } from "./menu";



const Header = () => {
    return ( 
        <header>
            <div className="h-24 bg-[#DCE4EF] px-48 flex items-center justify-end"> 
                <img src="" alt="TEst" />
                <div className="w-full"/>
                <MenuHeader title="Accueil"/>
                <MenuHeader title="Services"/>
                <MenuHeader title="Projets"/>
                <MenuHeader title="Technologies"/>
                <MenuHeader title="Contact"/>
            </div>
        </header>
     );
}
 
export default Header;