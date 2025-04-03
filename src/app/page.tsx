import ChooseUs from "@/features/choise-us/choose-us";
import Deliverables from "@/features/deliverables/deliverables";
import Header from "@/features/header/header";
import Projects from "@/features/projects/projects";
import Workflow from "@/features/workflow/woorkflow";

export default function Home() {
  return (
    <main>
      <Header/>
      <ChooseUs />
      <Workflow />
      <Deliverables />
      <Projects />
    </main>
  );
}
