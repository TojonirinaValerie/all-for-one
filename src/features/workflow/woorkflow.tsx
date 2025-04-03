"use client";

import { Section } from "@/components/section";
import { DataSectionType } from "../choise-us/choose-us";
import { Handshake } from "lucide-react";
import "./style.css";
import WorkflowItem from "./workflow-item";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <Section className="px-0 bg-white">
      <section className="px-[150px] h-[max-content] flex flex-row items-center bg-[#F5F7F9] my-[250px]">
        <motion.div
          ref={ref2}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView2 ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col flex-1 max-w-[561px] py-32 z-[90]"
        >
          <h2 className="text-foreground/50 tracking-widest">OUR WORKFLOW</h2>
          <h1 className="text-xxl font-[800]">
            Notre flux de <span className="text-accent">travail</span> ?
          </h1>
          <p className="text-foreground/50 mt-2">
            Lorem ipsum dolor a amet, consectetur adipiscing elit. Vestibulum
            feugiat pretium velit ac scelerisque. In vitae ligula eget ligula
            pulvinar rutrum convallis id.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex-1"
        >
          <div className="flex flex-col items-end justify-center gap-16 absolute right-0 top-[-330px]">
            {workflowData.map((item, index) => (
              <WorkflowItem
                data={item}
                withMargin={index === 1 ? false : true}
                key={`${item.title}`}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </Section>
  );
};

export default Workflow;
