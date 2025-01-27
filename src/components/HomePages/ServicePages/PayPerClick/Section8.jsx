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
            Boost your Business Growth with a Specialist's Pay-Per-Click (PPC)
            services. Focus on targeted clients, generate traffic, and increase
            conversions. Start today for real results!
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
          <WhitekHeading>Keyword Research & Strategy</WhitekHeading>
          <WhiteDescription>
            It is possible to have us carry out a comprehensive report on your
            keywords which can help analyze the target audience that can bring
            value and determine a PPC campaign that works for you.
          </WhiteDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>02</PurpleHeading>
          <BlackHeading>Ad Creation & Optimize</BlackHeading>
          <GreySecondDescription>
            With the aid of well crafted ad the targeted demographics will now
            be able to engage more with the business which will in turn raise
            your CTR (`click through rates) thus the ads will be relevant all
            the time.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>03</PurpleHeading>
          <BlackHeading>Landing Page Optimization</BlackHeading>
          <GreySecondDescription>
            Get the assurance of us improving your landing pages for more
            conversion. This includes speeding things up, tweaking the ads to
            match their expectations and enhancing user experience.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>04</PurpleHeading>
          <BlackHeading>Bid Management & Budgeting</BlackHeading>
          <GreySecondDescription>
            We will get you cost-effective clicks by managing your click and
            campaign performance along with conversions. This is to make sure we
            give you the best marketing results.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>05</PurpleHeading>
          <BlackHeading>Monitoring & Reporting</BlackHeading>
          <GreySecondDescription>
            The achieved success is determined by the growth and deep report
            insight changes which are as a result of active checking of your PPC
            campaigns.{" "}
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

 .main_div{
 
 .sub_main_div_one {
    width: 48%;
   
}
    .sub_main_div{
       width: 48%;

    }

}


  }
`;
