import { Section } from "@/components/section";
import { ImageCompo } from "./imageCompo";
import SectionTitle, {
  SectionTitleAccent,
  SectionTitleDescription,
  SectionTitleEng,
  SectionTitleTitle,
} from "@/components/section-title";

interface ExpertiseArea {
  bgImage: string;
  title: string;
  description: string;
  imgLink: string;
}

const expertiseAreas: ExpertiseArea[] = [
  {
    bgImage: "/assets/area/Frame_154.png",
    title: "INTELLIGENCE ARTIFICIELLE",
    description:
      "Des solutions performantes intégrant l'intelligence artificielle, comme des bots, pour automatiser les tâches complexes et simplifier vos processus.",
    imgLink: "/assets/area/Frame.svg",
  },
  {
    bgImage: "/assets/area/Frame_155.png",
    title: "MULTIMEDIA",
    description:
      "Intégration de contenus numériques, modélisation 2D/3D, maquettage, etc. pour créer des expériences interactives et engageantes.",
    imgLink: "/assets/area/Frame-1.svg",
  },
  {
    bgImage: "/assets/area/Frame_156.png",
    title: "ELECTRONIQUE EMBARQUEE",
    description:
      "Des solutions sur mesure intégrant des circuits électroniques comme l'Arduino, pour efficacité, connectivité et automatisation.",
    imgLink: "/assets/area/Frame-2.svg",
  },
  {
    bgImage: "/assets/area/Frame_160.png",
    title: "FORMATION",
    description:
      "Des formations personnalisées sont disponibles pour améliorer vos compétences et maîtriser les technologies informatiques.",
    imgLink: "/assets/area/Frame-3.svg",
  },
];

export function Area() {
  return (
    <Section className="bg-[#F5F7F9] min-h-screen content-center text-center py-12 md:py-16 ">
      <div className=" mx-auto">
        <SectionTitle>
          <SectionTitleEng>Other area of expertise</SectionTitleEng>
          <SectionTitleTitle>
            Autre domaine{" "}
            <SectionTitleAccent>d&apos;expertise </SectionTitleAccent>
          </SectionTitleTitle>
          <SectionTitleDescription>
            Nous proposons aussi des services dans des domaines innovants,
            intégrant les dernières technologies, pour vous préparer aux défis
            du demain
          </SectionTitleDescription>
        </SectionTitle>
      </div>
      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4  max-w-8xl px-4">
        {expertiseAreas.map((area) => (
          <div key={area.title} className="flex justify-center">
            <ImageCompo {...area} />
          </div>
        ))}
      </div>
    </Section>
  );
}
