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
          At Phanom Professionals, we combine the use of experience and technology for exceptional Shopify development strategies that promote business growth. With expertise in designing, building, modifying, and marketing Shopify stores, our team guarantees appealing Shopify stores that create traffic, engagement, and actionable results. We make sure that your Shopify store is uniquely designed to meet the demands of the market while also catering for your business needs.          </GreySecondDescription>
        </div>

        <div
          className="sub_main_div"
          style={{
            backgroundColor: "#6C5FD4",
            border: "1px solid transparent",
          }}
        >
          <WhiteNumberHeading>01</WhiteNumberHeading>
          <WhitekHeading>Branding & Strategy</WhitekHeading>
          <WhiteDescription>
          We innovate web design with Shopify websites that are dynamic and engage the target audience. Our team pays particular attention to layout, user experience, and ease of navigation, resulting in higher retention on the site and increased traffic.
          </WhiteDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>02</PurpleHeading>
          <BlackHeading>SEO-Focused Development</BlackHeading>
          <GreySecondDescription>
          With your Shopify website, you want high ranking to be of utmost importance. With our tried and tested strategies on SEO, keyword research, and on page SEO, content optimization, we help you to gain the organic traffic needed to rank at the top, ensuring your store is noticed and found.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>03</PurpleHeading>
          <BlackHeading>E-Commerce Solutions</BlackHeading>
          <GreySecondDescription>
          We create modern, fast, and secure Shopify stores alongside their friendly user interfaces. Our tailored e-commerce solutions include intuitive payment pages, enhanced product, and optimized checkout processes designed to increase sales.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>04</PurpleHeading>
          <BlackHeading>Modification And New Improvements</BlackHeading>
          <GreySecondDescription>
          No need to worry about your shop online effectiveness as we guarantee superior engagement and conversions. We understand mobile responsiveness design in Shopify and implement these changes between few clicks. Your store performance is always in our focus so that it reaches its peak.          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>05</PurpleHeading>
          <BlackHeading>Review Of Performance</BlackHeading>
          <GreySecondDescription>
          With Active Reports, the client does not have to do anything: everything is automatically done. Monitoring includes the site traffic and their interactions, now you can focus on growing your business with relevant data at hand.
          
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
