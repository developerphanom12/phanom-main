import React from "react";
import styled from "styled-components";
import { Greydescription, Textwithborder } from "../../../../Global/GlobalText";
import socialmedianew from "../../../../assets/Images/socialmedianew.png";

export const Section5 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div_one">
          <div className="text_border">
            <Textwithborder>Phanom Professionals: India’s </Textwithborder>

            <Textwithborder>Innovative Social Media Social</Textwithborder>

            <Textwithborder>Media Expertise</Textwithborder>
          </div>

          <Greydescription>
            Your brand will grow, engage, and flourish with the marketing
            assistance of Phanom Professionals since we are a reputable Social
            Media Marketing Company India. Our aim is to help achieve higher
            rankings, increase visibility, and ensure client satisfaction with
            for every trusted partner.
          </Greydescription>

          <div className="text_head">
            <Greydescription>What can we do for you:</Greydescription>
            <div className="sub_text_head">
              <Greydescription>
                1.Facebook Marketing: Encouraging brand loyalty and boosting
                conversions.
              </Greydescription>
              <Greydescription>
                2. Instagram Marketing: Creating viral visuals and reels.
              </Greydescription>
              <Greydescription>
                3. Twitter Marketing: Amplifying your voice through meaningful
                conversations.
              </Greydescription>
              <Greydescription>
                4. LinkedIn Marketing: Increasing professional authority and
                connections.
              </Greydescription>
              <Greydescription>
                5. YouTube Marketing: Engaging audiences via powerful video
                content.
              </Greydescription>
              <Greydescription>
                6. Pinterest Marketing: Creative ideas that inspire and convert.
              </Greydescription>
              <Greydescription>
                7. E-commerce SEO - We try to rank your online store at the top
                of the search engines to increase sales.
              </Greydescription>
            </div>
          </div>

          <Greydescription>
                  Are you ready to elevate your brand? Implement ingenious social media marketing strategies and get in touch with India’s Best Social Media Marketing Company right away. You’ll be amazed by what we can do for you.
          </Greydescription>
        </div>
        <div className="sub_div_two">
          <img src={socialmedianew} alt="process" />
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

      .tecnology_types {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        .sub_technology_type {
          border-radius: 10px;
          background-color: #6c5fd4;
          padding: 20px;
          width: 22%;
          display: flex;
          align-items: center;
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

        .tecnology_types {
          display: none;
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
          flex-wrap: wrap;
        }

        .slider-container {
          display: none;
        }

        .text-with-border-shadow {
          br {
            display: none;
          }
        }

        .tecnology_types {
          display: flex;
          justify-content: center;
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
