import { Section } from "@/components/section";
import { ImageCompo } from "./imageCompo";

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
        <span className="text-gray-400 text-sm md:text-base block mb-2">
          Other area of expertise
        </span>
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          <span className="text-accent">Autre domaine </span>
          <span>{`d'expertise`}</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          voluptates delectus inventore, placeat est adipisci saepe minus
          eligendi exercitationem architecto nihil.
        </p>
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
