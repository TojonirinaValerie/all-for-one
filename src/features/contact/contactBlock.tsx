import { Button } from "@/components/ui/button";
import { InputForm } from "./inputForm";



export function ContactBlock(){
    return <div className="h-[550px] w-[630px] rounded-4xl border p-5 flex flex-col gap-6">
        <div className="flex flex-wrap gap-3 w-full">
        <InputForm title="Your Mail" placeholder="example@test.com"/>
        <InputForm title="Your phone" placeholder="+261-0-0-0-000"/>
        </div>
        <InputForm title="Your Address" placeholder="Antananarivo, Madagascar"/>
        <InputForm title="Message" placeholder="Write your Message here..."/>
        <Button className="h-14 w-full rounded-4xl">Send Message</Button>
    </div>
}