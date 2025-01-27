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
import deve from "../../../../assets/Images/deve.png";
import groupthree from "../../../../assets/Images/groupthree.png";
import groupfour from "../../../../assets/Images/groupfour.png";

export const Section9 = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>Dedicated to Growing Your Business with Effective</Heading>
          <GradientSecondHeading>Website</GradientSecondHeading>
          <br />
          <GradientSecondHeading>Development Strategies</GradientSecondHeading>
        </span>
        <div className="bg_img">
          <div className="sub_bg_img">
            <img src={groupone} alt="Design" />
            <PurpleSubHeading>Design</PurpleSubHeading>
            <GreySecondDescription>
              We make sure as much as possible that the sophisticated aesthetics
              of the web pages capture our customers’ attention. Our designers
              ensure that your website is at par with modern concepts and it
              reflects your brand's persona, allowing your site to gain more
              traffic.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={deve} alt="Development" />
            <PurpleSubHeading>Development</PurpleSubHeading>
            <GreySecondDescription>
              Your concern will be a great advantage to the rest of us.
              Upgrading is the essence of our development approach. We employ
              state of the art technologies and smart formats for building user
              friendly and highly responsive websites that ensure unparalleled
              user experience, thus strengthening your position as a market
              leader.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupthree} alt="Familiarization" />
            <PurpleSubHeading>Testing</PurpleSubHeading>
            <GreySecondDescription>
              Testing is an indispensable aspect of our work. Prior to going
              live there is a considerable amount of activities with respect to
              your site or application e.g. debugging functions and streamlining
              flow which need to be perfected for the greatest outcome.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupfour} alt="Strategy" />
            <PurpleSubHeading>Launch & Maintenance</PurpleSubHeading>
            <GreySecondDescription>
              Our work does not stop after the initial launch of your site. We
              actively monitor all metrics concerning the site’s performance.
              Our personnel handles updating and regularly checking graphs and
              other data to ensure your site continues to meet its goals long
              into the future.
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
