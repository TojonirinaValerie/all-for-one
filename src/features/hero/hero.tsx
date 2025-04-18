import { Section } from "@/components/section";
import { IconLeft } from "./iconLeft";
import { TextCenter } from "./textCenter";

export function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('assets/bg_afo.webp')",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
      }}
      id="accueil"
    >
      <Section className="flex flex-row justify-between not-xl:flex-col not-xl:gap-5 not-xl:justify-center h-full pt-32" >
        <IconLeft />
        <TextCenter />
        <div className=" w-12 " />
      </Section>
    </section>
  );
}
