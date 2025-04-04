"use client";

import { Section } from "@/components/section";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="bg-[url(/assets/techno/bg-techno.webp)] w-full h-[100%] sm:h-auto md:h-auto bg-no-repeat bg-cover bg-fixed">
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
                  className="text-gray-400 uppercase tracking-widest "
                  variants={fadeInVariants}
                  custom={0}
                >
                  Technology
                </motion.h3>
                <motion.h2
                  className="text-white text-xxl font-black mt-2"
                  variants={fadeInVariants}
                  custom={0.2}
                >
                  Quelques technologies qui{" "}
                  <span className="text-red-500">alimenteront</span> vos
                  plateformes
                </motion.h2>
                <motion.p
                  className="text-gray-300 mt-4"
                  variants={fadeInVariants}
                  custom={0.4}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum feugiat pretium velit ac scelerisque.
                </motion.p>
              </div>

              <motion.div
                className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0"
                variants={fadeInVariants}
                custom={0.6}
              >
                <Image
                  src="/assets/techno/techno.webp"
                  alt="Technologies"
                  width={500}
                  height={300}
                  className="rounded-lg"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </Section>
      </motion.div>
    </div>
  );
}
