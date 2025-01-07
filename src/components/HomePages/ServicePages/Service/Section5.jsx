import React from "react";
import styled from "styled-components";
import {
  Greydescription,

  WhiteContent,
} from "../../../../Global/GlobalText";
import process from "../../../../assets/Images/process.png";

import vector from "../../../../assets/Images/vector.png";
import react from "../../../../assets/Images/reactt.png";

import github from "../../../../assets/Images/githubb.png";
import Bootstrap from "../../../../assets/Images/bootstrapp.png";

import figma from "../../../../assets/Images/figmaa.png";
import vscodee from "../../../../assets/Images/vscodee.png";

import postman from "../../../../assets/Images/postmann.png";

import chrome from "../../../../assets/Images/chrome.png";

export const Section5 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div_one">
          <div className="text-with-border-shadow">
            Our Web
            <br />
            Development
            <br />
            Services
          </div>

          <Greydescription>
            We create custom, user-friendly websites to elevate your brand and
            deliver exceptional experiences. From e-commerce to responsive apps,
            our expert team uses cutting-edge technology for outstanding
            results.
          </Greydescription>

          <div className="tecnology_types">
            <div className="sub_technology_type">
              <img src={vector}  alt="devops"/>
              <WhiteContent>DevOps </WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={github} alt="github" />
              <WhiteContent>Github</WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={react} alt="vector" />
              <WhiteContent>React</WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={Bootstrap} alt="bootstrap" />
              <WhiteContent>Bootstrap</WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={figma} alt="figma" />
              <WhiteContent>Figma</WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={vscodee} alt="vscode" />
              <WhiteContent>VS Code</WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={postman} alt="postman" />
              <WhiteContent>Postman</WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={chrome} alt="chrome" />
              <WhiteContent>Chrome</WhiteContent>
            </div>
          </div>
        </div>
        <div className="sub_div_two">
          <img src={process} alt="process"/>
          
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
    .sub_div_one {
      width: 55%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .text-with-border-shadow {
        font-family: "Poppins", sans-serif;
        font-size: 40px;
        font-weight: 600;
        color: white;
        line-height: 1.2;

        -webkit-text-stroke: 1px #6C5FD4;
        -webkit-text-fill-color: white;

        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      }

      .tecnology_types {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        .sub_technology_type {
          border-radius: 10px;
          background-color: #6c5fd4;
          padding: 20px;
          width: 22%;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 5px;
        }
      }
    }
    .sub_div_two {
      display: flex;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
