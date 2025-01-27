import React from "react";
import styled from "styled-components";
import { Greydescription, Textwithborder } from "../../../../Global/GlobalText";
import shopp from "../../../../assets/Images/shopp.png";

export const Section5 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div_one">
          <div className="text_border">

            <Textwithborder>Shopify Website Design Services –</Textwithborder>

            <Textwithborder>Smart Solutions for Your Digital Growth </Textwithborder>

      


          </div>
          <Greydescription>
           Phanom Professionals designs and develops Shopify websites that guarantees high ROI. We’ve got you covered for sleek corporate sites, captivating portfolios, or responsive e-commerce stores!
          </Greydescription>
          <div className="text_head">
            <Greydescription>
            Our services include
            </Greydescription>
            <div className="sub_text_head">
              <Greydescription>
                1.  Custom Designs – Engage your audience with tailored mobile-friendly websites.
              </Greydescription>
              <Greydescription>
                2. SEO Optimization – SEO optimized websites enhance ranking and organic traffic.
              </Greydescription>
              <Greydescription>
                3. E-Commerce Development – Attractive storefronts with smooth client-side payment processing and security.
              </Greydescription>
              <Greydescription>
                4. Fast and Secure – Lightning fast websites that are fully secure.
              </Greydescription>
              <Greydescription>
                5. Ongoing Support – Continuous maintenance with real-time performance monitoring.
              </Greydescription>
              <Greydescription>
                6. Data-Driven Results – Campaigns designed to increase conversions and improve functionality.
              </Greydescription>

            </div>
          </div>


          <Greydescription>
          Customers of Phanom Professionals don’t just get a website, they get a business growth tool. Let’s get in touch today and set up your Shopify store! Have a look at our portfolio!
          </Greydescription>


        </div>
        <div className="sub_div_two">
          <img src={shopp} alt="process" />
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
