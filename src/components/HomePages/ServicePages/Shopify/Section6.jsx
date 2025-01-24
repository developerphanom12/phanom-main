import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GradientHeading,
  Greydescription,
  Heading,
} from "../../../../Global/GlobalText";
import { PurpleBackground } from "../../../../Global/GlobalButton";
import shopifyecomm from "../../../../assets/Images/shopifyecomm.png";
import customshop from "../../../../assets/Images/customshop.png";
import shopintegration from "../../../../assets/Images/shopintegration.png";
import shopifymigration from "../../../../assets/Images/shopifymigration.png";


import shopifytheme from "../../../../assets/Images/shopifytheme.png";

import shopapp from "../../../../assets/Images/shopapp.png";
import appnew from "../../../../assets/Images/appnew.png";


export const Section6 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          <span>
            <Heading>Elevate Your Brand with the</Heading>
            <GradientHeading>Leading Shopify </GradientHeading>
            <br />
            <GradientHeading>Development Agency</GradientHeading>
            <Heading>Boost Your Brand</Heading>
            <br />
            <Heading>Awareness Now!</Heading>
          </span>

          <Greydescription>
            Our company has a perfect solution for your requirements as we offer
            specialties in Shopify development services. Our experienced Shopify
            designers create portals aimed at maximising your audience
            engagement. We handle everything from the creation of your Shopify
            store to marketing your brand. Our strategies are crafted to provide
            your company with the recognition it deserves. Our team is also
            focused on enhancing the customer experience to boost the rate of
            conversion, which is a true reflection of the success metrics for a
            business. Partner with the best Shopify development agency in India,
            and rest assured about performing strongly in your chosen area of
            business. Work with us and let us guide you towards success.
          </Greydescription>

          <div>
            <PurpleBackground>Book an Appointment</PurpleBackground>
          </div>
        </div>

        <div className="sub_div_two">
          <div className="slide_div">
            <div className="sub_slide_div">
              <div className="img_div">
                <img src={shopifyecomm} alt="Shopify E-Commerce" />
              </div>
              <div className="content_div">
                <BlackHeading>Shopify E-Commerce Development</BlackHeading>

                <Greydescription>
                We understand the intricacies of ecommerce development and deliver tailor-made solutions for your business. Our dedicated group of experts make certain that your online store is beautifully designed, functional, and built to convert, thus ensuring you a good share in today’s competitive environment.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={customshop} alt="Custom Shopify" />
              </div>
              <div className="content_div">
                <BlackHeading>Custom Shopify Development</BlackHeading>
                <Greydescription>
                      For business ventures looking for a custom online store, our contoured web design is developed by our expert staff who ensure that the shop meets all the objectives of the business. We build a brand image by focusing on user-centric innovative designs and dominating the market with a plethora of features.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={shopintegration} alt="Shopify Integration" />
              </div>
              <div className="content_div">
                <BlackHeading>Shopify Integration</BlackHeading>
                <Greydescription>
                The integration of powerful shopping cart features, payment gateways, inventory systems, and many others are painstakingly incorporated into your store by our skilled Shopify developers. All systems are tested to ensure that your customers benefit from a unified shopping experience.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={shopifymigration} alt="Shopify Migration" />
              </div>
              <div className="content_div">
                <BlackHeading>Shopify Migration</BlackHeading>
                <Greydescription>
                Setting up an existing site on Shopify can be difficult. Our adept developers manage it effortlessly. We migrate your site content, data, and design without compromising on quality and make certain that you enjoy the benefits that are the best this e-commerce platform has to offer.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img
                  src={shopifytheme}
                  alt="Shopify Theme Development"
                />
              </div>
              <div className="content_div">
                <BlackHeading>Shopify Theme Development</BlackHeading>
                <Greydescription>
                The User Interface/User Experience designers on Shopify gets to build responsive mobile friendly themes that work on any and every browser. User reports about user satisfaction when shopping in your store are about to change for the better as we focus on user experience combined with the interactive design of your store which drives customer satisfaction and retention.
                </Greydescription>
              </div>
            </div>

         

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={shopapp} alt="APP STORE OPTIMIZATION SEO" />
              </div>
              <div className="content_div">
                <BlackHeading>Shopify App Development & Modification</BlackHeading>
                <Greydescription>
                We build responsive and user-friendly mobile apps for Shopify that make it easier for clients to shop from your store. Our app development services include bespoke customizations that increase user engagement and outreach and offer greater advantages for you and your customers.
                </Greydescription>
              </div>
            </div>


          </div>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px;
  .main_div {
    display: flex;
    gap: 20px;

    .sub_div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 35px;
    }

    .sub_div_two {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      justify-content: center;
      .slide_div {
        height: 190px;
        width: 100%;
        overflow: auto;
        .sub_slide_div {
          padding: 40px 30px;
          display: flex;
          gap: 20px;

          box-shadow: 0px 12px 28px 0px rgba(140, 149, 159, 0.3);
          border-radius: 20px;
          .img_div {
            width: 15%;
          }
          .content_div {
            width: 85%;
            display: flex;
            gap: 10px;
            flex-direction: column;
          }
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 10px 20px;
    .main_div {
      flex-direction: column;

      .sub_div {
        gap: 25px;
        text-align: center;
        br {
          display: none;
        }
      }

      .sub_div_two .slide_div .sub_slide_div {
        padding: 20px 10px;
        margin-top: 20px;

        .img_div {
          width: 30%;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 10px 20px;
    .main_div {
      flex-direction: column;
      .sub_div {
        gap: 25px;
        text-align: center;
      }
    }
  }
`;
