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
        <Heading> Promote Your Brand by Working with a </Heading>

        <GradientHeading> Shopify Website</GradientHeading>
        <br />

        <GradientHeading> Design Company</GradientHeading>
      </span>

      <Blackdescription>
        Phanom Professionals take pride in offering top-notch Shopify website
        design services. We work towards increasing your business presence
        through our exquisite and highly functional Shopify stores. We focus on
        responsiveness and user experience while ensuring the stores are
        appealing, fully functional, and high performance. We design your store
        using the latest technology so hoping the store stands out in the
        crowded marketplace is not just a dream. From a corporate website to an
        e-commerce store, we provide multi platform, fast, secure and modern
        technology solutions that boost your store’s speed, engagement, and SEO
        ranking. Want to build your business? Call us today so we can start on
        the amazing Shopify store we will build together.
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
    span{
    br{
    display:none;
    }}
  }
`;
