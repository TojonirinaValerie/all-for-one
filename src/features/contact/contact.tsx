"use client";

import { Section } from "../../components/section";
import MapBlock from "./mapBlock";
import { SecondBlock } from "./secontBlock";
import TextContact from "./textContact";

export function Contact() {
  return (
    <Section id="contact" className="w-full flex flex-row justify-center">
      <div className="max-w-[1450px]">
        <TextContact />
        <SecondBlock />
        <MapBlock />
      </div>
    </Section>
  );
}
