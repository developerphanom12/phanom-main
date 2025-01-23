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
        <GradientHeading> Phanom Professionals -</GradientHeading>{" "}
        <Heading> Your Seo Marketing </Heading>
        <br />
        <Heading>Agency and Growth Partner</Heading>
      </span>

      <Blackdescription>
        At Phanom Professionals, it is our goal to build strong business
        strategies using creativity and smart thinking. We have more than 5
        years of experience which helped us become one of the top SEO marketing
        firms in India’s Digital Marketing industry. We have a league of
        talented designers, front-end developers, marketers and SEO
        professionals who provide quality web design services at scale. Allow us
        to improve your impress with our strategies. We take pride in being
        innovative and getting results for our clients.
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
  }
`;
