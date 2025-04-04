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
    image: "http://localhost:3000/assets/project1.png",
  },
  {
    title: "All Tracks",
    description: "",
    image: "http://localhost:3000/assets/project2.png",
  },
  {
    title: "All Tracks",
    description: "",
    image: "http://localhost:3000/assets/project3.png",
  },
  {
    title: "All Tracks",
    description: "",
    image: "http://localhost:3000/assets/project4.png",
  },
];
const Projects = () => {
  return (
    <Section className="flex flex-col items-center text bg-primary/4 min-h-screen gap-6">
      <div className="flex flex-col items-center w-full max-w-[1500px]">
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

        <h2 className="text-foreground/50 tracking-widest">WHY CHOOSE US ?</h2>
        <h1 className="text-xxl font-[800] text-center">
          Pourquoi nous <span className="text-accent">choisir</span> ?
        </h1>
        <p className="text-foreground/50 text-center mt-2">
          Lorem ipsum dolor a amet, consectetur adipiscing elit. Vestibulum
          feugiat pretium velit ac scelerisque. <br />
          In vitae ligula eget ligula pulvinar rutrum convallis id.{" "}
        </p>
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
