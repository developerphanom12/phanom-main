import React from "react";
import styled from "styled-components";
import { BlacvkDescription, BlacvkHeading } from "../Global/GlobalText";

export const Test = () => {
  return (
    <Root>
      <div className="slide_div">
        <div className="sub_slide_div">
          <div className="image_content">
            <div className="img_div">
              {/* <img src={rangenew} alt="Logo" /> */}
            </div>

            <div className="content_div">
              <BlacvkHeading>Wide Range of Services</BlacvkHeading>
            </div>
          </div>

          <BlacvkDescription>
            Unlock a world of possibilities with our diverse pool of talented freelancers – from digital marketing to web development
          </BlacvkDescription>
        </div>

        <div className="sub_slide_div">
          <div className="image_content">
            <div className="img_div">
              {/* <img src={verifiednew} alt="Logo" /> */}
            </div>
            <div className="content_div">
              <BlacvkHeading>Verified Professionals</BlacvkHeading>
            </div>
          </div>

          <BlacvkDescription>
            You're in good hands with our verified professionals – your trusted experts for top-quality work
          </BlacvkDescription>
        </div>

        <div className="sub_slide_div">
          <div className="image_content">
            <div className="img_div">
              {/* <img src={pricingnew} alt="customized" /> */}
            </div>
            <div className="content_div">
              <BlacvkHeading>Competitive Pricing</BlacvkHeading>
            </div>
          </div>

          <BlacvkDescription>
            Find the perfect fit for your budget with our competitive pricing
          </BlacvkDescription>
        </div>

        <div className="sub_slide_div">
          <div className="image_content">
            <div className="img_div">
              {/* <img src={customisenew} alt="Logo" /> */}
            </div>
            <div className="content_div">
              <BlacvkHeading>Customized Solutions</BlacvkHeading>
            </div>
          </div>

          <BlacvkDescription>
            Experience the power of personalized service with our freelancers, who tailor their solutions to meet your unique needs.
          </BlacvkDescription>
        </div>

        <div className="sub_slide_div">
          <div className="image_content">
            <div className="img_div">
              {/* <img src={quicknew} alt="Logo" /> */}
            </div>
            <div className="content_div">
              <BlacvkHeading>Quick Turnaround</BlacvkHeading>
            </div>
          </div>

          <BlacvkDescription>
            Efficient project management and prompt delivery of services, saving clients time and effort.
          </BlacvkDescription>
        </div>

        <div className="sub_slide_div">
          <div className="image_content">
            <div className="img_div">
              {/* <img src={securenew} alt="Logo" /> */}
            </div>
            <div className="content_div">
              <BlacvkHeading>Secure Payments</BlacvkHeading>
            </div>
          </div>

          <BlacvkDescription>
            Reliable and secure payment gateways to protect financial transactions and ensure payments are made only when the client is satisfied.
          </BlacvkDescription>
        </div>

        <div className="sub_slide_div">
          <div className="image_content">
            <div className="img_div">
              {/* <img src={feednew} alt="Logo" /> */}
            </div>
            <div className="content_div">
              <BlacvkHeading>Feedback and Ratings</BlacvkHeading>
            </div>
          </div>

          <BlacvkDescription>
            Reliable and secure payment gateways to protect financial transactions and ensure payments are made only when the client is satisfied.
          </BlacvkDescription>
        </div>

        <div className="sub_slide_div">
          <div className="image_content">
            <div className="img_div">
              {/* <img src={customer} alt="Logo" /> */}
            </div>
            <div className="content_div">
              <BlacvkHeading>Customer Support </BlacvkHeading>
            </div>
          </div>

          <BlacvkDescription>
            Dedicated customer support to assist with any issues or queries, ensuring a smooth and satisfying experience.
          </BlacvkDescription>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  .slide_div {
    height: 220px;
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sub_slide_div {
    padding: 40px 30px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    box-shadow: 0px 12px 28px 0px rgba(140, 149, 159, 0.3);
    border-radius: 20px;
    opacity: 0; /* Initially invisible */

    animation: slideUp 0.8s ease-out infifnity; /* Apply slide up animation */
    

    /* Add a delay based on the index of the element */
    animation-delay: ${(props) => props.index * 0.2}s;

    .image_content {
      display: flex;
      align-items: center;
      gap: 10px;
      align-items: center;

      .content_div {
        display: flex;
        gap: 10px;
        flex-direction: column;
      }
    }
  }

  /* Define slide up animation */
  @keyframes slideUp {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
