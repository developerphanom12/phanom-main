import React from "react";
import styled from "styled-components";
import {
  BlackMainDescription,
  GradientHeading,
  Heading,
  SubNavbarLinks,
  WhiteMainHeading,
} from "../../../Global/GlobalText";

import {PurpleBackground } from "../../../Global/GlobalButton";

import herobanner from "../../../assets/Images/herobanner.png";

import bannerimgg from "../../../assets/Images/bannerimgg.png";

export const Section1 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="banner_content">
          <div className="sub_main_div">
            <span>
              <GradientHeading> Let’s innovation</GradientHeading>
              <Heading>meets your</Heading>
              <br />
              <Heading>excellence</Heading>
            </span>

            <BlackMainDescription>
              Excellence refined, innovation ignited, the future  starts
              here
            </BlackMainDescription>


            <div className="btn_div">
              <PurpleBackground>Book an Appointment</PurpleBackground>
            </div>
            
          </div>

          <div className="sub_main_div">
            <img src={bannerimgg} alt="banner" />
          </div>
        </div>

        <div className="pointers">
          <div className="sub_pointers">
            <WhiteMainHeading> 24/7</WhiteMainHeading>
            <SubNavbarLinks>Online Support</SubNavbarLinks>
          </div>
          <div className="vertical_line"></div>

          <div className="sub_pointers">
            <WhiteMainHeading> 100+</WhiteMainHeading>
            <SubNavbarLinks>Web Developed  <br/>& Application</SubNavbarLinks>
          </div>
          <div className="vertical_line"></div>

          <div className="sub_pointers">
            <WhiteMainHeading>4+</WhiteMainHeading>
            <SubNavbarLinks>Year Experience</SubNavbarLinks>
          </div>
        </div>


      </div>
    </Root>
  );
};

const Root = styled.section`
  .main_div {
    background: linear-gradient(to bottom right, white, blue, purple);
    background-image: url(${herobanner});
    background-size: 100% 100%;
    padding: 20px 0 20px 100px;

    .banner_content {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .sub_main_div {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: center;

        img {
          width: 100%;
          object-fit: cover;
          aspect-ratio: 3 / 2;
        }
      }
    }

    .pointers {
      display: flex;
      justify-content: flex-end;
      gap: 30px;
      align-items: center;
      margin-right: 30px;
      .sub_pointers {
        display: flex;
        flex-direction: column;
        align-items: center;
        br{
            display: none;
        }
      }
      .vertical_line {
        border: 1px solid #ffffff;
        height: 70px;
      }
    }
  }

  @media (max-width: 567px) {
    .main_div {
      padding: 30px 0 30px 20px;

      .banner_content {
        flex-direction: column;
        gap: 60px;
        .sub_main_div {
            gap: 30px;
            p{
                padding-right:5px;
            }
            br{
                display: none;
            }
        }




      }

      .pointers {
    gap:10px;
    margin-right: 5px;
    .sub_pointers{
        text-align: center;
        br{
            display: block;
        }
    }
   .vertical_line {
    height: 40px;
}
}
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
  }
`;
