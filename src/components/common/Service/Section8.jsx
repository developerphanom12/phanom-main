import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GreySecondDescription,
  PurpleHeading,
  WhiteDescription,
  WhitekHeading,
  WhiteNumberHeading,
} from "../../../Global/GlobalText";

export const Section8 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_main_div_one">
       

          <div className="text-with-border-shadow">
          Why 
            <br />
            Choose
            <br />
            US?
          </div>

          <GreySecondDescription>
            We help explore design through expert ideas and creative
            programming, enhancing your brand's success.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div" style={{ backgroundColor: "#6C5FD4", border: "1px solid transparent"}}>
          <WhiteNumberHeading>01</WhiteNumberHeading>
          <WhitekHeading>Info Gathering</WhitekHeading>
          <WhiteDescription>
            We have established strong relationships with the leading solar and
            cable companies in the region
          </WhiteDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>02</PurpleHeading>
          <BlackHeading>Design</BlackHeading>
          <GreySecondDescription>
            We help explore design through expert ideas and creative
            programming, enhancing your brand's success.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>03</PurpleHeading>
          <BlackHeading>Development</BlackHeading>
          <GreySecondDescription>
            We track smart trends, showcase our expertise, and keep your brand
            updated with frequent web trends.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>04</PurpleHeading>
          <BlackHeading>Testing</BlackHeading>
          <GreySecondDescription>
            Ensuring fluent application and software performance is our
            priority, refining everything before launching the page.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>05</PurpleHeading>
          <BlackHeading>Deployment & Support</BlackHeading>
          <GreySecondDescription>
            We monitor progress through graphs, ensuring smooth launches and
            optimal web performance.
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
      .text-with-border-shadow {
        font-family: "Poppins", sans-serif;
        font-size: 30px;
        font-weight: 600;
        color: white;
        line-height: 1.2;
        -webkit-text-stroke: 1px #6c5fd4;
        -webkit-text-fill-color: white;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
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
`;
