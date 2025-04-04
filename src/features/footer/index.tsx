"use client";
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
    },
    {
      href: "https://linkedin.com/company/allforone",
      src: "/assets/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://discord.gg/allforone",
      src: "/assets/discord.svg",
      alt: "Discord",
    },
    {
      href: "https://wa.me/261383877407",
      src: "/assets/whatsapp.svg",
      alt: "WhatsApp",
    },
  ];

  const textVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  });

  return (
    <footer className="w-full border-t-2 border-[#F2D6D7] bg-white">
      <div className="py-16 px-8">
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={textVariants(0)} className="space-y-1">
            <div className="flex items-start lg:justify-center">
              <Image
                src="/assets/logo.webp"
                alt="AllForOne Logo"
                width={121}
                height={107}
                className="h-28 w-28"
              />
            </div>
          </motion.div>

          <motion.div
            variants={textVariants(0.2)}
            className="space-y-2 text-sm text-gray-600"
          >
            <motion.div
              variants={textVariants(0.3)}
              className="flex items-start space-x-2"
            >
              <MapPin className="h-5 w-5 text-blue-400" />
              <div>
                <p>Antananarivo</p>
                <p>Madagasikara</p>
              </div>
            </motion.div>
            <motion.div
              variants={textVariants(0.4)}
              className="flex items-start space-x-2"
            >
              <Phone className="h-5 w-5 text-blue-400" />
              <div>
                <p>(+261) 38 38 774 07</p>
                <p>(+261) 34 52 103 85</p>
              </div>
            </motion.div>
            <motion.div
              variants={textVariants(0.5)}
              className="flex items-start space-x-2"
            >
              <Mail className="h-5 w-5 text-blue-400" />
              <p>contact@allforone.com</p>
            </motion.div>
            <motion.div
              variants={textVariants(0.6)}
              className="flex items-start space-x-2"
            >
              <Globe className="h-5 w-5 text-blue-400" />
              <p>www.allforone.mg</p>
            </motion.div>
          </motion.div>

          <motion.div variants={textVariants(0.3)} className="space-y-2">
            <motion.h3
              variants={textVariants(0.4)}
              className="text-md font-semibold text-[#023759]"
            >
              {`  Besoins de plus d'informations ?`}
            </motion.h3>
            <motion.p
              variants={textVariants(0.5)}
              className="text-sm text-[#396CAA]"
            >
              Nous sommes à votre écoute.
            </motion.p>
            <motion.div variants={textVariants(0.6)} className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.alt}
                  href={link.href}
                  className="rounded-2xl bg-white p-0 shadow-md hover:shadow-lg transition-all"
                  variants={textVariants(0.7 + index * 0.1)}
                >
                  <Image
                    src={link.src}
                    alt={link.alt}
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={textVariants(0.5)} className="space-y-2">
            <motion.h3
              variants={textVariants(0.6)}
              className="text-md font-semibold text-[#023759]"
            >
              Liens Rapides
            </motion.h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link}
                  variants={textVariants(0.7 + index * 0.1)}
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

          <motion.div variants={textVariants(0.8)} className="space-y-2">
            <motion.h3
              variants={textVariants(0.9)}
              className="text-md font-semibold text-[#023759]"
            >
              Nos Services
            </motion.h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  variants={textVariants(1 + index * 0.1)}
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

          <motion.div variants={textVariants(1)} className="space-y-2">
            <motion.h3
              variants={textVariants(1.1)}
              className="text-md font-semibold text-[#023759]"
            >
              Newsletter
            </motion.h3>
            <motion.p
              variants={textVariants(1.2)}
              className="text-sm text-[#396CAA]"
            >
              Restez informé de nos dernières actualités
            </motion.p>
            <motion.div variants={textVariants(1.3)} className="relative flex max-w-md">
              <Input
                type="email"
                placeholder="email"
                className="rounded-full h-12 text-gray-600 border-r-0 bg-[#E0E7E9]"
              />
              <motion.button
                type="submit"
                className="rounded-full h-12 w-12 bg-red-500 hover:bg-red-600 flex items-center justify-center absolute right-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Send className="h-5 w-5 text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="w-full border-t border-gray-200 bg-[#E6F3FF] py-4 px-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <motion.p variants={textVariants(1.4)}>
            © Allforone 2025 - Tous droits réservés
          </motion.p>
          <motion.p variants={textVariants(1.5)}>
            Crée et développé par Allforone
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
}
