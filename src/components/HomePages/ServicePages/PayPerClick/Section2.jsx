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

import frame from "../../../../assets/Images/frame.png";


export const Section2 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_main_div">
          <span>
            <Heading>A Offshore Ppc Marketing Agency </Heading> <br />
            <Heading>in India Will Help</Heading>
            <GradientHeading>You Grow Your </GradientHeading> <br />
            <GradientHeading>Business -</GradientHeading>
            <Heading>Contact the Experts Now.</Heading>
          </span>

          <Blackdescription>
          At Phanom Professionals, we create highly effective Pay Per Click(PPC) management strategies tailored specifically for your business. We provide expertly crafted campaigns and as a result of everything that we do, you also benefit as there is an increase in brand visibility, targeted traffic, and ROI. This covers Google Ads, social media PPC, and other focused PPC strategies. With these tools, we can convert clicks into loyal customers. When combined with keyword targeting, persuasive ad copy, and real-time optimizations, our PPC strategies become both cost-effective and result-oriented. So work with the most renowned PPC firm in India to grow your business. Contact us now!
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
