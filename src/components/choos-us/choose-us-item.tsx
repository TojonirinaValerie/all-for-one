import { Handshake, HeartHandshake, LucideProps, Puzzle } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type ChooseUstype = {
    title: string;
    icon: any;
    description: string;
}
const chooseUsData: ChooseUstype[] = [
    {
        title:"",
        icon: <Handshake />,
        description: ""
    },
    {
        title: "",
        icon: <HeartHandshake />,
        description: ""
    },
    {
        title: "",
        icon: <Puzzle />,
        description: ""
    }
]

const ChooseUsItem = () => {
    return ( 
        <div className="">

        </div>
     );
}
 
export default ChooseUsItem;