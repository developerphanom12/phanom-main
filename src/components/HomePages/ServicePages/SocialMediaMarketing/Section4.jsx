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
        <GradientHeading>Phanom Professionals -</GradientHeading>
        <Heading>Your Growth Partner for  </Heading>
        <br />
        <Heading>Social Media Success – Leading Social Media Agency</Heading>
      </span>

      <Blackdescription>
      We at Phanom Professionals make sure the marketing we do on social media is targeted and helps in developing a client’s online presence. There is no denying that in this modern era, Facebook, Instagram, LinkedIn, Twitter, Pinterest or YouTube are necessary for reaching your audience. We build up frameworks that are intended to increase brand recognition and consumer confidence so that your brands can become highly popular.
      Do you want to take your brand’s image on social media to another level? Get in touch with the top social media marketing agency in india now!
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
