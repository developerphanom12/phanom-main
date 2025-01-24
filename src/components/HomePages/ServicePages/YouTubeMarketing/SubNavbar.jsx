import React from "react";
import styled from "styled-components";
import { SubNavbarLinks, WhiteHeading } from "../../../../Global/GlobalText";

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

  @media (max-width: 567px) {

    .main_div {
      background:linear-gradient(40deg, #4c96e3, #ca1de5, #bc2be5);
      padding: 8px 20px;
      .icon {
        display: none;
      }
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
    
  }
`;
