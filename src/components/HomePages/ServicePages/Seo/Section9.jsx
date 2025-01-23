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
          <Heading>We Want to Notify You That We Will Provide You with the</Heading>
          <br />
          <Heading>Following Evaluations of Your Actions at the</Heading> 
          <GradientSecondHeading>“On Your Mark”</GradientSecondHeading>
          <br />
          <Heading>Stage : </Heading>
        </span>
        <div className="bg_img">
          <div className="sub_bg_img">
            <img src={groupone} alt="Knowledge" />
            <PurpleSubHeading>Knowledge</PurpleSubHeading>
            <GreySecondDescription>
            We skillfully integrate the center of mass for these firms that specialize in performance based marketing. We guarantee our customers offer your work the best that the market has to offer and the highest number of visitors to your site.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={liabnew} alt="Liability" />
            <PurpleSubHeading>Liability</PurpleSubHeading>
            <GreySecondDescription>
            Even if you are a novice, do not get worried, we are here and interactive to design your web page properly for every purpose you wish to achieve with it. With this, there is no obligatory condition to have a conversion and services on your site at prohibitive rates.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupthree} alt="Familiarization" />
            <PurpleSubHeading>Familiarization</PurpleSubHeading>
            <GreySecondDescription>
            Ours is always with conservative tendency and changing with the new technologies which are in the market so as to make something for the needs of your site that is new and appealing. Custom software created for your website certainly help to be Gallant.
            </GreySecondDescription>
          </div>

          <div className="sub_bg_img">
            <img src={groupfour} alt="Strategy" />
            <PurpleSubHeading>Strategy</PurpleSubHeading>
            <GreySecondDescription>
            We develop a strategy with some templates that are simple and easy to understand when designing your site in order to avoid snafus. Our team have the potential to strive rightfully constructing your site and using it for the most ideal outcome to the visitors and active users.
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
