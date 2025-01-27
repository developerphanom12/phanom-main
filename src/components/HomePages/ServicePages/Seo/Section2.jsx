import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientHeading,
  Heading,
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
            <Heading>Professional Offshore</Heading>
            <GradientHeading>Seo</GradientHeading>
            <br />

            <GradientHeading>Company</GradientHeading>
            <Heading> in India – of The Market</Heading>
          </span>

          <Blackdescription>
            Phanom Professionals focuses on delivering technology-enabled
            services that make your business a market leader. We are an offshore
            SEO company in India and an esteemed SEO services provider in India
            which means we know how to craft unique SEO tactics that convert.
            With a strong background in custom SEO strategies, intensive
            analytics, and creative approaches, we ensure that businesses
            achieve maximum ROI. Work with us for intelligent content marketing
            and smarter decisions that assure you digital success. One smile is
            all it takes for us to get you started to bigger and better things
            in business!
          </Blackdescription>

          <a href="#form">
            <PurpleBackground className="connect_btn">
              Connect with us <FaArrowRightLong />
            </PurpleBackground>
          </a>
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

  a {
    text-decoration: none;
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
