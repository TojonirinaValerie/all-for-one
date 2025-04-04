"use client";

import { Section } from "@/components/section";
import MapBlock from "./mapBlock";
import { SecondBlock } from "./secontBlock";
import TextContact from "./textContact";

export function Contact() {
  return (
    <Section className="w-full flex flex-row justify-center">
      <div className="max-w-7xl">
        <TextContact />
        <SecondBlock />
        <MapBlock />
      </div>
    </Section>
  );
}
