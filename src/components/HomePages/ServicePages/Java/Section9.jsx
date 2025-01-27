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

          <GradientSecondHeading>Strategic Java Development Services</GradientSecondHeading> <Heading>for Your </Heading>
          <br/>
          <Heading>Business Growth</Heading>
        </span>

        <div className="bg_img">
          <div className="sub_bg_img">
            <img src={groupone} alt="Knowledge" />
            <PurpleSubHeading>Design</PurpleSubHeading>
            <GreySecondDescription>
            At Phanom Professionals, we strive to create user-friendly and effective Java application designs that meet your business objectives. Our team of talented developers uses advanced design styles and technologies to build engaging applications that go above and beyond expectation, attract attention, differentiate, and turn traffic into revenue.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={liabnew} alt="Liability" />
            <PurpleSubHeading>Development</PurpleSubHeading>
            <GreySecondDescription>
            To develop comprehensive responsive, and scalable Java applications, we incorporate new technologies along with an easy to use interface. Our cutting edge strategies during the development cycle guarantee that your application performs its functions effectively, loads quickly, and offers a positive experience to users on all devices. Delivering innovative approaches that strengthen your position in the market is one of our primary goals.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupthree} alt="Familiarization" />
            <PurpleSubHeading>Testing</PurpleSubHeading>
            <GreySecondDescription>
            We understand how important it is to maintain the reputation of your company as well as the trust of your clients. Therefore, before deploying your application, we perform thorough testing on the Java application to optimize each feature and make sure everything works perfectly. Starting from feature performance, speed, and even user smoothness while navigating through your application – we ensure your customers enjoy top-notch service without a glitch.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupfour} alt="Strategy" />
            <PurpleSubHeading>Launch & Maintenance</PurpleSubHeading>
            <GreySecondDescription>
            When the Java application is deployed, we actively track its performance to affirm its success in achieving your business goals, meanwhile, we take care of the application updates as well as performance data monitoring to stay on top of the necessary changes needed for the application to function optimally.
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
      width:100%;
      display:flex;
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
