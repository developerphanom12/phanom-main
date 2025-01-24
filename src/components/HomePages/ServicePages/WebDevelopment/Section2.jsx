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
            <Heading>Your Partner for Success –</Heading>
            <br />
            <Heading>Offshore –</Heading>
            <GradientHeading>Web Development </GradientHeading> <br />
            <GradientHeading>Services</GradientHeading>
            <Heading> in India </Heading>
          </span>

          <Blackdescription>
            When it comes to offshore web development services, India is the
            place to be. The solutions are affordable and at the highest
            standard. We have an offshore development team that is made of high
            trained and experienced developers along with state of the art
            technologies at their disposal to deliver web development solutions
            tailored to suit your business. From traditional websites to
            e-commerce or enterprise applications, we have the skills that
            guarantee efficiency, scalability, and flawless functioning. Work
            with us, so you can enjoy all the benefits that come with offshore
            web development. We can help take your business to the next level.
          </Blackdescription>

          <Blackdescription>
            Contact us now and we will discuss your project and get you started
            with offshore development.
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
