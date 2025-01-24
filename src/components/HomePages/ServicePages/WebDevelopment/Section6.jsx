import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GradientHeading,
  Greydescription,
  Heading,
} from "../../../../Global/GlobalText";
import { PurpleBackground } from "../../../../Global/GlobalButton";
import informationcollection from "../../../../assets/Images/informationcollection.png";
import designn from "../../../../assets/Images/designn.png";
import protect from "../../../../assets/Images/protect.png";

import developement from "../../../../assets/Images/developement.png";
import testing from "../../../../assets/Images/testing.png";
import launch from "../../../../assets/Images/launch.png";



export const Section6 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          <span>
            <Heading>Develop Your Brand Using a</Heading>
            <GradientHeading> Leading Web Development Company –</GradientHeading>
            <Heading>Increase Your Visibility Instantly!</Heading>
          </span>

          <Greydescription>
          At Phanom Professionals, we provide web development services tailored to your business needs. As a premier web development company, we build websites that are capable of achieving high traffic and engagement with your target audience. We handle everything from the creation of your business website to SEO services so that your business gains the online visibility it deserves, ensuring that you do not fall prey to your competitors. Our team is always revising and improving methods to enhance the customer experience and conversion rate so that you receive the success measurable to your business goals.
          </Greydescription>

          <Greydescription>
          Work with India’s finest web development agency and ensure that your business achieves its goals for success in your niche market.
          </Greydescription>
          <div>
            <PurpleBackground>Book an Appointment</PurpleBackground>
          </div>
        </div>

        <div className="sub_div_two">
          <div className="slide_div">
            <div className="sub_slide_div">
              <div className="img_div">
                <img src={informationcollection} alt="INFORMATION COLLECTION" />
              </div>
              <div className="content_div">
                <BlackHeading>INFORMATION COLLECTION</BlackHeading>

                <Greydescription>
                At this stage, we make sure to capture customer perceptions so that we can figure out what is the need and yearning of the patrons. This study enables us to craft a strategy that guarantees your site functions efficiently and achieves your targets.
                </Greydescription>

              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={designn} alt="DESIGN" />
              </div>
              <div className="content_div">
                <BlackHeading>DESIGN</BlackHeading>
                <Greydescription>
                We make sure as much as possible that the sophisticated aesthetics of the web pages capture our customers’ attention. Our designers ensure that your website is at par with modern concepts and it reflects your brand's persona, allowing your site to gain more traffic.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={protect} alt="PROJECTION" />
              </div>
              <div className="content_div">
                <BlackHeading>PROJECTION</BlackHeading>
                <Greydescription>
                In www.phanomprofessionals.com online solutions. com, keeping your trust is of utmost importance. Therefore, we aim to make sure that your website as well as applications are updated frequently for smooth performance. We work hard to make sure your online image is that of a professional and trustworthy one.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={developement} alt="DEVELOPMENT" />
              </div>
              <div className="content_div">
                <BlackHeading>DEVELOPMENT</BlackHeading>
                <Greydescription>
                Your concern will be a great advantage to the rest of us. Upgrading is the essence of our development approach. We employ state of the art technologies and smart formats for building user friendly and highly responsive websites that ensure unparalleled user experience, thus strengthening your position as a market leader.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={testing} alt="TESTING" />
              </div>
              <div className="content_div">
                <BlackHeading>TESTING</BlackHeading>
                <Greydescription>
                Testing is an indispensable aspect of our work. Prior to going live there is a considerable amount of activities with respect to your site or application e.g. debugging functions and streamlining flow which need to be perfected for the greatest outcome.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={launch} alt="LAUNCH & MAINTENANCE" />
              </div>
              <div className="content_div">
                <BlackHeading>LAUNCH & MAINTENANCE</BlackHeading>
                <Greydescription>
                Our work does not stop after the initial launch of your site. We actively monitor all metrics concerning the site’s performance. Our personnel handles updating and regularly checking graphs and other data to ensure your site continues to meet its goals long into the future
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

  @media (max-width: 567px) {
    padding: 10px 20px;
    .main_div {
      flex-direction: column;

      .sub_div {
        gap: 25px;
        text-align: center;
        br {
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
    padding: 10px 20px;
    .main_div {
      flex-direction: column;
      .sub_div {
        gap: 25px;
        text-align: center;
      }
    }
  }
`;
