import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    title: "Application Desktop & Mobile",
    description:
      "Une application spécifique, adaptée aux plateformes iOS/Android ou Desktop",
    imageUrl: "/placeholder.svg?height=400&width=600",
    imageAlt: "Mobile app development",
  },
  {
    id: 2,
    title: "Application Web",
    description:
      "Site vitrine, site E-Commerce, plateforme de blogging, des logiciels sur mesure accessibles depuis un navigateur.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    imageAlt: "Web development",
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Maquettage(UX/UI Design), conception de logos, des affiches, des brochures, des supports marketing, des présentations visuelles, etc",
    imageUrl: "/placeholder.svg?height=400&width=600",
    imageAlt: "Graphic design",
  },
  {
    id: 4,
    title: "Admin Système et Réseau",
    description:
      "Nous offrons des services d'administration système et réseau, incluant l'installation, la configuration et la maintenance de vos serveurs, réseaux et logiciels.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    imageAlt: "System administration",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-slate-600">
            O U R S E R V I C E
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Nos <span className="text-red-500">Services</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Lorem ipsum dolor a amet, consectetur adipiscing elit. Vestibulum
            feugiat pretium velit ac scelerisque. In vitae ligula eget ligula
            pulvinar rutrum convallis id.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              className="bg-[#314968] text-white border-none shadow-lg h-[302px] overflow-hidden relative group"
            >
              <div className="absolute inset-0 z-0 transition-all duration-300 ease-in-out group-hover:opacity-30 group-hover:-translate-y-2 opacity-10">
                <Image
                  src={service.imageUrl || "/placeholder.svg"}
                  alt={service.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-slate-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
