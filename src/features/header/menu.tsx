import Link from "next/link";

interface MenuHeaderProps{
    title:string;
    link:string;
    active:boolean;
    onClick?: () => void;
}

export function MenuHeader({title, link, active , onClick}:MenuHeaderProps){
    return <Link href={link} onClick={onClick} className={`h-full px-5 text-xs 2xl:text-md font-[5px] justify-center content-center hover:font-medium ${active?"font-medium border-b-2":"font-light"} text-primary hover:border-b-2 transition-all duration-150 border-b-primary`}>
        {title}
    </Link>
}