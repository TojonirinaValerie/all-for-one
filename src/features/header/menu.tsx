
interface MenuHeaderProps{
    title:string;
}

export function MenuHeader({title}:MenuHeaderProps){
    return <a href={`#${title.toLowerCase()}`}  className="h-full px-5 text-xs 2xl:text-md font-[5px] justify-center content-center hover:font-medium text-primary hover:border-b-2 border-b-primary">
        {title}
    </a>
}