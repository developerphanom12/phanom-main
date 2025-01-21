import React from "react";
import styled from "styled-components";
import { GreyMainHeading } from "../../../Global/GlobalText";
import { InputType } from "../../../Global/GlobalFormElement";
import { PurpleThirdBackground } from "../../../Global/GlobalButton";

export const Section7 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          <GreyMainHeading>Build skills, connect.</GreyMainHeading>
        </div>
        <div className="sub_div_two">
          <InputType placeholder="Enter your Email" />
          <div>
          <PurpleThirdBackground>Send </PurpleThirdBackground>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 40px 100px;
  .main_div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .sub_div {
      width: 30%;
    }

    .sub_div_two {
      width: 70%;
      display: flex;
      justify-content: space-between;
      input {
        border: transparent;
        width: 60%;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        color:#A5A5A5;
        background-color: #F2F4F8;
      }
    }
  }

  @media (max-width: 567px) {

    padding: 20px;
    .main_div{
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap:20px;

      .sub_div{
       width: 100%;
      }

      .sub_div_two{
        flex-direction: column;
        gap:20px;
        width: 100%;
        input{
          width: 100%;
        }
      }

    }


  }

  @media (min-width: 567px) and (max-width: 1024px) {

    padding: 20px 20px 40px;

    .main_div{
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap:20px;

    .sub_div{
       width: 100%;
      }

      .sub_div_two{
        
     
        width: 100%;
      
      }


    }
  }
`;
