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

          {/* <div className="text-with-border-shadow">
               Why
            <br />
               Choose
            <br />
                US?
          </div> */}

          <GreySecondDescription>
          We launch apps for streamlined software development, empowering growth with expert web solutions to expand your business and reach new clients effectively.
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
          <WhitekHeading>Research & Strategy</WhitekHeading>
          <WhiteDescription>
          As an agency, we conduct keyword research and competitor research to develop a customized and robust SEO strategy that best serves your goals.
          </WhiteDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>02</PurpleHeading>
          <BlackHeading>On-Page Optimization</BlackHeading>
          <GreySecondDescription>
          We refine the way your website structure, meta data, content, and internal linking work to enhance user experience and accessibility to search engines.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>03</PurpleHeading>
          <BlackHeading>Content Creation</BlackHeading>
          <GreySecondDescription>
          Our team creates content that is best in quality and SEO optimized as well, which enhances the chances of winning over a wider audience base in search results.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>04</PurpleHeading>
          <BlackHeading>Off-Page SEO</BlackHeading>
          <GreySecondDescription>
          We create relevant backlinks, increase your domain authority, and use combination link building techniques in order to increase organic traffic and enhance rankings.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>05</PurpleHeading>
          <BlackHeading>Monitoring & Reporting</BlackHeading>
          <GreySecondDescription>
          We use verified techniques in tracking your website performance and provide comprehensive reports and advice that enhances the overall SEO effectiveness of your site.
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
