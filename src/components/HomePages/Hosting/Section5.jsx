import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  GradientHeading,
  Heading,
  PointerHeading,
} from "../../../Global/GlobalText";

export const Section5 = () => {
  return (
    <Root>
      <div className="main_div">
        <span>
          <Heading>Popular uses for</Heading>
          <GradientHeading> VPS Hosting.</GradientHeading>
        </span>

        <div className="sub_main_div">
          <div className="sub_content_div">
            <PointerHeading> Ecommerce-ready hosting.</PointerHeading>
            <Blackdescription>
              Launch your traffic-ready ecommerce site by installing WordPress,
              Magento, OpenCart and PrestaShop — with a single click.
            </Blackdescription>
          </div>

          <div className="sub_content_div">
            <PointerHeading> Multiple sites.</PointerHeading>
            <Blackdescription>
              Host multiple sites without impacting the response time of any one
              client — thanks to our isolated environment.
            </Blackdescription>
          </div>

          <div className="sub_content_div">
            <PointerHeading>Web or database server.</PointerHeading>
            <Blackdescription>
              Get up to 3X speed and unlimited traffic. KVM virtualization for
              full control + upgrades to increase RAM, CPU, storage
            </Blackdescription>
          </div>
        </div>

        <div className="sub_main_div">
          <div className="sub_content_div">
            <PointerHeading> Resource-heavy applications.</PointerHeading>
            <Blackdescription>
              Take control of them with our VPS — be it business, financial,
              CRM, social media, or real estate apps.
            </Blackdescription>
          </div>

          <div className="sub_content_div">
            <PointerHeading> Email server control.</PointerHeading>
            <Blackdescription>
              Set up and fully control your own email server. Run unlimited
              mailboxes and addresses for your business or clients.
            </Blackdescription>
          </div>

          <div className="sub_content_div">
            <PointerHeading>Global testing environments.</PointerHeading>
            <Blackdescription>
              Instantly spin up test servers across any continent and test the
              response times of your app or site.
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
