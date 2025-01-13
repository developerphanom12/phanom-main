import React from "react";
import styled from "styled-components";
import {
  GradientHeading,
  GreySecondDescription,
  Heading,
  PurpleSubHeading,
} from "../../../../Global/GlobalText";
import framneww from "../../../../assets/Images/framm.png";
import groupone from "../../../../assets/Images/groupone.png";
import grouptwo from "../../../../assets/Images/grouptwo.png";
import groupthree from "../../../../assets/Images/groupthree.png";
import groupfour from "../../../../assets/Images/groupfour.png";

export const Section1 = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>The</Heading>

          <GradientHeading>
            {" "}
            <span></span>Phanom Professionals <span></span>
          </GradientHeading>

          <Heading>Hiring</Heading>
          <br />

          <Heading> Process</Heading>
        </span>

        <div className="bg_img">
          <div className="sub_bg_img">
            <img src={groupone} alt="expertise" />
            <PurpleSubHeading>Define Need</PurpleSubHeading>
            <GreySecondDescription>
              Start by sharing your project requirements, objectives, and any
              specific design goals.
            </GreySecondDescription>
            <GreySecondDescription>
              We analyze your needs and match you with UI/UX designers who have
              the relevant expertise.{" "}
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={grouptwo} alt="expertise" />
            <PurpleSubHeading>Meet Designer</PurpleSubHeading>
            <GreySecondDescription>
              Explore the portfolios of our in-house designers to find the one
              that aligns with your vision. Engage in an initial discussion to
              ensure the designer understands your project scope and goals.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupthree} alt="expertise" />
            <PurpleSubHeading>Collaborate</PurpleSubHeading>
            <GreySecondDescription>
              Benefit from a risk-free trial period to assess the designer’s
              capabilities and fit. Once you’re satisfied, we begin the design
              process, with regular updates and collaborative feedback sessions.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupfour} alt="expertise" />
            <PurpleSubHeading>Support and Feedback</PurpleSubHeading>
            <GreySecondDescription>
              Provide feedback during the design process to ensure the final
              product meets your expectations. Enjoy post-launch support to
              address any design-related issues or adjustments.
            </GreySecondDescription>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px;
  .main_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    .bg_img {
      background-image: url(${framneww});
      background-size: 100% 100%;
      width: 100%;
      display: flex;
      .sub_bg_img {
        flex: 1;
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 50px 20px 0;
        text-align: center;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 10px 20px;
    .main_div {
      br {
        display: none;
      }

    

      .bg_img {
        background-image: unset;
        display: unset;
        .sub_bg_img {
          padding: 20px 20px 0;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;
    .main_div {
      br {
        display: none;
      }

      .bg_img {
        background-image: unset;
        display: flex;
        flex-direction: unset;
        flex-wrap: wrap;
        justify-content: center;
        .sub_bg_img {
          padding: 20px 20px 0;
          flex: unset;
          width: 48%;
        }
      }
    }
  }
`;
