import React from "react";
import styled from "styled-components";
import {
  BlackHeading,
  GradientHeading,
  Greydescription,
  Heading,
} from "../../../../Global/GlobalText";
import { PurpleBackground } from "../../../../Global/GlobalButton";
import javasoft from "../../../../assets/Images/javasoft.png";
import javamob from "../../../../assets/Images/javamob.png";
import javamigrat from "../../../../assets/Images/javamigrat.png";
import javacms from "../../../../assets/Images/javacms.png";

import javaintegrat from "../../../../assets/Images/javaintegrat.png";

export const Section6 = () => {
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          <span>
            <Heading>Increase Your Business</Heading>
            <br />
            <Heading>Profit with the</Heading>

            <GradientHeading> Top Java</GradientHeading>
            <br />
            <GradientHeading>Application Development</GradientHeading>
            <br />
            <GradientHeading>Company</GradientHeading>
          </span>

          <Greydescription>
            Because we are a specialized Java application development company we
            are the ideal for all of your software development requirements. Our
            developers build highly effective, scalable applications that meet
            the needs of your company and increase its efficiency and
            engagement. We provide a full range of services, from developing
            customized Java applications to performance optimization. Our plans
            are formulated to ensure your business captures the market attention
            it needs. Achievement in business is demonstrated by focusing on
            enhancing user experience, which leads to improved conversions. Get
            great results when you work with India’s top Java application
            development company. We can help you achieve your professional
            goals; it’s time you journeyed with us towards the exultant world of
            Java solutions. Contact us today and let’s get on it!
          </Greydescription>

          <div>
            <PurpleBackground>Book an Appointment</PurpleBackground>
          </div>
        </div>

        <div className="sub_div_two">
          <div className="slide_div">
            <div className="sub_slide_div">
              <div className="img_div">
                <img src={javasoft} alt="Java Software Development Services" />
              </div>
              <div className="content_div">
                <BlackHeading>Java Software Development Services</BlackHeading>

                <Greydescription>
                  We build scalable, sturdy and fully functional independent
                  Java software solutions powered by modern frameworks which
                  improves automated processes and ease of use. Our experts
                  build custom platforms supporting your business expansion.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={javamob} alt="SHOPIFY SEO" />
              </div>
              <div className="content_div">
                <BlackHeading>Java Mobile App Development</BlackHeading>
                <Greydescription>
                  We craft elegant and ergonomic mobile applications with Java
                  Micro Edition (J2ME) and Java cross-platform frameworks. With
                  the Java Mobile Application Development & Java Full Stack
                  Development, we optimize your mobile applications for the best
                  user experience and performance.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={javamigrat} alt="AMAZON SEO" />
              </div>
              <div className="content_div">
                <BlackHeading>Java Migration Services</BlackHeading>
                <Greydescription>
                  Our Java specialists are ready to fully relocate or reallocate
                  your Java development work package. Transferring processes and
                  applications to more advanced Java-based frameworks makes your
                  applications easier to maintain and perform better. Let us
                  help streamline your business processes.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img src={javacms} alt="SEO FRIENDLY CONTENT WRITING" />
              </div>
              <div className="content_div">
                <BlackHeading>Java CMS Development</BlackHeading>
                <Greydescription>
                  We create tailored Content Management Systems (CMS) that
                  facilitate clients in content organizing, image processing,
                  and managing enterprise document systems as Java programmers.
                  We create the architecture so that the workflow of your CMS is
                  smooth, which improves productivity and overall user
                  experience.
                </Greydescription>
              </div>
            </div>

            <div className="sub_slide_div">
              <div className="img_div">
                <img
                  src={javaintegrat}
                  alt="CONVERSION RATE OPTIMIZATION (CRO)"
                />
              </div>
              <div className="content_div">
                <BlackHeading>Java Integration Services</BlackHeading>
                <Greydescription>
                  What your business needs is our primary concern. This is why
                  we implement Java Integration Services: The Enterprise
                  Application Integration (EAI) via J2EE technology is what we
                  promised to deliver to you. Our specialized staff will
                  accomplish the integration without disruption in the
                  workflows, resulting in the boosted performance of the
                  business.
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
