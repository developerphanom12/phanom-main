import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GradientHeading,
  Greydescription,
  Heading,
} from "../../../../Global/GlobalText";
import { PurpleBackground } from "../../../../Global/GlobalButton";
import seorankingnew from "../../../../assets/Images/seorankingnew.png";
import shopifynew from "../../../../assets/Images/shopifynew.png";
import amazonnew from "../../../../assets/Images/amazonnew.png";
import seofreiendlynew from "../../../../assets/Images/seofreiendlynew.png";
import conversionnew from "../../../../assets/Images/conversionnew.png";
import ottnew from "../../../../assets/Images/ottnew.png";
import appnew from "../../../../assets/Images/appnew.png";
import youtubenew from "../../../../assets/Images/youtubenew.png";

export const Section6 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          <span>
            <Heading>Say Hello tour</Heading>
            <GradientHeading> Our Highly</GradientHeading>
            <br/>
            <GradientHeading>Skilled Seos:</GradientHeading>
            <Heading> Armed with</Heading>
            <br/>
            <Heading>Advanced Seo Tools</Heading>
          </span>

          <Greydescription>
            We are amongst the topmost seo agency that provide end-to-end search
            engine optimization in India. Requirements and needs of all business
            and brands help all of them grow optimally in an SEO focused
            marketplace.
          </Greydescription>

          <Greydescription>
            With organic SEO, we also focus on building effective link building
            strategies to get high quality backlinks for business, brand or
            website, working with trusted partners to build effective SEO
            focused websites.
          </Greydescription>
          <a href="#form">
            <PurpleBackground>Book an Appointment</PurpleBackground>
          </a>
        </div>

        <div className="sub_div_two">
          <div className="slide_div">
            <div className="sub_slide_div">
              <div className="img_div">
                <img src={seorankingnew} alt="SEO RANKING" />
              </div>
              <div className="content_div">
                <BlackHeading>SEO RANKING</BlackHeading>

                <Greydescription>
                  Let us know how your work goes and what need we can assist you
                  with, in googles if you succeed, then we are complimented with
                  the use of keyword research and white hat.
                </Greydescription>

              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={shopifynew} alt="SHOPIFY SEO" />
              </div>
              <div className="content_div">
                <BlackHeading>SHOPIFY SEO</BlackHeading>
                <Greydescription>
                  The Cloud base interface software that gives people or
                  companies a chance to promote their brand as it is easy to
                  comprehend and use as it enables selling, shipping, and
                  branding without any hassle.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={amazonnew} alt="AMAZON SEO" />
              </div>
              <div className="content_div">
                <BlackHeading>AMAZON SEO</BlackHeading>
                <Greydescription>
                  You can trust that the material we provide will always be
                  centered on the information of your brand or product
                  therefore, reach a real market objective and heighten the
                  demand.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={seofreiendlynew} alt="SEO FRIENDLY CONTENT WRITING" />
              </div>
              <div className="content_div">
                <BlackHeading>SEO FRIENDLY CONTENT WRITING</BlackHeading>
                <Greydescription>
                  As per your instruction hence material that would help reach
                  their business objective by fostering growth and reaching set
                  goals would be provided.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={conversionnew} alt="CONVERSION RATE OPTIMIZATION (CRO)" />
              </div>
              <div className="content_div">
                <BlackHeading>CONVERSION RATE OPTIMIZATION (CRO)</BlackHeading>
                <Greydescription>
                  As bidders say, the goal is to benefit the company, in which
                  case the passive audience should become active users. Our
                  experts optimize the methods thereby increasing the user rate
                  gently.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={ottnew} alt="OTT PLATFORM SEO" />
              </div>
              <div className="content_div">
                <BlackHeading>OTT PLATFORM SEO</BlackHeading>
                <Greydescription>
                  When we promote your brand, we put in the funds for visibility
                  to the top OTT brands on the internet. This means the brand
                  gets exclusive representation with the investment in real
                  time.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={appnew} alt="APP STORE OPTIMIZATION SEO" />
              </div>
              <div className="content_div">
                <BlackHeading>APP STORE OPTIMIZATION SEO</BlackHeading>
                <Greydescription>
                  Your brand is given the opportunity to go global through
                  streaming on the internet in a rush. And the live stream
                  channels make sure that the audience can easily find the brand
                  to watch it.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={youtubenew} alt="YOUTUBE SEO" />
              </div>
              <div className="content_div">
                <BlackHeading>YOUTUBE SEO</BlackHeading>
                <Greydescription>
                  An incredibly strong message is conveyed on an infotainment
                  resource which is better known by the name YouTube. An
                  entertaining and clever way to communicate the ideas, so we
                  once more give you the same.
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
