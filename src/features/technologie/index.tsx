"use client";

import { Section } from "@/components/section";
import { motion } from "framer-motion";
import TechnologieAnimation from "./components/technologieAnimation";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function TechnologiaSection() {
  return (
    <section
      className="bg-[url(/assets/techno/bg-techno.webp)] w-full h-[100%] sm:h-auto md:h-auto bg-no-repeat bg-cover bg-fixed"
      id="technologie"
    >
      <motion.div
        className="w-full h-[100%] sm:h-auto md:h-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Section>
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 justify-between">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <motion.h3
                  className={`text-white/50 tracking-widest max-md:text-center uppercase font-light`}
                  variants={fadeInVariants}
                  custom={0}
                >
                  Technology
                </motion.h3>
                <motion.h2
                  className={`text-xxl font-bold  max-md:text-center leading-10 text-white`}
                  variants={fadeInVariants}
                  custom={0.2}
                >
                  Quelques technologies qui{" "}
                  <span className="text-accent">alimenteront</span> vos
                  plateformes
                </motion.h2>
                <motion.p
                  className={`text-white mt-2 max-md:text-center font-light`}
                  variants={fadeInVariants}
                  custom={0.4}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum feugiat pretium velit ac scelerisque.
                </motion.p>
              </div>

              <motion.div
                className="w-full md:w-1/2  flex justify-center md:justify-end mt-6 md:mt-0"
                variants={fadeInVariants}
                custom={0.6}
              >
                <TechnologieAnimation />
              </motion.div>
            </div>
          </div>
        </Section>
      </motion.div>
    </section>
  );
}
