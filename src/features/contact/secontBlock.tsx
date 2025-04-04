import { ContactBlock } from "./contactBlock";
import { InfoBlock } from "./informationBlock";




export function SecondBlock(){
    return <div className="flex flex-row justify-between gap-8"> 
        <ContactBlock/>
        <InfoBlock/>
    </div>
}