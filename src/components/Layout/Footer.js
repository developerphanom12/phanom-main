import React from "react";
import styled from "styled-components";
import footernew from "../../assets/Images/footernew.png";
import { secGradient } from "../../GlobalStyle";
import {
  FooterLightMenu,
  FooterMenu,
  MenuMainHeading,
  WhiteLightHeading,
  WhiteMainDescription,
  WhiteNumberHeading,
} from "../../Global/GlobalText";
import phanomsLogo from "../../assets/Images/phanomsLogo.png";
import noicon from "../../assets/Images/noicon.png";
import { Whitebgebtn } from "../../Global/GlobalButton";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <Root>
      {/* <div className="footer_base">
          <div className="logo">
            <h4>
              <img src={newLogo} alt="Img of phanom" />
            </h4>{" "}
            <p>Phanom Techno Private Ltd.2024</p>
          </div>
          <div className="social_media">
            <ul>
              <li>
                {" "}
                <a
                  href="https://www.facebook.com/phanom.professionals/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/phanomprofessionalsofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/phanom-professionals/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin />
                </a>
                <a
                  href="https://in.pinterest.com/phanom_professionals/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterest />
                </a>
                <a
                  href="https://mobile.twitter.com/phanompro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>
            <div className="foot">
            <a href="/blogs">Our Blogs</a>
            <a href="/case-study">Case Study</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/refund-policy">Refund Policy</a>
              <a href="/term-condition">Terms and Conditions
              </a>
            </div>
          </div>
        </div> */}

      <div className="main_div">
        <div className="head_div">
          <WhiteNumberHeading>
            Let's make something <br /> great together.
          </WhiteNumberHeading>
          <WhiteLightHeading>
            {" "}
            Let us know what challenges you are <br /> trying to solve so we can
            help.
          </WhiteLightHeading>

          <div className="join_btn">
            <Whitebgebtn className="join_icon">
              Join Us <FaArrowRightLong />
            </Whitebgebtn>
          </div>

          <div className="menu_main_div">
            <div class="sub_menu_div img_order">
              <img src={phanomsLogo} alt="" />
            </div>

            <div class="sub_menu_div">
              <a href="/home">
                <FooterMenu>Home</FooterMenu>
              </a>

              <a href="#">
                <FooterMenu>Services</FooterMenu>
              </a>

              <a href="#">
                <FooterMenu>Hire Indian Talent</FooterMenu>
              </a>

              <a href="#">
                <FooterMenu>Our Portfolio</FooterMenu>
              </a>

              <a href="#">
                <FooterMenu>Book an Appointment</FooterMenu>
              </a>
            </div>

            <div class="sub_menu_div">
              <a
                href="https://www.facebook.com/phanom.professionals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterMenu>Facebook</FooterMenu>
              </a>

              <a
                href="https://www.instagram.com/phanomprofessionalsofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterMenu>Instagram</FooterMenu>
              </a>

              <a
                href="https://www.linkedin.com/company/phanom-professionals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterMenu>Linkedin</FooterMenu>
              </a>

              <a
                href="https://in.pinterest.com/phanom_professionals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterMenu>Pinterest</FooterMenu>
              </a>

              <a
                href="https://mobile.twitter.com/phanompro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FooterMenu>Twitter</FooterMenu>
              </a>
            </div>

            <div class="sub_menu_div">
              <FooterMenu>Address:</FooterMenu>

              <FooterMenu>
                E-193, Third Floor, TDS Tower, Phase 8B, Industrial Area, Sector
                74, Sahibzada Ajit Singh Nagar, Punjab 160055
              </FooterMenu>
            </div>
          </div>
        </div>

        <div className="policy_div">
          <div className="policy_div_one">
            <div className="policy_menu">
              <a href="#">
                <FooterLightMenu>Terms of Use</FooterLightMenu>
              </a>

              <a href="#">
                <FooterLightMenu>Privacy Policy</FooterLightMenu>
              </a>

              <a href="#">
                <FooterLightMenu>About Cookies</FooterLightMenu>
              </a>
            </div>

            <FooterLightMenu>
              Copyright © 2025 Phanom Techno Private Ltd. All rights reserved.
            </FooterLightMenu>
          </div>

          <div className="no_div">
            <img src={noicon} alt="Contact Icon" />
            <div className="sub_no_div">
              <MenuMainHeading style={{ fontSize: "21px", fontWeight: 700 }}>
                Call to ask any question
              </MenuMainHeading>
              <WhiteMainDescription
                style={{ fontSize: "21px", fontWeight: 700 }}
              >
                +91 (628) 007-2655
              </WhiteMainDescription>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

export default Footer;

