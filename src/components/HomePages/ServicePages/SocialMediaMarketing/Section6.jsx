import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GradientHeading,
  Greydescription,
  Heading,
} from "../../../../Global/GlobalText";
import { PurpleBackground } from "../../../../Global/GlobalButton";
import propagation from "../../../../assets/Images/propagation.png";
import trumpeting from "../../../../assets/Images/trumpeting.png";
import branmangement from "../../../../assets/Images/branmangement.png";
import captionwriting from "../../../../assets/Images/captionwriting.png";
import contentwriting from "../../../../assets/Images/contentwriting.png";
import postdesigning from "../../../../assets/Images/postdesigning.png";
import socialmediaoptimisation from "../../../../assets/Images/socialmediaoptimisation.png";
import calenderschedule from "../../../../assets/Images/calenderschedule.png";

export const Section6 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          <span>
            <Heading>Grow on Social Media with </Heading><br/>

            <Heading>Phanom Professionals </Heading><br/>

           
            <GradientHeading>Your 360° Marketing </GradientHeading> <br/>
            <Heading>Partner</Heading>
 
          </span>

          <Greydescription>
               Allow us to introduce ourselves, a cutting edge 360 marketing agency in India. We deliver the tools and strategies that you need to succeed on social media platforms that include Facebook, Instagram, and LinkedIn. Beyond brand awareness, we also foster acquisition and retention to assure the success of your brand. So work with us today and conquer the digital world.
          </Greydescription>

     
          <div>
            <PurpleBackground>Book an Appointment</PurpleBackground>
          </div>
        </div>

        <div className="sub_div_two">
          <div className="slide_div">
            <div className="sub_slide_div">
              <div className="img_div">
                <img src={propagation} alt="PROPAGATION" />
              </div>
              <div className="content_div">
                <BlackHeading>PROPAGATION</BlackHeading>

                <Greydescription>
                It is rather easier to propagate any brand for the reason that Transiting the preference of the audience is on Social Media. We make sure we do so for them.
                </Greydescription>

              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={trumpeting} alt="TRUMPETING" />
              </div>
              <div className="content_div">
                <BlackHeading>TRUMPETING</BlackHeading>
                <Greydescription>
                       An integral element is being on the stage for longer period is trumpteting about your brand on various means of advertisements.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={branmangement} alt="BRAND MANAGEMENT" />
              </div>
              <div className="content_div">
                <BlackHeading>BRAND MANAGEMENT</BlackHeading>
                <Greydescription>
                It is immensely crucial to create value for the brand through proper brand management for massive initiation towards market needs.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={contentwriting} alt="CONTENT WRITING" />
              </div>
              <div className="content_div">
                <BlackHeading>CONTENT WRITING</BlackHeading>
                <Greydescription>
                The writing and designing is always centered around the information from the brand or product to enhance demand and achieve proper business objectives.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={captionwriting} alt="CAPTION WRITING" />
              </div>
              <div className="content_div">
                <BlackHeading>CAPTION WRITING</BlackHeading>
                <Greydescription>
                In a vast majority of the instances, the captions on social media are aimed at the marketing of the particular brand. In this case, we tend to focus more on ‘fuelling’ the emotions into the text.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={postdesigning} alt="POST DESIGNING" />
              </div>
              <div className="content_div">
                <BlackHeading>POST DESIGNING</BlackHeading>
                <Greydescription>
                The Social Media Illustrations and graphics made during the posting tend to be captivating with my focus set on reinforcing the target focal point for the brand.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={socialmediaoptimisation} alt="SOCIAL MEDIA OPTIMIZATION" />
              </div>
              <div className="content_div">
                <BlackHeading>SOCIAL MEDIA OPTIMIZATION</BlackHeading>
                <Greydescription>
                      Important for any brand to create a profile on social Media and be visible to the public is SMO, for getting on board to supersede and excel on this globe.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={calenderschedule} alt="CALENDAR"/>
              </div>
              <div className="content_div">
                <BlackHeading>CALENDAR/SCHEDULE</BlackHeading>
                <Greydescription>
                We take care of your social media accounts; enhance your image on social media & take a step further and engage audience actively.
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
