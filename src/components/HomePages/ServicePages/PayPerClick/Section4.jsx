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

        <Heading> With the Help of </Heading>
        <GradientHeading>Professional Pay Per Click Marketing,</GradientHeading>{" "}
        <br/>
        <Heading>Achieving Instant Results Is Easier Than Ever</Heading>
      </span>

      <Blackdescription>
      The growth of your business is noticeable with our highly effective Pay Per Click (PPC) advertising services at Phanom Professionals. Through carefully crafted campaigns, we target Google ads, social media PPC, and remarketing strategies for every customer that guides their clicks into loyalty. Our team guarantees visibility, web traffic, and returns on investments in no time. By utilizing aggressively targeted keywords, innovative ad copy, and sophisticated optimization, our skilled team comes up with inexpensive strategies that yield results. Reach out to us today and partner up with the most notable PPC company in India.
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
