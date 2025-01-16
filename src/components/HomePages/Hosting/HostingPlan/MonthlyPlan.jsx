import React from "react";
import styled from "styled-components";
import cpu from "../../../../assets/Images/cpu.png";

import fluentram from "../../../../assets/Images/fluentram.png";
import storag from "../../../../assets/Images/storag.png";
import backupp from "../../../../assets/Images/backupp.png";
import linux from "../../../../assets/Images/linux.png";
import cpanel from "../../../../assets/Images/cpanel.png";
import ipp from "../../../../assets/Images/ipp.png";
import basicnew from "../../../../assets/Images/basicnew.png";
import advancenew from "../../../../assets/Images/advancenew.png";

import cpuwhite from "../../../../assets/Images/cpuwhite.png";

import ramwhite from "../../../../assets/Images/ramwhite.png";

import globaldata from "../../../../assets/Images/globaldata.png";

import ssdwhite from "../../../../assets/Images/ssdwhite.png";

import backupwhite from "../../../../assets/Images/backupwhite.png";

import linuxwhite from "../../../../assets/Images/linuxwhite.png";

import cpanelwhite from "../../../../assets/Images/cpanelwhite.png";

import ipwhite from "../../../../assets/Images/ipwhite.png";

import globalwhite from "../../../../assets/Images/globalwhite.png";

import {
  PurpleConfigurebtn,
  WhiteConfigurebtn,
} from "../../../../Global/GlobalButton";
import {
  BlackMainDescription,
  Faqdescription,
  FaqWhitedescription,
  MainHeading,
  MainWhiteHeading,
  PlanHeading,
  SaveHeading,
  Subblackdescription,
  SubTagHeading,
  SubTagWhiteHeading,
  Subwhitedescription,
  WhiteMainDescription,
} from "../../../../Global/GlobalText";