const Root = styled.section`
  .main_div {
    background-image: url(${footernew});
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;

    .head_div {
      padding: 100px 100px 10px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 30px;

      .join_btn {
        display: flex;
        justify-content: center;
        .join_icon {
          display: flex;
          gap: 15px;
          align-items: center;
        }
      }

      .menu_main_div {
        border-top: 1px solid #ffffff;
        padding: 70px 0;
        margin-top: 80px;
        display: flex;
        gap: 30px;

        .sub_menu_div {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
          text-align: left;
          img {
            width: 270px;
            object-fit: contain;
          }

          a {
            text-decoration: none;
          }
        }
      }
    }

    .policy_div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 100px 50px;
      .policy_div_one {
        display: flex;
        gap: 30px;
        flex-direction: column;

        .policy_menu {
          display: flex;
          gap: 30px;
          a {
            text-decoration: none;
          }
        }
      }
      .no_div {
        display: flex;
        gap: 10px;
        align-items: center;
        .sub_no_div {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  /* .container-fluid {
    margin-bottom: 30px;
    h3 {
      font-weight: 300;
      width: 100%;
      text-align: center;
      margin: 20px 0px;
    }
    .col-lg-8.inputy_btn {
      display: flex;
      margin: 10px 30px;
      width: fit-content;
    }
    .col-lg-8 {
      text-align: center;
    }
    input {
      padding: 12px;
      background-color: ${secGradient};
      margin: 0;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border: 1px solid #13c9df;
      width: 34vw;
      outline: none;
      color: #000;
    }
    button {
      padding: 12px 20px;
      border: 1px solid #13c9df;
      background-color: #13c9df;
      color: #fff;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    input::placeholder {
      background-color: ${secGradient};
      color: #6e6e6e;
      padding: 10px 15px;
      line-height: 1.5;
    }
  } */
  /* .footer_div {
    display: flex;
    justify-content: space-evenly;
    .part1 {
      display: flex;
      flex-direction: column;
      padding: 0px;
      @media (max-width: 567px) {
        padding: 0px 4px;
      }
      h6 {
        padding: 0px 0px 20px;
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
          padding: 10px 0px;
          color: #74767e;
          font-size: 16px;
          @media (max-width: 567px) {
            font-size: 10px;
          }
        }
      }
    }
  } */
  /* .footer_base {
    display: flex;
    align-items: center;
    justify-content: space-between;
        padding: 20px 20px 0px;
    @media (max-width: 576px) {
      flex-direction: column;
      padding: 0px;
    }
    .logo {
      display: flex;
      align-items: center;
      img {
        width: 170px;
      }
      @media (max-width: 576px) {
        width: 100%;
        justify-content: space-between;
         flex-direction: column;
      }
      h4 {
        font-weight: 600;
        color: #74767e;
        margin: 0px;
      }
      p {
        display: flex;
        align-items: end;
        color: #74767e;
        margin: 0px 0px 0px 24px;
        font-size: 14px;
      }
    }

    .social_media {
      display: flex;
      color: #74767e;
      align-items: center;
      @media (max-width: 576px) {
        width: 100%;
        justify-content: space-between;
        margin-top: 10px;
         flex-direction: column;
      }

      ul {
        list-style: none;
        padding-right: 20px;
        margin: 0;
        a {
          color: #74767e;
        }
        @media (max-width: 576px) {
          padding: 0px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
        margin: 10px;

        @media (max-width: 576px) {
          margin: 5px;
          width: 17px;
          height: 17px;
        }
      }
      .foot {
        display: flex;
        gap: 12px;
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
          svg {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  } */

  @media (max-width: 576px) {
    .main_div {
      .head_div {
        padding: 50px 50px 20px;
        br {
          display: none;
        }

        .menu_main_div {
          flex-direction: column;
          margin: 0;
          padding: 30px 0;
          .img_order {
            display: flex;
            order: 4;
          }
        }
      }

      .policy_div {
        padding: 0 20px 40px;
        flex-direction: column;
        gap: 30px;

        .no_div .sub_no_div {
          gap: 10px;
        }

        .policy_div_one .policy_menu {
          flex-direction: column;
        }
      }
    }
  }

  @media (min-width: 576px) and (max-width: 1024px) {
    .main_div {
      .head_div {
        padding: 50px 20px 0;
        br {
          display: none;
        }
        .menu_main_div {
          margin-top: 0;
          padding: 30px 0;
          gap: 15px;
          .sub_menu_div img {
            width: unset;
            object-fit: contain;
          }
        }
      }

      .policy_div {
        padding: 0 20px 50px;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        .policy_div_one {
          width: 100%;
          gap: 10px;
          text-align: center;
          .policy_menu {
            justify-content: center;
          }
        }
      }
    }
  }
`;
