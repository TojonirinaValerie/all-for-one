
interface MenuHeaderProps{
    title:string;
}

export function MenuHeader({title}:MenuHeaderProps){
    return <span className="h-full px-5 font-light justify-center content-center hover:font-medium text-primary hover:border-b-2 border-b-primary">
        {title}
    </span>
}