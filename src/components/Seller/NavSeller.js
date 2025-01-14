import { secGradient } from "../../GlobalStyle";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from '../../assets/Images/crop.png'
import logoImg from '../../assets/Images/Boyspic.png'
import { IoNotificationsOffOutline, IoVolumeHigh } from "react-icons/io5";
import { CiHeart, CiMail } from "react-icons/ci";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { IoIosNotificationsOutline, IoMdSettings } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastSuccess } from "../common/ToastMessage";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ContainerFluid from "react-bootstrap/Container";
import { IoIosArrowDown } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import { MenuItem } from "@mui/material";


const NavSeller = () => {
    const userDetails = useSelector((state) => state?.user );
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDropdown1 = () => {
      setIsOpen1(!isOpen1);
      setIsOpen2(false);
    };

    const toggleDropdown2 = () => {
      setIsOpen2(!isOpen2);
      setIsOpen1(false);
    };

    const closeDropdowns = () => {
      setIsOpen1(false);
      setIsOpen2(false);
    };
    const [showToggles, setShowToggles] = useState({
      showMessage: false,
      showNotification: false,
      showBusiness: false,
      showGrowth: false,
      showAnalytics: false,
    });
    const [profileshow, setShow] = useState(false);
    function toggleShowName() {
      setShow((prevState) => !prevState);
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // LogoutFunctionallity


    //

    const toggleMessage = () => {
        setShowToggles({ ...showToggles, showMessage: !showToggles.showMessage });
      };
      const toggleNotification = () => {
        setShowToggles({
          ...showToggles,
          showNotification: !showToggles.showNotification,
        });
      };
  return (
    <Root
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div></div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <ContainerFluid fluid>
          <Navbar.Brand href="/dashboard" className="logo_img">
            {" "}
            <img src={logo} alt="img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="basic-navbar-nav">
            <Nav className=" main_div">
              <div className="top_nav_pages">
                <Nav.Link className="dashboard">
                  <a
                    href="dashboard"
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    Dashboard
                  </a>
                </Nav.Link>

                <Nav.Link className="business">
                  <DropdownContainer onClick={toggleDropdown1}>
                    <DropdownButton id="1">
                      <span>My Business</span>
                      <ArrowIcon isOpen={isOpen1} />
                    </DropdownButton>
                    {isOpen1 && (
                      <DropdownMenu style={{ width: "150px" }}>
                        <MenuItems
                          value="order"
                          onClick={() => {
                            navigate("/orders");
                          }}
                          onBlur={closeDropdowns}
                        >
                          Orders
                        </MenuItems>
                        <MenuItems
                          value="gigs"
                          onClick={() => {
                            navigate("/gigs");
                          }}
                          onBlur={closeDropdowns}
                        >
                          Gigs
                        </MenuItems>
                        <MenuItems
                          value="profile"
                          onClick={() => {
                            navigate(`/profile/${userDetails.username}`);
                          }}
                          onBlur={closeDropdowns}
                        >
                          Profile
                        </MenuItems>
                        <MenuItems
                          value="earning"
                          onClick={() => {
                            navigate("/earnings");
                          }}
                          onBlur={closeDropdowns}
                        >
                          Earning
                        </MenuItems>
                      </DropdownMenu>
                    )}
                  </DropdownContainer>
                </Nav.Link>

                <Nav.Link>
                  <div class="main-Login">
                    <span>
                      My Business <IoIosArrowDown />{" "}
                    </span>
                    <div class="sub-login">
                      <p>
                        <Link to="/orders">Orders</Link>
                      </p>

                      <p>
                        <Link to="/gigs">Gigs</Link>
                      </p>

                      <p>
                        <Link to={`/profile/${userDetails.username}`}>
                          Profile{" "}
                        </Link>
                      </p>

                      <p>
                        <Link to="/earnings">Earning </Link>
                      </p>
                    </div>
                  </div>
                </Nav.Link>

                <Nav.Link className="business">
                  <DropdownContainer onClick={toggleDropdown2}>
                    <DropdownButton id="2">
                      <span>Analytics</span>
                      <ArrowIcon isOpen={isOpen2} />
                    </DropdownButton>
                    {isOpen2 && (
                      <DropdownMenu>
                        <MenuItem
                          value="order"
                          onClick={() => {
                            navigate("/analytics");
                          }}
                          onBlur={closeDropdowns}
                        >
                          Overview
                        </MenuItem>
                      </DropdownMenu>
                    )}
                  </DropdownContainer>
                </Nav.Link>

               
              </div>
            </Nav>

            <Nav>
              <div className="notifyy">
                <div className="notify_div">
                  <Nav.Link className="msg">
                    <a
                      href="/"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Notification"
                      onClick={() => {
                        toggleNotification();
                      }}
                    >
                      <IoIosNotificationsOutline />
                    </a>
                    <Tooltip id="my-tooltip" />
                    {showToggles.showNotification && (
                      <div className="message_div">
                        <div className="top">
                          {" "}
                          <IoIosNotificationsOutline /> Notifications (0){" "}
                        </div>
                        <div className="middle">
                          <IoNotificationsOffOutline />
                          <h5>No Notifications</h5>
                          <p>
                            Browse our amazing catalog of Gigs or offer your
                            talent on Phanom.
                          </p>
                        </div>
                        <div className="bottom">
                          <div>
                            <IoVolumeHigh />
                            <IoMdSettings />
                          </div>
                        </div>
                      </div>
                    )}
                  </Nav.Link>
                  <Nav.Link className="msg">
                    <a
                      href="/"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Message"
                      onClick={() => {
                        toggleMessage();
                      }}
                    >
                      <CiMail />
                    </a>
                    <Tooltip id="my-tooltip" />

                    {showToggles.showMessage && (
                      <div className="message_div">
                        <div className="top">
                          {" "}
                          <CiMail /> Inbox (0){" "}
                        </div>
                        <div className="middle">
                          <IoNotificationsOffOutline />
                          <h5>No Notification</h5>
                          <p>
                            Browse our amazing catalog of Gigs or offer your
                            talent on Phanom.
                          </p>
                        </div>
                        <div className="bottom">
                          <div>
                            <IoVolumeHigh />
                            <IoMdSettings />
                          </div>
                          <Link to="/user">See All In Inbox</Link>
                        </div>
                      </div>
                    )}
                  </Nav.Link>
                  <Nav.Link className="mini">
                    <a
                      href="/"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Lists"
                    >
                      <CiHeart />
                    </a>
                    <Tooltip id="my-tooltip" />
                  </Nav.Link>
                </div>

                <Nav.Link href="" className="profile" onClick={toggleShowName}>
                  {" "}
                  <img src={logoImg} alt="img" />
                </Nav.Link>
                {profileshow && (
                  <div
                    className="profile_option"
                    onMouseEnter={() => {
                      setShow(true);
                    }}
                    onMouseLeave={() => {
                      setShow(false);
                    }}
                  >
                    <div className="profile_div">
                      <button
                        onClick={() => {
                          navigate("/Profile");
                        }}
                      >
                        Profile
                      </button>
                    </div>
                    <div className="profile_div">
                      <button
                        onClick={() => {
                          // handleLogoutClick();
                        }}
                      >
                        logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </ContainerFluid>
      </Navbar>
    </Root>
  );
}

export default NavSeller

const Root = styled.section`
  max-width: 100vw;
  .main-Login:nth-child(1) {
    margin-left: 30px;
  }

  .main-Login {
    position: relative;
    display: inline-block;
    color: #000;
  }

  .main-Login span {
    color: #62646a;
    font-weight: 600;
    height: 42px;
    line-height: 42px;
    text-decoration: none;
    font-size: 16px;
  }

  .sub-login {
    display: none;
    position: absolute;
    top: 100%;
    left: -27px;
    background-color: white;
    border: 1px solid #ccc;
    width: 150px;
    z-index: 10;
  }

  .sub-login p {
    padding: 15px 0 0 20px;
    background: white;
    height: 50px;
    margin: 0;
    &:hover {
      background: #f3f3f3;
    }
  }

  .main-Login:hover .sub-login {
    display: block;
  }

  .sub-login p a {
    color: #666;
    text-decoration: none;
  }

  .sub-login {
    background-color: #fff !important;
  }

  

  .logo_img {
    margin-right: 32px;
    padding-left: 20px;
    img {
      width: 130px;
    }
  }

  nav.bg-body-tertiary.navbar.navbar-expand-lg.navbar-light {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
   
  }
  div#basic-navbar-nav {
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
  }

  div#responsive-navbar-nav {
    justify-content: space-between;
    position: relative;

    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      .top_nav_pages,
      .notifyy {
        padding: 5px;
        flex-direction: column;
        a {
          padding: 0px 4px;
          font-size: 13px;
        }
        button {
          padding: 0px 3px;
        }
      }
    }
  }

  .search_bar {
    border: 1px solid #c5c6c9;
    border-radius: 4px;
    color: #62646a;
    width: 60vw;
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .svg_search {
      color: white;
      background-color: black;
      padding: 10px 15px;
      margin: 0px;
      height: 42px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      svg {
        font-size: 20px;
      }
    }
    input {
      border: none;
      width: 90%;
      padding: 0px 10px;
      word-spacing: 2px;
      background-color: transparent;
      outline: none;
    }
  }
  .top_nav_pages {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px;

    .dashboard,
    .business {
      a,
      span {
        color: #62646a;
        font-weight: 600;
        height: 42px;
        line-height: 42px;
        text-decoration: none;
        font-size: 16px;
      }
      a,
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        &:hover {
          background: #f5f5f5;
          border-radius: 4px;
        }
      }
      span {
        margin-right: 7px;
      }
      button {
        background-color: #fff0;
        border: none;
        color: #95979d;
        &:hover {
          color: #62646a;
        }
        svg {
          font-weight: 600;
        }
      }
    }
    .business {
      position: relative;
      padding: 0px 8px;
      .optn_div {
        display: flex;
        border-radius: 5px;
        flex-direction: column;
        position: absolute;
        padding: 5px;
        top: 35px;
        z-index: 11;
        left: -40px;
        border: 1px solid #c5c6c9;
        background: white;
      }
    }
  }

  .notifyy {
    display: flex;
    align-items: center;
    color: #62646a;

    .notify_div {
      justify-content: space-around;
      display: flex;
      .mini,
      .msg {
        display: flex;
        align-items: center;
        height: 40px;
        width: 40px;
        justify-content: center;
        cursor: pointer;
        svg {
          color: #62646a;
          width: 20px;
          height: 20px;
          font-weight: 600;
        }
        &:hover {
          background-color: #ece9e9;
          border-radius: 50px;
        }
      }
      .msg {
        a {
          position: absolute;
        }
        .message_div {
          display: flex;
          border-radius: 5px;
          flex-direction: column;
          position: relative;
          top: 271px;
          height: 485px;
          width: 400px;
          z-index: 11;
          left: -190px;
          border: 1px solid #c5c6c9;
          background: white;
          .middle {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px;
            height: 100%;
            width: 400px !important;
            overflow-y: scroll;
            border-top: 1px solid #c5c6c9;
            border-bottom: 1px solid #c5c6c9;
            svg {
              color: #62646a;
              width: 30px;
              height: 30px;
              font-weight: 600;
              &:hover {
                background-color: #ece9e9;
                border-radius: 50px;
              }
            }
          }
          .bottom {
            display: flex;
            justify-content: space-between;
            svg {
              margin-right: 5px;
              size: 20px;
            }
            a {
              color: #446ee7;
              float: right;
              font-size: 14px;
              font-weight: 600;
              border-bottom: 2px solid #fff;
              text-decoration: none;
              position: relative;

              &:hover {
                border-bottom: 2px solid #446ee7;
                cursor: pointer;
              }
            }
          }
          .top,
          .middle,
          .bottom {
            padding: 10px;
          }
        }
      }
    }
  }
  .orders,
  .profile {
    cursor: pointer;
  }
  .orders {
    font-weight: 600;
    &:hover {
      color: green;
    }
  }
  .container-fluid {
    padding: 0px !important;
  }

  .navbar > .container,
  .navbar > .container-fluid,
  .navbar > .container-lg,
  .navbar > .container-md,
  .navbar > .container-sm,
  .navbar > .container-xl,
  .navbar > .container-xxl {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
  }

  .profile {
    img {
      border-radius: 50px;
      width: 35px;
      height: 35px;
    }
  }

  .profile_option {
    position: absolute;
    top: 70px;
    z-index: 11111;
    /* border: 1px solid #c5c6c9; */
    width: 100px;
    cursor: pointer;
    border-radius: 5px;
    right: 50px;
    gap: 10px;
    .profile_div {
      display: flex;
      justify-content: center;
      margin-top: 5px;
      background-image: ${secGradient};
      border-radius: 50px;
      button {
        padding: 5px 16px;
        color: #fff;
        background-color: transparent;
        border: 1px solid transparent;
      }
    }
    hr {
      margin: 0px;
    }
  }

  .order_div {
    width: 380px;
    height: 472px;
    top: 80px;
    position: absolute;
    right: 215px;
    background-color: #fff;
    border: 1px solid #dadbdd;
    border-radius: 3px;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.05);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .icon_div {
      background: #efeff0;
      border-radius: 50%;
      padding: 21px 24px;
      margin-bottom: 20px;
      svg {
        height: 70px;
        width: 70px;
      }
    }
    h3 {
      font-size: 18px;
      line-height: 120%;
      color: #404145;
      font-weight: 700;
    }
    p {
      text-align: center;
      font-size: 15px;
      line-height: 120%;
      padding: 0 41px;
      color: #404145;
    }
  }

  @media (max-width: 567px) {
    .main_div {
      width: unset;
    }
    .notifyy {
      justify-content: center;
    }

    .top_nav_pages {
      padding: 0;
      justify-content: center;
    }

    a.dashboard.nav-link {
      margin-right: 10px;
    }

    .top_nav_pages .business .optn_div {
      left: -80px;
    }

    .top_nav_pages .dashboard a,
    .top_nav_pages .business a,
    .top_nav_pages .dashboard button,
    .top_nav_pages .business button {
      padding: 0 1px;
    }

    .profile_option {
      position: absolute;
      top: 170px;
      z-index: 1111;
    }

    .search_bar {
      width: 140px;
      margin-left: -38px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    div#basic-navbar-nav {
      padding: 0 20px;
    }

    .main_div {
      width: unset;
    }

    .profile_option {
      top: 120px;
      width: 25%;
    }
    .show {
      display: flex;
    }
    .top_nav_pages {
      padding: 0px;
    }
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: none;
    font-weight: 700;
  }

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding-right: 32px;
    color: #62646a;
    font-weight: 600;
    height: 42px;
    line-height: 42px;
    text-decoration: none;
    font-size: 16px;
  }

  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0;
  }
`;
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled(FiChevronDown)`
  transition: transform 0.3s;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MenuItems = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

