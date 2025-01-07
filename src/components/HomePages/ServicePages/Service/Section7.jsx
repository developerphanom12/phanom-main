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
          <GradientButton>HTML</GradientButton>
          <GreyBorder>CSS</GreyBorder>
          <GreyBorder>JavaScript</GreyBorder>
          <GreyBorder>Design</GreyBorder>
          <GreyBorder>Git</GreyBorder>
          <GreyBorder>React.js</GreyBorder>
          <GreyBorder>Vue.js</GreyBorder>


          <GreyBorder>Angular</GreyBorder>
          <GreyBorder>Bootstrap</GreyBorder>
          <GreyBorder>Tailwind CSS</GreyBorder>
          <GreyBorder>Node.js</GreyBorder>
          <GreyBorder>Express.js</GreyBorder>
          <GreyBorder>PHP</GreyBorder>
          <GreyBorder>Python</GreyBorder>


          
          <GreyBorder>Django</GreyBorder>
          <GreyBorder>SQL</GreyBorder>
          <GreyBorder>NoSQL</GreyBorder>
          <GreyBorder>Databases</GreyBorder>
          <GreyBorder>Postman</GreyBorder>
          <GreyBorder>Mocha</GreyBorder>
          <GreyBorder>UI</GreyBorder>


          <GreyBorder>UX</GreyBorder>
          <GreyBorder>Figma</GreyBorder>
          <GreyBorder>Adobe XD</GreyBorder>
          <GreyBorder>Jira</GreyBorder>
          <GreyBorder>RESTful APIs</GreyBorder>
          <GreyBorder>GraphQL</GreyBorder>
          <GreyBorder>Trello</GreyBorder>



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
    .tech{
      display: flex;
      flex-wrap: wrap;
      gap:20px;
      margin-top: 10px;
    }
  }
`;
