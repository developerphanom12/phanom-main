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
            We help explore design through expert ideas and creative
            programming, enhancing your brand's success.
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
            We have established strong relationships with the leading solar and
            cable companies in the region
          </WhiteDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>02</PurpleHeading>
          <BlackHeading>Design</BlackHeading>
          <GreySecondDescription>
            We help explore design through expert ideas and creative
            programming, enhancing your brand's success.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>03</PurpleHeading>
          <BlackHeading>Development</BlackHeading>
          <GreySecondDescription>
            We track smart trends, showcase our expertise, and keep your brand
            updated with frequent web trends.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>04</PurpleHeading>
          <BlackHeading>Testing</BlackHeading>
          <GreySecondDescription>
            Ensuring fluent application and software performance is our
            priority, refining everything before launching the page.
          </GreySecondDescription>
        </div>

        <div className="sub_main_div">
          <PurpleHeading>05</PurpleHeading>
          <BlackHeading>Deployment & Support</BlackHeading>
          <GreySecondDescription>
            We monitor progress through graphs, ensuring smooth launches and
            optimal web performance.
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
