"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectDataType } from "./projects";
import { ArrowRight } from "lucide-react";

const ProjectsItem: React.FC<{ data: ProjectDataType }> = ({ data }) => {
  const { title, description, image } = data;
  return (
    <article className="w-full rounded-[40px] aspect-[791/618] relative flex flex-col justify-end overflow-hidden">
      <img src={image} alt="" className="absolute w-full object-cover" />
      <motion.div
        initial={{ opacity: 1, y: 10 }}
        animate={{ opacity: 1, y:0 }}
        whileHover={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.3 }}
        className="absolute p-10 z-50 bg-gradient-to-b from-[#00000000] to-[#000000] h-full flex flex-col justify-end w-full"
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-xl max-2xl:text-lg text-project-card-foreground">{title}</h1>
          <p className="text-lg max-2xl:text-base text-project-card-foreground">
            Role: Dashboard
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute p-6 z-50 bg-gradient-to-b from-[#00000000] to-[#000000] h-full flex flex-col justify-between"
      >
        <div className="flex flex-row justify-end">
          <p className="bg-[#D94336] text-[#ECF0F3] px-5 py-1 rounded-[10px]">
            2024
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <div className="p-6 border-[#FAECEB] border-[2px] rounded-full hover:-rotate-45 cursor-pointer transition">
            <ArrowRight size={48} strokeWidth={1.25} color="#FFFFFF" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="text-xl  max-2xl:text-lg text-project-card-foreground">{title}</h1>
            <p className="text-lg max-2xl:text-base text-project-card-foreground">
              Role: Dashboard
            </p>
          </div>
          <p className="text-project-card-foreground leading-5 text-md max-2xl:text-lg font-[300] max-2xl:leading-6">
            Un logiciel equipé d’un dispositif électronique permettant de suivre
            en temps réel les déplacements des agents (coursiers, livreurs, etc)
            d’une entreprise.
          </p>
        </div>
      </motion.div>
    </article>
  );
};

export default ProjectsItem;
