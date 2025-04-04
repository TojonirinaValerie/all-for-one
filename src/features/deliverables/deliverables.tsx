"use client";

import { Handshake } from "lucide-react";
import { DataSectionType } from "../choise-us/choose-us";
import { Section } from "@/components/section";
import DeliverableItem from "./deliverable-item";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import SectionTitle, {
  SectionTitleAccent,
  SectionTitleDescription,
  SectionTitleEng,
  SectionTitleTitle,
} from "@/components/section-title";

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
    <Section className="lg:px-0 px-0 sm:px-0 md:px-0 pb-[200px] max-lg:pb-[100px] max-md:pb-8 max-md:pt-0 max-md:mt-0">
      <div
        className="flex flex-row justify-center lg:px-[100px] px-[20px] sm:px-[20px] md:px-[20px] max-lg:mt-0 max-lg:pt-0 
      max-lg:bg-[#FFFFFF] bg-[#F5F7F9AA] w-full max-md:pt-0 max-md:mt-0"
      >
        <div
          className="gap-4 h-[max-content] flex flex-row items-center w-full max-w-[1500px]
           max-md:pt-0 max-md:mt-0
            max-md:flex-col-reverse max-md:pb-0 max-lg:pb-8 "
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
            <SectionTitle>
              <SectionTitleEng align="left">
                WE OFFER YOU DELIVERABLES
              </SectionTitleEng>
              <SectionTitleTitle align="left">
                Nous vous offrons des{" "}
                <SectionTitleAccent>livrables </SectionTitleAccent>
              </SectionTitleTitle>
              <SectionTitleDescription align="left">
                Lorem ipsum dolor a amet, consectetur adipiscing elit.
                Vestibulum feugiat pretium velit ac scelerisque. In vitae ligula
                eget ligula pulvinar rutrum convallis id.
              </SectionTitleDescription>
            </SectionTitle>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Deliverables;
