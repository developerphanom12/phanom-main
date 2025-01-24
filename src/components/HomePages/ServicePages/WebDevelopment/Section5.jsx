import React from "react";
import styled from "styled-components";
import {
  Greydescription,
  Textwithborder,
  
} from "../../../../Global/GlobalText";
import webdev from "../../../../assets/Images/webdev.png";


export const Section5 = () => {

  return (
    <Root>
      <div className="main_div">
        <div className="sub_div_one">
          <div className="text_border">
            <Textwithborder>Website Development India -</Textwithborder>

            <Textwithborder> Smart Solutions for Your Digital Growth</Textwithborder>

            <Textwithborder> Growth</Textwithborder>

          </div>

          <Greydescription>
          Phanom Professionals offers comprehensive solutions for website development in India that deliver high return on investment. We can handle anything from sleek corporate sites and portfolio websites to fully responsive e-commerce stores. Regardless of what website you need, we have you covered!
          </Greydescription>

          <div className="text_head">
            <Greydescription>
            These include:
            </Greydescription>
            <div className="sub_text_head">
              <Greydescription>
                1. Custom designs - Our team believes in engaging audiences through mobile-friendly websites with a personal touch.
              </Greydescription>
              <Greydescription>
                2. SEO Optimization - Our customers can rank higher in search engines and draw organic traffic because all our websites are SEO optimized. 
              </Greydescription>
              <Greydescription>
                3. E-Commerce Development - Our eye-catching online storefronts are easy to navigate and incorporate smooth payment integration. We aim to provide maximum functionality and security to users. 
              </Greydescription>
              <Greydescription>
                4. Fast and Secure - Our websites, alongside being secure and augmenting data protection, load with lightning speed. 
              </Greydescription>
              <Greydescription>
                5. Ongoing Support - To guarantee flawless functionality of websites, we provide constant maintenance and real-time performance tracking.
              </Greydescription>
              <Greydescription>
                6. Data Driven Results - We provide sustained campaigns that deliver quantifiable outcomes and increase conversion rates while enhancing website functionality.
              </Greydescription>
              <Greydescription>
                7. E-commerce SEO - We try to rank your online store at the top
                of the search engines to increase sales.
              </Greydescription>


            
            </div>
          </div>
          
          <Greydescription>
              With Phanom Professionals, you don’t just get a website; you receive an immensely powerful resource for growing your business!
          </Greydescription>


        </div>
        <div className="sub_div_two">
          <img src={webdev} alt="Web Development" />
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
