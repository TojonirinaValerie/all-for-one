import { Handshake } from "lucide-react";
import { DataSectionType } from "../choise-us/choose-us";
import { Section } from "@/components/section";
import DeliverableItem from "./deliverable-item";

const workflowData: DataSectionType[] = [
  {
    title: "User Friendly",
    description:
      "Les projets seront conçus dans l’optique d’ être accessible et agréable pour les utilisateurs.",
    icon: <Handshake color="#02385A" />,
  },
  {
    title: "Qualité",
    description:
      "Chaque projet est le fruit d'un savoir-faire excellente et d'un contrôle qualité rigoureux.",
    icon: <Handshake color="#02385A" />,
  },
  {
    title: "Sur-mesure",
    description:
      "Nous façonnons vos projet selon vos exigences spécifiques avec un résultat à la hauteur de vos attentes",
    icon: <Handshake color="#02385A" />,
  },
];

const Deliverables = () => {
  return (
    <Section className="lg:px-0 px-0 sm:px-0 md:px-0 py-[80px] max-lg:px-0 bg-white pb-[400px]">
      <div className="lg:px-[100px] px-[20px] sm:px-[20px] md:px-[20px] py-[80px] h-[max-content] flex flex-row items-center bg-[#F5F7F9] my-[250px] max-md:flex-col">
        <div className="relative flex-1">
          <div className="flex flex-col items-end justify-center gap-16 absolute left-0 top-[-330px]">
            {workflowData.map((item, index) => (
              <DeliverableItem
                data={item}
                withMargin={index === 1 ? false : true}
                key={`${item.title}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1 max-w-[561px] max-xl:max-w-[400px] py-32">
          <h2 className="text-foreground/50 tracking-widest">
            WE OFFER YOU DELIVERABLES
          </h2>
          <h1 className="text-xxl font-[800]">
            Nous vous offrons des{" "}
            <span className="text-accent">livrables </span>
          </h1>
          <p className="text-foreground/50 mt-2">
            Lorem ipsum dolor a amet, consectetur adipiscing elit. Vestibulum
            feugiat pretium velit ac scelerisque. In vitae ligula eget ligula
            pulvinar rutrum convallis id.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Deliverables;
