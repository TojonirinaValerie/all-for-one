import { Section } from "@/components/section";
import { ImageCompo } from "./imageCompo";

export function Area() {
  return (
    <Section className="bg-[#F5F7F9] text-center">
      <span className="text-gray-400">Other area of expertise</span>
      <br />
      <span className="text-accent text-xl font-bold">Autre domaine </span>{" "}
      <span className="text-xl font-bold"> d'expertise</span>
      <br />
      <span className="text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
        voluptates delectus inventore, placeat est adipisci saepe minus eligendi
        <br /> exercitationem architecto nihil.
      </span>
      <div className="mt-28 flex gap-5 flex-1 mx-auto">
        <ImageCompo bgImage='assets/area/Frame_154.png' title="INTELLIGENCE ARTIFICIELLE" description="Les projets seront conçus dans l'optique d' être accessible et agréable pour les utilisateurs." imgLink="assets/area/Frame.svg"/>
        <ImageCompo bgImage='assets/area/Frame_155.png' title="MULTIMEDIA" description="Les projets seront conçus dans l'optique d' être accessible et agréable pour les utilisateurs." imgLink="assets/area/Frame-1.svg"/>
        <ImageCompo bgImage='assets/area/Frame_156.png' title="ELECTRONIQUE EMBARQUEE" description="Les projets seront conçus dans l'optique d' être accessible et agréable pour les utilisateurs." imgLink="assets/area/Frame-2.svg"/>
        <ImageCompo bgImage='assets/area/Frame_160.png' title="FORMATION" description="Les projets seront conçus dans l'optique d' être accessible et agréable pour les utilisateurs." imgLink="assets/area/Frame-3.svg"/>
      </div>
    </Section>
  );
}
