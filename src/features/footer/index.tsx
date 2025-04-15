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
    "Électronique Embarquée",
    "Application Web",
    "UI/UX Design",
    "Application Desktop",
    "Application Mobile",
    "Développement IoT",
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61565939655126",
      src: "/assets/facebook.svg",
      alt: "Facebook",
    },
    {
      href: "https://www.linkedin.com/company/allforonemg/posts/?feedView=all",
      src: "/assets/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://discord.gg/7NZBZ97e2W",
      src: "/assets/discord.svg",
      alt: "Discord",
    },
    {
      href: "https://wa.me/+261345210385",
      src: "/assets/whatsapp.svg",
      alt: "WhatsApp",
    },
  ];

  return (
    <footer className="w-full border-t-2 border-[#F2D6D7] bg-white">
      <div className="flex flex-row justify-between py-16 px-8 gap-4 max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className="">
          <Image
            src="/assets/logo.webp"
            alt="AllForOne Logo"
            width={121}
            height={107}
            className="w-[121px]"
          />
        </div>

        <div className="text-sm text-[#023759] flex flex-col gap-4">
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

        <div className="flex flex-col gap-4">
          <h3 className="text-md font-semibold text-[#023759]">
            {`Besoins de plus d'informations ?`}
          </h3>
          <p className="text-sm text-[#396CAA]">Nous sommes à votre écoute.</p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.alt}
                href={link.href}
                target="_blank"
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

        <div className="flex flex-col gap-4">
          <h3 className="text-md font-semibold text-[#023759]">
            Liens Rapides
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
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

        <div className="flex flex-col gap-4">
          <h3 className="text-md font-semibold text-[#023759]">Nos Services</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
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

        <div className="flex flex-col gap-4">
          <h3 className="text-md font-semibold text-[#023759]">Newsletter</h3>
          <p className="text-sm text-[#396CAA]">
            Restez à jour avec nos dernières actualités.
          </p>
          <div className="relative flex max-w-md">
            <Input
              type="email"
              placeholder="email"
              className="rounded-full h-12 text-gray-600 border-r-0 bg-[#B3D1D825] border-[#FFFFFF]/20 placeholder:text-[#35414B]/40"
            />
            <button
              type="submit"
              className="rounded-full h-14 w-14 bg-[#DA4338] hover:bg-[#DA4338]/80 flex items-center justify-center absolute top-[-4px] right-0
              border-[3px] border-[#FFFFFF]/20"
            >
              <Send className="h-5 w-5 text-white" />
            </button>
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
