import ServicesSection from "@/features/service";
import TestimonialSection from "@/features/testimoniales";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <ServicesSection />
      <TestimonialSection />
    </Fragment>
  );
}

export default HomePage;
