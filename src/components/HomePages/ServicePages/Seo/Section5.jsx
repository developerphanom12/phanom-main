import React from "react";
import styled from "styled-components";
import { Greydescription, Textwithborder } from "../../../../Global/GlobalText";
import visibility from "../../../../assets/Images/visibility.png";

export const Section5 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div_one">
          <div className="text_border">

            <Textwithborder>Boost Your Business with Our Seo</Textwithborder>
            <Textwithborder>Services</Textwithborder>

          </div>
          <Greydescription>
            We understand your needs, so we work on your web page to optimize it
            for better traffic and more visibility on search engines. Our SEO
            Experts works from researching keywords to on-page and off-page
            optimization to guarantee that you achieve measurable results.
          </Greydescription>
          <div className="text_head">
            <Greydescription>
              We provide a variety of services to maximize the relevancy and
              search-ability of your website:
            </Greydescription>
            <div className="sub_text_head">
              <Greydescription>
                1. Keyword research - We ensure, that you never hear the phrase
                “It’s complicated” ever again, by finding the pertinent keywords
                for your audience.
              </Greydescription>
              <Greydescription>
                2. On-Page - We ensure page titles, Meta tags, headings and
                content are optimized for targeted search queries.
              </Greydescription>
              <Greydescription>
                3. Technical SEO - We make sure that your website loads faster,
                is more secure, and more accessible to spiders.
              </Greydescription>
              <Greydescription>
                4. Off-Page - We aim at increasing your website’s links through
                effective link building strategies.
              </Greydescription>
              <Greydescription>
                5. Content Marketing - Content without purpose is meaningless.
                We ensure that created content is relevant through the use of
                keywords
              </Greydescription>
              <Greydescription>
                6. Local SEO - We geo-target search engines to find customers
                nearby.
              </Greydescription>
              <Greydescription>
                7. E-commerce SEO - We try to rank your online store at the top
                of the search engines to increase sales.
              </Greydescription>
            </div>
          </div>
        </div>
        <div className="sub_div_two">
          <img src={visibility} alt="process" />
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
    .sub_div_one {
      width: 55%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .text_border {
        display: flex;
        gap: 5px;
        flex-direction: column;
      }

      .text_head {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .sub_text_head {
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
      }

      .slider-container {
        display: none;
        .img_logo {
          background-color: #6c5fd4;
          padding: 20px;
          width: 40% !important;
          display: flex !important;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          gap: 10px;
        }
      }
    }

    .sub_div_two {
      display: flex;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 10px 20px;

    .main_div {
      flex-direction: column;
      text-align: center;

      .sub_div_one {
        width: 100%;
        gap: 20px;
        .text_border {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
        }
        .slider-container {
          display: block;
          padding: 20px 0;
          .slick-slide img {
            width: 50px;
            height: 50px;
          }
          .slick-track {
            display: flex;
            gap: 20px;
          }
          .img_logo {
            width: 100% !important;
          }
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 10px 20px;
    .main_div {
      flex-direction: column;
      text-align: center;

      .sub_div_one {
        width: 100%;
        gap: 20px;
        .text_border {
          flex-direction: row;
          justify-content: center;
        }

        .slider-container {
          display: none;
        }

        .text-with-border-shadow {
          br {
            display: none;
          }
        }
      }

      .sub_div_two {
        display: flex;
        justify-content: center;
        img {
          width: 60%;
        }
      }
    }
  }
`;
