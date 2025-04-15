"use client";

import { Section } from "@/components/section";
import SectionTitle, {
  SectionTitleAccent,
  SectionTitleDescription,
  SectionTitleEng,
  SectionTitleTitle,
} from "@/components/section-title";
import { motion } from "framer-motion";
import ServiceCard from "./serviceCard";

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

export default function ServicesSection() {
  return (
    <Section id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            <SectionTitleEng>OUR SERVICE</SectionTitleEng>
            <SectionTitleTitle>
              Nos <SectionTitleAccent>Services </SectionTitleAccent>
            </SectionTitleTitle>
            <SectionTitleDescription>
              Explorez nos prestations conçues pour satisfaire vos besoins,
              transformer vos idées en réalisations concrètes et maximiser
              l&apos;impact de votre projet
            </SectionTitleDescription>
          </SectionTitle>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {servicesData.map((service, index) => (
            <ServiceCard service={service} index={index} key={service.id} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
