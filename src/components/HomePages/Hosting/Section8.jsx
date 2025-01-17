import React, { useState } from "react";
import styled from "styled-components";

import vectorani from "../../../assets/Images/vectorani.png";
import { Blackdescription, BlackHeading, Faqdescription, FaqHeading,  MainHeading } from "../../../Global/GlobalText";
import { PurpleBackground } from "../../../Global/GlobalButton";

export const Section8 = () => {
    const [questions, setQuestions] = useState([
        {
          id: 1,
          text: "1. What is managed server hosting? ",
          expanded: false,
          subcontent: [
            { id: 1, text: "Managed server hosting means we handle all the technical aspects of your server, including setup, maintenance, monitoring, and updates, so you can focus on your business." },
            
          ],
        },
        {
          id: 2,
          text: "2. Why should I choose VPS hosting over shared hosting? ",
          expanded: false,
          subcontent: [
            { id: 1, text: "VPS hosting provides dedicated resources, better performance, enhanced security, and scalability compared to shared hosting, making it ideal for growing businesses." },
            
          ],
        },
        {
          id: 3,
          text: "3. How does your 24/7 support work? ",
          expanded: false,
          subcontent: [
            { id: 1, text: "Our support team is available round-the-clock via chat, email, and phone to assist with any server-related issues or queries." },
           
          ],
        },
        {
          id: 4,
          text: "4. Can I migrate my existing website to your servers?",
          expanded: false,
          subcontent: [
            { id: 1, text: "Yes, our experts ensure a seamless migration process with zero downtime, preserving your data and configurations." },
           
          ],
        },
        {
          id: 5,
          text: "5. What security measures do you offer? ",
          expanded: false,
          subcontent: [
            { id: 1, text: "We provide daily backups, firewalls, malware scans, and proactive threat detection to ensure your data remains secure." },
          
          ],
        },

        {
          id: 6,
          text: "6. Are your hosting solutions scalable? ",
          expanded: false,
          subcontent: [
            { id: 1, text: "Absolutely! Our plans are designed to scale as your business grows, allowing you to upgrade resources easily." },
          
          ],
        },

      ]);

      const handleExpand = (id) => {
        setQuestions(
          questions.map((question) =>
            question.id === id
              ? { ...question, expanded: !question.expanded }
              : question
          )
        );
      };

  return (
    <Root>
      <div className="main_div">
        <div className="sub_div_one">
          <span>
            <MainHeading >Frequently asked questions about Phanom VPS Hosting.</MainHeading>
          </span>


          {questions.map((question) => (
            <div key={question.id} className="question-container">
              <div
                className="question-header"
                onClick={() => handleExpand(question.id)}
              >
                <FaqHeading>{question.text}</FaqHeading>
                <span
                  className={`plus-minus ${question.expanded ? "minus" : "plus"}`}
                >
                  {question.expanded ? "-" : "+"}
                </span>
              </div>
              {question.expanded && (
                <div className="question-content">
                  {question.subcontent.map((sub) => (
                    <Faqdescription key={sub.id}>
                      {sub.text}
                    </Faqdescription>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="sub_div_two">
          <div className="bg_img">
            <span className="circle_one"> </span>
            <span className="circle_two"></span>
            <span className="circle_three"></span>
          </div>

          <div style={{ textAlign: "center" }}>
            <BlackHeading>Do you have more </BlackHeading>
            <BlackHeading> questions?</BlackHeading>
          </div>

          <div style={{ textAlign: "center" }}>
            <Blackdescription>
              End-to-end payments and financial.
            </Blackdescription>
            <Blackdescription>
              management in a single solution.{" "}
            </Blackdescription>
            <Blackdescription>Meet the right platform to help</Blackdescription>
            <Blackdescription>realize</Blackdescription>
          </div>

          <div className="submit_btn">
            <PurpleBackground>Book an Appointment</PurpleBackground>
          </div>
        </div>
      </div>
    </Root>
  );
};
const Root = styled.section`
  padding: 50px 70px;
  .main_div {
    gap: 20px;
    display: flex;
    .sub_div_one {
      gap: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 60%;
      
      .question-container {
        margin-bottom: 10px;
        border: 1px solid #cfcfcf;
        border-radius: 5px;
        padding: 10px;
      }

      .question-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;
      }

      .plus-minus {
        font-size: 30px;
        color: #6c5fd4;
      }

      .minus {
        transform: rotate(0deg);
        color: #6c5fd4;
        font-size: 40px;
      }
    }
    .sub_div_two {
      width: 40%;
      box-shadow: 0px 4px 8px -2px rgba(9, 30, 66, 0.25),
        0px 0px 0px 1px rgba(9, 30, 66, 0.08);
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      .bg_img {
        background-image: url(${vectorani});
        background-size: 100% 100%;
        width: 100px;
        height: 85px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }

      .circle_one,
      .circle_two,
      .circle_three {
        background: #4798e1;
        border-radius: 50%;
        padding: 9px;
        margin-top: -10px;
        animation: scaleAnimation 1s ease-in infinite;
      }

      .circle_two {
        background: #9355e3;
        animation-delay: 0.2s;
      }

      .circle_three {
        background: #ce1be7;
        animation-delay: 0.4s;
      }

      @keyframes scaleAnimation {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.5);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding:  0 20px 30px;
    .main_div {
      flex-direction: column;
      .sub_div_one {
        width: 100%;
        span {
          text-align: center;
          margin-bottom: 20px;
        }

        .question-header {
          margin-bottom: 10px;
        }
      }
      .sub_div_two {
        width: 100%;
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 10px 20px;

    .main_div {
      gap: 20px;
      display: flex;
      flex-direction: column;
      .sub_div_one {
        width: 100%;
        span{
          text-align:center;
          margin-bottom: 20px;
        }
      }
      .sub_div_two {
        width: 100%;
        br {
          display: none;
        }
      }
    }
  }


`;


