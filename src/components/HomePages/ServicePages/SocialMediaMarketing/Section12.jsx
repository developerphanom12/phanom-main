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
      text: "1.  Why Should Your Business Use The Social Media Marketing Services That We Offer? ",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: "With our custom-made social media approaches, your business remains relevant as we can offer your brand the needed online visibility due to user engagement, website traffic as well as an increase in your audience size. We ensure your brand remains relevant by offering tailored campaigns and leveraging platforms so that your business captures prospects and greatly expands its follower base. ",
        },
      ],
    },
    {
      id: 2,
      text: "2.How Can Social Media Marketing Enhance Business Growth?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: " If you want to grow your business through marketing, Social Media is the perfect instrument. Data-backed campaigns and correct content can lead to a lot of organic traffic, brand visibility and engagement. Social media helps you create a network so that when you touch up your brand recognition and loyalty, sales and revenue improves dramatically. ",
        },
      ],
    },
    {
      id: 3,
      text: "3. Are the Results of Social Media Marketing Instant, Or Do They Take Time?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: "Yes, the results of social media marketing vary. However, growth does take time, which isn’t a bad thing. What would be considered ideal is with accurate social media strategy and engagements people would see a steady rise in number of followers, interaction rates and website traffic. To maximize brand visibility, we search up short-term results and results to ensure long term success.",
        },
      ],
    },
    {
      id: 4,
      text: "4.In what way do our social media strategies differ from those of other agencies?",
      expanded: false,
      subcontent: [
        {
          id: 1,
          text: "Unlike our competitors, we do not only create content for your social profiles. We strategize content around your company’s goals by employing personalized campaigns that best fits the brand’s voice. This multi-pronged strategy includes specific targeting, the use of eye-catching ads, and tracking of user interactions. Such an approach makes your brand’s social media profile not just present but active and geared to sales activity, as opposed to the basic approaches that others may use.",
        },
      ],
    },
    {
      id: 5,
      text: "5. Is social media marketing for big businesses only?",
      expanded: false,
      subcontent: [{ id: 1, text: "Not at all! In fact, social media marketing is great for every business, and this includes yours. Our company works with many small and new businesses by devising cheap but robust marketing plans that allow you to compete with well-established brands. With the right social media strategy, small businesses can become more popular than larger, more established companies and reach out to more people more quickly." }],
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
