import React from "react";
import styled from "styled-components";
import { Greydescription, Textwithborder } from "../../../../Global/GlobalText";
import youtubemarketing from "../../../../assets/Images/youtubemarketing.png";

export const Section5 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div_one">
          <div className="text_border">
            <Textwithborder>Start Earning More with Smart</Textwithborder>

            <Textwithborder>Youtube Marketing Services – Get </Textwithborder>

            <Textwithborder>Results Now! </Textwithborder>
          </div>

          <Greydescription>
            We at Phanom Professionals focus on turning traffic into measurable
            ROI with our marketing services. Our experts strategically design
            campaigns that feed off data to increase video views, engagement,
            and, most importantly, conversions while ensuring the maximization
            of ROI.
          </Greydescription>

          <div className="text_head">
            <Greydescription>These include:</Greydescription>
            <div className="sub_text_head">
              <Greydescription>
                1. Market Research: Finding the right keywords to target the
                desired audience.
              </Greydescription>
              <Greydescription>
                2. YouTube Advertisement: Designing and deploying strategic
                search video ads with the goal of appearing first in top results
                pages.
              </Greydescription>
              <Greydescription>
                3. Social Media Advertising: Selling ad spaces on Facebook,
                Instagram, LinkedIn, etc. to increase visibility of the
                advertisements.
              </Greydescription>
              <Greydescription>
                4. Past Viewers Engagement Strategy: Targeting previous viewers
                and converting them into loyal customers.
              </Greydescription>
              <Greydescription>
                5. Conversion Rate Optimizatiion Page: Building and designing
                pages with a primary focus on achieving higher sale conversions
                than clicks.
              </Greydescription>
              <Greydescription>
                6. Performance Monitoring: Monitoring the results in real time
                and adjusting campaigns to lower costs
              </Greydescription>
            </div>
          </div>

          <Greydescription>
            Contact us now to improve your business visibility and get better
            results with our Youtube marketing services!
          </Greydescription>
        </div>
        <div className="sub_div_two">
          <img src={youtubemarketing} alt="process" />
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
    .sub_div_one {
      width: 55%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .text_border {
        display: flex;
        gap: 5px;
        flex-direction: column;
      }

      .text_head {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .sub_text_head {
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
      }

      .tecnology_types {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        .sub_technology_type {
          border-radius: 10px;
          background-color: #6c5fd4;
          padding: 20px;
          width: 22%;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 5px;
        }
      }

      .slider-container {
        display: none;
        .img_logo {
          background-color: #6c5fd4;
          padding: 20px;
          width: 40% !important;
          display: flex !important;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          gap: 10px;
        }
      }
    }

    .sub_div_two {
      display: flex;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 10px 20px;

    .main_div {
      flex-direction: column;
      text-align: center;

      .sub_div_one {
        width: 100%;
        gap: 20px;
        .text_border {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }
        .slider-container {
          display: block;
          padding: 20px 0;
          .slick-slide img {
            width: 50px;
            height: 50px;
          }
          .slick-track {
            display: flex;
            gap: 20px;
          }
          .img_logo {
            width: 100% !important;
          }
        }

        .tecnology_types {
          display: none;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 10px 20px;
    .main_div {
      flex-direction: column;
      text-align: center;

      .sub_div_one {
        width: 100%;
        gap: 20px;
        .text_border {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }

        .slider-container {
          display: none;
        }

        .text-with-border-shadow {
          br {
            display: none;
          }
        }

        .tecnology_types {
          display: flex;
          justify-content: center;
        }
      }

      .sub_div_two {
        display: flex;
        justify-content: center;
        img {
          width: 60%;
        }
      }
    }
  }
`;
