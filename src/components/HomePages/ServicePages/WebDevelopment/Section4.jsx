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
        <GradientHeading>Web Development Services</GradientHeading>{" "}
        <Heading> That Take Your Brand To the</Heading>
        <br />
        <Heading>Next Level</Heading>
      </span>

      <Blackdescription>
        Phanom Professionals offers world-class web development services that
        changes the way businesses perform on the internet. Our experts design
        beautiful, fully-functional, and high-performance websites with a focus
        on responsiveness. We offer speedy, safe, and multiplatform solutions
        with custom designs and integration of modern technology. Our sites are
        built to maximize speed, engagement, and ranking, giving your brand
        exposure in a crowded digital market. Be it a corporate website or an
        e-commerce shop, we are always willing to help. Get in touch with us and
        let’s get started on growing your business by building an amazing
        website!
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
    span {
      br {
        display: none;
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;

    span {
      br {
        display: none;
      }
    }
  }
`;
