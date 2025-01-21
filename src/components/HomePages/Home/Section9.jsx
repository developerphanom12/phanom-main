import React from "react";
import styled from "styled-components";
import {
  Blackdescription,
  BlackHeading,
  GradientHeading,
  GradientSecondHeading,
  Heading,
  MenuHeading,
  Subpurpledescription,
} from "../../../Global/GlobalText";

import blognew from "../../../assets/Images/blognew.png";

import chat from "../../../assets/Images/chat.png";

import eye from "../../../assets/Images/eye.png";

import cal from "../../../assets/Images/cal.png";

export const Section9 = () => {
  return (
    <Root>
      <div className="main_div">
        <span>
          <Heading>Our</Heading>
          <GradientHeading>Blog</GradientHeading>
          <Heading>and</Heading>
          <GradientSecondHeading>Articles</GradientSecondHeading>
        </span>

        <Blackdescription>
          Take a look at our Company’s Blog Series or read some professional
          gardening insights and news.
        </Blackdescription>

        <div className="blog_main_div">
          <div className="sub_blog_div">
            <img src={blognew} alt="blog" />
            <Subpurpledescription>Insight</Subpurpledescription>

            <BlackHeading> Future of IT Solutions </BlackHeading>

            <div className="icon_content">
              <img src={chat} alt="blog" />

              <MenuHeading>3</MenuHeading>

              <img src={eye} alt="blog" />

              <MenuHeading>400+</MenuHeading>

              <img src={cal} alt="blog" />

              <MenuHeading>1 month ago</MenuHeading>
            </div>

            <Blackdescription>
                      Technology is evolving at an unprecedented pace, shaping the future of businesses worldwide. From AI integration to cloud computing advancements, staying updated with the latest IT trends is crucial for success. 
            </Blackdescription>
          </div>

          <div className="sub_blog_div">
            <img src={blognew} alt="blog" />
            <Subpurpledescription>Insight</Subpurpledescription>

            <BlackHeading> Future of IT Solutions </BlackHeading>

            <div className="icon_content">
              <img src={chat} alt="blog" />

              <MenuHeading>3</MenuHeading>

              <img src={eye} alt="blog" />

              <MenuHeading>400+</MenuHeading>

              <img src={cal} alt="blog" />

              <MenuHeading>1 month ago</MenuHeading>
            </div>

            <Blackdescription>
                      Technology is evolving at an unprecedented pace, shaping the future of businesses worldwide. From AI integration to cloud computing advancements, staying updated with the latest IT trends is crucial for success. 
            </Blackdescription>
          </div>


          <div className="sub_blog_div">
            <img src={blognew} alt="blog" />
            <Subpurpledescription>Insight</Subpurpledescription>

            <BlackHeading> Future of IT Solutions </BlackHeading>

            <div className="icon_content">
              <img src={chat} alt="blog" />

              <MenuHeading>3</MenuHeading>

              <img src={eye} alt="blog" />

              <MenuHeading>400+</MenuHeading>

              <img src={cal} alt="blog" />

              <MenuHeading>1 month ago</MenuHeading>
            </div>

            <Blackdescription>
                      Technology is evolving at an unprecedented pace, shaping the future of businesses worldwide. From AI integration to cloud computing advancements, staying updated with the latest IT trends is crucial for success. 
            </Blackdescription>
          </div>

        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 20px 100px 50px;
  .main_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    .blog_main_div {
      display: flex;
      gap: 30px;
      margin-top: 10px;
      .sub_blog_div {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 14px;

        .icon_content {
          display: flex;
          gap: 6px;
          align-items: center;
          img {
            width: 24px;

            object-fit: contain;
            aspect-ratio: 3 / 2;
          }
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 20px;
  .main_div{ 
    gap:20px;
    p{
      text-align: center;
    }
  .blog_main_div {
   
    flex-direction: column;
    align-items: center;
    margin: 0;
    .sub_blog_div{
      width: 90%;
     p{
          text-align: left;
     }
    }
}
  }

  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 20px;
    .main_div{ 
    gap:20px;
    p{
      text-align: center;
    }
    .blog_main_div {
   
   flex-wrap: wrap;
   .sub_blog_div{
    flex:unset;
    width: 47%;
    p{
      text-align: left;
    }
   }
  }

  }
}
`;
