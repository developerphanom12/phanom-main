import React, { useState } from "react";
import styled from "styled-components";
import { MonthlyPlan } from "./HostingPlan/MonthlyPlan";
import { YearlyPlan } from "./HostingPlan/YearlyPlan";

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
            <h4>Pay monthly</h4>

            {/* <p> Easy on your budget. </p> */}

          </div>

          <div
            className={activeButton === 1 ? "active" : ""}
            onClick={() => handleButtonClick(1)}
          >
            <h4>Pay yearly</h4>
          
          </div>
        </div>

        <div className="content_div">
          {activeButton === 0 && (
            <>
              {/* <div class="main_plan_div">
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
                      With a 3-yr team. You pay ₹23,364.00 today. Renews at
                      ₹30,564.00.
                    </Subblackdescription>
                  </div>

                  <div>
                    <PurpleConfigurebtn>
                      Configure Your Server
                    </PurpleConfigurebtn>
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
                      <MainWhiteHeading>₹2000 </MainWhiteHeading>
                      <SubTagWhiteHeading className="sub_head">
                        {" "}
                        <sub>/month</sub>
                      </SubTagWhiteHeading>
                    </div>
                  </div>

                  <div className="head_cont">
                    <WhiteMainDescription>Growth Plan</WhiteMainDescription>
                    <Subwhitedescription>
                      With a 3-yr team. You pay ₹23,364.00 today. Renews at
                      ₹30,564.00.
                    </Subwhitedescription>
                  </div>

                  <div>
                    <WhiteConfigurebtn>
                      Configure Your Server
                    </WhiteConfigurebtn>
                  </div>

                  <div className="main_icon_cont">
                    <div className="icon_content">
                      <img src={cpuwhite} alt="logo" />
                      <FaqWhitedescription> 1 vCPU core</FaqWhitedescription>
                    </div>

                    <div className="icon_content">
                      <img src={ramwhite} alt="logo"/>
                      <FaqWhitedescription> 2 GB RAM</FaqWhitedescription>
                    </div>

                    <div className="icon_content">
                      <img src={ssdwhite} alt="logo"/>
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
                      <FaqWhitedescription>cPanel or Plesk available</FaqWhitedescription>
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
                      <img src={advancenew} alt="plan_div"/>
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
                      <MainHeading>₹2000 </MainHeading>
                      <SubTagHeading className="sub_head">
                        {" "}
                        <sub>/month</sub>
                      </SubTagHeading>
                    </div>
                  </div>

                  <div className="head_cont">
                    <BlackMainDescription>Enterprise Plan</BlackMainDescription>
                    <Subblackdescription>
                      With a 3-yr team. You pay ₹23,364.00 today. Renews at
                      ₹30,564.00.
                    </Subblackdescription>
                  </div>

                  <div>
                    <PurpleConfigurebtn>
                      Configure Your Server
                    </PurpleConfigurebtn>
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
              </div> */}

              <MonthlyPlan/>

            </>
          )}

          {activeButton === 1 && (
            <>
            <YearlyPlan/>
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
  
    }
  }

  @media (max-width: 567px) {
    padding:20px;

     .main_div{
      gap: 30px;
     .btn_div {
  flex-direction: column;
  div h4 {
    font-size: 22px;
    font-weight: 500;
    line-height: 23px;
}
div p{
  font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}
}




     }


  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding:20px;
   .main_div {
    gap: 30px;
}



  }
`;
