import React from "react";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";
import { Section8 } from "./Section8";
import { SubNavbar } from "./SubNavbar";
import { Section9 } from "./Section9";
import { Section10 } from "./Section10";
import { Section12 } from "./Section12";
import { Helmet } from "react-helmet";
import { SliderPage } from "../Service/SliderPage";

export const Java = () => {
  return (
    <div>
      <Helmet>
        <title>Offshore Java Software Development Company In India</title>
        <meta
          name="description"
          content="Leading Offshore Java Software Development Company in India. We offer custom solutions, robust applications, and innovative tech to drive your business forward."
        />
      </Helmet>

      <SubNavbar />
      <Section1 />
      <Section2 />
      <SliderPage />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />

      {/* <Testimonial/> */}

      <Section12 />
    </div>
  );
};
