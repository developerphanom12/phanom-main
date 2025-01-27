import React from "react";

import styled from "styled-components";

import {
  GradientSecondHeading,
  GreySecondDescription,
  Heading,
  PurpleSubHeading,
} from "../../../../Global/GlobalText";

import framneww from "../../../../assets/Images/framm.png";

import tailoredsolution from "../../../../assets/Images/tailoredsolution.png";

import innovaionstrategies from "../../../../assets/Images/innovaionstrategies.png";

import effectiveness from "../../../../assets/Images/effectiveness.png";

export const Section9 = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>
            We Wish to Bring to Your Attention That we Will Provide the
          </Heading>{" "}
          <br />
          <Heading>Following Assessments of Your Actions During the</Heading>
          <GradientSecondHeading>“On Your Mark” Phase:"</GradientSecondHeading>
          <br />
          <Heading> </Heading>
        </span>


        <div className="bg_img">
          <div className="sub_bg_img">
            <img src={tailoredsolution} alt="Knowledge" />
            <PurpleSubHeading>Knowledge</PurpleSubHeading>
            <GreySecondDescription>
              We have specialists who are expert in Pay Per Click advertising
              and they construct plans that increase targeted traffic and
              maximize conversions. We help you create an effective marketing
              strategy that drives high quality visitors to your site.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={tailoredsolution} alt="Tailored Solutions" />
            <PurpleSubHeading>Tailored Solutions</PurpleSubHeading>
            <GreySecondDescription>
              We take an interactive approach to PPC that allows us to design
              campaigns that deliver KPI goals for both new and old marketers
              without prohibitive preset budgets.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={innovaionstrategies} alt="Innovative Strategies" />
            <PurpleSubHeading>Innovative Strategies</PurpleSubHeading>
            <GreySecondDescription>
              We keep the competitive edge by utilizing state-of-the-art
              technology. We then develop unique solutions that promote the
              client’s business objectives enhancing the campaign performance in
              the digital space.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={effectiveness} alt="Effective Campaigns" />
            <PurpleSubHeading>Effective Campaigns</PurpleSubHeading>
            <GreySecondDescription>
              Our experts devise the PPC strategies in simple terms with minimal
              complication for smooth implementation. We aim to increase active
              users and engagement which focus on providing maximum benefits to
              your business.
            </GreySecondDescription>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px 50px;
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
    padding: 30px 20px;
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
    span{

        br{
    display:none;
    }

    
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
