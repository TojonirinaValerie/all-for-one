import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";

export function InfoBlock() {
  return (
    <div className="max-lg:hidden max-w-[630px] h-[550px] flex-1 w-full flex flex-row  item-center rounded-l-4xl bg-primary py-10 justify-center px-6">
      <div className="flex flex-col gap-7 h-full justify-center items-start">
        <div className="flex flex-row gap-7 text-white font-light items-center">
          <Mail className="h-10 w-10" />
          <p>contact@allforone.mg</p>
        </div>
        <div className="flex flex-row gap-7 text-white font-light items-center">
          <Phone className="h-10 w-10" />
          <p>
            +261 34 52 103 85
            <br />
            +261 34 22 386 45
          </p>
        </div>
        <div className="flex flex-row gap-7 text-white font-light items-center">
          <MapPin className="h-11 w-11 " />
          Ambatoroka, Antananarivo, Madagascar
        </div>
        <div className="flex flex-row gap-7 text-white font-light items-center">
          <Clock className="h-10 w-10" />
          08 : 30 - 16 : 30 <br />
          08 : 30 - 16 : 30
        </div>
        <div className="flex flex-row gap-7 text-white font-light items-center">
          <Calendar className="h-10 w-10" />
          contact@allforone.mg
        </div>
      </div>
    </div>
  );
}
