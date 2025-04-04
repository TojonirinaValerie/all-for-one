"use client";

import { Section } from "@/components/section";
import { DataSectionType } from "../choise-us/choose-us";
import { Handshake } from "lucide-react";
import "./style.css";
import WorkflowItem from "./workflow-item";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle, {
  SectionTitleAccent,
  SectionTitleDescription,
  SectionTitleEng,
  SectionTitleTitle,
} from "@/components/section-title";

const workflowData: DataSectionType[] = [
  {
    title: "Prise en main du projet",
    description:
      "Une application spécifique, adaptée aux plateformes iOS/Android ou Desktop",
    icon: <Handshake color="#02385A" />,
  },
  {
    title: "Conception UI & Developpement",
    description:
      "Le traitement et le développement du projet englobent toutes les étapes allant de la conception détaillée des solutions techniques jusqu'à la réalisation des développements",
    icon: <Handshake color="#02385A" />,
  },
  {
    title: "Livraison et SAV",
    description:
      "Notre équipe est à votre écoute pour une installation rapide et un suivi personnalisé.",
    icon: <Handshake color="#02385A" />,
  },
];
const Workflow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  return (
    <Section className="lg:px-0 px-0 sm:px-0 md:px-0 bg-white max-md:pt-8">
      <div className="bg-[#F5F7F9] my-[250px] w-full flex flex-row justify-center max-md:my-0 
      max-md:bg-gradient-to-t max-md:from-[#F5F7F9] to-[#FFFFFF]">
        <div
          className="lg:px-[100px] px-[20px] sm:px-[20px] md:px-[20px] h-[max-content] flex flex-row items-center 
          max-md:flex-col max-lg:mb-0 max-lg:pb-0 max-md:pt-0 w-full max-w-[1500px] max-md:pb-0 max-md:mb-0"
        >
          <motion.div
            ref={ref2}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView2 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col flex-1 max-w-[561px] py-32 z-[90]"
          >
            <SectionTitle>
              <SectionTitleEng align="left">OUR WORKFLOW</SectionTitleEng>
              <SectionTitleTitle align="left">
                Notre flux de <SectionTitleAccent>travail</SectionTitleAccent> ?
              </SectionTitleTitle>
              <SectionTitleDescription align="left">
                Lorem ipsum dolor a amet, consectetur adipiscing elit.
                Vestibulum feugiat pretium velit ac scelerisque. In vitae ligula
                eget ligula pulvinar rutrum convallis id.
              </SectionTitleDescription>
            </SectionTitle>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:relative flex-1"
          >
            <div className="flex flex-col items-end justify-center gap-16 lg:absolute right-0 top-[-330px] max-lg:pb-16">
              {workflowData.map((item, index) => (
                <WorkflowItem
                  data={item}
                  withMargin={index === 1 ? false : true}
                  key={`${item.title}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Workflow;
