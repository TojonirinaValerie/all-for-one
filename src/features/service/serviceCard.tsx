import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ServiceCardProps = {
  service: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
  };
  index: number;
};

const cardVariants = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hidden: (isEven: any) => ({
    opacity: 0,
    x: isEven ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.6,
    },
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  return (
    <motion.div custom={index % 2 === 0} variants={cardVariants} ref={ref}>
      <Card className="bg-[#314968] text-white border-none shadow-lg w-[703x] h-[302px] overflow-hidden relative p-6 md:p-8 lg:p-10 group">
        <div
          className={`absolute bottom-0 -right-5 z-0 transition-all duration-300 ease-in-out opacity-10 group-hover:opacity-80 translate-y-10 group-hover:translate-y-0 
            ${isInView ? " max-md:opacity-80 max-md:translate-y-0 " : " "}`}
        >
          <div
            className={`transform transition-all duration-300 ease-in-out group-hover:scale-110 origin-bottom-right 
                ${isInView ? " max-md:scale-110 " : "  "}`}
          >
            <Image
              src={service.imageUrl || "/placeholder.svg"}
              alt={service.imageAlt}
              width={213}
              height={163}
              className="w-52 h-40 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col h-full z-2">
          <div className="flex-grow">
            <h3
              className={`text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-3xl 
                ${isInView ? " max-md:text-3xl " : " "}`}
            >
              {service.title}
            </h3>
            <p
              className={`text-slate-300 mb-6 max-w-[400px] line-clamp-4 text-sm font-semibold transition-all duration-300 group-hover:text-md
                ${isInView ? " max-md:text-md" : ""}`}
            >
              {service.description}
            </p>
          </div>
          <div
            className={`mt-auto opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-in-out 
              ${isInView ? " max-md:opacity-100 max-md:translate-y-0 " : " "}`}
          >
            <Button
              variant="outline"
              className={`bg-white text-[#314968] hover:bg-slate-100 border-none w-28 h-14 rounded-2xl font-semibold text-sm transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 
                ${
                  isInView
                    ? " max-md:bg-slate-100 max-md:translate-x-0  max-md:scale-100 "
                    : " "
                }`}
            >
              Découvrir
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
