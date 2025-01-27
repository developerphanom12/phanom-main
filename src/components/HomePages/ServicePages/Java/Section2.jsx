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
            <Heading>Partnering With the Right</Heading>
            <br />
            <Heading>Offshore</Heading>

            <GradientHeading>Java Software </GradientHeading>

            <Heading> Development Company in India</Heading>
          </span>

          <Blackdescription>
            As a leader in technology, you have made a great choice in picking
            an offshore Java software development company India. You can depend
            on India for cost effective, high quality solutions. Your Java
            applications will be developed with scalability, performance, and
            functionality in mind. Our developers are experienced in the most
            current Java technologies and will develop custom software solutions
            for your business. From high-end enterprise applications and web
            solutions to complex integrations, our offshore developers have the
            skills to implement all your requirements efficiently and flawlessly
            on all platforms. Unlock the full potential of your Java software
            and improve your business processes with us. Our rapid response,
            cost-effective business models and expert Java development services
            ensures that your business gets the best tailored results. Let us
            know if we can help by improving your business with our qualitative
            Java solutions. Get in touch with us today so we can start
            discussing your project and commence offshore Java software
            development services India.
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
