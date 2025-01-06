import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientHeading,
  Heading,
  Subblackdescription,
  Subdescription,
} from "../../../Global/GlobalText";
import { PurpleBackground } from "../../../Global/GlobalButton";
import { FaArrowRightLong } from "react-icons/fa6";
import partner from "../../../assets/Images/partnernew.png";
import mobile from "../../../assets/Images/mobilenew.png";
import iconpark from "../../../assets/Images/iconpark.png";
import frame from "../../../assets/Images/frame.png";
import seonew from "../../../assets/Images/seonew.png";
import seothree from "../../../assets/Images/seothree.png";
import seotwo from "../../../assets/Images/seotwo.png";


export const Section2 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_main_div">
          <span>
            <Heading>A Launch Of New Era Of</Heading> <br />
            <GradientHeading> Web Development,</GradientHeading>
            <br />
            <Heading>Here We Are</Heading>
          </span>

          <div className="main_icon_content">
            <div className="icon_content">
              <img src={partner} alt="Redefining web development" />
              <Blackdescription>Redefining web development.</Blackdescription>
            </div>

            <div className="sub_icon_content">
              <img src={seonew} alt="seonew" />
              <Subblackdescription>
                We specialize in transforming businesses with impactful,
                SEO-driven strategies that boost visibility, drive growth, and
                deliver measurable results.
              </Subblackdescription>
            </div>
          </div>

          <div className="main_icon_content">
            <div className="icon_content">
              <img src={mobile} alt="Seamless and engaging designs" />
              <Blackdescription>
              Seamless and engaging designs.              </Blackdescription>
            </div>

            <div className="sub_icon_content">
              <img src={seothree} alt="seonew" />
              <Subblackdescription>
                We specialize in transforming businesses with impactful,
                SEO-driven strategies that boost visibility, drive growth, and
                deliver measurable results.
              </Subblackdescription>
            </div>
          </div>

          <div className="main_icon_content">
            <div className="icon_content">
              <img src={iconpark} alt="Redefining web development" />
              <Blackdescription>Scalable, modern solutions.

              </Blackdescription>
            </div>


            <div className="sub_icon_content">
              <img src={seotwo} alt="seonew" />
              <Subblackdescription>
                We specialize in transforming businesses with impactful,
                SEO-driven strategies that boost visibility, drive growth, and
                deliver measurable results.
              </Subblackdescription>
            </div>
          </div>

          <div>
            <PurpleBackground className="connect_btn">
              Connect with us <FaArrowRightLong />
            </PurpleBackground>
          </div>
        </div>

        <div className="sub_main_div_two">
          <img
            src={frame}
            alt="Redefining web development"
            className="main_image"
          />
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

    .sub_main_div {
      display: flex;
      flex-direction: column;
      gap: 30px;
      flex: 1;

   
      .main_icon_content {
        display: flex;
        gap: 10px;
        .icon_content {
          display: flex;
          gap: 20px;
          align-items: center;
          cursor: pointer;
        }

        .icon_content:hover + .sub_icon_content{

          display: block;
          display: flex
;
    flex-direction: column;

        }

        .sub_icon_content {
          width: 14%;
          padding: 10px;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 2px 7px 15px 2px rgba(0, 0, 0, 0.13),
            2px 1px 4px 2px rgba(0, 0, 0, 0.11);
            display: none;
            position: absolute;
          
    left: 27%;
            
        }
      }

      .connect_btn {
        display: flex;

        align-items: center;
        gap: 10px;
      }
    }

    .sub_main_div_two {
      flex: 1;
      width: 100%;
      justify-content: center;
      display: flex;

      img {
      }
    }
  }
`;
