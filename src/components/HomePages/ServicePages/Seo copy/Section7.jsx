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
          <GradientHeading>Shopify Java</GradientHeading>
          
         
          <br/>

          <GradientHeading>Development Specialists</GradientHeading>

        </span>

        <Greydescription>
        Access the talent network of 1M+ skilled professionals with 100+ skill sets.
        </Greydescription>

        <div className="tech">
          <GradientButton className="tech_btn">Core Java Development</GradientButton>
          <GreyBorder className="tech_btn">Spring Framework</GreyBorder>
          <GreyBorder className="tech_btn">Hibernate ORM</GreyBorder>
          <GreyBorder className="tech_btn"> Java EE</GreyBorder>
          <GreyBorder className="tech_btn">Microservices Architecture</GreyBorder>



          <GreyBorder className="tech_btn">RESTful API Development</GreyBorder>
          <GreyBorder className="tech_btn">JavaFX Dev</GreyBorder>

          <GreyBorder className="tech_btn">Multithreading & Concurrency</GreyBorder>
          <GreyBorder className="tech_btn">Database Integration</GreyBorder>
          <GreyBorder className="tech_btn">Version Control</GreyBorder>
          <GreyBorder className="tech_btn">Maven/Gradle Build Tools</GreyBorder>
          <GreyBorder className="tech_btn">Performance Optimization</GreyBorder>
          <GreyBorder className="tech_btn">Cloud Integration</GreyBorder>
          <GreyBorder className="tech_btn">Unit Testing</GreyBorder>

          <GreyBorder className="tech_btn">Backend Development</GreyBorder>
          <GreyBorder className="tech_btn">Cloud Integration</GreyBorder>


          <GreyBorder className="tech_btn">Security</GreyBorder>
          <GreyBorder className="tech_btn">Java Debugging Techniques</GreyBorder>
          <GreyBorder className="tech_btn">Servlets and JSP</GreyBorder>

         

  
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
