import React from "react";
import styled from "styled-components";
import { BlacvkHeading, BlacvkDescription } from "../../../Global/GlobalText";
import rangenew from "../../../assets/Images/rangenew.png";
import verifiednew from "../../../assets/Images/verifiednew.png";
import pricingnew from "../../../assets/Images/pricingnew.png";
import customisenew from "../../../assets/Images/customisenew.png";
import quicknew from "../../../assets/Images/quicknew.png";
import securenew from "../../../assets/Images/securenew.png";
import feednew from "../../../assets/Images/feednew.png";
import customer from "../../../assets/Images/customer.png";

export const Section5 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_main_div">
          {/* <div className="ist_border">
            <div className="sec_border">
              <div className="three_border"></div>
            </div>
          </div> */}

          <div className="ist_border">
            <div className="sec_border">
              <div className="three_border"></div>
            </div>
          </div>
        </div>
        <div className="sub_main_div_two">
          <div class="text-with-border-shadow">
            Why
            <br />
            Choose <br /> Us?
          </div>

          <div className="slide_div">
            <div className="sub_slide_div">
              <div className="image_content">
                <div className="img_div">
                  <img src={rangenew} alt="Logo" />
                </div>

                <div className="content_div">
                  <BlacvkHeading>Wide Range of Services</BlacvkHeading>
                </div>
              </div>

              <BlacvkDescription>
                Unlock a world of possibilities with our diverse pool of
                talented freelancers – from digital marketing to web development
              </BlacvkDescription>
            </div>

            <div className="sub_slide_div">
              <div className="image_content">
                <div className="img_div">
                  <img src={verifiednew} alt="Logo" />
                </div>
                <div className="content_div">
                  <BlacvkHeading>Verified Professionals</BlacvkHeading>
                </div>
              </div>

              <BlacvkDescription>
                you're in good hands with our verified professionals – your
                trusted experts for top-quality work
              </BlacvkDescription>
            </div>

            <div className="sub_slide_div">
              <div className="image_content">
                <div className="img_div">
                  <img src={pricingnew} alt="customized" />
                </div>
                <div className="content_div">
                  <BlacvkHeading>Competitive Pricing</BlacvkHeading>
                </div>
              </div>

              <BlacvkDescription>
                Find the perfect fit for your budget with our competitive
                pricing
              </BlacvkDescription>
            </div>

            <div className="sub_slide_div">
              <div className="image_content">
                <div className="img_div">
                  <img src={customisenew} alt="Logo" />
                </div>
                <div className="content_div">
                  <BlacvkHeading>Customized Solutions</BlacvkHeading>
                </div>
              </div>

              <BlacvkDescription>
                Experience the power of personalized service with our
                freelancers, who tailor their solutions to meet your unique
                needs.
              </BlacvkDescription>
            </div>

            <div className="sub_slide_div">
              <div className="image_content">
                <div className="img_div">
                  <img src={quicknew} alt="Logo" />
                </div>
                <div className="content_div">
                  <BlacvkHeading>Quick Turnaround</BlacvkHeading>
                </div>
              </div>

              <BlacvkDescription>
                Efficient project management and prompt delivery of services,
                saving clients time and effort.
              </BlacvkDescription>
            </div>

            <div className="sub_slide_div">
              <div className="image_content">
                <div className="img_div">
                  <img src={securenew} alt="Logo" />
                </div>
                <div className="content_div">
                  <BlacvkHeading>Secure Payments</BlacvkHeading>
                </div>
              </div>

              <BlacvkDescription>
                Reliable and secure payment gateways to protect financial
                transactions and ensure payments are made only when the client
                is satisfied.
              </BlacvkDescription>
            </div>

            <div className="sub_slide_div">
              <div className="image_content">
                <div className="img_div">
                  <img src={feednew} alt="Logo" />
                </div>
                <div className="content_div">
                  <BlacvkHeading>Feedback and Ratings</BlacvkHeading>
                </div>
              </div>

              <BlacvkDescription>
                Reliable and secure payment gateways to protect financial
                transactions and ensure payments are made only when the client
                is satisfied.
              </BlacvkDescription>
            </div>

            <div className="sub_slide_div">
              <div className="image_content">
                <div className="img_div">
                  <img src={customer} alt="Logo" />
                </div>
                <div className="content_div">
                  <BlacvkHeading>Customer Support</BlacvkHeading>
                </div>
              </div>

              <BlacvkDescription>
                Dedicated customer support to assist with any issues or queries,
                ensuring a smooth and satisfying experience.
              </BlacvkDescription>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 20px 100px 0 0;
  .main_div {
    display: flex;
    gap: 20px;
    align-items: center;

    .sub_main_div {
      width: 30%;

      .ist_border {
        width: 400px;
        height: 400px;
        border: 25px solid #ca1de2;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: borderAnimationIst 3s infinite;
        margin-left: -50%;
      }

      .sec_border {
        width: 100%;
        height: 100%;
        border: 25px solid #a444e4;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: borderAnimationSec 3s infinite;
      }

      .three_border {
        width: 100%;
        height: 100%;
        border: 25px solid #4c94e0;
        border-radius: 50%;
        background-color: #e0e0e0;
        animation: borderAnimationThree 3s infinite;
      }
    }

    @keyframes borderAnimationIst {
      0% {
        border-color: #4c94e0; /* Blue */
      }
      50% {
        border-color: #a444e4; /* Purple */
      }
      100% {
        border-color: #ca1de2; /* Pink */
      }
    }

    @keyframes borderAnimationSec {
      0% {
        border-color: #ca1de2; /* Pink */
      }
      50% {
        border-color: #4c94e0; /* Blue */
      }
      100% {
        border-color: #a444e4; /* Purple */
      }
    }

    @keyframes borderAnimationThree {
      0% {
        border-color: #a444e4; /* Purple */
      }
      50% {
        border-color: #ca1de2; /* Pink */
      }
      100% {
        border-color: #4c94e0; /* Blue */
      }
    }

    .sub_main_div_two {
      width: 70%;
      gap: 100px;
      display: flex;
      align-items: center;

      .text-with-border-shadow {
        font-family: "Poppins", sans-serif;
        font-size: 40px;
        font-weight: 600;
        color: white;
        line-height: 1.2;
        -webkit-text-stroke: 1px #6c5fd4;
        -webkit-text-fill-color: white;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        width: 30%;
      }

      .slide_div {
        height: 220px;
        width: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;

        .sub_slide_div {
          padding: 40px 30px;
          display: flex;
          gap: 10px;
          flex-direction: column;
          box-shadow: 0px 12px 28px 0px rgba(140, 149, 159, 0.3);
          border-radius: 20px;
          opacity: 0; /* Initial state */
          transform: translateY(20px); /* Initial position */
          animation: slideUp 0.5s forwards; /* Animation applied */
          .image_content {
            display: flex;
            align-items: center;
            gap: 10px;
            align-items: center;

            /* .img_div {
                width: 15%;
              } */

            .content_div {
              /* width: 85%; */
              display: flex;
              gap: 10px;
              flex-direction: column;
            }
          }
        }

      
      }
    }

  }

  @media (max-width: 567px) {
    padding: 20px;

    .main_div {
      flex-direction: column;

      .sub_main_div {
        display: none;
      }

      .sub_main_div_two {
        width: 100%;
        gap: 20px;
        flex-direction: column;

        .text-with-border-shadow {
          width: 100%;
          text-align: center;

          br {
            display: none;
          }
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 20px;

    .main_div {
      flex-direction: column;

      .sub_main_div {
        display: none;
      }

      .sub_main_div_two {
        width: 100%;
        gap: 40px;
        flex-direction: column;

        .text-with-border-shadow {
          width: 100%;
          text-align: center;
          br {
            display: none;
          }
        }
      }
    }
  }
`;
