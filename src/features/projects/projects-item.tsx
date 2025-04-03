import { Button } from "@/components/ui/button";
import { ProjectDataType } from "./projects";
import { ArrowRight } from "lucide-react";

const ProjectsItem: React.FC<{ data: ProjectDataType }> = ({ data }) => {
  const { title, description, image } = data;
  return (
    <article className="w-full rounded-[40px] aspect-[791/618] relative flex flex-col justify-end overflow-hidden">
      <img src={image} alt="" className="absolute w-full h-full object-cover" />

      <div className="hidden p-10 z-50 bg-gradient-to-b from-[#00000000] to-[#000000] h-full flex flex-col justify-end">
        <div className="flex flex-row justify-between w-full">
          <h1 className="text-xl text-project-card-foreground">{title}</h1>
          <p className="text-lg text-project-card-foreground">
            Role: Dashboard
          </p>
        </div>
      </div>

      <div className="p-6 z-50 bg-gradient-to-b from-[#00000000] to-[#000000] h-full flex flex-col justify-between">
        <div className="flex flex-row justify-end">
          <Button className="bg-[#D94336] text-[#ECF0F3] text-lg p-6">
            2024
          </Button>
        </div>
        <div className="flex flex-row justify-center">
          <div className="p-6 border-[#FAECEB] border-[2px] rounded-full hover:-rotate-45 cursor-pointer transition">
            <ArrowRight size={48} strokeWidth={1.25} color="#FFFFFF" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-row justify-between w-full">
            <h1 className="text-xl text-project-card-foreground">{title}</h1>
            <p className="text-lg text-project-card-foreground">
              Role: Dashboard
            </p>
          </div>
          <p className="text-project-card-foreground leading-5 text-md font-[300]">
            Un logiciel equipé d’un dispositif électronique permettant de suivre
            en temps réel les déplacements des agents (coursiers, livreurs, etc)
            d’une entreprise.
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProjectsItem;
