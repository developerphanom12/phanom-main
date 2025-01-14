import React from "react";
import styled from "styled-components";
import { Blackdescription, MainHeading } from "../../../Global/GlobalText";

export const Section9 = () => {
  return (
    <Root>
      <div className="main_div">
        <MainHeading>
          Websites and apps that process credit cards are expected to be PCI
          compliant.
        </MainHeading>

        <Blackdescription>
          The Payment Card Industry Security Standards Council (PCI-SSC) sets
          standards to protect credit card data. Namely, entities that transmit,
          process or store credit card information are expected to abide by the
          standards of the Payment Card Industry Data Security Standards. To
          accept credit card payments through your website, you’ll need to
          ensure your customer payment information is safe and that you’re
          following the PCI requirements. And to simplify this process,
          third-party products like PayPal Checkout, Square Online Checkout and
          Stripe Checkout can be added to your website to process payments on
          your behalf (and keep credit card data off your hosting server). Make
          sure you’re aware of any additional requirements to keep your business
          PCI compliant.
        </Blackdescription>

        <Blackdescription>
          If you prefer to process payments directly on your server, we offer
          PCI-certified products like WooCommerce Hosting and the Phanom Online
          Store.
        </Blackdescription>
      </div>
      <div className="disclainmer_header">
        <Blackdescription>** Product Disclaimers</Blackdescription>
      </div>
    </Root>
  );
};

const Root = styled.section`

  padding:40px 100px;

  .main_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
  }


  .disclainmer_header {
    text-align: left;
    margin-top: 20px;
  }



  @media (max-width: 567px) {
  }

  @media (min-width: 567px) and (max-width: 1024px) {
  }
`;
