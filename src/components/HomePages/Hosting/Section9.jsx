import React from "react";
import styled from "styled-components";
import { Blackdescription, MainHeading } from "../../../Global/GlobalText";

export const Section9 = () => {
  return (
    <Root>
      <div className="main_div">
      
        <MainHeading>
            Let’s Build Together
        </MainHeading>

        <Blackdescription>
                Your satisfaction is our priority. With a dedicated account manager and technical team always on standby, we ensure a seamless experience from day one. We’re not just service providers; we’re your technology partners.
        </Blackdescription>

        <Blackdescription>
              Ready to elevate your server management? Partner with Phanom and experience unparalleled service and support. Contact us today to discuss your needs and discover how we can empower your business
        </Blackdescription>


      </div>
      {/* <div className="disclainmer_header">
        <Blackdescription>** Product Disclaimers</Blackdescription>
      </div> */}
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
    padding:20px 20px;
      .disclainmer_header {
        text-align: center;

    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding:30px 20px;
      .disclainmer_header {
        text-align: center;

    }
  }
`;
