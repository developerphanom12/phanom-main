import React, { useState } from "react";
import styled from "styled-components";
import cpu from "../../../assets/Images/cpu.png";
import { BlackMainDescription, Faqdescription, MainHeading, SaveHeading, Subblackdescription, SubTagHeading } from "../../../Global/GlobalText";

import fluentram from "../../../assets/Images/fluentram.png";

import storag from "../../../assets/Images/storag.png"

import backupp from "../../../assets/Images/backupp.png"

import linux from "../../../assets/Images/linux.png"

import cpanel from "../../../assets/Images/cpanel.png"

import ipp from "../../../assets/Images/ipp.png"

import basic from "../../../assets/Images/basic.png"

import globaldata from "../../../assets/Images/globaldata.png"


import { PurpleConfigurebtn } from "../../../Global/GlobalButton";



export const Section2 = () => {
  const [activeButton, setActiveButton] = useState(0);

  // Handle button click event
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  return (
    <Root>
      <div className="main_div">
        <div className="btn_div">
          <div
            className={activeButton === 0 ? "active" : ""}
            onClick={() => handleButtonClick(0)}
          >
            <h4> Standard Performance </h4>

            <p> Easy on your budget. </p>
          </div>

          <div
            className={activeButton === 1 ? "active" : ""}
            onClick={() => handleButtonClick(1)}
          >
            <h4>High Performance</h4>
            <p>More memory CPU & storage</p>
          </div>
        </div>

        <div className="content_div">
          {activeButton === 0 && (
            <>
              <div class="main_plan_div">
                <div class="basic_plan">

                  <div className="statsu_div">

                    <img src={basic} alt=""/>

                  </div>

                  <div className="price_main_div">


                        <div className="price_main_sub_one">
                          <SaveHeading> Save 38% </SaveHeading>
                          <Subblackdescription> <del>₹2999</del></Subblackdescription>
                        </div>
                    
                        <div className="price_main_sub_one">
                          <MainHeading>₹2000 </MainHeading> 
                          <SubTagHeading className="sub_head"> <sub>/month</sub></SubTagHeading> 
                        </div>

                       

                  </div>

                  <div className="head_cont">
                    <BlackMainDescription>Starter Plan</BlackMainDescription>
                    <Subblackdescription>With a 3-yr team. You pay ₹23,364.00 today. Renews at ₹30,564.00.</Subblackdescription>
                  </div>

                  <div>
                  <PurpleConfigurebtn>Configure Your Server</PurpleConfigurebtn>
                  </div>

                  <div className="main_icon_cont">
                    <div className="icon_content">
                      <img src={cpu} alt="logo" />
                      <Faqdescription> 1 vCPU core</Faqdescription>
                    </div>

                    <div className="icon_content">
                      <img src={fluentram} alt="logo" />
                      <Faqdescription> 2 GB RAM</Faqdescription>
                    </div>

                    <div className="icon_content">
                      <img src={storag} alt="logo" />
                      <Faqdescription> 40 GB NVMe SSD Storage</Faqdescription>
                    </div>

                    <div className="icon_content">
                      <img src={backupp} alt="logo" />
                      <Faqdescription> Snapshot backups</Faqdescription>
                    </div>

                    <div className="icon_content">
                      <img src={linux} alt="logo" />
                      <Faqdescription> Linux only</Faqdescription>
                    </div>

                    <div className="icon_content">
                      <img src={cpanel} alt="logo" />
                      <Faqdescription>cPanel or Plesk available</Faqdescription>
                    </div>


                    <div className="icon_content">
                      <img src={ipp} alt="logo" />
                      <Faqdescription> 1 additional IP available upon request</Faqdescription>
                    </div>


                    <div className="icon_content">
                      <img src={globaldata} alt="logo" />
                      <Faqdescription> Global data centers</Faqdescription>
                    </div>


                  </div>


                </div>
                <div class="basic_plan"></div>
                <div class="basic_plan"></div>
              </div>
            </>
          )}

          {activeButton === 1 && (
            <>
              <h1>dfdf</h1>
              <h1>dfdf</h1>
            </>
          )}
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 70px;
  .main_div {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    .btn_div {
      display: flex;
      border: 1px solid #d4dbe0;
      border-radius: 50px;

      div {
        border-radius: 50px;
        text-align: center;
        width: 340px;
        padding: 16px 20px;
        color: #000000;
        h4 {
          font-size: 28px;
          font-weight: 500;
          line-height: 36px;
        }
        p {
          font-size: 18px;
          font-weight: 400;
          line-height: 28px;
        }
        &.active {
          background-color: #6c5fd4;
          color: #ffffff;
        }
      }
    }

    .content_div {
      width: 100%;
      .main_plan_div {
        display: flex;
        gap: 30px;
        .basic_plan {
          flex: 1;
          border-radius: 8px;
          background-color: #6e76e333;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap:20px;
          .statsu_div{
            display: flex;
            justify-content:flex-end;
          }
          .price_main_div{
           display: flex;
          flex-direction: column;
          gap:5px;
          .price_main_sub_one{
            display: flex;
            align-items: center;
    gap: 5px;
            .sub_head{
              margin-top:10px;
            }
          }

          }
          .head_cont{
            display: flex;
          flex-direction: column;
          gap:5px;

          }

          .main_icon_cont {
            display: flex;
            flex-direction: column;
            gap: 10px;
            .icon_content {
              display: flex;
              gap: 10px;
              align-items: center;
            }
          }
        }
      }
    }
  }

  @media (max-width: 567px) {
  }

  @media (min-width: 567px) and (max-width: 1024px) {
  }
`;
