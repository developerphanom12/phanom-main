import React from "react";
import styled from "styled-components";
import {
  PurpleSubHeading,
  GreySecondDescription,
  Heading,
  GradientHeading,
} from "../../../../Global/GlobalText";


import usernew from "../../../../assets/Images/usernew.jpg";

import membernew from "../../../../assets/Images/membernew.jpg";
import seachnew from "../../../../assets/Images/seachnew.jpg";
import coordinationnew from "../../../../assets/Images/coordinationnew.jpg";

export const Section5 = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>
            {" "}
            <span></span>How can I hire <span></span>
          </Heading>
          <GradientHeading>
            <span></span>Google Ads specialists <span></span>
          </GradientHeading>
          <br />
          <Heading>
            {" "}
            <span></span>using Phanom <span></span>
          </Heading>
        </span>

        <div className="main_section">
          <div className="sub_main_section">
            <img src={usernew} alt="expertise" />
            <PurpleSubHeading className="sub_content">
              Explain what you need
            </PurpleSubHeading>
            <GreySecondDescription className="sub_des_content">
              Explain the roles, duties, required work experience, required
              skills, and financial requirements.
            </GreySecondDescription>
          </div>

          <div className="sub_main_section">
            <img src={membernew} alt="expertise" />
            <PurpleSubHeading className="sub_content">
              Evaluation
            </PurpleSubHeading>
            <GreySecondDescription className="sub_des_content">
              Based on the shared job description, we will provide you the
              best-fit profile or profiles and share in less than 48 business
              hours.
            </GreySecondDescription>
          </div>

          <div className="sub_main_section">
            <img src={seachnew} alt="expertise" />
            <PurpleSubHeading className="sub_content">
              Conversation and shortlist
            </PurpleSubHeading>
            <GreySecondDescription className="sub_des_content">
              We provide you with the best experts to shortlist for your project
              or assignments.
            </GreySecondDescription>
          </div>

          <div className="sub_main_section">
            <img src={coordinationnew} alt="expertise" />
            <PurpleSubHeading className="sub_content">
              Obtain and Manage
            </PurpleSubHeading>
            <GreySecondDescription className="sub_des_content">
              We'll manage the talent, take care of all the paperwork, and
              assist you with a smooth onboarding experience.
            </GreySecondDescription>
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
    align-items: center;
    gap: 30px;
    .main_section {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      .sub_main_section {
        flex: 1;
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        img {
          width: 120px;
          height: 120px;
        }
        .sub_content {
          padding: 0 40px;
        }
        .sub_des_content {
          padding: 0 30px;
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding:30px 20px;

    .main_div {
      br {
        display: none;
      }
      .main_section .sub_main_section {
        flex: unset;
      }
    }

  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;

     .main_div .main_section .sub_main_section {

      flex:unset;
      width: 48%;

    }

  }
`;
