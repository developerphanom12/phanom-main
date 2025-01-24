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
          text: "1. What exactly is Shopify Website Development and how Will it Help my Business?",
          expanded: false,
          subcontent: [
            { id: 1, text: "The first step in developing the Shopify website is to prepare a store that caters to the specific requirements of the client. This consists of establishing the store, installing the necessary functionalities like payment gateways, and putting the store for launch. A Shopify development agency does all this while managing the website’s speed, security concerns, and veracity ensuring that your online business thrives. " },
            
          ],
        },
        {
          id: 2,
          text: "2. Why hire a Shopify website design agency over others?",
          expanded: false,
          subcontent: [
            { id: 1, text: "The primary purpose of a Shopify design agency is the creation of impressionable, responsive, and engaging Shopify stores that ensure better brand identity and user experience. They achieve this by applying progressive designs on the site which ensures that the site gets maximum attention and provides a serviceable purpose. This leads to increase in sales and conversion rates thus attaining business goals. " },
            
          ],
        },
        {
          id: 3,
          text: "3. What are the advantages of using Shopify website design services?",
          expanded: false,
          subcontent: [
            { id: 1, text: "Shopify website design services are specialized in custom design and development of solutions to ensure that your brand is highly developed and is competitive in the market. They include layout identification, branding of the site, and even optimization of its mobile version to ensure that shoppers always enjoy using the site as well as help the store get more clients." },
           
          ],
        },
        {
          id: 4,
          text: "4. In what ways do services for Shopify development improve my shop online?",
          expanded: false,
          subcontent: [
            { id: 1, text: "Shopify development services entail anything from custom programming as well as application integration and advanced features to increase the efficacy of your online Shopify store. They make sure that your site is protected, has room for expansion, and works well, which allows your clients to shop without any problems while helping your shop perform better." },
           
          ],
        },
        {
          id: 5,
          text: "5. What is the benefit of working with a Shopify development firm for my online shop?",
          expanded: false,
          subcontent: [
            { id: 1, text: "Working with a Shopify development firm gives you an advantage while building and optimizing your Shopify store because of their expertise and skills. From design creation to theme customization to integration, they can provide everything that your shop needs to succeed and outperform the competition." },
          
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


