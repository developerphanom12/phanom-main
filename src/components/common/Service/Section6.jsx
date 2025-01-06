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
import shopnew from "../../../assets/Images/shopnew.png";

import phpnew from "../../../assets/Images/phpnew.png";
import webnew from "../../../assets/Images/webnew.png";
import angnew from "../../../assets/Images/angnew.png";
import netnew from "../../../assets/Images/netnew.png";
import webbnew from "../../../assets/Images/webbnew.png";
import dynanew from "../../../assets/Images/dynanew.png";

export const Section6 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          <span>
            <Heading>Your</Heading>
            <span></span>
            <GradientHeading> WIZARD OF BEHIND</GradientHeading>
            <br/>
            <Heading>THE SENSES To Make Efforts</Heading>
            <br />
            <Heading>Presentable</Heading>
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
                <img src={shopnew} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Shopify Website</BlackHeading>
                <Greydescription>
                  The most important factor is being on the stage for longer
                  period and a business website on shopify for sales are more
                  generic through WD.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={phpnew} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Custom PHP Websites</BlackHeading>
                <Greydescription>
                  We elaborate the area for our users to get more and more
                  flexible website for the client and as well as your customers
                  to get used to it.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={webnew} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Custom Web Development</BlackHeading>
                <Greydescription>
                  Giving you an extra edge from your rivals,we provide you
                  layouts, fonts, and colors are developed to augment your
                  online brand.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={angnew} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Angular</BlackHeading>
                <Greydescription>
                  Belief of our clients is satisfied by the reputation, we
                  prepare the structural frameworks with Angular JS for dynamic
                  web applications
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={netnew} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>ASP.NET Websites</BlackHeading>
                <Greydescription>
                  Enabling computer code to be executed by an Internet server
                  the ASP engine reads, executes file, and returns the result to
                  the browser.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={webbnew} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Static Website Development</BlackHeading>
                <Greydescription>
                  Web pages are returned by the server with no change therefore,
                  static Websites are fast; hence we work on the client
                  satisfaction with effect.{" "}
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={dynanew} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Dynamic Website Development</BlackHeading>
                <Greydescription>
                  We can do alteration in Dynamic Websites, it is possible to do
                  so on a common change once, and it will reflect in all the web
                  pages.{" "}
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
