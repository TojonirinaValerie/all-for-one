"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const quickLinks = [
    "Pourquoi nous choisir",
    "Nous contacter",
    "Nos Technologies",
    "Témoignages",
  ];

  const services = [
    "Électronique Embarquée",
    "Application Web",
    "UI/UX Design",
    "Application Desktop",
    "Application Mobile",
    "Développement IoT",
  ];

  const socialLinks = [
    {
      href: "https://facebook.com/allforone",
      src: "/assets/facebook.svg",
      alt: "Facebook",
      color: "text-blue-600",
    },
    {
      href: "https://linkedin.com/company/allforone",
      src: "/assets/linkedin.svg",
      alt: "LinkedIn",
      color: "text-blue-500",
    },
    {
      href: "https://discord.gg/allforone",
      src: "/assets/discord.svg",
      alt: "Discord",
      color: "text-indigo-600",
    },
    {
      href: "https://wa.me/261383877407",
      src: "/assets/whatsapp.svg",
      alt: "WhatsApp",
      color: "text-green-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="w-full border-t-2 border-[#F2D6D7] bg-white">
      <div className="py-16 px-8">
        <motion.div
          className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="space-y-1">
            <div className="flex items-start lg:justify-center md:justify-center sm:justify-start">
              <Image
                src="/assets/logo.webp"
                alt="AllForOne Logo"
                width={121}
                height={107}
                className="h-28 w-28 object-fill"
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-2 mt-2 text-sm text-gray-600"
          >
            <motion.div
              variants={textVariants}
              className="flex items-start space-x-2"
            >
              <MapPin className="h-5 w-5 text-blue-400" />
              <div>
                <p>Antananarivo</p>
                <p>Madagasikara</p>
              </div>
            </motion.div>
            <motion.div
              variants={textVariants}
              className="flex items-start space-x-2"
            >
              <Phone className="h-5 w-5 text-blue-400" />
              <div>
                <p>(+261) 38 38 774 07</p>
                <p>(+261) 34 52 103 85</p>
              </div>
            </motion.div>
            <motion.div
              variants={textVariants}
              className="flex items-start space-x-2"
            >
              <Mail className="h-5 w-5 text-blue-400" />
              <p>contact@allforone.com</p>
            </motion.div>
            <motion.div
              variants={textVariants}
              className="flex items-start space-x-2"
            >
              <Globe className="h-5 w-5 text-blue-400" />
              <p>www.allforone.mg</p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1">
            <motion.h3
              variants={textVariants}
              className="text-md font-semibold text-[#023759]"
            >
              {`Besoins de plus d'informations ?`}
            </motion.h3>
            <motion.p
              variants={textVariants}
              className="text-sm text-[#396CAA]"
            >
              Nous sommes à votre écoute.
            </motion.p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.alt}
                  href={link.href}
                  className="rounded-2xl bg-white p-0 shadow-md hover:shadow-lg transition-all"
                >
                  <Image
                    src={link.src}
                    alt={link.alt}
                    width={48}
                    height={48}
                    className={`h-12 w-12 ${link.color}`}
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <motion.h3
              variants={textVariants}
              className="text-md font-semibold text-[#023759]"
            >
              Liens Rapides
            </motion.h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {quickLinks.map((link) => (
                <motion.li
                  key={link}
                  variants={textVariants}
                  className="flex items-center space-x-2"
                >
                  <span className="text-[#396CAA]">•</span>
                  <Link href="#" className="text-[#396CAA] hover:text-blue-500">
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <motion.h3
              variants={textVariants}
              className="text-md font-semibold text-[#023759]"
            >
              Nos Services
            </motion.h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {services.map((service) => (
                <motion.li
                  key={service}
                  variants={textVariants}
                  className="flex items-center space-x-2"
                >
                  <span className="text-[#396CAA]">•</span>
                  <Link href="#" className="text-[#396CAA] hover:text-blue-500">
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <motion.h3
              variants={textVariants}
              className="text-md font-semibold text-[#023759]"
            >
              Newsletter
            </motion.h3>
            <motion.div variants={textVariants} className="space-y-2">
              <p className="text-sm text-[#396CAA]">Restez informé</p>
              <p className="text-sm text-[#396CAA]">
                de nos dernières actualités
              </p>
            </motion.div>
            <div className="flex max-w-md">
              <Input
                type="email"
                placeholder="email"
                className="rounded-l-full h-12 text-gray-600 rounded-r-none border-r-0 bg-[#E0E7E9]"
              />
              <Button
                type="submit"
                className="rounded-full h-12 w-12 relative right-5 p-0 bg-red-500 hover:bg-red-600"
              >
                <Send className="h-5 w-5 text-white" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="w-full border-t border-gray-200 rounded-tl-3xl rounded-tr-3xl bg-[#E6F3FF] py-4 px-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="">
          <div className="flex flex-col items-center justify-between space-y-2 text-sm text-gray-600 md:flex-row md:space-y-0">
            <motion.div variants={textVariants}>
              <p>www.allforone.mg</p>
              <p>Crée et développé par Allforone</p>
            </motion.div>
            <motion.div variants={textVariants}>
              <p>©Allforone 2025 - Tous droits réservés</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
