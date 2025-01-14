import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientHeading,
  Heading,
} from "../../../Global/GlobalText";

import blankvertical from "../../../assets/Images/blankvertical.png";

export const Section4 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_main_div">
          <div className="main_content">
            <Blackdescription>Self Managed VPS</Blackdescription>

            <span>
              <Heading>Ideal for admins & </Heading>
       
              <GradientHeading>Developers</GradientHeading>
            </span>

            <Blackdescription>
              For system administrators, developers, or designers experienced in
              managing a server and seeking full control. Get full root access
              with SSH keys and command line, and scalable, flexible server
              configurations.
            </Blackdescription>
          </div>

          <img src={blankvertical} alt="Vertical" className="ist_image" />

          <div className="vertical_heading">
            <span>
              <GradientHeading>Monitoring</GradientHeading>
              <Heading>and alerts. </Heading>
            </span>

            <Blackdescription>
              Monitor server uptime, resources (CPU, RAM, Storage) and domains.
              Stay informed with alerts.
            </Blackdescription>
          </div>



          <img src={blankvertical} alt="Vertical " className="ist_image" />


          <div className="vertical_heading">
            <span>
              <GradientHeading>Patch</GradientHeading>
              <Heading>and update. </Heading>
            </span>

            <Blackdescription>
            Manually patch and update your operating system and control panel. Take control so your server is always up to date.
            </Blackdescription>
          </div>


        </div>

        <div className="sub_main_div">
          <img src={blankvertical} alt="Vertical" className="sec_image" />

          <div className="vertical_heading">
            <span>
                <Heading>Expert </Heading>
              <GradientHeading>support</GradientHeading>
            
            </span>

            <Blackdescription>
            From personalized service recommendations to comprehensive help documentation, get expert guidance and support from our VPS Hosting specialists.
                                  </Blackdescription>
          </div>




          <img src={blankvertical} alt="Vertical" className="sec_image" />

<div className="vertical_heading">
  <span>
    <GradientHeading>Backups and</GradientHeading>
    <Heading>recovery </Heading>
  </span>

  <Blackdescription>
  Get 7 days of automated snapshot backups. Create on-demand snapshot. Fix using recovery console (SSH).              </Blackdescription>
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
    flex-wrap: wrap;
    gap: 50px;
    .sub_main_div {
      flex: 1;
      .main_content {
        display: flex;
        gap: 20px;
        flex-direction: column;
      }

      .ist_image {
        margin-top: 100px;
        width: 100%;
        height: 600px;
      }


      .sec_image {
   
        width: 100%;
        height: 600px;
      }


      .vertical_heading {
        display: flex;
        gap: 20px;
        flex-direction: column;
        margin: 50px 0;
      }
    }
  }

  @media (max-width: 567px) {
  }

  @media (min-width: 567px) and (max-width: 1024px) {
  }
`;
