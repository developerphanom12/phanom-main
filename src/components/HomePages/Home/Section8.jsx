import React, { useState } from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientSecondHeading,
  Heading,
  PurpleSubHeading,
} from "../../../Global/GlobalText";
import google from "../../../assets/Images/google.png";
import dev from "../../../assets/Images/dev.png";
import { FaPlus } from "react-icons/fa6";

export const Section8 = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <Root>
      <div className="main_div">
        <span>
          <Heading>Our</Heading>
          <GradientSecondHeading>Service</GradientSecondHeading>
          <Heading>Offerings Include</Heading>
        </span>

        <div className="sub_main_div">
          <div className="btn_div">
            <button
              className={activeButton === 0 ? "active" : ""}
              onClick={() => handleButtonClick(0)}
            >
              {" "}
              Digital Marketing{" "}
            </button>

            <button
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
            >
              {" "}
              Design & Development
            </button>

            <button
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
            >
              {" "}
              Animations & Graphics
            </button>

            <button
              className={activeButton === 3 ? "active" : ""}
              onClick={() => handleButtonClick(3)}
            >
              {" "}
              Design & Development
            </button>
          </div>

          <div className="content_div">
            {activeButton === 0 && (
              <>
                <div className="sub_content_div">
                  <div className="image_div">
                    <img src={google} alt="Design" />
                    <FaPlus />
                    <img src={dev} alt="Design" />
                  </div>
                </div>

                <div className="sub_content_div">
                  <div className="heading_content">
                    <PurpleSubHeading>Design & Development</PurpleSubHeading>

                    <Blackdescription>
                      Design & Development blends creativity and technology to
                      create user-friendly, high-performance solutions.
                    </Blackdescription>
                  </div>
                </div>

                <div className="sub_content_div">
                  <div className="heading_content">
                    <PurpleSubHeading>Services Offered</PurpleSubHeading>

                    <div className="sub_head_content">
                      <Blackdescription>
                        SEO (Search Engine Optimisation)
                      </Blackdescription>
                      <Blackdescription>
                        Social Media Marketing
                      </Blackdescription>
                      <Blackdescription>Pay Per Click (PPC)</Blackdescription>
                      <Blackdescription>Youtube Marketing</Blackdescription>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeButton === 1 && <h1>btn 2 content</h1>}
            {activeButton === 2 && <h1>btn 3 content</h1>}
            {activeButton === 3 && <h1>btn 4 content</h1>}
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 20px 100px;
  .main_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .sub_main_div {
      display: flex;
      flex-direction: column;
      width: 100%;
      .btn_div {
        display: flex;
        gap: 10px;
        button {
          border-top: transparent;
          border-left: transparent;
          border-right: transparent;
          border-bottom: 3px solid #6c5fd4;
          border-radius: 5px;
          background-color: #f1effb;
          font-family: "Poppins", sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 30.86px;
          letter-spacing: 0.005em;
          color: #6c5fd4;
          padding: 10px 30px;
          flex: 1;
          &.active {
            background-color: #6c5fd4;
            color: white;
          }
        }
      }

      .content_div {
        display: flex;
        gap: 20px;
        background-color: #f1effb;
        padding: 70px 30px;
        align-items: center;
        .sub_content_div {
          flex: 1;
          .image_div {
            display: flex;
            gap: 10px;
            align-items: center;

            svg {
              width: 40px;
              height: 40px;
              color: #6c5fd4;
            }
          }

          .heading_content {
            display: flex;
            gap: 10px;
            flex-direction: column;
            .sub_head_content {
              border-left: 4px solid #d0d0d0;
              padding-left: 10px;
              display: flex;
              gap: 5px;
              flex-direction: column;
            }
          }
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 20px;

    .main_div {
      align-items: center;
      text-align: center;

      .sub_main_div {
        gap: 10px;
        .btn_div {
          overflow: auto;
        }

        .content_div {
          padding: 40px 20px;
          flex-direction: column;

         .sub_content_div 
         .image_div {
flex-direction:column;
}

 .heading_content .sub_head_content {
    text-align: left;
}

        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 0 20px 20px;

   .main_div{
    gap:30px;
   
   .sub_main_div{
    .btn_div{
      overflow: auto;
      button{
        padding: 10px 20px;
      }
    }
   .content_div {
    flex-direction: column;
    padding: 20px 30px;
   
    .sub_content_div{
      width: 100%;
.image_div {

    justify-content: center;
}
    }
}

   }
  }

   

  }

`;
