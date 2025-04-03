import ChooseUs from "@/features/choise-us/choose-us";
import Deliverables from "@/features/deliverables/deliverables";
import Header from "@/features/header/header";
import Projects from "@/features/projects/projects";
import Workflow from "@/features/workflow/woorkflow";

export default function Home() {
  return (
    <main>
      <ChooseUs />
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
    </main>
  );
}
