
import { Section } from "@/components/section";
import SectionTitle, { SectionTitleAccent, SectionTitleDescription, SectionTitleEng, SectionTitleTitle } from "@/components/section-title";
import { Handshake, HeartHandshake, Lightbulb, Puzzle } from "lucide-react";
import ChooseUsItem from "./choose-us-item";

export type DataSectionType = {
  title: string;
  icon: React.ElementType<any, any>;
  description: string;
};

const chooseUsData: DataSectionType[] = [
  {
    title: "Votre Projet, Notre Passion",
    icon: <Handshake color="white" size={38} strokeWidth={1.25} />,
    description:
      "Notre équipe d'experts passionnés est dédiée à vous offrir des solutions digitales sur-mesure, adaptées à vos besoins spécifiques et à votre budget.",
  },
  {
    title: "Créativité et Résultat ",
    icon: <Lightbulb color="white" size={38} strokeWidth={1.25} />,
    description:
      "Nous allions créativité et stratégie pour concevoir des expériences digitales uniques qui boostent votre visibilité et votre chiffre d'affaires.",
  },
  {
    title: "Du Concept à la Réalisation",
    icon: <Puzzle color="white" size={38} strokeWidth={1.25} />,
    description:
      "Nous vous accompagnons à chaque étape de votre projet, de la stratégie à la mise en ligne, pour garantir un résultat à la hauteur de vos attentes.",
  },
  {
    title: "Un Partenaire de Confiance",
    icon: <HeartHandshake color="white" size={38} strokeWidth={1.25} />,
    description:
      "En choisissant notre agence, bénéficiez de notre aide pour vous démarquer de la concurrence.",
  },
];

const ChooseUs = () => {
  return (
    <Section className="max-sm:px-8 max-md:px-12 max-lg:px-12 max-xl:12 flex flex-col items-center text bg-primary/4  gap-6">
      <div className="flex flex-col items-center max-w-[1500px]">
        <SectionTitle>
          <SectionTitleEng>WHY CHOOSE US ?</SectionTitleEng>
          <SectionTitleTitle>
            Pourquoi nous <SectionTitleAccent>choisir</SectionTitleAccent> ?
          </SectionTitleTitle>
          <SectionTitleDescription>
            Lorem ipsum dolor a amet, consectetur adipiscing elit. Vestibulum
            feugiat pretium velit ac scelerisque. <br />
            In vitae ligula eget ligula pulvinar rutrum convallis id.{" "}
          </SectionTitleDescription>
        </SectionTitle>
        <div
          className="grid grid-cols-2 gap-16 mt-10 
        max-2xl:gap-10
        max-md:grid-cols-1"
        >
          {chooseUsData.map((item, index) => (
            <ChooseUsItem key={`${item.title}-${index}`} data={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ChooseUs;
