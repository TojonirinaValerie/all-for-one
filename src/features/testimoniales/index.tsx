"use client";

import { Section } from "@/components/section";
import SectionTitle, {
  SectionTitleAccent,
  SectionTitleDescription,
  SectionTitleEng,
  SectionTitleTitle,
} from "@/components/section-title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type Testimonial from "@/interface/testimoniales";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const getTestimonial = async ({}: {
  page?: number;
}): Promise<Testimonial[]> => {
  const mockData: Testimonial[] = [
    {
      id: 1,
      comment:
        "Niels as our local guide, he is very good at guiding us, patient and and very flexible. for the size of Caucasians, he is very excellent as an Asian guide - especially Indonesian tourists, very recommended...",
      commentator: "Daniel Robin",
      job: "Visitor",
      stars: 5,
      images: [
        {
          url: "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=600",
          imagename: "daniel-robin.jpg",
        },
      ],
      createdAt: "",
    },
    {
      id: 2,
      comment:
        "Niels as our local guide, he is very good at guiding us, patient and and very flexible. for the size of Caucasians, he is very excellent as an Asian guide - especially Indonesian tourists, very recommended...",
      commentator: "Daniel Robin",
      job: "Visitor",
      stars: 5,
      images: [
        {
          url: "https://images.pexels.com/photos/3062542/pexels-photo-3062542.jpeg?auto=compress&cs=tinysrgb&w=600",
          imagename: "daniel-robin.jpg",
        },
      ],
      createdAt: "",
    },
    {
      id: 3,
      comment:
        "Niels as our local guide, he is very good at guiding us, patient and and very flexible. for the size of Caucasians, he is very excellent as an Asian guide - especially Indonesian tourists, very recommended...",
      commentator: "Daniel Robin",
      job: "Visitor",
      stars: 5,
      images: [
        {
          url: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600",
          imagename: "daniel-robin.jpg",
        },
      ],
      createdAt: "",
    },
    {
      id: 4,
      comment:
        "Niels as our local guide, he is very good at guiding us, patient and and very flexible. for the size of Caucasians, he is very excellent as an Asian guide - especially Indonesian tourists, very recommended...",
      commentator: "Daniel Robin",
      job: "Visitor",
      stars: 2,
      images: [
        {
          url: "https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=600",
          imagename: "daniel-robin.jpg",
        },
      ],
      createdAt: "",
    },
    {
      id: 5,
      comment:
        "Niels as our local guide, he is very good at guiding us, patient and and very flexible. for the size of Caucasians, he is very excellent as an Asian guide - especially Indonesian tourists, very recommended...",
      commentator: "Daniel Robin",
      job: "Visitor",
      stars: 5,
      images: [
        {
          url: "https://images.pexels.com/photos/3153203/pexels-photo-3153203.jpeg?auto=compress&cs=tinysrgb&w=600",
          imagename: "daniel-robin.jpg",
        },
      ],
      createdAt: "",
    },
    {
      id: 6,
      comment:
        "Niels as our local guide, he is very good at guiding us, patient and and very flexible. for the size of Caucasians, he is very excellent as an Asian guide - especially Indonesian tourists, very recommended...",
      commentator: "Daniel Robin",
      job: "Visitor",
      stars: 3,
      images: [
        {
          url: "https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg?auto=compress&cs=tinysrgb&w=600",
          imagename: "daniel-robin.jpg",
        },
      ],
      createdAt: "",
    },
  ];
  return mockData;
};

const TestimonialCard = ({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card
        className={cn("bg-[#0A0C0F0D] rounded-3xl shadow-none relative px-4", className)}
      >
        <CardContent className="flex flex-col p-2 h-full gap-4">
          <motion.p
            variants={contentVariants}
            className="text-gray-600 text-sm leading-relaxed"
          >
            {testimonial.comment}
          </motion.p>
          <div className="flex items-center justify-between gap-3 mt-4">
            <div className="flex items-center gap-3">
              <motion.div variants={avatarVariants}>
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src={
                      testimonial.images?.[0]?.url ||
                      "/assets/testimonials/5.webp"
                    }
                    alt={testimonial.commentator || "Anonymous"}
                    className="object-cover rounded-3xl"
                  />
                  <AvatarFallback>
                    {testimonial.commentator
                      ? testimonial.commentator.charAt(0)
                      : "?"}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <motion.div
                variants={contentVariants}
                className="flex flex-col gap-1"
              >
                <h3 className="text-sm font-semibold text-gray-800">
                  {testimonial.commentator}
                </h3>
                <p className="text-xs text-gray-500">{testimonial.job}</p>
                <div className="flex">
                  {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                  {[...Array(5 - Math.floor(testimonial.stars))].map((_, i) => (
                    <motion.div
                      key={i + Math.floor(testimonial.stars)}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="absolute bottom-4 right-5"
            >
              <Image
                src="/assets/Qotes.webp"
                alt="Quote"
                width={100}
                height={100}
                className="opacity-30"
              />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function TestimonialSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { data: testimonials } = useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: () => getTestimonial({}),
  });

  const reviews: Testimonial[] = testimonials ?? [];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="w-full h-[100%] sm:h-auto md:h-auto bg-[#EEF2F7] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariants}
    >
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col items-start justify-between text-left min-h-[300px] h-full">
              <div>
                <SectionTitle>
                  <SectionTitleEng align="left">TESTIMONIALES</SectionTitleEng>
                  <SectionTitleTitle align="left">
                    Ce que les gens{" "}
                    <SectionTitleAccent>pense de nous</SectionTitleAccent>
                  </SectionTitleTitle>
                  <SectionTitleDescription align="left">
                    Lorem ipsum dolor a amet, consectetur adipiscing elit.
                    Vestibulum feugiat pretium velit ac scelerisque. In vitae
                    ligula eget ligula pulvinar rutrum convallis id.
                  </SectionTitleDescription>
                </SectionTitle>
              </div>

              <div className="pb-6 max-md:hidden">
                <Button
                  variant="outline"
                  className="rounded-full border-gray-300 cursor-pointer text-base flex px-6 py-5 items-center font-[300] bg-[#00000000] hover:bg-primary hover:text-white"
                  color="#00000000"
                >
                  Join our Community
                  <motion.div variants={pulseVariants} animate="pulse">
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </Button>
              </div>
            </div>

            <div>
              <Carousel
                opts={{ align: "center", loop: false }}
                orientation={isMobile ? "horizontal" : "vertical"}
                className="w-full lg:h-[700px] sm:h-[400px] md:h-[400px]"
              >
                <CarouselContent className="-mt-1 lg:h-[700px] md:h-[400px] sm:h-[400px] space-y-4">
                  {reviews.map((testimonial, index) => (
                    <CarouselItem
                      key={testimonial.id}
                      className="pt-1 md:basis-1/3"
                    >
                      <TestimonialCard
                        testimonial={testimonial}
                        className={cn({
                          "mt-4": index > 0,
                        })}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {isMobile ? (
                  <>
                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 border border-gray-200" />
                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 border border-gray-200" />
                  </>
                ) : (
                  <>
                    <CarouselPrevious className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full bg-white hover:bg-gray-100 border border-gray-200">
                      <ChevronUp className="h-4 w-4" />
                    </CarouselPrevious>
                    <CarouselNext className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full bg-white hover:bg-gray-100 border border-gray-200">
                      <ChevronDown className="h-4 w-4" />
                    </CarouselNext>
                  </>
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
}
