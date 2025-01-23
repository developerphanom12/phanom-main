import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientHeading,
  Heading,
} from "../../../../Global/GlobalText";

export const Section4 = () => {
  return (
    <Root>
      <span>
        <Heading>We're </Heading>
        <GradientHeading> Phanom Professionals,</GradientHeading>
        <br/>
        <Heading>Your Growth Partner</Heading>
      </span>

      <Blackdescription>
        It only takes creative business minds to make effective business
        strategies! With over a Decade in the Digital Marketing industry, Phanom
        Professionals has proved to be the benchmark of SEO services in India.
        We’re a team of experienced web designers, front-end developers, digital
        marketers, and SEO champs who pride themselves on excellence. We always
        strive to deliver the best-in-class, functional, and scale-able web
        design Toronto solutions to meet business goals.
      </Blackdescription>

      
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;


@media (max-width: 567px) {
  padding: 30px 20px 0;
  span{
    br{
      display: none;
    };
  }
  
}


@media (min-width: 567px) and (max-width: 1024px) {
  padding: 30px 20px;


}
`;
