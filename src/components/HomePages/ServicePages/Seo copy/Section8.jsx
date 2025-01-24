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
            At Phanom Professionals, we rely on both professional expertise and
            professional tools to provide unique Java development services in
            order to increase business performance and outcomes. Our specialized
            team has developed and implemented methods in building, tuning, and
            maintaining Java-based applications to ensure innovation,
            performance, scalability, and seamlessness in every project. We will
            provide bespoke Java development services that address specific
            challenges to ensure your business effectively competes in your
            industry.
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
          We create custom Java solutions with strategies for design and development that captures the attention of the intended audience. Our team implements a set of frameworks that emphasizes user experience, scalability, and integration neutrality as a means to improve engagement, retention, and overall performance of the Java-based platforms developed.
          </WhiteDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>02</PurpleHeading>
          <BlackHeading>SEO-Focused Development</BlackHeading>
          <GreySecondDescription>
          For specific Java applications, we target one primary objective for any application - high visibility ranking. Our research and many years of practice for SEO, keyword research, on-page Java application optimization, and content enhancement ensure that your applications serve the right audience with optimal visibility.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>03</PurpleHeading>
          <BlackHeading>E-Commerce Solutions</BlackHeading>
          <GreySecondDescription>
          We focus on modern, fast, and highly secure Java-based e-commerce solutions that permit the users to have seamless experiences with the services we provide. Our tailored solutions include user friendly smart check out, effective product management, and optimized payment gateway to drive conversion and sales.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>04</PurpleHeading>
          <BlackHeading>Updates and Further Changes</BlackHeading>
          <GreySecondDescription>
          You don’t need to stress on modernizing your Java applications as we guarantee ongoing optimization and performance enhancement. We are committed to being responsive and adopting incrementally better, more mobile friendly, and user engaging updates that effectively assist in steady growth of your business and implement agile changes as needed.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>05</PurpleHeading>
          <BlackHeading>Performance Overview</BlackHeading>
          <GreySecondDescription>
                   Our Java Development Services provide performance comprehensive reports along with monitoring as an integrated service that includes traffic, usability, and other relevant KPIs. We take care of all adjustments necessary in the Java based applications giving you the freedom to concentrate on growing your business.
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
  }
`;
