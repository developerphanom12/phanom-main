import React, { useState } from "react";
import styled from "styled-components";
import {
  Blackdescription,
  BlackHeading,

  FaqHeading,
  Heading,
} from "../../../../Global/GlobalText";
import { PurpleBackground } from "../../../../Global/GlobalButton";
import vectorani from "../../../../assets/Images/vectorani.png";

export const Section12 = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "1. What YouTube Marketing Is and How It Works in Business?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: `YouTube marketing is a technique for advertising your brand, products, or services using video content. This type of engagement allows you to:
          
              <ul>
              <li>Capture brand recognition and brand presence.</li>
              <li>Drive relevant audience to the business site.</li>
              <li>Strengthen relationships with consumers.</li>
            </ul>

            Why wait? Start today and see how much YouTube can grow your business!
          `,
        },
      ],
    },
    {
      id: 2,
      text: "2.How Can You Increase The Optimization Level Of My YouTube Videos So I Rank Higher In Searches??",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: `Our focus is on video optimization for enhanced visibility on YouTube that is done by:

           <ul>
              <li>Utilizing relevant ranking phrases in the titles, tags, and describers.</li>
              <li>Making eye-catching custom thumbnails.</li>
              <li>Writing better engaging scripts for high watch time and retention.</li>
              <li>Checking performance metrics for further improvement of the strategy.</li>
            </ul>


            We will get you on the top of YouTube search—contact us today!          
          `,
        },
      ],
    },
    {
      id: 3,
      text: "3. What Strategies Will I Follow To Get A Higher Number Of Subscribers And Engagement On My Videos?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: `Our YouTube marketing strategies aims for audience growth by:
             <ul>
              <li>Launching ad campaigns targeting non-subscribers.</li>
              <li>Promoting CTAs to increase likes, shares, or comments</li>
              <li>Producing consistent high-quality video content.</li>
            </ul>

            If you’re looking to boost your audience and engagement, let’s start building your audience today!
          
          `,
        },
      ],
    },
    {
      id: 4,
      text: "4. Is YouTube a Good Marketing Tool for My Business?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: `Of course! YouTube is good for all types of businesses and these include:
          <ul>
           <li>Businesses around you that want more customers in your area.</li>
           <li>Ecommerce shops that want to display their products and make sales.</li>
           <li>Corporations increasing their presence and reputation</li>
         </ul>

         Whatever the industry, we'll formulate an appropriate plan for your success. Let's discuss!
       
       `,
        },
      ],
    },
    {
      id: 5,
      text: "5. When Should I Expect Results with YouTube Marketing?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: `Depending on the goals, it can differ, but most clients notice changes like increase in video views, subscribers, and engagements within a few weeks. We focus on providing growth that is stable and measurable.`,
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
                    <div
                      key={sub.id}
                      dangerouslySetInnerHTML={{ __html: sub.text }}
                    />
                    // <Faqdescription key={sub.id}>{sub.text}</Faqdescription>
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
            <Blackdescription>
              the right platform to enable vision.
            </Blackdescription>
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

  a {
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
