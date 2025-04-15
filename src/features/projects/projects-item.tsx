"use client";

import { motion, useInView } from "framer-motion";
// import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ProjectDataType } from "./projects";
import { useEffect, useRef, useState } from "react";
import { useIsMediumScreen } from "hooks/use-medium-screen";

const ProjectsItem: React.FC<{ data: ProjectDataType }> = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });
  const isMd = useIsMediumScreen();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isMd) {
      console.log("Ngeza");
      setVisible(false);
    } else {
      console.log("Kely");
      setVisible(isInView);
    }
  }, [isInView, isMd]);

  const { title, image, description, type, date } = data;
  return (
    <article
      className="w-full rounded-[40px] aspect-[791/618] relative flex flex-col justify-end overflow-hidden"
      ref={ref}
    >
      <Image
        src={image}
        alt=""
        width={1200}
        height={1200}
        className="absolute w-full h-full object-cover"
      />
      <motion.div
        initial={{ opacity: 1, y: 10 }}
        animate={{ opacity: visible ? 0 : 1, y: visible ? -5 : 0 }}
        whileHover={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.3 }}
        className="absolute p-6  z-50 bg-gradient-to-b from-[#00000000] to-[#000000] h-full flex flex-col justify-end w-full
        max-md:p-4"
      >
        <div className="flex flex-row justify-between items-center w-full gap-2">
          <h1 className="text-xl max-2xl:text-lg text-project-card-foreground">
            {title}
          </h1>
          <p className="text-lg max-2xl:text-base text-project-card-foreground text-right">
            {type}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -5 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute p-6 z-50  h-full flex flex-col justify-between project-item"
      >
        <div className="flex flex-row justify-end">
          <p className="bg-[#D94336] text-[#ECF0F3] px-5 py-1 rounded-[10px]">
            {date}
          </p>
        </div>
        {/* <div className="flex flex-row justify-center">
          <div className="p-6 border-[#FAECEB] border-[2px] rounded-full hover:-rotate-45 cursor-pointer transition">
            <ArrowRight size={48} strokeWidth={1.25} color="#FFFFFF" />
          </div>
        </div> */}
        <div className="">
          <div className="flex flex-row justify-between items-center w-full gap-2">
            <h1 className="text-xl  max-2xl:text-lg text-project-card-foreground">
              {title}
            </h1>
            <p className="text-lg max-2xl:text-base text-project-card-foreground text-right">
              {type}
            </p>
          </div>
          <p className="text-project-card-foreground leading-5 text-sm max-2xl:text-sm font-[300] max-2xl:leading-6">
            {description}
          </p>
        </div>
      </motion.div>
    </article>
  );
};

export default ProjectsItem;
