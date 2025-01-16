import React from "react";
import styled from "styled-components";
import {
  Subdescription,
  SubNavbarLinks,
  Subpurpledescription,
  WhiteHeading,
} from "../../../../Global/GlobalText";
import unionnew from "../../../../assets/Images/unionnew.png";
import { IoIosArrowForward } from "react-icons/io";
import { FormSection } from "./FormSection";

export const SubNavbar = () => {
  return (
    <Root>
      <div className="main_div">
        <WhiteHeading>Development</WhiteHeading>

        <div className="icon">
          <a href="#form">
            <SubNavbarLinks>Service</SubNavbarLinks>
          </a>

          <a href="#form">
            <SubNavbarLinks>Key Feature</SubNavbarLinks>
          </a>

          <a href="#form">
            <SubNavbarLinks>Related Service</SubNavbarLinks>
          </a>

          <a href="#form">
            <SubNavbarLinks>Contact us</SubNavbarLinks>
          </a>
        </div>
      </div>

      <img src={unionnew} alt="unionnew" className="union_img" />

      <div className="breadcrumb_main_div">
        <a href="/">
          <Subdescription>Home</Subdescription>
        </a>
        <IoIosArrowForward style={{ color: "667085" }} />

        <a href="/">
          <Subdescription>Service</Subdescription>
        </a>

        <IoIosArrowForward style={{ color: "6C5FD4" }} />

        <a href="/">
          <Subpurpledescription>Development</Subpurpledescription>
        </a>
      </div>

      <FormSection />
    </Root>
  );
};

const Root = styled.section`
  .main_div {
    position: relative;
    background: linear-gradient(45deg, #469ae0, #9a4de4, #d01ae5);
    display: flex;
    justify-content: space-between;
    padding: 15px 100px;
    align-items: center;

    .icon {
      display: flex;
      gap: 30px;
      a {
        text-decoration: none;
      }
    }
  }

  .main_div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5); /* Adjust 0.3 for desired opacity */
    pointer-events: none; /* Ensures overlay does not interfere with interactions */
  }

  .union_img {
    z-index: 1111111;
    position: absolute;
    right: 0;
    top: -40px;
    height: 400px;
  }

  .breadcrumb_main_div {
    display: flex;
    gap: 10px;
    padding: 30px 100px;
    a {
      text-decoration: none;
    }
  }

  @media (max-width: 567px) {

    .main_div {
      background: linear-gradient(40deg, #4c96e3, #ca1de5, #bc2be5);
      padding:8px 20px;
  
      .icon {
        display: none;
      }

   
    }

    .union_img {
        height: 260px;
      }

    .breadcrumb_main_div {
        padding: 0;
        display: none;
      }


  }

  @media (min-width: 567px) and (max-width: 1024px) {

    .main_div {
    background: linear-gradient(40deg, #4c96e3, #ca1de5, #bc2be5);
    padding: 10px 30px;

    .icon {
        gap: 15px;
      }
}

 .breadcrumb_main_div {
 
    padding: 20px;
}
  }
`;
