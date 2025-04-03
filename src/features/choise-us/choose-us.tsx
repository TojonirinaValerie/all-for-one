import { Section } from "@/components/section";

const ChooseUs = () => {
  return (
    <Section className="flex flex-col items-center text">
      <div className="flex flex-col items-center">
        <h2 className="text-foreground/50">WHY CHOOSE US</h2>
        <h1 className="text-xxl font-">
          Pourquoi nous <span className="text-accent">choisir</span> ?
        </h1>
        <p>
          Lorem ipsum dolor a amet, consectetur adipiscing elit. Vestibulum
          feugiat pretium velit ac scelerisque. In vitae ligula eget ligula
          pulvinar rutrum convallis id.{" "}
        </p>
      </div>
    </Section>
  );
};

export default ChooseUs;
