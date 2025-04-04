
interface MenuHeaderProps{
    title:string;
    link:string;
}

export function MenuHeader({title, link}:MenuHeaderProps){
    return <a href={link} className="h-full px-5 text-xs 2xl:text-md font-[5px] justify-center content-center hover:font-medium text-primary hover:border-b-2 border-b-primary">
        {title}
    </a>
}