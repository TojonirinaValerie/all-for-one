"use client";

import { Section } from "@/components/section";
import SectionTitle, {
  SectionTitleAccent,
  SectionTitleDescription,
  SectionTitleEng,
  SectionTitleTitle,
} from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    title: "Application Desktop & Mobile",
    description:
      "Une application spécifique, adaptée aux plateformes iOS/Android ou Desktop",
    imageUrl: "/assets/services/application.webp",
    imageAlt: "Mobile app development",
  },
  {
    id: 2,
    title: "Application Web",
    description:
      "Site vitrine, site E-Commerce, plateforme de blogging, des logiciels sur mesure accessibles depuis un navigateur.",
    imageUrl: "/assets/services/web.webp",
    imageAlt: "Web development",
  },
  {
    id: 3,
    title: "Admin Système et Réseau",
    description:
      "Nous offrons des services d'administration système et réseau, incluant l'installation, la configuration et la maintenance de vos serveurs, réseaux et logiciels.",
    imageUrl: "/assets/services/system.webp",
    imageAlt: "System administration",
  },
  {
    id: 4,
    title: "Graphic Design",
    description:
      "Maquettage(UX/UI Design), conception de logos, des affiches, des brochures, des supports marketing, des présentations visuelles, etc",
    imageUrl: "/assets/services/graphic.webp",
    imageAlt: "Graphic design",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const cardVariants = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hidden: (isEven: any) => ({
    opacity: 0,
    x: isEven ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.8,
    },
  },
};

export default function ServicesSection() {
  return (
    <Section id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            <SectionTitleEng>OUR SERVICE</SectionTitleEng>
            <SectionTitleTitle>
              Nos{" "}
              <SectionTitleAccent>Services </SectionTitleAccent>
            </SectionTitleTitle>
            <SectionTitleDescription>
              Lorem ipsum dolor a amet, consectetur adipiscing elit. Vestibulum
              feugiat pretium velit ac scelerisque. In vitae ligula eget ligula
              pulvinar rutrum convallis id.
            </SectionTitleDescription>
          </SectionTitle>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index % 2 === 0}
              variants={cardVariants}
            >
              <Card className="bg-[#314968] text-white border-none shadow-lg w-[703x] h-[302px] overflow-hidden relative p-6 md:p-8 lg:p-10 group">
                <div className="absolute bottom-0 -right-5 z-0 transition-all duration-300 ease-in-out opacity-10 group-hover:opacity-80 translate-y-10 group-hover:translate-y-0">
                  <div className="transform transition-all duration-300 ease-in-out group-hover:scale-110 origin-bottom-right">
                    <Image
                      src={service.imageUrl || "/placeholder.svg"}
                      alt={service.imageAlt}
                      width={213}
                      height={163}
                      className="w-52 h-40 object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-3xl">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 mb-6 max-w-[400px] line-clamp-4 text-sm font-semibold transition-all duration-300 group-hover:text-md">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    <Button
                      variant="outline"
                      className="bg-white text-[#314968] hover:bg-slate-100 border-none w-36 h-16 rounded-2xl font-semibold text-sm transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100"
                    >
                      Découvrir
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
