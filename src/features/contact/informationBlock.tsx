import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";



export function InfoBlock(){
    return <div className="h-[550px] w-[630px] flex flex-col gap-7 rounded-l-4xl bg-primary px-40 py-10 justify-center">
        <div className="flex gap-7 text-white font-light">
            <Mail className="h-10 w-10"/>
            contact@allforone.mg
        </div>
        <div className="flex gap-7 text-white font-light">
            <Phone className="h-10 w-10"/>
            contact@allforone.mg
        </div>
        <div className="flex gap-7 text-white font-light">
            <MapPin className="h-11 w-11 "/>
            Ambatoroka, Antananarivo, Madagascar
        </div>
        <div className="flex gap-7 text-white font-light">
            <Clock className="h-10 w-10"/>
            08 : 30 - 16 : 30 <br />
            08 : 30 - 16 : 30
        </div>
        <div className="flex gap-7 text-white font-light">
            <Calendar className="h-10 w-10"/>
            contact@allforone.mg
        </div>
    </div>
}