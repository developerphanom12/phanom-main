import React from "react";
import styled from "styled-components";
import {
    Blackdescription,
  BlackHeading,
} from "../../../Global/GlobalText";

import { PurpleBackground } from "../../../Global/GlobalButton";
import holistic from "../../../assets/Images/holistic.png";
import clent from "../../../assets/Images/clientt.png";
import innovative from "../../../assets/Images/innovative.png";
import team from "../../../assets/Images/team.png";
import edgetechnology from "../../../assets/Images/edgetechnology.png";
import excellence from "../../../assets/Images/excellence.png";
import strategy from "../../../assets/Images/strategy.png";
import practice from "../../../assets/Images/practice.png";

export const Section4 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          
          <div class="text-with-border-shadow">
          What makes
            <br />
            Us Unique?
          </div>

          <Blackdescription>
            At Phanom Professionals, we don’t just offer services; we innovate, create, and lead with excellence. 
            Our unique and forward-thinking approach sets us apart in the highly competitive world of marketing and IT 
            services. As a leading digital marketing agency in India, we are committed to delivering transformative solutions 
            that drive growth, inspire engagement, and establish lasting success for our clients.
          </Blackdescription>


          <div>

            <PurpleBackground>Book an Appointment</PurpleBackground>

          </div>
        </div>

        <div className="sub_div_two">
         
        <div className="slide_div">

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={holistic} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Holistic Solutions</BlackHeading>
                <Blackdescription>
                We provide end-to-end services that address all aspects of your needs, ensuring seamless integration and effective results.
                </Blackdescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={clent} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Client-Centric Approach</BlackHeading>
                <Blackdescription>
                Your goals and satisfaction are our top priorities, driving us to craft tailored solutions that align seamlessly with your vision and exceed expectations.
                </Blackdescription>
              </div>
            </div>


            <div className="sub_slide_div">
              <div className="img_div">
                <img src={innovative} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Innovative Thinking</BlackHeading>
                <Blackdescription>
                Our team is made up of highly skilled professionals with extensive experience & diverse expertise, guaranteeing  quality, innovative solutions, and outstanding results in every project we undertake.                </Blackdescription>
              </div>
            </div>


            <div className="sub_slide_div">
              <div className="img_div">
                <img src={team} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Expert Team</BlackHeading>
                <Blackdescription>
                            Our team is made up of highly skilled professionals with extensive experience & diverse expertise, guaranteeing  quality, innovative solutions, and outstanding results in every project we undertake. 
                </Blackdescription>
              </div>
            </div>


            <div className="sub_slide_div">
              <div className="img_div">
                <img src={edgetechnology} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Cutting-Edge Technology</BlackHeading>
                <Blackdescription>
                         We leverage the latest tools and technologies to stay ahead of industry trends and deliver modern solutions.  
                </Blackdescription>
              </div>
            </div>


            <div className="sub_slide_div">
              <div className="img_div">
                <img src={excellence} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Commitment to Excellence</BlackHeading>
                <Blackdescription>
                         Our dedication to quality and continuous improvement ensures outstanding results and long-term client satisfaction.     
                </Blackdescription>
              </div>
            </div>


            <div className="sub_slide_div">
              <div className="img_div">
                <img src={strategy} alt="WordPress & Woo-Commerce"/>
              </div>
              <div className="content_div">
                <BlackHeading>Customized Strategies</BlackHeading>
                <Blackdescription>
                        We understand that every client is unique, so we design personalized strategies to meet specific goals and challenges.
                </Blackdescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={practice} alt="WordPress & Woo-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Sustainable Practices</BlackHeading>
                <Blackdescription>
                We prioritize solutions that are not only effective but also environmentally and socially responsible.
                </Blackdescription>
              </div>
            </div>


        </div>


        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 60px 100px;
  .main_div {
    display: flex;
    gap: 20px;

    .sub_div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 35px;
      .text-with-border-shadow {
        font-family: "Poppins", sans-serif;
        font-size:40px;
        font-weight:600;
        color: white;
        line-height: 1.2;
        -webkit-text-stroke: 1px #6c5fd4;
        -webkit-text-fill-color: white;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      }
    }

    .sub_div_two {
      display:flex;
      flex-direction:column;
      align-items:center;
      flex:1;
      justify-content:center;
      gap:50px;

      .slide_div {
        height: 400px;
        width: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 30px;
 
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

  @media (max-width: 567px) {
    padding: 10px 20px 50px;
    .main_div {
      flex-direction: column;

      .sub_div {
        gap: 25px;
        text-align: center;
        br{
          display: none;
        }
      }

      .sub_div_two .slide_div .sub_slide_div {
        padding: 20px 10px;
        margin-top: 20px;

        .img_div {
          width: 30%;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;
    .main_div {
      flex-direction: column;
      .sub_div {
        gap: 25px;
        text-align: center;
      }
    }
  }
`;
