import Deliverables from "@/features/deliverables/deliverables";
import { Hero } from "@/features/hero/hero";
import { Area } from "@/features/other-area/area";
import Projects from "@/features/projects/projects";
import ServicesSection from "@/features/service";
import TechnologiaSection from "@/features/technologie";
// import TestimonialSection from "@/features/testimoniales";
import Workflow from "@/features/workflow/woorkflow";
import { Fragment } from "react";
import ChooseUs from "../../../features/choise-us/choose-us";
import { Contact } from "../../../features/contact/contact";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <ChooseUs />
      <ServicesSection />
      <Area />
      <div className="w-full bg-[url(/assets/bg_workflow-1.webp)] bg-no-repeat bg-cover bg-[position:top_-100px] background-workflow">
        <Workflow />
        <Deliverables />
      </div>
      <Projects />
      <TechnologiaSection />
      {/* <TestimonialSection /> */}
      <Contact />
    </Fragment>
  );
}

export default HomePage;
