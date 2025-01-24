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
        <GradientHeading> YouTube Marketing Services</GradientHeading>{" "}
        <Heading>That Will Boost Your </Heading>
        <br />
        <Heading>Business Today!</Heading>
      </span>

      <Blackdescription>
        Phanom Professionals provides the best YouTube marketing services that
        will get your business off the ground in no time. With video ads, search
        ads, and display ads, our YouTube ad campaigns do more than increase
        views; they boost engagement and conversion rates too. We aim to ensure
        that your brand reaches its audience by creating powerful strategies
        coupled with engaging content. Grow your business and get more positive
        returns from investment with your YouTube followers through our
        effective marketing methods. You can reach out to us today so that we
        can upgrade your business with our YouTube marketing services.
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
