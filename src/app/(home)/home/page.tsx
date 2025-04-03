import ServicesSection from "@/features/service";
import TechnologiaSection from "@/features/technologie";
import TestimonialSection from "@/features/testimoniales";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <ServicesSection />
      <TechnologiaSection />
      <TestimonialSection />
    </Fragment>
  );
}

export default HomePage;
