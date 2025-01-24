import React from "react";
import styled from "styled-components";
import {
  GradientSecondHeading,
  GreySecondDescription,
  Heading,
  PurpleSubHeading,
} from "../../../../Global/GlobalText";
import framneww from "../../../../assets/Images/framm.png";
import groupone from "../../../../assets/Images/groupone.png";
import liabnew from "../../../../assets/Images/liabnew.png";
import groupthree from "../../../../assets/Images/groupthree.png";
import groupfour from "../../../../assets/Images/groupfour.png";

export const Section9 = () => {
  return (
    <Root>
      <div className="main_div">
        <span style={{ textAlign: "center" }}>
          <Heading>Focused on Building Your Business with  
          </Heading>
          <GradientSecondHeading>Strategic Shopify</GradientSecondHeading>

          <br />
         
          <GradientSecondHeading>Development</GradientSecondHeading>
     
        </span>
        <div className="bg_img">
          <div className="sub_bg_img">
            <img src={groupone} alt="Knowledge" />
            <PurpleSubHeading>Design</PurpleSubHeading>
            <GreySecondDescription>
            At Phanom Professionals, we need to target traffic by designing attractive Shopify websites that depicts your brand image. Skilled designers in our company work on the latest design trends so your target audience is high and increases competition with other stores. 
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={liabnew} alt="Liability" />
            <PurpleSubHeading>Development</PurpleSubHeading>
            <GreySecondDescription>
            We build fully responsive Shopify websites through modern technologies and easy to use formats. Our superior development method guarantees optimal speed and functionality which enhances user experience. We aim to deploy innovative strategies to help you maintain your position as a market leader. 
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupthree} alt="Familiarization" />
            <PurpleSubHeading>Testing</PurpleSubHeading>
            <GreySecondDescription>
            Before proceeding, we ensure everything is in place. Testing is the last stage and the most important step before your Shopify store goes live. We check every function to guarantee they all work without issues. From speed issues to navigation, we’ll make everything ready for the optimal customer experience.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupfour} alt="Strategy" />
            <PurpleSubHeading>Launch & Maintenance</PurpleSubHeading>
            <GreySecondDescription>
            Once your Shopify store goes live, the work does not end there. We keep track of its success and confirm it achieves its goals. During this time, On our end, you can expect us to handle all periodic changes, analyze performance data, and adjust so that your Shopify store achieves stable long-term performance.
            </GreySecondDescription>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px 50px;
  .main_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    .bg_img {
      background-image: url(${framneww});
      background-size: 100% 100%;
      width: 100%;
      display: flex;
      .sub_bg_img {
        flex: 1;
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 50px 20px 0;
        text-align: center;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 30px 20px;
    .main_div {
      br {
        display: none;
      }

      .bg_img {
        background-image: unset;
        display: unset;
        .sub_bg_img {
          padding: 20px 20px 0;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;
    .main_div {
      .bg_img {
        background-image: unset;
        display: flex;
        flex-direction: unset;
        flex-wrap: wrap;
        justify-content: center;
        .sub_bg_img {
          padding: 20px 20px 0;
          flex: unset;
          width: 48%;
        }
      }
    }
  }
`;
