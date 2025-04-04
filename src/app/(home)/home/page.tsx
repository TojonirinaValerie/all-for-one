import ChooseUs from "@/features/choise-us/choose-us";
import Deliverables from "@/features/deliverables/deliverables";
import { Contact } from "@/features/contact/contact";
import { Hero } from "@/features/hero/hero";
import { Area } from "@/features/other-area/area";
import Projects from "@/features/projects/projects";
import Workflow from "@/features/workflow/woorkflow";
import ServicesSection from "@/features/service";
import TechnologiaSection from "@/features/technologie";
import TestimonialSection from "@/features/testimoniales";
import { Fragment } from "react";
import Image from "next/image";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <ChooseUs />
      <ServicesSection />
      <Area />
      <div className="w-full bg-[url(/assets/bg_workflow.png)] bg-no-repeat bg-cover bg-fixed">
        {/* <img
          src="/assets/bg_workflow.png"
          className="w-full h-full absolute object-cover right-0"
          alt=""
        /> */}
        <Workflow />
        <Deliverables />
      </div>
      <Projects />
      <TechnologiaSection />
      <TestimonialSection />
      <Contact />
    </Fragment>
  );
}

export default HomePage;
