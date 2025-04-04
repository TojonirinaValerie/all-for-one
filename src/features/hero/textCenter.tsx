"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function TextCenter() {
  return (
    <div className="text-center items-center justify-center xl:my-auto">
      <span className="text-primary 2xl:text-xxxl text-3xl font-bold ">
        VOTRE PARTENAIRE
      </span>{" "}
      <br />
      <span className="text-primary 2xl:text-xxxl text-3xl font-bold">
        {" "}
        POUR LA{" "}
      </span>
      <span className="text-accent 2xl:text-xxxl text-3xl font-bold">
        RÉALISATION
      </span>
      <br />
      <span className="text-primary 2xl:text-xxxl text-3xl font-bold">
        {" "}
        DE VOS{" "}
      </span>
      <span className="text-accent 2xl:text-xxxl text-3xl font-bold">
        PRODUITS DIGITAUX
      </span>{" "}
      <br />
      <span className="font-light not-2xl:text-sm">
        {`Nous vous donnons la technologie nécessaire pour améliorer la
        productivité,`}
        <br />{" "}
        {`la sécurité, et l'excellence opérationnelle globale dans votre
        projet.`}
      </span>
      <div className="flex not-xl:flex-col flex-wrap justify-center content-center gap-3 mx-auto mt-14 ">
        <Button className="bg-primary rounded-4xl h-16 w-80 not-2xl:h-12 not-lg:w-80 xl:mx-auto">
          Nous Contacter
        </Button>
        <Button className="border border-primary hover:bg-[#dce4ef66] text-primary bg-[#dce4ef66] rounded-4xl h-16 w-80 not-2xl:h-12 not-lg:w-80 group relative flex items-center justify-center xl:mx-auto">
          <div className="text-center">Obtenir un Devis</div>
          <div className="w-0 opacity-0 group-hover:block group-hover:w-8 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-x-2 ease-in-out">
            <ArrowRight className="h-14 w-14" />
          </div>
        </Button>
      </div>
    </div>
  );
}