import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GreySecondDescription,
  PurpleHeading,
  Textwithborder,
  WhiteDescription,
  WhitekHeading,
  WhiteNumberHeading,
} from "../../../../Global/GlobalText";

export const Section8 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_main_div_one">
          <div className="text_border">
            <Textwithborder>Why</Textwithborder>

            <Textwithborder>Choose</Textwithborder>

            <Textwithborder>US?</Textwithborder>
          </div>

          <GreySecondDescription>
            We at Phanom Professionals have amassed the experience and
            technology necessary to formulate unique web development strategies
            that contribute to business success. With our expert team, we
            develop wonderful looking websites that also generate traffic, drive
            engagement, and achieve measurable outcomes. We ensure that your
            website stands out in the industry with the optimal custom design
            and performance it gets.
          </GreySecondDescription>
        </div>

        <div
          className="sub_main_div"
          style={{
            backgroundColor: "#6C5FD4",
            border: "1px solid transparent",
          }}
        >
          <WhiteNumberHeading>01</WhiteNumberHeading>
          <WhitekHeading>Branding & Strategy</WhitekHeading>
          <WhiteDescription>
            Our firm takes web design a notch higher by designing websites that
            can actively reach out and engage your target audience. Key sections
            of the website like layout and user experience are taken into
            consideration for easy navigation and retention approach boosting
            site traffic.
          </WhiteDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>02</PurpleHeading>
          <BlackHeading>SEO-Focused Development</BlackHeading>
          <GreySecondDescription>
            Your website must always rank high on searches, and with our strong
            seo strategies, it can. With careful planning and implementation of
            keyword research, on-page SEO, and visibility boosting content, we
            help you gain the organic traffic you want.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>03</PurpleHeading>
          <BlackHeading>E-Commerce Solutions</BlackHeading>
          <GreySecondDescription>
            We design intuitive e-commerce platforms, with advanced security,
            speed, and user-friendliness. We implement high-end payment, product
            pages, and checkout processes which transform the customer
            experience to enhance sales.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>04</PurpleHeading>
          <BlackHeading>Optimization & Updates</BlackHeading>
          <GreySecondDescription>
            Responsive web designs are provided which mitigate issues towards
            the customer’s mobile experience. This guarantees user engagement
            and conversions irrespective of the device their site visitors are
            on.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>05</PurpleHeading>
          <BlackHeading>Performance Reporting</BlackHeading>
          <GreySecondDescription>
            As your business performance is monitored, reports are delivered in
            real time to track the business analytics. Other reports provide an
            overview of the traffic and interactions on the website.
          </GreySecondDescription>
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
    flex-wrap: wrap;
    .sub_main_div_one {
      width: 31%;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .text_border {
        display: flex;
        gap: 5px;
        flex-direction: column;
      }
    }
    .sub_main_div {
      width: 31%;
      border: 2px solid #000000;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  @media (max-width: 567px) {
    padding: 10px 20px;
    .main_div {
      flex-direction: column;

      .sub_main_div_one {
        width: 100%;
        gap: 20px;
        padding: 0;
        .text_border {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }
      }
      .sub_main_div {
        width: 100%;
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;

    .main_div {
      .sub_main_div_one {
        width: 48%;
      }

      .sub_main_div {
        width: 48%;
      }
    }
  }
`;
