"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function TextCenter() {
  return (
    <div className="text-center items-center justify-center my-auto">
      <span className="text-primary text-5xl font-black ">
        VOTRE PARTENAIRE
      </span>{" "}
      <br />
      <span className="text-primary text-xxxl font-black"> POUR LA </span>
      <span className="text-accent text-xxxl font-black">RÉALISATION</span>
      <br />
      <span className="text-primary text-xxxl font-black"> DE VOS </span>
      <span className="text-accent text-xxxl font-black">
        PRODUITS DIGITAUX
      </span>{" "}
      <br />
      <span className="font-light">
        Nous vous donnons la technologie nécessaire pour améliorer la
        productivité,
        <br />{" "}
        {`la sécurité, et l'excellence opérationnelle globale dans votre
        projet.`}
      </span>
      <div className="flex gap-3 mx-auto mt-14">
        <Button className="bg-primary rounded-4xl h-16 w-80 ">
          Nous Contacter
        </Button>
        <Button className="border border-primary hover:bg-[#dce4ef66] text-primary bg-[#dce4ef66] rounded-4xl h-16 w-80">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Obtenir un Devis
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="ml-2 opacity-0 group-hover:opacity-100"
          >
            <ArrowRight />
          </motion.div>
        </Button>
      </div>
    </div>
  );
}
