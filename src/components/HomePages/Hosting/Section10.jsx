import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientHeading,
  Heading,
  PointerHeading,
} from "../../../Global/GlobalText";

export const Section10 = () => {
  return (
    <Root>
      <div className="main_div">
        <span>
          <Heading>What We</Heading>
          <GradientHeading> Offer! </GradientHeading>
        </span>

        <div className="sub_main_div">
          <div className="sub_content_div">
            <PointerHeading>Managed VPS Hosting</PointerHeading>
            <Blackdescription>
            Fully managed virtual private servers for reliability and performance.
            </Blackdescription>
          </div>

          <div className="sub_content_div">
            <PointerHeading> Custom Server Solutions</PointerHeading>
            <Blackdescription>
            Dedicated servers tailored to your business needs
            </Blackdescription>
          </div>

          <div className="sub_content_div">
            <PointerHeading>Automatic Updates</PointerHeading>
            <Blackdescription>
            Keep your systems updated with the latest software and patches
            </Blackdescription>
          </div>
        </div>

        <div className="sub_main_div">
          <div className="sub_content_div">
            <PointerHeading> Proactive Monitoring</PointerHeading>
            <Blackdescription>
             Early issue detection to avoid costly downtime.
            </Blackdescription>
          </div>

          <div className="sub_content_div">
            <PointerHeading> Data Migration</PointerHeading>
            <Blackdescription>
            Seamlessly move your data to our servers without any hassle.
            </Blackdescription>
          </div>

          <div className="sub_content_div">
            <PointerHeading>Disaster Recovery Solutions</PointerHeading>
            <Blackdescription>
                    Ensure business continuity with robust backup and recovery plans
            </Blackdescription>
          </div>

        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 20px 70px;
  .main_div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    .sub_main_div {
      display: flex;
      gap: 50px;
      margin-top: 20px;
      width:100%;

      .sub_content_div {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }

  @media (max-width: 567px) {
    padding:   0 20px 20px ;
    .main_div{
      span{
        text-align: center;
      }

   .sub_main_div {
   flex-direction: column;
   gap:20px;
}
    }
    

  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding:   0 20px 20px ;
  }
`;
