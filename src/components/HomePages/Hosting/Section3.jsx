import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientBgHeading,
  Heading,
  PointerHeading,

} from "../../../Global/GlobalText";
import ssd from "../../../assets/Images/ssd.png"

import protection from "../../../assets/Images/protection.png"



import material from "../../../assets/Images/material.png"


import access from "../../../assets/Images/access.png"





export const Section3 = () => {
  return (
    <Root>
      <div className="main_div">
        
        <div className="sub_main_div_one">
          <div>
            <GradientBgHeading>STANDARD PERFORMANCE</GradientBgHeading>
          </div>
          <Heading>Every VPS Hosting plan Includes:</Heading>
        </div>


        <div className="sub_main_div_two">

          <div className="sub_tech_div">
            <img src={ssd} alt="Digital Marketing" />
            <PointerHeading >NVMe SSDs.</PointerHeading>

            <Blackdescription>
            Get up to 3X speed and unlimited traffic. KVM virtualization for full control + upgrades to increase RAM, CPU, storage
            </Blackdescription>
          </div>
          <div className="sub_tech_div">
            <img src={protection} alt="Digital Marketing" />
            <PointerHeading className="heading">DDoS protection + SSL.</PointerHeading>

            <Blackdescription>
            Get 24/7 network monitoring, advanced DDoS + free SSL certificate (for 1st year) with a dedicated IP.
            </Blackdescription>
          </div>
          <div className="sub_tech_div">
            <img src={material} alt="Digital Marketing" />
            <PointerHeading  className="heading">Unlimited Hosting.</PointerHeading>

            <Blackdescription>
            Create accounts with optional cPanel/WHM + Installatron.
            </Blackdescription>
          </div>
          <div className="sub_tech_div">
            <img src={access} alt="Digital Marketing" />
            <PointerHeading className="heading">Root access.</PointerHeading>

            <Blackdescription>
            Retain full control and configure your server to your needs (up to the operating system level).
            </Blackdescription>
          </div>

        </div>

      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 20px 100px;
  .main_div {
    display: flex;
    gap: 20px;


    .sub_main_div_one {
      width: 40%;
      display: flex;
      gap: 20px;
      flex-direction: column;
      padding-top: 40px;
      gap: 30px;
    }

    .sub_main_div_two {
      width: 60%;
      display: flex;
      flex-wrap: wrap;
      .sub_tech_div {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 48%;
        img{
          width: 50px;
        }
      
      }
    }



  }

  @media (max-width: 567px) {
    padding: 20px;

   .main_div {
    flex-direction:column;
    gap:10px;
    .sub_main_div_one{
      width: 100%;
      padding-top: 20px;
      align-items: center;
      text-align: center;
    }

    .sub_main_div_two{
      width: 100%;
      .sub_tech_div{
        width: 100%;
        padding: 10px;
      }
    }
}


  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 50px 20px 20px;

    .main_div {
    flex-direction:column;
    gap:10px;
    .sub_main_div_one{
      width: 100%;
      padding-top: 0%;
      align-items: center;
      text-align: center;
    }

    .sub_main_div_two{
      width: 100%;
      .sub_tech_div{
        width: 50%;
        padding: 10px;
      }
    }
}

  }
`;
