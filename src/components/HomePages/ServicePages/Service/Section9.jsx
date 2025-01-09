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
import grouptwo from "../../../../assets/Images/grouptwo.png";
import groupthree from "../../../../assets/Images/groupthree.png";
import groupfour from "../../../../assets/Images/groupfour.png";

export const Section9 = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>We Entrust To-Provide You</Heading>
          <br />
          <Heading>On Your</Heading> <span></span>
          <GradientSecondHeading>Mark Performance</GradientSecondHeading>
          <br />
          <Heading>With: </Heading>
        </span>
        <div className="bg_img">
          <div className="sub_bg_img">
            <img src={groupone} alt="expertise" />
            <PurpleSubHeading>Expertise</PurpleSubHeading>
            <GreySecondDescription>
              We naturally reconcile the deployed number for the utmost websites
              that knack the performance-based competence. We ensure our clients
              present your business with what the market desire and the best
              numbers for visiting your website.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={grouptwo} alt="expertise" />
            <PurpleSubHeading>Culpability</PurpleSubHeading>
            <GreySecondDescription>
              Even if you are starting from scratch we are right and right here
              to formulate your website thoroughly for everything it is needed
              to make it worth. With a higher rate of sale & services on your
              website are made free from any obligatory aspect.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupthree} alt="expertise" />
            <PurpleSubHeading>Acquaintance</PurpleSubHeading>
            <GreySecondDescription>
              Our proficiency is always with tetchy aspect and upgrading with
              the trends on going in the market to make everything new and
              catchy for the benefit of your website. Software designed for your
              website definitely assists to become Savvy
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupfour} alt="expertise" />
            <PurpleSubHeading>Approach</PurpleSubHeading>
            <GreySecondDescription>
              We prepare a line of attack with some easy and understandable
              creation for your website for avoiding any snags. Rightfully
              creating your website and making it for the best use of the
              visitors and active users for best-boosted results, our team have
              the potential to strive.
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
      width:100%;
      display:flex;
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
