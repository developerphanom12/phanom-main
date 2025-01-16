import React from "react";
import styled from "styled-components";
import { BlackMainDescription, MainHeading } from "../../../Global/GlobalText";
import { PurpleThirdBackground } from "../../../Global/GlobalButton";

export const Section6 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_main_div">
          <BlackMainDescription>Ecommerce-ready hosting.</BlackMainDescription>
          <MainHeading>
            Or, focus solely on your business and have us
            <br /> manage your VPS Hosting.
          </MainHeading>
        </div>

        <div className="btn"> 
          <PurpleThirdBackground>Learn More</PurpleThirdBackground>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 50px 70px;
  .main_div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .sub_main_div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  @media (max-width: 567px) {
    padding:20px;
    .main_div{
      flex-direction: column;
      gap:20px;
      .sub_main_div{
        flex-direction: column;
        gap:20px;
        align-items: flex-start;
        br{
          display: none;
        }
      }

      .btn{
        width: 100%;
        button{
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding:20px;
    .main_div{
      flex-direction: column;
      gap:20px;
      .sub_main_div{
        flex-direction: column;
        gap:20px;
        align-items: flex-start;
        br{
          display: none;
        }
      }

      .btn{
        width: 100%;
      
      }


    }
  }
`;

