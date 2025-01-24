import React from "react";
import styled from "styled-components";

import {
  Greydescription,
  Textwithborder,
} from "../../../../Global/GlobalText";


import payperclick from "../../../../assets/Images/payperclick.png";


export const Section5 = () => {

  return (

    <Root>
      <div className="main_div">
        <div className="sub_div_one">
          <div className="text_border">
            <Textwithborder>Achieving the Most in Roi with </Textwithborder>
            <Textwithborder>Targeted Pay Per Click (Ppc)</Textwithborder>
            <Textwithborder>Advertising</Textwithborder>
          </div>

          <Greydescription>
          We are deeply  focused on delivering PPC advertising services that bring traffic in an instant and ensure measurable success. It is our guarantee. Our PPC specialists execute campaigns that are data-driven for lead generation, optimizing click-through rates while ensuring maximum ROI.
          </Greydescription>

          <div className="text_head">
            <Greydescription>
            We specialize in PPC services such as the following:
            </Greydescription>
            <div className="sub_text_head">
              <Greydescription>
                1. Researching Keywords: Determining what words are most useful in capturing the right audience to increase profitability.
              </Greydescription>
              <Greydescription>
                2. Campaigns Using Google Ads: Controlled order of what appears at the top of the search pages.
              </Greydescription>
              <Greydescription>
                3. Social Media PPC: Ads on social media sites such as Facebook, Instagram, and LinkedIn.
              </Greydescription>
              <Greydescription>
                4. Automated Reminders: Re-attaching ourselves to previous fans to turn their interest in us into sales.
              </Greydescription>
              <Greydescription>
                5. Optimizing the Landing Page: Pages created that facilitate selling ensure a click to a sale ratio of above 30%.
              </Greydescription>
              <Greydescription>
                6. Real-time monitoring: Tracking and reporting performance while making adjustments to improve outcomes while keeping costs down.
              </Greydescription>
            </div>
          </div>
   
        </div>
        <div className="sub_div_two">
          <img src={payperclick} alt="process" />
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
