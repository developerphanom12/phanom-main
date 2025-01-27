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
          <GradientHeading>Seo</GradientHeading>
          
          <Heading>Specialists</Heading>
          <br/>

          <Heading>Possess</Heading>
        </span>

        <Greydescription>
        Access the talent network of 1M+ skilled professionals with 100+ skill sets
        </Greydescription>

        <div className="tech">
          <GradientButton className="tech_btn">Keyword Research</GradientButton>
          <GreyBorder className="tech_btn">Competitor Analysis</GreyBorder>
          <GreyBorder className="tech_btn">On-Page SEO</GreyBorder>
          <GreyBorder className="tech_btn"> Technical SEO</GreyBorder>
          <GreyBorder className="tech_btn">Content Marketing</GreyBorder>
          <GreyBorder className="tech_btn">User Experience (UX) Optimization</GreyBorder>
          <GreyBorder className="tech_btn">E-Commerce SEO</GreyBorder>

          <GreyBorder className="tech_btn">Mobile SEO</GreyBorder>
          <GreyBorder className="tech_btn">Moz</GreyBorder>
          <GreyBorder className="tech_btn">Local SEO</GreyBorder>
          <GreyBorder className="tech_btn">Google Analytics</GreyBorder>
          <GreyBorder className="tech_btn">Google Search Console</GreyBorder>
          <GreyBorder className="tech_btn">SEMrush</GreyBorder>
          <GreyBorder className="tech_btn">Ahrefs</GreyBorder>

          <GreyBorder className="tech_btn">Yoast SEO</GreyBorder>
          <GreyBorder className="tech_btn">Speed</GreyBorder>


          <GreyBorder className="tech_btn">RankMath</GreyBorder>
          <GreyBorder className="tech_btn">Screaming Frog</GreyBorder>
          <GreyBorder className="tech_btn">Schema Markup</GreyBorder>
          <GreyBorder className="tech_btn">Social Media Integration</GreyBorder>
         

  
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
        // br{
        //   display: none;
        // }
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
