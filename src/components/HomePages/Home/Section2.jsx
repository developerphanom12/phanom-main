import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  Greydescription,
  PurpleSubHeading,
  Textwithborder,
} from "../../../Global/GlobalText";
import { PurpleSecondBackground } from "../../../Global/GlobalButton";
import { FaArrowRightLong } from "react-icons/fa6";
import digitalmarketing from "../../../assets/Images/digitalmarketing.png";
import reactjss from "../../../assets/Images/reactjss.png";
import greenserver from "../../../assets/Images/greenserver.png";
import blueserver from "../../../assets/Images/blueserver.png";
import java from "../../../assets/Images/java.png";

export const Section2 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_main_div_one">

                    <div className="text_border">
          
                      <Textwithborder> Explore</Textwithborder>
                      <Textwithborder>our</Textwithborder>
                      <Textwithborder>Service</Textwithborder>

          
                    </div>

                    
          


          <Blackdescription>
            Explore our service and discover solutions designed to meet your
            unique needs. With a focus on quality and innovation, we turn your
            vision into reality.
          </Blackdescription>
          <div>
            <PurpleSecondBackground className="connect_btn">
              Explore more <FaArrowRightLong />
            </PurpleSecondBackground>
          </div>
        </div>

        <div className="sub_main_div_two">
          <div className="sub_tech_div">
            <div className="logo_content">
              <img src={digitalmarketing} alt="Digital Marketing" />
              <PurpleSubHeading>Digital Marketing</PurpleSubHeading>
            </div>
            <Blackdescription>
              Keep your lawn in top shape without lifting a finger and boost the
              appearance of your property.
            </Blackdescription>
            <div className="tools_div">
              <Greydescription>Tools: </Greydescription>
              <img src={reactjss} alt="React-Js" />
              <img src={greenserver} alt="DataBase" />
              <img src={blueserver} alt="DataBase" />
              <img src={java} alt="Javascript" />
            </div>
          </div>

          <div className="sub_tech_div">
            <div className="logo_content">
              <img src={digitalmarketing} alt="Digital Marketing" />
              <PurpleSubHeading>Design & Development</PurpleSubHeading>
            </div>
            <Blackdescription>
              Keep your lawn in top shape without lifting a finger and boost the
              appearance of your property.{" "}
            </Blackdescription>
            <div className="tools_div">
              <Greydescription>Tools: </Greydescription>
              <img src={reactjss} alt="React-Js" />
              <img src={greenserver} alt="DataBase" />
              <img src={blueserver} alt="DataBase" />
              <img src={java} alt="Javascript" />
            </div>
          </div>

          <div className="sub_tech_div">
            <div className="logo_content">
              <img src={digitalmarketing} alt="Digital Marketing" />
              <PurpleSubHeading>Animation & Graphics</PurpleSubHeading>
            </div>
            <Blackdescription>
              Keep your lawn in top shape without lifting a finger and boost the
              appearance of your property.
            </Blackdescription>
            <div className="tools_div">
              <Greydescription>Tools: </Greydescription>
              <img src={reactjss} alt="React-Js" />
              <img src={greenserver} alt="DataBase" />
              <img src={blueserver} alt="DataBase" />
              <img src={java} alt="Javascript" />
            </div>
          </div>

          <div className="sub_tech_div">
            <div className="logo_content">
              <img src={digitalmarketing} alt="Digital Marketing" />
              <PurpleSubHeading>E-Commerce Solution</PurpleSubHeading>
            </div>
            <Blackdescription>
              Keep your lawn in top shape without lifting a finger and boost the
              appearance of your property.
            </Blackdescription>
            
            <div className="tools_div">
              <Greydescription>Tools:</Greydescription>
              <img src={reactjss} alt="React-Js"/>
              <img src={greenserver} alt="DataBase"/>
              <img src={blueserver} alt="DataBase"/>
              <img src={java} alt="Javascript"/>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding:70px 100px;
  .main_div {
    display: flex;
    gap: 20px;
    .sub_main_div_one {
      width: 30%;
      display: flex;
      gap: 20px;
      flex-direction: column;

    .text_border {
        display: flex;
        gap: 5px;
        flex-direction: column;
      }

      .connect_btn {
        display: flex;
        gap: 10px;
        align-items: center;
      }
    }

    .sub_main_div_two {
      width: 70%;
      display: flex;
      flex-wrap: wrap;
      .sub_tech_div {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        box-shadow: 0px 25px 20px -26px rgba(0, 0, 0, 0.45),
          25px 0 20px -26px rgba(0, 0, 0, 0.45);
        width: 48%;
        .logo_content {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .tools_div {
          display: flex;
          gap: 10px;
          align-items: center;
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 30px 20px;

   .main_div {
    flex-direction: column;
    .sub_main_div_one {
        width: 100%;
        align-items: center;
        text-align: center;
     

        .text_border {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }

}

 .sub_main_div_two {
  width: 100%;
  .sub_tech_div{
    width: 100%;
  }
}


}

  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;

    .main_div {
    flex-direction: column;
    .sub_main_div_one {
        width: 100%;
        align-items: center;
        text-align: center;
         .text_border {
          flex-direction: row;
          justify-content: center;
          flex-wrap:wrap;
        }

}

 .sub_main_div_two {
  width: 100%;
  justify-content: center;

}


}
    
  }
`;
