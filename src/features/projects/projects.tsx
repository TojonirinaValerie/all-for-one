"use client";

import { Section } from "@/components/section";
import ProjectsItem from "./projects-item";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SectionTitle, {
  SectionTitleAccent,
  SectionTitleDescription,
  SectionTitleEng,
  SectionTitleTitle,
} from "@/components/section-title";

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
            Nos{" "}
            <SectionTitleAccent>Projets </SectionTitleAccent>
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
        <Button className="mt-8 border cursor-pointer border-primary hover:bg-[#dce4ef66] text-primary bg-[#dce4ef66] rounded-4xl h-16 w-80">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Voir plus
          </motion.div>
        </Button>
      </div>
    </Section>
  );
};

export default Projects;
