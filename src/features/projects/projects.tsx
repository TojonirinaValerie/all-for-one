"use client";

import { Section } from "@/components/section";
import ProjectsItem from "./projects-item";
import { Button } from "@/components/ui/button";
import SectionTitle, {
  SectionTitleAccent,
  SectionTitleDescription,
  SectionTitleEng,
  SectionTitleTitle,
} from "@/components/section-title";
import { ArrowRight } from "lucide-react";

export type ProjectDataType = {
  title: string;
  description: string;
  image: string;
};
const ProjectsData: ProjectDataType[] = [
  {
    title: "All Tracks",
    description: "",
    image: "/assets/project1.png",
  },
  {
    title: "All Tracks",
    description: "",
    image: "/assets/project2.png",
  },
  {
    title: "All Tracks",
    description: "",
    image: "/assets/project3.png",
  },
  {
    title: "All Tracks",
    description: "",
    image: "/assets/project4.png",
  },
];
const Projects = () => {
  return (
    <Section className="flex flex-col items-center text bg-primary/4 gap-6">
      <div className="flex flex-col items-center w-full max-w-[1500px]">
        <SectionTitle>
          <SectionTitleEng>OUR PROJECT</SectionTitleEng>
          <SectionTitleTitle>
            Nos <SectionTitleAccent>Projets </SectionTitleAccent>
          </SectionTitleTitle>
          <SectionTitleDescription>
            Lorem ipsum dolor a amet, consectetur adipiscing elit. Vestibulum
            feugiat pretium velit ac scelerisque. In vitae ligula eget ligula
            pulvinar rutrum convallis id.
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
        <Button className="border border-primary hover:bg-[#dce4ef66] text-primary bg-[#dce4ef66] rounded-4xl h-16 w-80 not-2xl:h-12 not-lg:w-80 group relative flex items-center justify-center xl:mx-auto">
          <div className="text-center">Obtenir un Devis</div>
          <div className="w-0 opacity-0 group-hover:block group-hover:w-8 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-x-2 ease-in-out">
            <ArrowRight className="h-14 w-14" />
          </div>
        </Button>
      </div>
    </Section>
  );
};

export default Projects;
