import { ContactBlock } from "./contactBlock";
import { InfoBlock } from "./informationBlock";




export function SecondBlock(){
    return <div className="flex flex-row not-lg:justify-center justify-between gap-8 max-md:flex-col"> 
        <ContactBlock/>
        <InfoBlock/>
    </div>
}