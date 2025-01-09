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

export const Section7 = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "The expense windows adapted sir. Wrong widen drawn.",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
        },
      ],
    },
    {
      id: 2,
      text: "Six curiosity day assurance bed necessary?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: " Blessing welcomed ladyship she met humoured sir breeding her. ",
        },
      ],
    },
    {
      id: 3,
      text: "Produce say the ten moments parties?",
      expanded: false,
      subcontent: [{ id: 1, text: "Subcontent for question 3 - part 1" }],
    },
    {
      id: 4,
      text: "Simple innate summer fat appear basket his desire joy?",
      expanded: false,
      subcontent: [{ id: 1, text: "Subcontent for question 4 - part 1" }],
    },
    {
      id: 5,
      text: "Outward clothes promise at gravity do excited?",
      expanded: false,
      subcontent: [{ id: 1, text: "Subcontent for question 5 - part 1" }],
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
            <BlackHeading>
              Do you have more
              <br /> questions?
            </BlackHeading>
          </div>

          <div style={{ textAlign: "center" }}>
            <Blackdescription>
              End-to-end payments and financial.
              <br /> management in a single solution. <br /> Meet the right
              platform to help
              <br />
              realize <br />
            </Blackdescription>
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
    padding: 30px 20px;

    .main_div {
      gap: 20px;
      display: flex;
      flex-direction: column;
      .sub_div_one {
        width: 100%;
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
