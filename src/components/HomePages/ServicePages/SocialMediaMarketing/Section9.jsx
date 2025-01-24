import React from "react";
import styled from "styled-components";
import {
  GradientSecondHeading,
  GreySecondDescription,
  Heading,
  PurpleSubHeading,
} from "../../../../Global/GlobalText";
import framneww from "../../../../assets/Images/framm.png";
import groupone from "../../../../assets/Images/groupone.png";
import aacountabity from "../../../../assets/Images/aacountabity.png";
import groupthree from "../../../../assets/Images/groupthree.png";
import groupfour from "../../../../assets/Images/groupfour.png";

export const Section9 = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>
            This Is to Inform You That We will Send You the Evaluations of the
          </Heading>
          <br />
          <Heading>Actions You Took in</Heading>
          <GradientSecondHeading>“On Your Mark”</GradientSecondHeading>
          <Heading>Stage as Outlined Below: : </Heading>
        </span>
        <div className="bg_img">
          <div className="sub_bg_img">
            <img src={groupone} alt="Knowledge" />
            <PurpleSubHeading>Knowledge</PurpleSubHeading>
            <GreySecondDescription>
              We are at the forefront of social media marketing integration ,
              where we ensure that your business gets the optimal amount and
              quality of traffic and recognition it deserves through the
              blending of world class skills with robust measurable performance
              business models.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={aacountabity} alt="Liability" />
            <PurpleSubHeading>Accountability</PurpleSubHeading>
            <GreySecondDescription>
              It does not matter if you are a new entity to the industry because
              our dedicated team is willing to polish sharp out your online
              presence professionally no matter what place you start at. You
              will be able to convert your followers into clients without any
              extra effort as every single action in the process is simplified.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupthree} alt="Familiarization" />
            <PurpleSubHeading>Familiarization</PurpleSubHeading>
            <GreySecondDescription>
              Utilizing the newest technology and market trends will help in
              making sure relevant strategies are made which will further
              enhance their appeal resulting in an easier experience that
              ensures the business goal requirements are met by the business.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupfour} alt="Strategy" />
            <PurpleSubHeading>Strategy</PurpleSubHeading>
            <GreySecondDescription>
              Looking for ways to deliver the best results through various
              social media platforms can be challenging, but our uncomplicated
              strategies can help significantly increase the likelihood of
              success. By focusing on user experience and using new innovative
              templates, we always ensure that your site leaves great
              impressions on users.
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
