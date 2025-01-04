import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientHeading,
  Heading,
} from "../../../Global/GlobalText";
import { PurpleBackground } from "../../../Global/GlobalButton";
import { FaArrowRightLong } from "react-icons/fa6";
import partner from "../../../assets/Images/partnernew.png";
import mobile from "../../../assets/Images/mobilenew.png";
import iconpark from "../../../assets/Images/iconpark.png";
import frame from "../../../assets/Images/frame.png";

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

          <div className="icon_content">
            <img src={partner} alt="Redefining web development" />
            <Blackdescription>Redefining web development.</Blackdescription>
          </div>

          <div className="icon_content">
            <img src={mobile} alt="Seamless and engaging designs" />
            <Blackdescription>Seamless and engaging designs.</Blackdescription>
          </div>

          <div className="icon_content">
            <img src={iconpark} alt="Redefining web development" />
            <Blackdescription>Redefining web development.</Blackdescription>
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
      .main_image {
      }
      .icon_content {
        display: flex;
        gap: 20px;
        align-items: center;
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
