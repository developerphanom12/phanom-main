import React from "react";
import styled from "styled-components";
import {
  GreyHeading,
  GradientHeading,

  Heading,
} from "../../../../Global/GlobalText";
import iconone from "../../../../assets/Images/iconone.png";
import icontwo from "../../../../assets/Images/icontwo.png";
import iconthree from "../../../../assets/Images/iconthree.png";
import iconfour from "../../../../assets/Images/iconfour.png";
import videonew from "../../../../assets/Images/videonew.png";

export const Section3 = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>Key Features of Our</Heading>
          <GradientHeading>
            {" "}
            <span></span>UI/UX Design<span></span>
          </GradientHeading>
          <br />
          <Heading>Services</Heading>
        </span>

        <div className="content_image_section">
          <div className="sub_image_section icon_content">
            <div className="icon_content">
              <img src={iconone} alt="iconone" />
              <div>
                <GreyHeading>
                  Comprehensive <br /> Technical <br /> Expertise
                </GreyHeading>
              </div>
            </div>

            <div className="icon_content">
              <img src={icontwo} alt="iconone" />

              <div>
                <GreyHeading>
                  Collaborative <br /> Approach
                </GreyHeading>
              </div>
            </div>
          </div>

          <div className="sub_image_section">
            <img src={videonew} alt="videonew" />
          </div>

          <div className="sub_image_section icon_content">
            <div className="icon_content">
              <img src={iconthree} alt="iconone" />

              <div>
                <GreyHeading>
                  Cutting-Edge <br /> Design <br /> Solutions
                </GreyHeading>
              </div>
            </div>

            <div className="icon_content">
              <img src={iconfour} alt="iconone" />

              <div>
                <GreyHeading>
                  Strategic UI/UX <br /> Consulting
                </GreyHeading>
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
    flex-direction: column;
    gap: 50px;
    .content_image_section {
      display: flex;
      gap: 50px;
      .sub_image_section {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .icon_content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          img {
            width: 50px;
          }
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 30px 20px;
    .main_div {
      .content_image_section {
        flex-direction: column;
        width: 100%;
        .sub_image_section {
          flex-wrap: unset;
          align-items: unset;
          gap: 50px;
          .icon_content {
            br {
              display: none;
            }
          }
        }
        .icon_content {
          padding: 0 30px;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;

    .main_div {
      .content_image_section .sub_image_section {
        gap: 50px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  
`;
