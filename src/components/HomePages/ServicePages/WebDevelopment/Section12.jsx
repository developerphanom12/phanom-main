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
          text: "1. What sort of web development services are available, and in what way can they assist me?",
          expanded: false,
          subcontent: [
            { id: 1, text: " These services entail designing and coding of the website, its upkeep, and improving its SEO. This maximizes your online presence and user experience while also increasing the traffic on your sight, which should help your business grow and succeed. " },
            
          ],
        },
        {
          id: 2,
          text: "2. What distinguishes your website development services from those of other companies?",
          expanded: false,
          subcontent: [
            { id: 1, text: "We have custom solutions to fulfill the unique bargains of your business. We fuse creativity with the latest technologies and the best SEO practices to deliver what every top website development company should - high ROI engaging websites" },
            
          ],
        },
        {
          id: 3,
          text: "3. How can a certain web development company be a good fit for my project?",
          expanded: false,
          subcontent: [
            { id: 1, text: "Pick a web development company that is reliable and has a track record of building websites that follow your project requirements along with your business objectives. This company should also provide custom solutions and never ending aid to guarantee the optimal efficiency of your website." },
           
          ],
        },
        {
          id: 4,
          text: "4. How do your website development services help boost search engine optimization?",
          expanded: false,
          subcontent: [
            { id: 1, text: "SEO is integrated into your website development services to ensure that your site is SEO effective right from start. Our services include keyword optimization, faster loading page speeds, mobile-friendly design, search-friendly content generation and more to increase your ranking and attract organic traffic." },
           
          ],
        },
        {
          id: 5,
          text: "5. What makes you stronger than the other website development companies’, India-based?",
          expanded: false,
          subcontent: [
            { id: 1, text: "Website development companies in India offer value-based services which tend to be on the lower side of the scale. The development firms in India have to be cheaper though they are believed to be innovative and very efficient in developing websites suitable for your business." },
          
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
            <BlackHeading>Do you want to ask</BlackHeading>
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


