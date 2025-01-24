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
          <Heading>Various Skills That</Heading>
          <GradientHeading>Shopify Web </GradientHeading>
          <Heading>Development Specialists</Heading>
        </span>

        <Greydescription>
          Access the talent network of 1M+ skilled professionals with 100+ skill
          sets.
        </Greydescription>

        <div className="tech">
          <GradientButton className="tech_btn">
            Frontend Development
          </GradientButton>
          <GreyBorder className="tech_btn">Backend Development</GreyBorder>
          <GreyBorder className="tech_btn">Full Stack Development</GreyBorder>
          <GreyBorder className="tech_btn"> Responsive Design</GreyBorder>
          <GreyBorder className="tech_btn">API Integration</GreyBorder>

          <GreyBorder className="tech_btn">Development</GreyBorder>
          <GreyBorder className="tech_btn">E-Commerce Development</GreyBorder>

          <GreyBorder className="tech_btn">Mobile-First Design</GreyBorder>
          <GreyBorder className="tech_btn">SEO Optimization</GreyBorder>
          <GreyBorder className="tech_btn">Progressive Web Apps</GreyBorder>

          <GreyBorder className="tech_btn">Version Control</GreyBorder>
          <GreyBorder className="tech_btn">Performance Tuning</GreyBorder>
          <GreyBorder className="tech_btn">Quality Assurance</GreyBorder>
          <GreyBorder className="tech_btn">Cloud Integration</GreyBorder>

          <GreyBorder className="tech_btn">UX/UI Design</GreyBorder>
          <GreyBorder className="tech_btn">Theme Customization</GreyBorder>

          <GreyBorder className="tech_btn">Web Security</GreyBorder>
          <GreyBorder className="tech_btn">
            Cross Browser Compatibility
          </GreyBorder>
          <GreyBorder className="tech_btn">Maintenance</GreyBorder>

          <GreyBorder className="tech_btn">Custom Apps</GreyBorder>
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
      justify-content: center;
      .tech_btn {
        min-width: 280px;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 30px 20px;
    .main_div {
      text-align: center;
      .heading {
        br {
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