export const MonthlyPlan = () => {
  return (
    <Root>
      <div class="main_plan_div">
        <div class="basic_plan">
          <div className="statsu_div">
            <div className="statsu_sub_div">
              <img src={basicnew} alt="plan_div" />
              <PlanHeading>Basic </PlanHeading>
            </div>
          </div>

          <div className="price_main_div">
            <div className="price_main_sub_one">
              <SaveHeading> Save 38% </SaveHeading>
              <Subblackdescription>
                {" "}
                <del>₹2999</del>
              </Subblackdescription>
            </div>

            <div className="price_main_sub_one">
              <MainHeading>₹2000 </MainHeading>
              <SubTagHeading className="sub_head">
                {" "}
                <sub>/month</sub>
              </SubTagHeading>
            </div>
          </div>

          <div className="head_cont">
            <BlackMainDescription>Starter Plan</BlackMainDescription>
            <Subblackdescription>
              With a 3-yr team. You pay ₹23,364.00 today. Renews at ₹30,564.00.
            </Subblackdescription>
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
              <Faqdescription>
                {" "}
                1 additional IP available upon request
              </Faqdescription>
            </div>

            <div className="icon_content">
              <img src={globaldata} alt="logo" />
              <Faqdescription> Global data centers</Faqdescription>
            </div>
          </div>
        </div>

        <div class="basic_plan_two">
          <div className="statsu_div">
            <div className="statsu_sub_div">
              <img src={advancenew} alt="plan_div" />
              <PlanHeading>Pro </PlanHeading>
            </div>
          </div>

          <div className="price_main_div">
            <div className="price_main_sub_one">
              <SaveHeading> Save 38% </SaveHeading>
              <Subwhitedescription>
                {" "}
                <del>₹2999</del>
              </Subwhitedescription>
            </div>

            <div className="price_main_sub_one">
              <MainWhiteHeading>₹6000 </MainWhiteHeading>
              <SubTagWhiteHeading className="sub_head">
                {" "}
                <sub>/month</sub>
              </SubTagWhiteHeading>
            </div>
          </div>

          <div className="head_cont">
            <WhiteMainDescription>Growth Plan</WhiteMainDescription>
            <Subwhitedescription>
              With a 3-yr team. You pay ₹23,364.00 today. Renews at ₹30,564.00.
            </Subwhitedescription>
          </div>

          <div>
            <WhiteConfigurebtn>Configure Your Server</WhiteConfigurebtn>
          </div>

          <div className="main_icon_cont">
            <div className="icon_content">
              <img src={cpuwhite} alt="logo" />
              <FaqWhitedescription> 1 vCPU core</FaqWhitedescription>
            </div>

            <div className="icon_content">
              <img src={ramwhite} alt="logo" />
              <FaqWhitedescription> 2 GB RAM</FaqWhitedescription>
            </div>

            <div className="icon_content">
              <img src={ssdwhite} alt="logo" />
              <FaqWhitedescription> 40 GB NVMe SSD Storage</FaqWhitedescription>
            </div>

            <div className="icon_content">
              <img src={backupwhite} alt="logo" />
              <FaqWhitedescription> Snapshot backups</FaqWhitedescription>
            </div>

            <div className="icon_content">
              <img src={linuxwhite} alt="logo" />
              <FaqWhitedescription> Linux only</FaqWhitedescription>
            </div>

            <div className="icon_content">
              <img src={cpanelwhite} alt="logo" />
              <FaqWhitedescription>
                cPanel or Plesk available
              </FaqWhitedescription>
            </div>

            <div className="icon_content">
              <img src={ipwhite} alt="logo" />
              <FaqWhitedescription>
                {" "}
                1 additional IP available upon request
              </FaqWhitedescription>
            </div>

            <div className="icon_content">
              <img src={globalwhite} alt="logo" />
              <FaqWhitedescription> Global data centers</FaqWhitedescription>
            </div>
          </div>
        </div>

        <div class="basic_plan">
          <div className="statsu_div">
            <div className="statsu_sub_div">
              <img src={advancenew} alt="plan_div" />
              <PlanHeading>Advance </PlanHeading>
            </div>
          </div>

          <div className="price_main_div">
            <div className="price_main_sub_one">
              <SaveHeading> Save 38% </SaveHeading>
              <Subblackdescription>
                {" "}
                <del>₹2999</del>
              </Subblackdescription>
            </div>

            <div className="price_main_sub_one">
              <MainHeading>₹4000 </MainHeading>
              <SubTagHeading className="sub_head">
                {" "}
                <sub>/month</sub>
              </SubTagHeading>
            </div>
          </div>

          <div className="head_cont">
            <BlackMainDescription>Enterprise Plan</BlackMainDescription>
            <Subblackdescription>
              With a 3-yr team. You pay ₹23,364.00 today. Renews at ₹30,564.00.
            </Subblackdescription>
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
              <Faqdescription>
                {" "}
                1 additional IP available upon request
              </Faqdescription>
            </div>

            <div className="icon_content">
              <img src={globaldata} alt="logo" />
              <Faqdescription> Global data centers</Faqdescription>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
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
      gap: 20px;
      .statsu_div {
        display: flex;
        justify-content: flex-end;
        .statsu_sub_div {
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0px 0px 6px 1px #00000040;
          padding: 6px 15px;
          border-radius: 8px;
        }
      }
      .price_main_div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .price_main_sub_one {
          display: flex;
          align-items: center;
          gap: 5px;
          .sub_head {
            margin-top: 10px;
          }
        }
      }
      .head_cont {
        display: flex;
        flex-direction: column;
        gap: 5px;
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

    .basic_plan_two {
      flex: 1;
      border-radius: 8px;
      background-color: #6e76e3;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .statsu_div {
        display: flex;
        justify-content: flex-end;
        .statsu_sub_div {
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0px 0px 6px 1px #00000040;
          padding: 6px 15px;
          border-radius: 8px;
          background-color: #ffffff;
        }
      }
      .price_main_div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .price_main_sub_one {
          display: flex;
          align-items: center;
          gap: 5px;
          .sub_head {
            margin-top: 10px;
          }
        }
      }
      .head_cont {
        display: flex;
        flex-direction: column;
        gap: 5px;
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

  @media (max-width: 567px) {
    .main_plan_div {
      flex-direction: column;
      gap: 15px;
      .basic_plan {
        gap: 15px;

        .price_main_div .price_main_sub_one .sub_head {
          margin-top: 0px;
        }
      }

      .basic_plan_two {
        gap: 15px;
        .price_main_div .price_main_sub_one .sub_head {
          margin-top: 0px;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    .main_plan_div {
      flex-wrap: wrap;
      .basic_plan {
        flex: unset;
        width: 47%;
      }

      .basic_plan_two {
        flex: unset;
        width: 47%;
      }
    }
  }
`;
