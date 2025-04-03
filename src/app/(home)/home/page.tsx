import ChooseUs from "@/features/choise-us/choose-us";
import Deliverables from "@/features/deliverables/deliverables";
import { Hero } from "@/features/hero/hero";
import { Area } from "@/features/other-area/area";
import Projects from "@/features/projects/projects";
import Workflow from "@/features/workflow/woorkflow";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <ChooseUs />
      <Area />
      <div className="relative w-full">
        <img
          src="http://localhost:3000/assets/bg_workflow.png"
          className="w-full h-full absolute object-cover right-0"
          alt=""
        />
        <Workflow />
        <Deliverables />
      </div>
      <Projects />
    </Fragment>
  );
}

export default HomePage;
