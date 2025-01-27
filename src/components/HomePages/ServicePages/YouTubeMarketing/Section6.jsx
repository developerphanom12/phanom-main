import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GradientHeading,
  Greydescription,
  Heading,
} from "../../../../Global/GlobalText";
import { PurpleBackground } from "../../../../Global/GlobalButton";
import videoperspective from "../../../../assets/Images/videoperspective.png";
import moreengagement from "../../../../assets/Images/moreengagement.png";
import betterbranding from "../../../../assets/Images/betterbranding.png";
import youtubesubscriber from "../../../../assets/Images/youtubesubscriber.png";
import socialtrust from "../../../../assets/Images/socialtrust.png";

import montization from "../../../../assets/Images/montization.png";




export const Section6 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          <span>
            <Heading>Grow Your Brand with a Trusted</Heading>
            <br />
            <GradientHeading> YouTube Marketing Agency</GradientHeading>

            <Heading> – Drive Results Fast!</Heading>
          </span>

          <Greydescription>
            At Phanom Professionals, we develop scalable marketing solutions
            using YouTube video content which help in the growth of your
            business. Phanom Professionals as one of the leading algorithms
            powered YouTube marketing companies creates video ads to improve
            your online presence, traffic, and ROI. From researching keywords to
            developing creative video advertisements, we do it all for fast and
            significant marketing impact. Our team continuously improves
            strategies to increase conversion rates, viewer engagement, and you
            beating your competition. Work with the best marketing agency for
            YouTube videos in India to unlock your brand's potential.
          </Greydescription>

          <Greydescription>
            Contact us now and experience amazing growth for your business with
            our potent YouTube marketing strategies!
          </Greydescription>
          
          <a href="#form">
            <PurpleBackground>Book an Appointment</PurpleBackground>
          </a>
        </div>

        <div className="sub_div_two">
          <div className="slide_div">
            <div className="sub_slide_div">
              <div className="img_div">
                <img src={videoperspective} alt="MORE VIDEO PERSPECTIVES" />
              </div>

              <div className="content_div">
                <BlackHeading>MORE VIDEO PERSPECTIVES</BlackHeading>

                <Greydescription>
                  We focus on optimization of video content to ensure that it is
                  delivered to the right audience. This leads to more views and
                  greater visibility on Youtube.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={moreengagement} alt="MORE ENGAGEMENT" />
              </div>
              <div className="content_div">
                <BlackHeading>MORE ENGAGEMENT</BlackHeading>
                <Greydescription>
                  Creativity in the content increases the interactions, making
                  thier audience deeper engage with their videos and brand.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={betterbranding} alt="BETTER BRANDING" />
              </div>
              <div className="content_div">
                <BlackHeading>BETTER BRANDING</BlackHeading>
                <Greydescription>
                  We improve the branding off the client’s channels, helping
                  them look distinct and treating them with stronger recognition
                  and trust from their audience on Youtube.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={youtubesubscriber} alt="MORE YOUTUBE SUBSCRIBERS" />
              </div>
              <div className="content_div">
                <BlackHeading>MORE YOUTUBE SUBSCRIBERS</BlackHeading>
                <Greydescription>
                  With the customized content strategies, more subscribers are
                  gained. This increases channel’s visibility and helps him
                  reach a greater audience on Youtube.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img
                  src={socialtrust}
                  alt="CONVERSION RATE OPTIMIZATION (CRO)"
                />
              </div>
              <div className="content_div">
                <BlackHeading>SOCIAL TRUST</BlackHeading>
                <Greydescription>
                With followers and engagements, social trust is established where the reputations off the influencer is improved and people willingly want to follow and engage with them.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={montization} alt="OTT PLATFORM SEO" />
              </div>
              <div className="content_div">
                <BlackHeading>EARNING WITH MONETIZATION</BlackHeading>
                <Greydescription>
                     Increased engagement and subscribers means greater opportunities for monetization off Youtube, transforming the Youtube channel into an online source of income.
                </Greydescription>
              </div>
            </div>
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
    gap: 20px;

    .sub_div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 35px;
    }

    .sub_div_two {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      justify-content: center;
      .slide_div {
        height: 190px;
        width: 100%;
        overflow: auto;
        .sub_slide_div {
          padding: 40px 30px;
          display: flex;
          gap: 20px;

          box-shadow: 0px 12px 28px 0px rgba(140, 149, 159, 0.3);
          border-radius: 20px;
          .img_div {
            width: 15%;
          }
          .content_div {
            width: 85%;
            display: flex;
            gap: 10px;
            flex-direction: column;
          }
        }
      }
    }
  }


    a{
  text-decoration: none;
}

  @media (max-width: 567px) {
    padding: 10px 20px;
    .main_div {
      flex-direction: column;

      .sub_div {
        gap: 25px;
        text-align: center;
        br {
          display: none;
        }
      }

      .sub_div_two .slide_div .sub_slide_div {
        padding: 20px 10px;
        margin-top: 20px;

        .img_div {
          width: 30%;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 10px 20px;
    .main_div {
      flex-direction: column;
      .sub_div {
        gap: 25px;
        text-align: center;
      }
    }
  }
`;
