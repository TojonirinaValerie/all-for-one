import { ContactBlock } from "./contactBlock";
import { InfoBlock } from "./informationBlock";




export function SecondBlock(){
    return <div className="flex justify-between"> 
        <ContactBlock/>
        <InfoBlock/>
    </div>
}