import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GreySecondDescription,
  PurpleHeading,
  Textwithborder,
  WhiteDescription,
  WhitekHeading,
  WhiteNumberHeading,
} from "../../../../Global/GlobalText";

export const Section8 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_main_div_one">


                <div className="text_border">
            
                       <Textwithborder>
                            Why  Choose   US  for
                       </Textwithborder>
            
            
                       <Textwithborder>
                       YouTube 
                    </Textwithborder>
                        
                    <Textwithborder>
                    Marketing?
                   </Textwithborder>
            
                </div>


          <GreySecondDescription>
          Specialist YouTube Marketing Strategies will get your channel moving forward. Get more views, better engagement, and more subscribers. We’re ready to begin impacting growth today!          </GreySecondDescription>
        </div>

        <div
          className="sub_main_div"
          style={{
            backgroundColor: "#6C5FD4",
            border: "1px solid transparent",
          }}
        >
          <WhiteNumberHeading>01</WhiteNumberHeading>
          <WhitekHeading>Keyword Research & Strategy</WhitekHeading>
          <WhiteDescription>
          Target the right keywords that work for you. Utilize the power of YouTube SEO. We conduct intensive research into trends, so your videos get discovered and rank high which means they’ll get more traffic.
                    </WhiteDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>02</PurpleHeading>
          <BlackHeading>Video Ad Creation & Optimization</BlackHeading>
          <GreySecondDescription>
          Create ads that are attractive and relatable. Put unique twists and turns in all aspects of your campaigns. Our team experts make ads that improve engagement levels, site traffic, and CTR (Click-Through Rates) making your campaigns successful.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>03</PurpleHeading>
          <BlackHeading>Channel & Content Optimization</BlackHeading>
          <GreySecondDescription>
          Implementing Channel & Content Optimization strategies will get you more visibility. We take care of everything starting from the thumbnail designs to metadata so your videos are interesting enough to gain more audience as well as keep hold of current ones.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>04</PurpleHeading>
          <BlackHeading>Performance Tracking & Budget Management</BlackHeading>
          <GreySecondDescription>
          Monitor your ROI with proper ad spend optimization. We set budgets together with detailed performance reports of your campaign so we can make sure you get the best outcome from the expenditure.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>05</PurpleHeading>
          <BlackHeading>Monitoring & Analytics Reporting</BlackHeading>
          <GreySecondDescription>
          We provide follow-ups through our constant monitoring system enabling you to improve your strategies accordingly. You will receive consistent updates about your improved growth metrics and engagement as well.
          </GreySecondDescription>
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
    flex-wrap: wrap;
    .sub_main_div_one {
      width: 31%;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;

    .text_border{
      display:flex;
      gap:5px;
      flex-direction:column;
      }

    }
    .sub_main_div {
      width: 31%;
      border: 2px solid #000000;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  @media (max-width: 567px) {
    padding: 10px 20px;
    .main_div {
      flex-direction: column;
      
      .sub_main_div_one {
        width: 100%;
        gap: 20px;
        padding:0;
             .text_border {
    flex-direction: row;
    justify-content: center;
   flex-wrap: wrap;
}
       
      }
      .sub_main_div {
        width: 100%;
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;

     .main_div {
            .sub_main_div_one {
            width:48%;
            }
              .sub_main_div {
                width:48%;
              }
     
     }
  }
`;
