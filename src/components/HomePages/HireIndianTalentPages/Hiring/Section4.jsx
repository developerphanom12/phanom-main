import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GradientHeading,
  Greydescription,
  Heading,
} from "../../../../Global/GlobalText";

import wordnew from "../../../../assets/Images/wordnew.png";
import shopnew from "../../../../assets/Images/shopnew.png";
import phpnew from "../../../../assets/Images/phpnew.png";
import webnew from "../../../../assets/Images/webnew.png";
import angnew from "../../../../assets/Images/angnew.png";
import netnew from "../../../../assets/Images/netnew.png";
import webbnew from "../../../../assets/Images/webbnew.png";
import dynanew from "../../../../assets/Images/dynanew.png";

import medianewone from "../../../../assets/Images/medianewone.png";

import medianewtwo from "../../../../assets/Images/medianewtwo.png";

export const Section4 = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>Ready to Elevate </Heading>
          <br />

          <Heading>Your</Heading>
          <GradientHeading> Digital Experience</GradientHeading>

          <Heading>?</Heading>
        </span>
        <div className="sub_cont_section">
          <div className="sub_cont_one">
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
                    flexible website for the client and as well as your
                    customers to get used to it.
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
                    prepare the structural frameworks with Angular JS for
                    dynamic web applications
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
                    the ASP engine reads, executes file, and returns the result
                    to the browser.
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
                    Web pages are returned by the server with no change
                    therefore, static Websites are fast; hence we work on the
                    client satisfaction with effect.{" "}
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
                    We can do alteration in Dynamic Websites, it is possible to
                    do so on a common change once, and it will reflect in all
                    the web pages.{" "}
                  </Greydescription>
                </div>
              </div>
            </div>
          </div>

          <div className="sub_div_two">
            <img src={medianewtwo} alt="medianewtwo" />
            <img src={medianewone} alt="medianewone" />
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
    display: flex;
    flex-direction: column;
    gap: 30px;
    .sub_cont_section {
      display: flex;
      gap: 20px;
      padding: 0 100px;
      .sub_cont_one {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        justify-content: center;
        .slide_div {
          height: 590px;
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

      .sub_div_two {
        flex: 1;
        display: flex;
        flex-direction: column;
        img {
          width: 100%;
          height: 300px;
          object-fit: contain;
          aspect-ratio: 3 / 2;
        }
      }
    }
  }
`;
