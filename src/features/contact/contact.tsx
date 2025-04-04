import { Section } from "@/components/section";
import TextContact from "./textContact";
import { SecondBlock } from "./secontBlock";
import { MapBlock } from "./mapBlock";

export function Contact() {
  return (
    <Section className="w-full flex flex-row justify-center" id="contact">
      <div>
        <TextContact />
        <SecondBlock />
        <MapBlock />
      </div>
    </Section>
  );
}
