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

export const Shopify = () => {
  return (
    <div>
      <Helmet>
        <title> Offshore Shopify Web Development Services In India</title>
        <meta
          name="description"
          content=" We are Offshore Shopify Web Development Services In India to create, customize, and optimize your online store. Boost your eCommerce success with our tailored solutions."
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
