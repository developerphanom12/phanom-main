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
          <GradientHeading> Web Developers </GradientHeading>
          <br />
          <Heading>Possess</Heading>
        </span>

        <Greydescription>
          Access the talent network of 1M+ skilled professionals with 100+ skill
          sets
        </Greydescription>

        <div className="tech">
          <GradientButton className="tech_btn">HTML</GradientButton>
          <GreyBorder className="tech_btn">CSS</GreyBorder>
          <GreyBorder className="tech_btn">JavaScript</GreyBorder>
          <GreyBorder className="tech_btn"> Design</GreyBorder>
          <GreyBorder className="tech_btn">Git</GreyBorder>
          <GreyBorder className="tech_btn">React.js</GreyBorder>
          <GreyBorder className="tech_btn">Vue.js</GreyBorder>

          <GreyBorder className="tech_btn">Angular</GreyBorder>
          <GreyBorder className="tech_btn">Bootstrap</GreyBorder>
          <GreyBorder className="tech_btn">Tailwind CSS</GreyBorder>
          <GreyBorder className="tech_btn">Node.js</GreyBorder>
          <GreyBorder className="tech_btn">Express.js</GreyBorder>
          <GreyBorder className="tech_btn">PHP</GreyBorder>
          <GreyBorder className="tech_btn">Python</GreyBorder>

          <GreyBorder className="tech_btn">Django</GreyBorder>
          <GreyBorder className="tech_btn">SQL</GreyBorder>
          <GreyBorder className="tech_btn">NoSQL</GreyBorder>
          <GreyBorder className="tech_btn">Databases</GreyBorder>
          <GreyBorder className="tech_btn">Postman</GreyBorder>
          <GreyBorder className="tech_btn">Mocha</GreyBorder>
          <GreyBorder className="tech_btn">UI</GreyBorder>

          <GreyBorder className="tech_btn">UX</GreyBorder>
          <GreyBorder className="tech_btn">Figma</GreyBorder>
          <GreyBorder className="tech_btn">Adobe XD</GreyBorder>
          <GreyBorder className="tech_btn">Jira</GreyBorder>
          <GreyBorder className="tech_btn">RESTful APIs</GreyBorder>
          <GreyBorder className="tech_btn">GraphQL</GreyBorder>
          <GreyBorder className="tech_btn">Trello</GreyBorder>
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
        width: 31%;
        padding: 10px 5px;
        font-size: 13px;
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
