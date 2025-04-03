import { Contact } from "@/features/contact/contact";
import { Hero } from "@/features/hero/hero";
import { Area } from "@/features/other-area/area";
import { Fragment } from "react";

function HomePage() {
  return <Fragment>{
    <>
    <Hero />
    <Area />
    <Contact/>
    </>
  }</Fragment>;
}

export default HomePage;
