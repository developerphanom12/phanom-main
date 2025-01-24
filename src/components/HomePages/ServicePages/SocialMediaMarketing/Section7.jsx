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
          <GradientHeading>Social Media Marketing</GradientHeading>
          <Heading> Expert Skill Set</Heading>
       
        </span>

        <Greydescription>
        Enjoy a talent marketplace of over 1M talents to improve brand engagement on virtually all platforms.
        </Greydescription>

        <div className="tech">
          <GradientButton className="tech_btn">Facebook Ads</GradientButton>
          <GreyBorder className="tech_btn">Instagram Growths</GreyBorder>
          <GreyBorder className="tech_btn">Twitter Management</GreyBorder>
          <GreyBorder className="tech_btn"> LinkedIn Campaigns</GreyBorder>
          <GreyBorder className="tech_btn">Social Media Content Creation</GreyBorder>
          <GreyBorder className="tech_btn">Influencer Marketing</GreyBorder>
          <GreyBorder className="tech_btn">Community Engagement</GreyBorder>

          <GreyBorder className="tech_btn">Analytics & Reporting</GreyBorder>
          <GreyBorder className="tech_btn">Hashtag Optimization</GreyBorder>
          <GreyBorder className="tech_btn">Paid Campaigns</GreyBorder>
          <GreyBorder className="tech_btn">Content Scheduling</GreyBorder>

          <GreyBorder className="tech_btn">Viral Marketing</GreyBorder>
          <GreyBorder className="tech_btn">Stories & Reels Creation</GreyBorder>
          <GreyBorder className="tech_btn">Brand Strategy</GreyBorder>

          <GreyBorder className="tech_btn">Audience Targeting</GreyBorder>
          <GreyBorder className="tech_btn">Competitor Analysis</GreyBorder>


          <GreyBorder className="tech_btn">Ad Budget Optimization</GreyBorder>
          <GreyBorder className="tech_btn">Social Media SEO</GreyBorder>

         

  
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
