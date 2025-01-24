import React from "react";
import styled from "styled-components";
import {
  GradientSecondHeading,
  GreySecondDescription,
  Heading,
  PurpleSubHeading,
} from "../../../../Global/GlobalText";
import framneww from "../../../../assets/Images/framm.png";
import youtubemarket from "../../../../assets/Images/youtubemarket.png";
import personalizedsolution from "../../../../assets/Images/personalizedsolution.png";
import marketibngstrategies from "../../../../assets/Images/marketibngstrategies.png";
import effectiveness from "../../../../assets/Images/effectiveness.png";

export const Section9 = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>
            We Are Dedicated to the Growth of Your Channel So We Devise{" "}
          </Heading>
          <br />
          <Heading>Strategies That Yield the Highest Output during the</Heading>
          <GradientSecondHeading>“On Your Mark”</GradientSecondHeading>
          <br />
          <Heading>Phase:</Heading>
        </span>
        <div className="bg_img">
          <div className="sub_bg_img">
            <img src={youtubemarket} alt="YouTube" />
            <PurpleSubHeading>YouTube Marketing Experts</PurpleSubHeading>
            <GreySecondDescription>
              We develop video content strategies and grow channels. We do
              everything from improving organic reach to creating engaging ad
              campaigns that help your channel reach its target market.{" "}
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={personalizedsolution} alt="Channel" />
            <PurpleSubHeading>
              Personalized Solutions for Your Channel
            </PurpleSubHeading>
            <GreySecondDescription>
              We custom design a channel strategy around your goals. We focus on
              creating campaigns that not only engage your audience, but meet
              the set KPIs all while within budgetary constraints.{" "}
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={marketibngstrategies} alt="Marketing" />
            <PurpleSubHeading>Modern Marketing Strategies</PurpleSubHeading>
            <GreySecondDescription>
              Use the most recent strategies and tools to gain a competitive
              advantage. From smart YouTube analytics to new content ideas, we
              help increase the visibility and the amount of subscribers of your
              channel.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={effectiveness} alt="Efficient" />
            <PurpleSubHeading>Efficient Ads Management</PurpleSubHeading>
            <GreySecondDescription>
              We design quality ads that increase the CTR and engagement. Our
              advertising management strategy requires minimal efforts yet
              produces the best outcomes.
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
