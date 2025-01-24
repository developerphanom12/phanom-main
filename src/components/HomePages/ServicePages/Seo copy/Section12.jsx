import React, { useState } from "react";
import styled from "styled-components";
import {
  Blackdescription,
  BlackHeading,
  Faqdescription,
  FaqHeading,
  Heading,
} from "../../../../Global/GlobalText";
import { PurpleBackground } from "../../../../Global/GlobalButton";
import vectorani from "../../../../assets/Images/vectorani.png";

export const Section12 = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "1.How does your Java development company compare to other companies in the same industry?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: "Being among the best Java development companies, we pride ourselves on custom, robust, and scalable Java software solutions. With our core team of developers, we effectively integrate web and mobile applications at an enhanced speed, which leads to a successful project outcome. ",
        },
      ],
    },
    {
      id: 2,
      text: "2. What are the major services provided under your Java development services?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: "Our Java development services encompass custom Java application development, enterprise solutions, Java full stack development, mobile app development, and system integration. We extend these services to all manner of businesses and improve functionality and ease of use by integrating newer technologies at all levels. ",
        },
      ],
    },
    {
      id: 3,
      text: "3. What measures has your Java software development company put in place to ensure success on every single project undertaken?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: "We are a reputed Java software development company that works with an agile methodology. We leverage the latest technologies and combine them with best practices throughout the software development lifecycle in order to achieve the goals of the client’s business. We do project briefs, provide feedback, communicate on a regular basis, deliver on time, and ensure quality control on all projects to enhance our client’s satisfaction.",
        },
      ],
    },
    {
      id: 4,
      text: "4. What does Java full stack development include, and how can it help my company?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: "Front-end and back-end development using Java is called Java full stack development. Armed with the right skill set, a developer is able to build applications that are not only responsive, but rich in features. This brings value to businesses as it provides an effective solution where all parts of your web application perform well and work perfectly together.",
        },
      ],
    },
    {
      id: 5,
      text: "5.  Why Java application development services from your company?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: "Our experts at [insert company name] are dedicated to building powerful, safe, and growing applications that will serve the purpose of the client’s business. We have experience in several industries. Thus, we ensure timely delivery, high coding standards, and long-term support for successful outcomes.",
        },
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
            <Heading>Fequently Asked Questions</Heading>
          </span>

          {questions.map((question) => (
            <div key={question.id} className="question-container">
              <div
                className="question-header"
                onClick={() => handleExpand(question.id)}
              >
                <FaqHeading>{question.text}</FaqHeading>
                <span
                  className={`plus-minus ${
                    question.expanded ? "minus" : "plus"
                  }`}
                >
                  {question.expanded ? "-" : "+"}
                </span>
              </div>
              {question.expanded && (
                <div className="question-content">
                  {question.subcontent.map((sub) => (
                    <Faqdescription key={sub.id}>{sub.text}</Faqdescription>
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
            <BlackHeading>Do you want to ask  </BlackHeading>
            <BlackHeading> any more questions?</BlackHeading>
          </div>

          <div style={{ textAlign: "center" }}>
            <Blackdescription>
            All-in-one payments and financial 
            </Blackdescription>
            <Blackdescription>
            management in one solution. Find
            </Blackdescription>
            <Blackdescription>the right platform to enable vision.</Blackdescription>
      
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
  padding: 30px 100px;
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

      .submit_btn {
        margin-top: 40px;
      }

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
    padding: 30px 20px;
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
        span {
          text-align: center;
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
