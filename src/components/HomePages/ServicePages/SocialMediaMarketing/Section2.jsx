import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientHeading,
  Heading,
  Subblackdescription,
} from "../../../../Global/GlobalText";
import { PurpleBackground } from "../../../../Global/GlobalButton";
import { FaArrowRightLong } from "react-icons/fa6";
import partner from "../../../../assets/Images/partnernew.png";
import mobile from "../../../../assets/Images/mobilenew.png";
import iconpark from "../../../../assets/Images/iconpark.png";
import frame from "../../../../assets/Images/frame.png";
import seonew from "../../../../assets/Images/seonew.png";
import seothree from "../../../../assets/Images/seothree.png";
import seotwo from "../../../../assets/Images/seotwo.png";

export const Section2 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_main_div">
          <span>
            <Heading>Now Grow Your Brand in New</Heading> <br />
            <Heading>Ways with an Offshore</Heading>
            <GradientHeading>Social</GradientHeading>
            <br />
            <GradientHeading>Media Marketing Agency</GradientHeading>
            <Heading>in India</Heading>
          </span>

          <Blackdescription>
            At Phanom Professionals, we have a vision of turning small ideas
            into bigger ones. With expertise as a professional social media
            marketing agency, we specialize in using the tools of the digital to
            transform brands worldwide. This is achieved through advanced
            In-depth strategies about the workings of the various social media
            platforms so as to ensure your brand not only survives but
            flourishes. Take your brand to the next level and make sure that you
            have maximum digital impact. Contact Us Now at Phanom Professionals
            and Take Your Brand to Greater Heights!
          </Blackdescription>

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

  @media (max-width: 567px) {
    padding: 30px 20px;

    .main_div {
      flex-direction: column;
      .sub_main_div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        flex: 1;
        br {
          display: none;
        }

        .connect_btn {
          margin-top: 20px;
        }
      }
    }

    .main_div .sub_main_div_two {
      img {
        width: 100%;
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;
    .main_div {
      .sub_main_div_two {
        img {
          width: 100%;
        }
      }
    }
  }
`;
