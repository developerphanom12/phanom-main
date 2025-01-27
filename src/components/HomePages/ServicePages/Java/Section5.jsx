import React from "react";

import styled from "styled-components";

import { Greydescription, Textwithborder } from "../../../../Global/GlobalText";

import javaaa from "../../../../assets/Images/javaaa.png";

export const Section5 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div_one">
          <div className="text_border">
            <Textwithborder>Java Software Development</Textwithborder>
            <Textwithborder>Company - Innovation At Every</Textwithborder>
            <Textwithborder>Step</Textwithborder>
          </div>
          <Greydescription>
            As Professionals Java software development company, we provide and
            guarantee high-quality at an exceptional ROI. Custom enterprise
            application, robust web solutions or highly scalable mobile
            applications? We've got it all!
          </Greydescription>
          <div className="text_head">
            <Greydescription>These services include:</Greydescription>
            <div className="sub_text_head">
              <Greydescription>
                1. Custom Java Development - Designed to fit the business needs,
                in an innovative and scalable fashion. 
              </Greydescription>
              <Greydescription>
                2. Enterprise Solutions - Exceptional software solutions for
                massive software development projects.
              </Greydescription>
              <Greydescription>
                3. Web and Mobile Application Development - Multi-platform
                applications exhibiting responsivity and great user experience.
              </Greydescription>
              <Greydescription>
                4. Secure and Efficient - Advanced systems capable of handling
                high volumes of traffic while maintaining robust security
                features.
              </Greydescription>
              <Greydescription>
                5. Business Facilitator - Phenom Software provides more than
                just tools; we offer an effective business growth strategy and
                solution. 
              </Greydescription>
            </div>
          </div>
        </div>
        <div className="sub_div_two">
          <img src={javaaa} alt="Javaaa" />
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
          flex-wrap:wrap;
          
        }

        .slider-container {
          display: none;
        }

        .text-with-border-shadow {
          br {
            display: none;
          }
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
