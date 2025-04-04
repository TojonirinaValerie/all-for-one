import { Section } from "@/components/section";
import TextContact from "./textContact";
import { SecondBlock } from "./secontBlock";
import { MapBlock } from "./mapBlock";



export function Contact(){
    return <Section>
        <TextContact/>
        <SecondBlock/>
        <MapBlock/>
    </Section>
}