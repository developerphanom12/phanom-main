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
                            Why
                       </Textwithborder>
            
            
                       <Textwithborder>
                          Choose
                    </Textwithborder>
                        
                    <Textwithborder>
                        US?
                   </Textwithborder>
            
                </div>


          <GreySecondDescription>
                 Take your online presence to greater heights through effective and targeted Social Media Marketing Services we provide. Our tried and tested techniques will increase your web presence, improve your brand interaction, and increase traffic to your profiles and website. Furthermore, you have access to our comprehensive reporting and invoicing, which enables you to track your success and growth. Join hands with us and see how your business flourishes.
          </GreySecondDescription>
        </div>

        <div
          className="sub_main_div"
          style={{
            backgroundColor: "#6C5FD4",
            border: "1px solid transparent",
          }}
        >
          <WhiteNumberHeading>01</WhiteNumberHeading>
          <WhitekHeading>Info Gathering</WhitekHeading>
          <WhiteDescription>
          We analyze social media trends and talk to strategists to come up with the most effective social media strategies for your business.
          </WhiteDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>02</PurpleHeading>
          <BlackHeading> Creative Design</BlackHeading>
          <GreySecondDescription>
          Your brand image is enhanced with the help of engaging content, graphics, and videos our team produces. We ensure your business receives the utmost attention.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>03</PurpleHeading>
          <BlackHeading>Content Development</BlackHeading>
          <GreySecondDescription>
          We scale and target your audience through the clever commentary we propose as well as other means like following trendy hashtags to create posts that everyone will want to see.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>04</PurpleHeading>
          <BlackHeading>Real-time Testing</BlackHeading>
          <GreySecondDescription>
          For every campaign, we execute the constant changes until we come up with a guarantee and further test and track the smooth performance of the launch.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>05</PurpleHeading>
          <BlackHeading>Deployment & Support</BlackHeading>
          <GreySecondDescription>
               We monitor progress through graphs, ensuring smooth launches and optimal web performance.
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
  }
`;
