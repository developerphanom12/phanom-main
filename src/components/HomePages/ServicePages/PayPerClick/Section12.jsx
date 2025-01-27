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
          text: "1. What is PPC Advertising and How Does it Work? ",
          expanded: false,
          subcontent: [
            { id: 1, text: "Pay Per Click or PPC advertising operates on a model whereby the marketer pays every time an individual clicks on his or her advertisement. This form of advertising increases exposure by showing your advertisement in the search results and other sites which send relevant traffic to your page. " },
            
          ],
        },
        {
          id: 2,
          text: "2. How Can PPC Increase My Online Visibility?",
          expanded: false,
          subcontent: [
            { id: 1, text: " PPC enhances your online presence by marketing your ads to those already looking for your services or products which translates to having more traffic, engagement, and sales. " },
            
          ],
        },
        {
          id: 3,
          text: "3. How to Choose Appropriate Keywords for PPC?",
          expanded: false,
          subcontent: [
            { id: 1, text: "We do keyword research aimed at capturing low competitive, high converting keywords. Your ads’ relevance to keywords guarantees that it achieves maximum audience and effectiveness. " },
           
          ],
        },
        {
          id: 4,
          text: "4.  What Are the Key Metrics to Monitor For In PPC Campaigns?",
          expanded: false,
          subcontent: [
            { id: 1, text: "Some of the key metrics that we measure include Click Through Rate (CTR), Cost Per Click (CPC), Conversion Rate, and Return of Ad Spend (ROAS) which help us to measure and improve campaigns." },
           
          ],
        },
        {
          id: 5,
          text: "5. What is the Difference between PPC and SEO?",
          expanded: false,
          subcontent: [
            { id: 1, text: "PPC enables marketers to achieve results instantaneously through paid advertisements whereas SEO steadily builds organic growth over time. These two strategies in marketing are meant to work together for increased visibility and traffic." },
          
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
            <BlackHeading>Do you want to ask </BlackHeading>
            <BlackHeading> any more questions?</BlackHeading>
          </div>

          <div style={{ textAlign: "center" }}>
            <Blackdescription>
            All-in-one payments and financial
            </Blackdescription>
            <Blackdescription>
            management in one solution. Find 
            </Blackdescription>
            <Blackdescription>the right platform to enable vision</Blackdescription>
          </div>

          <a href="#form" className="submit_btn">
            <PurpleBackground>Book an Appointment</PurpleBackground>
          </a>

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
      .submit_btn{
      margin-top:40px;
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

    a{
  text-decoration: none;
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


