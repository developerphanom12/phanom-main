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

export const Seo = () => {
  return (
    <div>
      <Helmet>
        <title> Offshore SEO Company in India | SEO Company In India</title>

        <meta
          name="description"
          content="Phanom Professionals is a leading Offshore  SEO Company in India, providing top-notch SEO services and management. Your reliable SEO Company In India for outstanding results.
 "
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
