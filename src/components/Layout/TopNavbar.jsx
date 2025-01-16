import React, { useState } from "react";
import styled from "styled-components";
import phanomsLogo from "../../assets/Images/phanomsLogo.png";
import {
  MenuHeading,
  MenuMainHeading,
  MenuSubHeading,
} from "../../Global/GlobalText";
import { MdKeyboardArrowDown } from "react-icons/md";
import headerbg from "../../assets/Images/headerbg.png";
import { PurpleSecondBackground } from "../../Global/GlobalButton";

export const TopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Root>
      <div className="navbar">
        <div className="logo">
          <img src={phanomsLogo} alt="Phanom Professionals Logo" />
        </div>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <div className="menu-item">
            <MenuHeading>
              {" "}
              Service <MdKeyboardArrowDown />
            </MenuHeading>
          </div>

          <div className="main_icon_content">
            <div className="sub_icon_menu">
              <div className="sub_icon_content">
                <MenuMainHeading>Digital Marketing</MenuMainHeading>

                <a href="#">
                  <MenuSubHeading>
                    SEO (Search Engine Optimisation)
                  </MenuSubHeading>
                </a>

                <a href="#">
                  <MenuSubHeading>Social Media Marketing</MenuSubHeading>
                </a>

                <a href="#">
                  <MenuSubHeading>Pay Per Click (PPC)</MenuSubHeading>
                </a>

                <a href="#">
                  <MenuSubHeading>Youtube Marketing</MenuSubHeading>
                </a>
              </div>

              <div className="sub_icon_content">
                <MenuMainHeading>Design & Development</MenuMainHeading>

                <a href="#">
                  <MenuSubHeading>Web Development</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Shopify</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Java</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Magento</MenuSubHeading>
                </a>

                <a href="#">
                  <MenuSubHeading>WordPress</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Php</MenuSubHeading>
                </a>
              </div>

              <div className="sub_icon_content">
                <MenuMainHeading>Animations & Graphics</MenuMainHeading>

                <a href="#">
                  <MenuSubHeading>Video Marketing</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Branding</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Packeging & Labeling</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Graphic Design</MenuSubHeading>
                </a>

                <a href="#">
                  <MenuSubHeading>Web Design</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Rotoscoping</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Aninmation</MenuSubHeading>
                </a>
              </div>

              <div className="sub_icon_content">
                <MenuMainHeading>E- commerce solution</MenuMainHeading>

                <a href="#">
                  <MenuSubHeading>E- Commerce Marketing</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Amazon Marketing</MenuSubHeading>
                </a>
              </div>
            </div>
          </div>

          <div className="menu-item">
            <MenuHeading>
              Hire Indian Talent <MdKeyboardArrowDown />
            </MenuHeading>
          </div>

          <div className="main_icon_content">
            <div className="sub_icon_menu">
              <div className="sub_icon_content">
                <MenuMainHeading>Hire Digital Marketing</MenuMainHeading>

                <a href="#">
                  <MenuSubHeading>Hire PPC Expert</MenuSubHeading>
                </a>

                <a href="#">
                  <MenuSubHeading>Hire SEO Expert </MenuSubHeading>
                </a>
              </div>

              <div className="sub_icon_content">
                <MenuMainHeading>Hire Designer</MenuMainHeading>

                <a href="#">
                  <MenuSubHeading>Hire Graphic Designer</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Hire UI|UX Designer</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Hire Web Designer</MenuSubHeading>
                </a>
              </div>

              <div className="sub_icon_content">
                <MenuMainHeading>Hire Developer</MenuMainHeading>

                <a href="#">
                  <MenuSubHeading>Hire ReactJs Developer</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Hire NodeJs Developer</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Hire Laravel Developer</MenuSubHeading>
                </a>

                <a href="#">
                  <MenuSubHeading>Hire Shopify Developer</MenuSubHeading>
                </a>

                <a href="#">
                  <MenuSubHeading>Hire PHP Developer</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Hire WordPress Developer</MenuSubHeading>
                </a>
              </div>

              <div className="sub_icon_content develper_div">
                <a href="#">
                  <MenuSubHeading>Hire React Native Developer</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Hire Android Developer</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Hire IOS Developer</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Hire Software Developer</MenuSubHeading>
                </a>
                <a href="#">
                  <MenuSubHeading>Hire Mobile App Developer</MenuSubHeading>
                </a>
              </div>
            </div>
          </div>

          <div className="menu-item">
            <MenuHeading> Our Portfolio</MenuHeading>
          </div>

          <PurpleSecondBackground>Book an Appointment</PurpleSecondBackground>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    position: relative;
    background-image: url(${headerbg});
    background-size: 100%;
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 20px;

    .menu-item {
      cursor: pointer;
      font-size: 1rem;
      color: black;
      transition: color 0.3s ease;
      span {
        display: flex;
        align-items: center;
        svg {
          width: 20px;
        }
      }
    }

    .menu-item:hover + .main_icon_content,
    .main_icon_content:hover {
      display: block;
    }

    .main_icon_content {
      width: 60%;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 2px 7px 15px 2px rgba(0, 0, 0, 0.13),
        2px 1px 4px 2px rgba(0, 0, 0, 0.11);
      display: none;
      position: absolute;
      top: 50px;
      z-index: 111111;
      background-color: #ffffff;
      right: 20%;
      .sub_icon_menu {
        display: flex;

        .sub_icon_content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          a {
            text-decoration: none;
          }
        }
        .develper_div {
          display: flex;
          justify-content: center;
        }
      }
    }

    button {
      margin-left: 20px;
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }

  .hamburger span {
    width: 25px;
    height: 3px;
    background: black;
    transition: transform 0.3s ease;
  }

  @media (max-width: 567px) {

    .navbar {
      padding: 10px 20px;
      background-image: unset;
      .logo {
        display: flex;
        align-items: center;
        img {
          width: 100px;
        }
      }

      .menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 58px;
        right: 0px;
        background: white;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        padding: 10px 10px 20px;
        border: 1px solid #d4dbe0;
        width: 100%;
        z-index: 1111;
       .main_icon_content {
          width: 90%;
          right: 5%;
          .sub_icon_menu{
            gap:15px;
            flex-wrap:wrap;
            justify-content:center;
            .sub_icon_content{
              width: 47%;
              flex:unset;
            }
          }
        }
      }

      .menu.open {
        display: flex;
      }

      .menu-item {
        margin: 10px 0;
      }

      .hamburger {
        display: flex;
      }
    }
    
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    .navbar {
      padding: 15px 20px;
      background-image: unset;
      .logo {
        display: flex;
        align-items: center;
        img {
          width: 100px;
        }
      }
      .menu {
        .menu-item {
          span {
            font-size: 14px;
          }
        }

        button {
          margin-left: 0px;
          font-size: 15px;
        }

        .main_icon_content {
          width: 90%;
          right: 5%;

          .sub_icon_menu .sub_icon_content {
            span {
              font-size: 18px;
            }
            a {
              span {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
`;
