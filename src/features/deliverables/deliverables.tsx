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
    <Section className="px-0 bg-white pb-[400px]">
      <section className="px-[150px] h-[max-content] flex flex-row items-center bg-[#F5F7F9] w-full">
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex-1"
        >
          <div className="flex flex-col items-end justify-center gap-16 absolute left-0 top-[-330px]">
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
          className="flex flex-col flex-1 max-w-[610px] max-2xl:max-w-[461px] py-32"
        >
          <h2 className="text-foreground/50 tracking-widest">
            WE OFFER YOU DELIVERABLES
          </h2>
          <h1 className="text-xxl font-[800]">
            Nous vous offrons des{" "}
            <span className="text-accent">livrables </span>
          </h1>
          <p className="text-foreground/50 mt-2">
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
