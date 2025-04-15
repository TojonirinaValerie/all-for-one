import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function InfoBlock() {
  return (
    <div className="max-w-[630px] h-[550px] flex-1 w-full flex flex-row  item-center rounded-l-4xl rounded-r-0 bg-primary py-10 justify-center px-6
    max-md:rounded-r-4xl max-md:rounded-4xl">
      <div className="flex flex-col gap-7 h-full justify-center items-start">
        <div className="flex flex-row gap-7 text-white font-light items-center">
          <Mail className="min-h-8 min-w-8 max-h-8 max-w-8" />
          <p className="text-md">contact@allforone.mg</p>
        </div>
        <div className="flex flex-row gap-7 text-white font-light items-center">
          <Phone className="min-h-8 min-w-8 max-h-8 max-w-8" />
          <p className="text-md">
            +261 34 52 103 85
            <br />
            +261 34 22 386 45
          </p>
        </div>
        <div className="flex flex-row gap-7 text-white font-light items-center">
          <MapPin className="min-h-10 min-w-10 max-h-8 max-w-8 " />
          <p className="text-md">Ambatoroka, Antananarivo, Madagascar</p>
        </div>
        <div className="flex flex-row gap-7 text-white font-light items-center">
          <Clock className="min-h-8 min-w-8 max-h-8 max-w-8" />
          <p className="text-md">
            08 : 30 - 16 : 30 <br />
            08 : 30 - 16 : 30
          </p>
        </div>
        {/* <div className="flex flex-row gap-7 text-white font-light items-center">
          <Calendar className="h-8 w-8" />
          contact@allforone.mg
        </div> */}
      </div>
    </div>
  );
}
