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
            <Heading>Your Trusted Partner For Offshore</Heading>
            <br />
            <GradientHeading>Shopify Web Development</GradientHeading>
            <br />
            <GradientHeading>Services</GradientHeading>
            <Heading>in India</Heading>
          </span>

          <Blackdescription>
            When it comes to offshore Shopify web development services in India,
            you’re making a smart choice. India offers affordable, top-tier
            solutions that ensure your Shopify store looks great and functions
            seamlessly. Our skilled developers use the latest technologies to
            provide custom web solutions tailored to your business. Whether you
            need a custom theme, e-commerce solutions, or advanced integrations,
            our offshore team guarantees scalability, fast website performance,
            and flawless functionality across all platforms. Partner with us to
            unlock your Shopify store’s potential and boost your online
            presence. Choose us for affordable, expert Shopify development,
            tailored services, and fast turnaround times. Ready to elevate your
            online store? Contact us now to discuss your project and get started
            with offshore Shopify web development services in India.
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

    a{
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
