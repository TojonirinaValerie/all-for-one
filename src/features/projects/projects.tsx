"use client";

import { Section } from "@/components/section";
import SectionTitle, {
  SectionTitleAccent,
  SectionTitleDescription,
  SectionTitleEng,
  SectionTitleTitle,
} from "@/components/section-title";
// import { ArrowRight } from "lucide-react";
import ProjectsItem from "./projects-item";

export type ProjectDataType = {
  title: string;
  description: string;
  image: string;
  date: string;
  type: string;
};
const ProjectsData: ProjectDataType[] = [
  {
    title: "MadaDiaspora",
    description:
      "Un portail web pour le réseau de la Diaspora Malagasy afin de favoriser la collaboration, l'entraide et le partage d'expériences et d'opportunités entre les Malgaches dispersés à travers le monde.",
    date: "2025",
    type: "Portail web",
    image: "/assets/diaspora.webp",
  },
  {
    title: "KayKeny",
    description:
      "Un site vitrine conçu pour KayKeny afin de présenter son entreprise, ses créations et son catalogue de vêtements pour renforcer sa présence en ligne",
    type: "Site Vitrine",
    date: "2024",
    image: "/assets/project2.png",
  },
  {
    title: "GemManager",
    description: "Une application web créée pour l'entreprise \"GemLab Consulting\" pour gérer ses activités et son processus de fonctionnement (clients, factures, certificats,etc.).",
    date: "2024",
    type: "Application web",
    image: "/assets/glc.webp",
  },
  {
    title: "AtariaTech",
    description: "Un site e-commerce  développé pour \"Ataria Tech\" permettant la vente de matériel informatique. Il offre un catalogue dynamique et intuitive pour simplifier les achats des clients",
    date: "2025",
    type: "Site e-commerce",
    image: "/assets/ataria.webp",
  },
];
const Projects = () => {
  return (
    <Section
      className="flex flex-col items-center text bg-primary/4 gap-6"
      id="projects"
    >
      <div className="flex flex-col items-center w-full max-w-[1500px]">
        <SectionTitle>
          <SectionTitleEng>OUR PROJECT</SectionTitleEng>
          <SectionTitleTitle>
            Nos <SectionTitleAccent>Projets </SectionTitleAccent>
          </SectionTitleTitle>
          <SectionTitleDescription>
            Explorez nos projets réalisés, mettant en avant notre expertise,
            créativité et capacité à transformer vos idées en solutions
            concrètes et efficaces.
          </SectionTitleDescription>
        </SectionTitle>
        <div
          className="w-full grid grid-cols-2 gap-8 mt-10
            max-2xl:gap-10
            max-lg:gap-6
            max-md:grid-cols-1
            "
        >
          {ProjectsData.map((item, index) => (
            <ProjectsItem key={`${index}-${item.title}`} data={item} />
          ))}
        </div>
        {/* <button className="mt-6 border bg-transparent cursor-pointer border-primary hover:bg-transparent px-12 py-3 text-primary  rounded-4xl not-2xl:h-12 not-lg:w-80 group relative flex items-center justify-center xl:mx-auto">
          <div className="text-center">Voir plus</div>
          <div className="w-0 opacity-0 group-hover:block group-hover:w-12 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-x-2 ease-in-out">
            <ArrowRight size={24} />
          </div>
        </button> */}
      </div>
    </Section>
  );
};

export default Projects;
