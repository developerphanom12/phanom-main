import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GradientHeading,
  Greydescription,
  Heading,
} from "../../../Global/GlobalText";
import { PurpleBackground } from "../../../Global/GlobalButton";
import wordnew from "../../../assets/Images/wordnew.png";

export const Section6 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          <span>
            <Heading>Your</Heading>
            <GradientHeading> WIZARD OF BEHIND </GradientHeading>
            <br />
            <Heading>THE SENSES To Make Efforts</Heading>
            <br />
            <Heading> Presentable</Heading>
          </span>

          <Greydescription>
            Your “WIZARD OF BEHIND THE SENSES” To Make Efforts Presentable Being
            a professional our ideal agenda in this cutthroat Competitive market
            is to reserve the higher rank with client satisfaction. The
            brilliant piece of frame work is done on both front and back-end and
            managing the data on the server as well, we are best to facilitate
            for the best and to stand along to PREPARE, PERFORM, AND PROSPER for
            the best.
          </Greydescription>
          <div>
            <PurpleBackground>Book an Appointment</PurpleBackground>
          </div>
        </div>

        <div className="sub_div_two">
          <div className="slide_div">
            <div className="sub_slide_div">
              <div className="img_div">
                <img src={wordnew} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>WordPress & Woo-Commerce</BlackHeading>
                <Greydescription>
                  The preference of the client is more Significant for working
                  on word press and it makes creating and managing an online
                  store simple.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={wordnew} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>WordPress & Woo-Commerce</BlackHeading>
                <Greydescription>
                  The preference of the client is more Significant for working
                  on word press and it makes creating and managing an online
                  store simple.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={wordnew} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>WordPress & Woo-Commerce</BlackHeading>
                <Greydescription>
                  The preference of the client is more Significant for working
                  on word press and it makes creating and managing an online
                  store simple.
                </Greydescription>
              </div>
            </div>
          </div>
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
    .sub_div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 35px;
    }
    .sub_div_two {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      justify-content: center;
      .slide_div {
        height: 190px;
        width: 100%;
        overflow: auto;
        .sub_slide_div {
          padding: 40px 30px;
          display: flex;
          gap: 20px;

          box-shadow: 0 1px 3px #ececec, 0 1px 2px #ececec;
          box-shadow: 0px 12px 28px 0px rgba(140, 149, 159, 0.3);
          border-radius: 20px;
          .img_div {
            width: 15%;
          }
          .content_div {
            width: 85%;
            display: flex;
            gap: 10px;
            flex-direction: column;
          }
        }
      }
    }
  }
`;
