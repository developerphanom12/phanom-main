import React from "react";
import styled from "styled-components";
import {
  Head,
  Description,
  GradientHeading,
  Heading,
} from "../../../../Global/GlobalText";

import customizednew from "../../../../assets/Images/customizednew.png";
import cuttingnew from "../../../../assets/Images/cuttingnew.png";
import rapidnew from "../../../../assets/Images/rapidnew.png";
import responsivenew from "../../../../assets/Images/responsivenew.png";
import focusnew from "../../../../assets/Images/focusnew.png";
import supportnew from "../../../../assets/Images/supportnew.png";
import globalnew from "../../../../assets/Images/globalnew.png";
import communicationnew from "../../../../assets/Images/communicationnew.png";
import teamnew from "../../../../assets/Images/teamnew.png";

import medianewone from "../../../../assets/Images/medianewone.png";

import medianewtwo from "../../../../assets/Images/medianewtwo.png";

export const Section4 = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>Ready to Elevate </Heading>
          <br/>
          <Heading>Your</Heading>
          <GradientHeading> Digital Experience</GradientHeading>
          <Heading>?</Heading>
        </span>
        <div className="sub_cont_section">
          <div className="sub_cont_one">
            <div className="slide_div">
              <div className="sub_slide_div">
                <div className="image_content">
                  <div className="img_div">
                    <img src={customizednew} alt="customized" />
                  </div>
                  <div className="content_div">
                    <Head>Customized User-Centric Designs</Head>
                  </div>
                </div>

                <Description>
                  Our team focuses on crafting tailored user experiences that
                  resonate with your audience, ensuring every design meets your
                  specific goals while enhancing usability and engagement across
                  all platforms.
                </Description>
              </div>

              <div className="sub_slide_div">
                <div className="image_content">
                  <div className="img_div">
                    <img src={cuttingnew} alt="cutting" />
                  </div>
                  <div className="content_div">
                    <Head>Cutting-Edge Tools and Techniques</Head>
                  </div>
                </div>

                <Description>
                  Equipped with the latest design tools and innovative
                  methodologies, we deliver sleek, modern solutions that stay
                  ahead of industry trends and elevate your digital presence.{" "}
                </Description>
              </div>

              <div className="sub_slide_div">
                <div className="image_content">
                  <div className="img_div">
                    <img src={rapidnew} alt="rapid" />
                  </div>
                  <div className="content_div">
                    <Head>Rapid Turnaround Times</Head>
                  </div>
                </div>

                <Description>
                  Our efficient processes and dedicated team ensure high-quality
                  UI/UX designs delivered within deadlines, helping you launch
                  your projects without delay.
                </Description>
              </div>

              <div className="sub_slide_div">
                <div className="image_content">
                  <div className="img_div">
                    <img src={responsivenew} alt="responsive" />
                  </div>
                  <div className="content_div">
                    <Head>Responsive and Adaptive Designs</Head>
                  </div>
                </div>

                <Description>
                  We specialize in designing interfaces that offer seamless
                  experiences across all devices and screen sizes, from desktops
                  to smartphones and beyond.
                </Description>
              </div>

              <div className="sub_slide_div">
                <div className="image_content">
                  <div className="img_div">
                    <img src={focusnew} alt="focus" />
                  </div>
                  <div className="content_div">
                    <Head>Focus on Business Goals</Head>
                  </div>
                </div>

                <Description>
                  Our designs align with your business objectives, creating
                  visually appealing and functional interfaces that drive
                  growth, conversion, and user satisfaction.
                </Description>
              </div>

              <div className="sub_slide_div">
                <div className="image_content">
                  <div className="img_div">
                    <img src={supportnew} alt="support" />
                  </div>
                  <div className="content_div">
                    <Head>Continuous Support and Maintenance</Head>
                  </div>
                </div>

                <Description>
                  Our commitment doesn’t end with project delivery. We offer
                  ongoing support to ensure your designs remain optimized,
                  relevant, and effective over time.
                </Description>
              </div>

              <div className="sub_slide_div">
                <div className="image_content">
                  <div className="img_div">
                    <img src={globalnew} alt="global" />
                  </div>
                  <div className="content_div">
                    <Head>Global Industry Experience</Head>
                  </div>
                </div>

                <Description>
                  Our team brings diverse expertise from global projects,
                  offering solutions tailored to various industries and markets,
                  ensuring impactful and relevant designs.{" "}
                </Description>
              </div>

              <div className="sub_slide_div">
                <div className="image_content">
                  <div className="img_div">
                    <img src={communicationnew} alt="communication" />
                  </div>
                  <div className="content_div">
                    <Head>Transparent Processes and Communication</Head>
                  </div>
                </div>

                <Description>
                  We prioritize clear communication and transparency, keeping
                  you informed at every project stage, ensuring a collaborative
                  and smooth workflow.{" "}
                </Description>
              </div>

              <div className="sub_slide_div">
                <div className="image_content">
                  <div className="img_div">
                    <img src={teamnew} alt="team" />
                  </div>
                  <div className="content_div">
                    <Head>Scalable Team for Diverse Projects</Head>
                  </div>
                </div>

                <Description>
                  Whether your project requires a single designer or a dedicated
                  team, we offer scalable resources to meet your needs and adapt
                  to project scope seamlessly.{" "}
                </Description>
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
            gap: 10px;
            flex-direction: column;
            box-shadow: 0px 12px 28px 0px rgba(140, 149, 159, 0.3);
            border-radius: 20px;
            .image_content {
              display: flex;
              justify-content: space-between;
              align-items: center;

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

  @media (max-width: 567px) {
    padding: 30px 20px;

    .main_div{

      span{
        br{
          display: none;
        }
      }
    
    .sub_cont_section {
      flex-direction: column;
      padding: 0;

      .sub_cont_one .slide_div {
        height: 500px;
        .sub_slide_div .image_content .img_div {
          width: 35%;
        }
      }

      .sub_div_two {
        img {
          height: auto;
        }
      }
    }

  }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;

    .main_div .sub_cont_section {
      padding: 0 20px;
      .sub_cont_one .slide_div {
        height: 490px;
        .sub_slide_div .image_content .img_div {
          width: 35%;
        }
      }
    }
  }
`;
