import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GradientHeading,
  Greydescription,
  Heading,
} from "../../../../Global/GlobalText";

import { PurpleBackground } from "../../../../Global/GlobalButton";
import targetreach from "../../../../assets/Images/targetreach.png";

import enginevisibilty from "../../../../assets/Images/enginevisibilty.png";
import ppcstrategy from "../../../../assets/Images/ppcstrategy.png";

import budgetfreiendly from "../../../../assets/Images/budgetfreiendly.png";

import toppriorities from "../../../../assets/Images/toppriorities.png";

import focused from "../../../../assets/Images/focused.png";
import local from "../../../../assets/Images/local.png";

export const Section6 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          <span>
            <Heading>Grow on Social Media with</Heading>
            <br />
            <Heading> Phanom Professionals –</Heading>
            <br />

            <GradientHeading>Your 360° Marketing </GradientHeading>
            <br />
            <GradientHeading>Partner</GradientHeading>
          </span>

          <Greydescription>
            Pay Per Click (PPC) advertising now unlocks new growth opportunities
            with targeted traffic and high ROI, through of Phanom Professionals.
            We specialize in creating PPC and google ads campaigns alongside
            highly effective social media marketing strategies to immediate
            visibility of results within your business. We do it all, from
            keyword analysis all the way to prompting your adverts, let our
            professionals formulate your best path to your goals. Increase
            conversion rates and get a leg up on the competition; Move towards
            the top with the best PPC managers in India.
          </Greydescription>

          <a href="#form">
            <PurpleBackground>Book an Appointment</PurpleBackground>
          </a>
        </div>

        <div className="sub_div_two">
          <div className="slide_div">
            <div className="sub_slide_div">
              <div className="img_div">
                <img src={targetreach} alt="TARGETED REACH & ROI" />
              </div>
              <div className="content_div">
                <BlackHeading>TARGETED REACH & ROI</BlackHeading>

                <Greydescription>
                  When you use PPC, you can target your market by age, location,
                  interest, and what they search for online. We help you attract
                  users with high intentions to click on ads with the goal of
                  growing your business through every click earned.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img
                  src={enginevisibilty}
                  alt="INSTANT SEARCH ENGINES VISIBILITY"
                />
              </div>
              <div className="content_div">
                <BlackHeading>INSTANT SEARCH ENGINES VISIBILITY</BlackHeading>
                <Greydescription>
                  PPC allows your brand to appear at the top of search engine
                  result pages (SERPs) for the products or services you brans
                  offers, when the potential clientele are actively searching
                  for it. With the help of optimized ads, we put your brand on
                  the top of the relevant searches increasing brand visibility.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={ppcstrategy} alt="CUSTOMIZED PPC STRATEGY" />
              </div>
              <div className="content_div">
                <BlackHeading>CUSTOMIZED PPC STRATEGY</BlackHeading>
                <Greydescription>
                  We take a unique approach to PPC through keyword research, ad
                  copy writing, and bid management. Our focus enables us to
                  tailor campaigns that will increase the conversion of valuable
                  clicks into leads. With superb strategies in place rest
                  assured, every dollar spent will guarantee maximum returns.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={budgetfreiendly} alt="BUDGET-FRIENDLY IMPACT" />
              </div>
              <div className="content_div">
                <BlackHeading>BUDGET-FRIENDLY IMPACT</BlackHeading>
                <Greydescription>
                  With our PPC management services, you can expect to get the
                  most bang for your buck. Your campaigns are optimized to meet
                  relevant audience with the goal of visibility generation. Your
                  campaigns are continuously monitored and budget adjusted to
                  constantly provide desired outcomes.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img
                  src={toppriorities}
                  alt="YOUR CLICKS ARE ONE OF OUR TOP PRIORITIES"
                />
              </div>
              <div className="content_div">
                <BlackHeading>
                  YOUR CLICKS ARE ONE OF OUR TOP PRIORITIES
                </BlackHeading>
                <Greydescription>
                  We understand the importance of powerful ad copy for your
                  campaign. That is why our content writers write advertising
                  copy that is persuasive and target driven. We write your ads
                  in such a manner that it is hard for users to ignore them and
                  will be compelled to act immediately.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={focused} alt="ROI FOCUSED" />
              </div>
              <div className="content_div">
                <BlackHeading>ROI FOCUSED</BlackHeading>
                <Greydescription>
                  The beauty of PPC is that it gives you the ability to see
                  every aspect of your campaign in detail. Every click,
                  conversion, and cost is monitored so that we can use the data
                  collected to improve campaigns. Your business goals will
                  always be achieved with our constant help by in setting and
                  adjusting PPC parameters continuously.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={local} alt="LOCAL & GLOBAL REACH" />
              </div>
              <div className="content_div">
                <BlackHeading>LOCAL & GLOBAL REACH</BlackHeading>
                <Greydescription>
                  There are no limits to where PPC advertising can take your
                  business. Whether it is local customers or a global audience,
                  we have the capacity to reach anyone and everyone. The
                  campaigns are customized to ensure the correct audience is
                  being targeted regardless of their location.
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

  a {
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
