import { Section } from "@/components/section";
import { IconLeft } from "./iconLeft";
import { TextCenter } from "./textCenter";

export function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('assets/bg_afo.webp')",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
      }}
    >
      <Section className="flex justify-between h-full">
        <IconLeft />
        <TextCenter />
        <div className=" w-12 " />
      </Section>
    </div>
  );
}
