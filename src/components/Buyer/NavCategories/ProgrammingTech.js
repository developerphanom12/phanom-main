import React from "react";
import styled from "styled-components";

export default function ProgrammingTech() {
  return (
    <Root>
      <div className="footer_div">
        <div className="part1">
          <h6>Website Development</h6>
          <ul>
            <li>Business Websites</li>
            <li>E-Commerce Development</li>
            <li>Landing Pages</li>
            <li>Dropshipping Websites</li>
            <li>Build a Complete Website</li>
          </ul>
        </div>
        <div className="part1">
          <h6>AI Development</h6>
          <ul>
            <li>AI Chatbot</li>
            <li>AI Applications</li>
            <li>AI Integrations</li>
            <li>AI Agents</li>
            <li>AI Fine-Tuning</li>
            <li>Custom GPT AppsNEW</li>
          </ul>
        </div>
        <div className="part1">
          <h6>Mobile App Development</h6>
          <ul>
            <li>Cross-platform Development</li>
            <li>Android App Development</li>
            <li>IOS App Development</li>
            <li>Website to App</li>
            <li>Mobile App Maintenance</li>
          </ul>
        </div>
        <div className="part1">
          <h6> Software Development</h6>
          <ul>
            <li>Web Applications</li>
            <li>Desktop Applications</li>
            <li>APIs & Integrations</li>
            <li>Scripting</li>
            <li>Browser Extensions</li>
            <li>QA & Review</li>
            <li>User Testing</li>
          </ul>
        </div>

        <div className="part1">
          <h6>Website Platforms</h6>
          <ul>
            <li>WordPress</li>
            <li>Shopify</li>
            <li>Wix</li>
            <li>Custom Websites</li>
            <li>GoDaddy</li>
          </ul>
        </div>

        <div className="part1">
          <h6>Chatbot Development</h6>
          <ul>
            <li>Discord</li>
            <li>Telegram</li>
            <li>Botpress</li>
            <li>TikTok</li>
            <li>Facebook Messenger</li>
          </ul>
        </div>

        <div className="part1">
          <h6>Wearable App Development</h6>
          <ul>
            <li>Smartwatch Development</li>
            <li>VR Headset Development</li>
          </ul>
        </div>


        
        <div className="part1">
          <h6>Blockchain & Cryptocurrency</h6>
          <ul>
            <li>Decentralized Apps</li>
            <li>Cryptocurrencies & Tokens</li>

            <li>Blockchain Protocol DevelopmentNEW</li>
            <li>Chain AnalysisNEW</li>

            <li>Exchange Platforms</li>
            <li>E-wallet Development</li>

            <li>Smart Contracts</li>
          </ul>
        </div>

        <div className="part1">
          <h6>Website Maintenance</h6>
          <ul>
            <li>Website Customization</li>
            <li>Bug Fixes</li>

            <li>Backup & Migration</li>
            <li>Speed Optimization</li>


          </ul>
        </div>

        <div className="part1">
          <h6>Game Development</h6>
          <ul>
            <li>Gameplay Experience & FeedbackNEW</li>
            <li>PC Games</li>
            <li>Mobile Games</li>
            <li>Console Games</li>
            <li>VR Games</li>
          </ul>
        </div>

  

        <div className="part1">
          <h6>Support & Cybersecurity</h6>
          <ul>
            <li>Support & IT</li>
            <li>Cloud Computing</li>
            <li>DevOps EngineeringNEW</li>
            <li>Cybersecurity</li>
            <li>Convert Files</li>
          </ul>
        </div>

        
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 20px;

  @media (max-width: 567px) {
    padding: 20px 10px;
  }
  .footer_div {
    display: flex;
    flex-wrap: wrap;
    .part1 {
      display: flex;
      flex-direction: column;
      padding: 0px 7px;
      width: 14%;
      @media (max-width: 567px) {
        padding: 5px;
      }
      h6 {
        padding: 0px 0px 10px;
        color: #404145;
        margin: 0;
        font-weight: 700;
        @media (max-width: 567px) {
          font-size: 12px;
        }
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          padding: 5px 0px;
          color: #74767e;
          font-size: 13px;
          @media (max-width: 567px) {
            font-size: 12px;
          }
        }
      }
    }
  }
  .footer_base {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid lightgray;
    padding: 20px 20px 0px;
    @media (max-width: 576px) {
      flex-direction: column;
    }
    .logoo {
      display: flex;
      h4 {
        font-weight: 600;
        color: #74767e;
      }
      p {
        display: flex;
        align-items: center;
        color: #74767e;
        margin: 0px 0px 0px 24px;
        font-size: 14px;
      }
    }
    .social_media {
      display: flex;
      color: #74767e;
      align-items: center;

      ul {
        list-style: none;
        padding-right: 20px;
        margin: 0;
        @media (max-width: 576px) {
          padding: 0px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
        margin: 10px;
      }
      button {
        border: none;
        background-color: white;
        font-size: 15px;
        color: #74767e;
        font-weight: 600;
        svg {
          width: 16px;
          height: 16px;
          margin: 2px 2px 3px 2px;
        }
      }
      .human_icon {
        border: 1px solid #74767e;
        border-radius: 50px;
        margin-left: 10px;
      }
    }
  }
`;