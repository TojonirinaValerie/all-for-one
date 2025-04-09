"use client";
import { Input } from "@/components/ui/input";
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
    "Application Web",
    "UI/UX Design",
    "Application Desktop & Mobile",
    "Intelligence Artificielle",
    "Admin Système et Réseau ",
    "Multimedia",
    "Eléctronique Embarquée",
    "Formation",
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

  return (
    <footer className="w-full border-t-2 border-[#F2D6D7] bg-white">
      <div className="py-10 px-8 lg:px-48">
        <div className="grid grid-cols-1  gap-6 md:grid-cols-3 lg:grid-cols-6">
          <div className="space-y-1">
            <div className="flex items-start lg:justify-start justify-start">
              <Image
                src="/assets/logo.webp"
                alt="AllForOne Logo"
                width={121}
                height={107}
                className="h-40 w-40 object-contain "
              />
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <div>
                <p>Antananarivo</p>
                <p>Madagasikara</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Phone className="h-5 w-5 text-blue-400" />
              <div>
                <p>(+261) 38 38 774 07</p>
                <p>(+261) 34 52 103 85</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Mail className="h-5 w-5 text-blue-400" />
              <p>contact@allforone.com</p>
            </div>
            <div className="flex items-start space-x-2">
              <Globe className="h-5 w-5 text-blue-400" />
              <p>www.allforone.mg</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-md font-semibold text-[#023759]">
              {`Besoins de plus d'informations ?`}
            </h3>
            <p className="text-sm text-[#396CAA]">
              Nous sommes à votre écoute.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.alt}
                  href={link.href}
                  className="rounded-2xl bg-white p-0 shadow-md hover:shadow-lg transition-all"
                >
                  <Image
                    src={link.src}
                    alt={link.alt}
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-md font-semibold text-[#023759]">
              Liens Rapides
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {quickLinks.map((link) => (
                <li key={link} className="flex items-center space-x-2">
                  <span className="text-[#396CAA]">•</span>
                  <Link href="#" className="text-[#396CAA] hover:text-blue-500">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-md font-semibold text-[#023759]">
              Nos Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {services.map((service) => (
                <li key={service} className="flex items-center space-x-2">
                  <span className="text-[#396CAA]">•</span>
                  <Link href="#" className="text-[#396CAA] hover:text-blue-500">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-md font-semibold text-[#023759]">Newsletter</h3>
            <p className="text-sm text-[#396CAA]">
              Restez informé de nos dernières actualités
            </p>
            <div className="relative flex max-w-md">
              <Input
                type="email"
                placeholder="email"
                className="rounded-full h-12 text-gray-600 border-r-0 bg-[#E0E7E9]"
              />
              <button
                type="submit"
                className="rounded-full h-12 w-12 bg-red-500 hover:bg-red-600 flex items-center justify-center absolute right-0"
              >
                <Send className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-200 bg-[#E6F3FF] py-4 px-16">
        <div className="text-sm text-gray-600 flex flex-col md:flex-row justify-between  items-center">
          <p>© Allforone 2025 - Tous droits réservés</p>
          <p>Crée et développé par Allforone</p>
        </div>
      </div>
    </footer>
  );
}
