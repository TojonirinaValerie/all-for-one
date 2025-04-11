"use client";

import { ArrowRight } from "lucide-react";

const STYLES = {
  title: "text-primary 2xl:text-xxxl text-3xl font-bold",
  titleHighlight: "text-accent",
  description: "font-light not-2xl:text-sm",
  buttonContainer:
    "flex not-xl:flex-col flex-wrap justify-center content-center gap-3 mx-auto mt-14",
  buttonCommon: "h-16 w-80 not-2xl:h-12 not-lg:w-80 xl:mx-auto",
  quoteButton:
    "border border-primary hover:bg-[#dce4ef66] text-primary bg-[#dce4ef66] rounded-4xl group relative flex items-center justify-center",
};
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
        Nous mettons en œuvre les technologies adaptées pour booster la
        productivité, <br />
        renforcer la sécurité et optimiser vos opérations quotidiennes.
      </span>
      <div className={STYLES.buttonContainer}>
        <button
          className={`${STYLES.buttonCommon} text-white  bg-primary rounded-4xl cursor-pointer `}
          aria-label="Nous contacter"
        >
          Nous contacter
        </button>

        <button
          className={`${STYLES.buttonCommon} ${STYLES.quoteButton} bg-transparent cursor-pointer`}
          aria-label="Obtenir un devis"
        >
          <span className="text-center">Obtenir un Devis</span>
          <span className="w-0 opacity-0 group-hover:block group-hover:w-12  group-hover:opacity-100 transition-all duration-700 hover:bg-transparent transform group-hover:translate-x-2 ease-in-out">
            <ArrowRight size={28} />
          </span>
        </button>
      </div>
    </div>
  );
}
