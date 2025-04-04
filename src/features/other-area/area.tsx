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
      "Les projets seront conçus dans l'optique d'être accessible et agréable pour les utilisateurs.",
    imgLink: "/assets/area/Frame.svg",
  },
  {
    bgImage: "/assets/area/Frame_155.png",
    title: "MULTIMEDIA",
    description:
      "Les projets seront conçus dans l'optique d'être accessible et agréable pour les utilisateurs.",
    imgLink: "/assets/area/Frame-1.svg",
  },
  {
    bgImage: "/assets/area/Frame_156.png",
    title: "ELECTRONIQUE EMBARQUEE",
    description:
      "Les projets seront conçus dans l'optique d'être accessible et agréable pour les utilisateurs.",
    imgLink: "/assets/area/Frame-2.svg",
  },
  {
    bgImage: "/assets/area/Frame_160.png",
    title: "FORMATION",
    description:
      "Les projets seront conçus dans l'optique d'être accessible et agréable pour les utilisateurs.",
    imgLink: "/assets/area/Frame-3.svg",
  },
];

export function Area() {
  return (
    <Section className="bg-[#F5F7F9] text-center py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>
          <SectionTitleEng>Other area of expertise</SectionTitleEng>
          <SectionTitleTitle>
            Autre domaine{" "}
            <SectionTitleAccent>d&apos;expertise </SectionTitleAccent>
          </SectionTitleTitle>
          <SectionTitleDescription>
            Lorem ipsum dolor a amet, consectetur adipiscing elit. Vestibulum
            feugiat pretium velit ac scelerisque. In vitae ligula eget ligula
            pulvinar rutrum convallis id.
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
