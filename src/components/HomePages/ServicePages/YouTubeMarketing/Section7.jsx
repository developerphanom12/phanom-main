import React from "react";
import styled from "styled-components";
import {
  GradientHeading,
  Greydescription,
  Heading,
} from "../../../../Global/GlobalText";
import { GradientButton, GreyBorder } from "../../../../Global/GlobalButton";

export const Section7 = () => {
  return (
    <Root>
      <div className="main_div">
        <span className="heading">
          <Heading>Various Skills that</Heading>
          <GradientHeading>Youtube Marketing eo</GradientHeading><br/>


          <GradientHeading>Specialists Possess </GradientHeading>

        </span>

        <Greydescription>
        Access the talent network of 1M+ skilled professionals with 100+ skill sets.
                </Greydescription>

        <div className="tech">
          <GradientButton className="tech_btn">Content</GradientButton>
          <GreyBorder className="tech_btn">Audience Research</GreyBorder>
          <GreyBorder className="tech_btn"> Channel Optimization</GreyBorder>
          <GreyBorder className="tech_btn">Ad Copy Creation</GreyBorder>
          <GreyBorder className="tech_btn">Analytics and Reporting</GreyBorder>
          <GreyBorder className="tech_btn">Script Writing</GreyBorder>

          <GreyBorder className="tech_btn">Thumbnail Design</GreyBorder>
          <GreyBorder className="tech_btn">A/B Testing</GreyBorder>
          <GreyBorder className="tech_btn">Keyword Research</GreyBorder>
          <GreyBorder className="tech_btn">Target Audience Segmentation</GreyBorder>
          <GreyBorder className="tech_btn">Remarketing Campaigns</GreyBorder>
          <GreyBorder className="tech_btn">Performance Tracking</GreyBorder>
          <GreyBorder className="tech_btn">Budget Optimization</GreyBorder>

          <GreyBorder className="tech_btn">Mobile Ads</GreyBorder>
          <GreyBorder className="tech_btn">Ad Extensions</GreyBorder>


          <GreyBorder className="tech_btn">Social Media Ads</GreyBorder>
          <GreyBorder className="tech_btn">Content Scheduling</GreyBorder>
          <GreyBorder className="tech_btn">Conversion Tracking</GreyBorder>
          <GreyBorder className="tech_btn">PPC Audit</GreyBorder>
         

  
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px;
  .main_div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    span.heading {
      text-align: center;
    }
    .tech {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 10px;
      justify-content:center;
      .tech_btn{
      min-width: 280px;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 30px 20px;
    .main_div 
    {
      text-align: center;
      .heading{
        br{
          display: none;
        }
      }
    .tech {
      gap: 7px;
      justify-content: space-between;
      .tech_btn {
        width: 48%;
        padding: 10px 5px;
        font-size: 13px;
        min-width: unset;
      }
    }
  }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;
    .main_div .tech {
      gap: 7px;
      justify-content: center;
  
      .tech_btn {
        width: 18%;
        padding: 10px 5px;
        font-size: 13px;
      }
    }
  }
`;
