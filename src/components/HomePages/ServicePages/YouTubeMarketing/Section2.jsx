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
            <Heading>Increase Your Businesses</Heading> 

            <Heading>Engagement with Offshore</Heading>

            <GradientHeading>YouTube Marketing Services</GradientHeading>

            <br />

        
            <Heading> in India</Heading>
          </span>

          <Blackdescription>
               Harness the power of Youtube using Phanom Professionals’ YouTube marketing services. We will help you create engaging video content as we are an SEO agency in India with extensive experience. Our industry relevant knowledge helps us craft powerful videos that boost traffic to your channel, increase viewer retention, and drive organic traffic to your channel. We develop custom strategies to ensure that your videos rank high, connect with the audience, and increase brand visibility and conversions. Now is your chance to grow on Youtube with chill but effective strategies. Start your journey towards digital success and make the first step today!
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
