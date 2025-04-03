"use client";

import { Handshake } from "lucide-react";
import { DataSectionType } from "../choise-us/choose-us";
import { Section } from "@/components/section";
import DeliverableItem from "./deliverable-item";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const workflowData: DataSectionType[] = [
  {
    title: "User Friendly",
    description:
      "Les projets seront conçus dans l’optique d’ être accessible et agréable pour les utilisateurs.",
    icon: <Handshake color="#02385A" />,
  },
  {
    title: "Qualité",
    description:
      "Chaque projet est le fruit d'un savoir-faire excellente et d'un contrôle qualité rigoureux.",
    icon: <Handshake color="#02385A" />,
  },
  {
    title: "Sur-mesure",
    description:
      "Nous façonnons vos projet selon vos exigences spécifiques avec un résultat à la hauteur de vos attentes",
    icon: <Handshake color="#02385A" />,
  },
];

const Deliverables = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  return (
    <Section className="lg:px-0 px-0 sm:px-0 md:px-0 bg-white pb-[400px]">
      <section
        className="lg:px-[100px] px-[20px] sm:px-[20px] md:px-[20px] h-[max-content] flex flex-row items-center max-lg:mt-0 max-lg:pt-0 max-lg:bg-[#FFFFFF] bg-[#F5F7F9] w-full
      max-lg:flex-col-reverse max-lg:pb-8"
      >
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:relative flex-1"
        >
          <div className="flex flex-col items-end justify-center gap-16 lg:absolute left-0 top-[-330px]">
            {workflowData.map((item, index) => (
              <DeliverableItem
                data={item}
                withMargin={index === 1 ? false : true}
                key={`${item.title}`}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView2 ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col flex-1 max-w-[610px] max-2xl:max-w-[461px] max-xl:max-w-[400px] py-32 text"
        >
          <h2 className="text-foreground/50 tracking-widest max-lg:text-center">
            WE OFFER YOU DELIVERABLES
          </h2>
          <h1 className="text-xxl font-[800] max-lg:text-center">
            Nous vous offrons des{" "}
            <span className="text-accent">livrables </span>
          </h1>
          <p className="text-foreground/50 mt-2 max-lg:text-center">
            Lorem ipsum dolor a amet, consectetur adipiscing elit. Vestibulum
            feugiat pretium velit ac scelerisque. In vitae ligula eget ligula
            pulvinar rutrum convallis id.
          </p>
        </motion.div>
      </section>
    </Section>
  );
};

export default Deliverables;
