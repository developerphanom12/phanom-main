import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GreySecondDescription,
  Heading,
} from "../../../../Global/GlobalText";
import truenew from "../../../../assets/Images/truenew.png";

export const Section2 = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>Our UI/UX Design </Heading>
          <br />
          <Heading>Services</Heading>
        </span>

        <div className="main_section">
          <div className="sub_main_section">
            <img src={truenew} alt="expertise" />
            <BlackHeading className="sub_content">
              Wireframing and Prototyping
            </BlackHeading>
            <GreySecondDescription className="sub_des_content">
              Transform your ideas into visual blueprints with our detailed
              wireframes and interactive prototypes, ensuring clarity and
              functionality before development begins.
            </GreySecondDescription>
          </div>

          <div className="sub_main_section">
            <img src={truenew} alt="expertise" />
            <BlackHeading className="sub_content">
              User Research and Analysis
            </BlackHeading>
            <GreySecondDescription className="sub_des_content">
              Understand your audience better with our in-depth user research,
              personas, and data analysis to create designs that truly resonate
              with their needs.{" "}
            </GreySecondDescription>
          </div>

          <div className="sub_main_section">
            <img src={truenew} alt="expertise" />
            <BlackHeading className="sub_content">
              Responsive Web Design
            </BlackHeading>
            <GreySecondDescription className="sub_des_content">
              Designs that adapt seamlessly to all devices, ensuring a
              consistent and engaging user experience, whether on desktop,
              tablet, or mobile.{" "}
            </GreySecondDescription>
          </div>

          <div className="sub_main_section">
            <img src={truenew} alt="expertise" />
            <BlackHeading className="sub_content">
              Mobile App UI/UX Design
            </BlackHeading>
            <GreySecondDescription className="sub_des_content">
              Deliver exceptional user experiences for your mobile apps with
              intuitive designs optimized for iOS and Android platforms.{" "}
            </GreySecondDescription>
          </div>

          <div className="sub_main_section">
            <img src={truenew} alt="expertise" />
            <BlackHeading className="sub_content">
              Dashboard and Admin Panel Design
            </BlackHeading>
            <GreySecondDescription className="sub_des_content">
              Create data-driven dashboards and user-friendly admin panels that
              simplify complex tasks with clear visuals and intuitive
              navigation.{" "}
            </GreySecondDescription>
          </div>

          <div className="sub_main_section">
            <img src={truenew} alt="expertise" />
            <BlackHeading className="sub_content">
              Usability Testing and Iteration
            </BlackHeading>
            <GreySecondDescription className="sub_des_content">
              Validate your designs with real user feedback through
              comprehensive usability testing and iterative improvements for
              maximum efficiency.{" "}
            </GreySecondDescription>
          </div>
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
    align-items: center;
    gap: 30px;
    .main_section {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;

      .sub_main_section {
        width: 31%;
        display: flex;
        gap: 10px;

        justify-content: center;
        flex-direction: column;
        align-items: center;

        text-align: center;
        img {
          width: 120px;
          height: 120px;
        }
        .sub_content {
          padding: 0 80px;
        }
        .sub_des_content {
          padding: 0 60px;
        }
      }
    }
  }
`;
