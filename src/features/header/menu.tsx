import Link from "next/link";

interface MenuHeaderProps{
    title:string;
    link:string;
    active:boolean;
    onClick?: () => void;
}

export function MenuHeader({title, link, active , onClick}:MenuHeaderProps){
    return <Link
    href={link}
    onClick={onClick}
    className={`
      h-full
      w-full md:w-auto
      px-4 md:px-5
      py-2 md:py-0
      max-md:px-7
      text-sm sm:text-base lg:text-[15px] xl:text-[16px] 2xl:text-md
      font-medium
      text-primary
      hover:font-semibold
      hover:border-b-2
      border-b-primary
      transition-all duration-150
      ${active ? "font-semibold border-b-2" : "font-light border-b-0"}
      flex items-center md:justify-center
    `}
  >
    {title}
  </Link>
  
}