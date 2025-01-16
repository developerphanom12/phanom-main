import React, { useState } from "react";
import styled from "styled-components";
import phanomsLogo from "../../assets/Images/phanomsLogo.png";
import { PurpleSecondBackground } from "../../Global/GlobalButton";
import { MenuHeading } from "../../Global/GlobalText";
import { MdKeyboardArrowDown } from "react-icons/md";
import headerbg from "../../assets/Images/headerbg.png";

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
          <div className="menu-item">
            {" "}
            <MenuHeading>
              {" "}
              Hire Indian Talent <MdKeyboardArrowDown />
            </MenuHeading>
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

  .logo img {
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

    button {
      margin-left: 20px;
    }
  }

  .menu-item:hover {
    color: #6a28f5;
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
      border:1px solid #D4DBE0;
      width: 100%;
      z-index: 1111;
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

  @media (min-width: 567px) and (max-width: 1024px){
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
        
        .menu-item{
          span{
            font-size: 14px;
          }
        }
       
        button{
              margin-left: 0px;
              font-size:15px;
        }
      }
    }

  }
`;
