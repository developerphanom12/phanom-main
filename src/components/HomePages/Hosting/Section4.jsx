import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientHeading,
  Heading,
  SmallHeading,
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
              <Heading> Server Management with </Heading>
              <br />

              <Heading>VPS & </Heading>
              <GradientHeading>Hosting Services.</GradientHeading>
            </span>

            <Blackdescription>
              Managing your servers has never been this seamless! At Phanom we
              take pride in providing top-tier server management solutions
              tailored to meet your unique needs. Whether you’re an individual,
              startup, or established business, we’ve got you covered.
            </Blackdescription>
          </div>

          <img src={blankvertical} alt="Vertical" className="ist_image" />

          <div className="vertical_heading">
            <span>
              <GradientHeading>Tailored</GradientHeading>
              <Heading>Solutions! </Heading>
            </span>

            <ul>
              <li>
                Fully customization plans that adapt to your business size and
                requirements.
              </li>
              <li>Scalable options to grow with your business.</li>
            </ul>

            <span>
              <Heading>24/7 </Heading>
              <GradientHeading>Support</GradientHeading>
            </span>

            <ul>
              <li>
                Round-the-clock monitoring and support to ensure optimal
                performance.
              </li>
              <li>
                Quick response times to minimize downtime and address issues
                immediately.
              </li>
            </ul>
          </div>

          <img src={blankvertical} alt="Vertical " className="ist_image" />
        </div>

        <div className="sub_main_div">
          <img src={blankvertical} alt="Vertical" className="sec_image" />

          <div className="vertical_heading">
            <span>
              <Heading>Why </Heading>
              <GradientHeading>Choose Us?.</GradientHeading>
            </span>

            <SmallHeading>Expertise You Can Trust!</SmallHeading>

            <ul>
              <li>
                Decades of combined experience in server management, hosting,
                and VPS solutions.
              </li>
              <li>
                Certified professionals equipped with the latest technologies.
              </li>
            </ul>
          </div>

          <img src={blankvertical} alt="Vertical" className="sec_image" />

          <div className="vertical_heading">
            <span>
              <GradientHeading>Affordable</GradientHeading>
              <Heading>Pricing! </Heading>
            </span>

            <ul>
              <li>Competitive rates without compromising on quality</li>
              <li>
                Transparent pricing models—no hidden fees, just excellent
                service.
              </li>
            </ul>

            <span>
              <GradientHeading>End-to-End</GradientHeading>
              <Heading>Management!</Heading>
            </span>

            <ul>
              <li>
                From server setup and optimization to security and updates, we
                handle it all.
              </li>
              <li>
                Focus on your core business while we manage your infrastructure.
              </li>
            </ul>
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
    gap: 100px;
    .sub_main_div {
      flex: 1;
      .main_content {
        display: flex;
        gap: 20px;
        flex-direction: column;
      }

      .ist_image {
        margin-top: 40px;
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
        ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-left: 30px;
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 10px 20px 20px;

    .main_div {
      text-align: center;
      gap: 10px;

      .sub_main_div {
        .main_content {
          display: flex;
          gap: 15px;
          flex-direction: column;
          margin-bottom: 30px;
        }

        .ist_image {
          margin-top: 0px;
        }

        .vertical_heading {
          margin: 20px 0;
          ul {
            padding-left:10px;
           
            text-align:center;
          }
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 40px 30px 0;
    .main_div .sub_main_div {
      gap: 20px;
    }
  }
`;
