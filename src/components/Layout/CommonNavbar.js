import React, { useEffect, useState }  from 'react'
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import newLogo from '../../assets/Images/newloggg.png';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ContainerFluid from "react-bootstrap/Container";
import { primaryColor, secGradient } from "../../GlobalStyle";
import Modal from "react-bootstrap/Modal";
import bg from '../../assets/Images/HowtoCome.jpeg';
import portfolioBg from '../../assets/Images/portfolioimage.jpeg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimezoneSelect from "react-timezone-select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as Yup from "yup";
import {ToastSuccess, ToastError} from '../common/ToastMessage'
import { useDispatch } from "react-redux";
import { postAPIAction, userDataAction, portfolioDataACtion } from '../../redux/user/action'  
import URLS from '../../utils/urls';
import styled from 'styled-components';


const CommonNavbar = () => {

const names = [
  "Optimization (SEO)",
  "Social Media",
  "Application Development",
  "Shopify API Development",
  "Web Design",
  "ECommerce Optimization",
  "Website Development",
  "WordPress Plugin",
  "Pay Per Click (PPC)",
  "Shopify Development",
  "Custom Website Development",
  "Ecommerce Website Development",
];

const getStyles = (name, personName, theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const theme = useTheme();
const [personName, setPersonName] = useState([]);
  const [isListOpenService, setIsListOpenService] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = useState(false);
  const [isListOpenHire, setIsListOpenHire] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPortfolio, setShowPortfolio] = useState(false);
// port

const [formValues, setFormValues] = useState({
  time_zone: "",
  date_time: new Date(),
  name: "",
  mobile_number: "",
  email: "",
  services: [],
  comment: "",
});

const [portfolioData, setPortfolioData] = useState({
  name: "",
  email: "",
  mobile_number: "",
});

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const validationSchema = Yup.object({
    time_zone: Yup.string().required("Time Zone is Required"),
    date_time: Yup.date()
      .required("Date & Time is Required")
      .min(new Date(), "Date must be in the future"),
    name: Yup.string().required("Name is Required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format"),
    services: Yup.array().min(1, "At least one service is required"),
    mobile_number: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required("Phone Number is required"),
    comment: Yup.string().optional(),
  });

  const validateForm = async () => {
      try {
        await validationSchema.validate(formValues, { abortEarly: false });
        return true;
      } catch (err) {
        err.inner.forEach((error) => {
          ToastError(error.message);
        });
        return false;
      }
    };

    const handleFormSubmit = async (e) =>{
      e.preventDefault();
      const isValid = await validateForm();
      if(isValid){
        setSubmitted(true);
        dispatch(
          postAPIAction(URLS.bookingBuyer, formValues, (e,e_msg) =>{
            if(e === "error"){
              ToastError(e_msg);
            }
            else{
              ToastSuccess("Form Submitted SuccessFully");
              navigate("/");
              dispatch(userDataAction(e));
            }
          })
        )
      }
      else{
        setSubmitted(false);
      }
    };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePortfolioClose = () => setShowPortfolio(false);
  const handlePortfolioShow = () => setShowPortfolio(true);
  const [startDate, setStartDate] = useState(new Date());

  const handleMouseEnterService = () => {
    setIsListOpenService(true);
  };

  const handleMouseLeaveService = () => {
    setIsListOpenService(false);
  };

  const handleMouseEnterHire = () => {
    setIsListOpenHire(true);
  };

  const handleMouseLeaveHire = () => {
    setIsListOpenHire(false);
  };

  const handleSubMenuClick = (event) => {
    event.stopPropagation(); // Prevent event propagation to parent elements
  };

  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTimezoneChange = (timezone) => {
    setSelectedTimezone(timezone?.value);
    setFormValues((prevData) => ({ ...prevData, time_zone: timezone?.value }));
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setFormValues((prevData) => ({ ...prevData, date_time: date }));
  };

  const handleServiceChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    setFormValues((prevData) => ({ ...prevData, services: value }));
  };

  const portfolioShema = Yup.object().shape({
    name: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    mobile_number: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required("Phone Number is required"),
  });

  const validatePortfolioForm = async () => {
    try {
      await portfolioShema.validate(portfolioData, { abortEarly: false });
      return true;
    } catch (err) {
      err.inner.forEach((error) => {
        ToastError(error.message);
      });
      return false;
    }
  };

  const handlePortfolioData = (e) => {
    setPortfolioData({ ...portfolioData, [e.target.name]: e.target.value });
  };

  const handlePortfolioSubmit =  async (e) =>{
    e.preventDefault();

    const isPortfolioValid = await validatePortfolioForm();
    if(isPortfolioValid){
      setSubmitted(true);
      dispatch(
        postAPIAction(URLS.contactPortfolio, portfolioData, (e,e_msg) =>{
          if(e === "error"){
            ToastError(e_msg);
          }
          else{
            ToastSuccess("Thanks, Form Submitted Successfully.");
            navigate("/ourportfolio");
            handlePortfolioClose();
            dispatch(portfolioDataACtion(portfolioData))
            setPortfolioData({
              name:"",
              email:"",
              mobile_number:"",
            });
          }
        }))
    } else{
      setSubmitted(false);
    }
  }


  return (
    <Root>
        <CustomModal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <div className="head_div">
            <span class="black-content">Book Your Appointment </span>

            <p style={{ marginBottom: "0px" }}>
              Where innovation meets unstoppable growth
            </p>
          </div>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <div className="form_div">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="row  fiel_div">
                      <div className="col-lg-12 col-md-12 col-12">
                        <div className="time_heading">
                          <span>Select Date & Time</span>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        <div className="cal_div">
                          <div className="select-wrapper">
                            <TimezoneSelect
                              value={selectedTimezone}
                              onChange={handleTimezoneChange}
                              name="time_zone"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-12">
                          <div>
                            <DatePicker
                              selected={startDate}
                              onChange={handleDateChange}
                              showTimeSelect
                              dateFormat="Pp"
                              className="cale_time"
                              name="date_time"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row  fiel_div">
                      <div className="col-lg-12 col-md-12 col-12">
                        <input
                          type="text"
                          placeholder="Name*"
                          name="name" 
                          value={formValues.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        <input
                          type="tel"
                          placeholder="Phone*"
                          name="mobile_number"
                          value={formValues.mobile_number}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        <input
                          type="email"
                          placeholder="Email Address*"
                          name="email"
                          value={formValues.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        <FormControl className="serv_div" fullWidth>
                          <Select
                            multiple
                            displayEmpty
                            value={personName}
                            onChange={handleServiceChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                              if (selected.length === 0) {
                                return <em>Services</em>;
                              }
                              return selected.join(", ");
                            }}
                            MenuProps={{
                              PaperProps: {
                                style: {
                                  maxHeight: 48 * 4.5 + 8,
                                  width: 250,
                                },
                              },
                            }}
                            inputProps={{ "aria-label": "Select services" }}
                          >
                            <MenuItem disabled value="">
                              <em>Services</em>
                            </MenuItem>
                            {names.map((name) => (
                              <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                              >
                                {name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>

                      <div className="col-lg-12 col-md-12 col-12">
                        <label className="label_heading">
                          Share Project Details(Optional)
                        </label>
                        <textarea
                          name="comment"
                          rows="5"
                          cols="75"
                          value={formValues.comment}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-0 img_book">
                    <img src={bg} alt="Book Your Appointment" />
                    <div className="sub_btn">
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </CustomModal>

      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary nav-menu"
      >
        <ContainerFluid fluid style={{ flexWrap: "wrap !important" }}>
          <Navbar.Brand href="/">
            {" "}
            <img src={newLogo} alt="img" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: "space-around" }}
          >
            <Nav className="main_nav_bar">
              <Nav>
                {" "}
    
                <div
                  className="profile"
                  onMouseEnter={handleMouseEnterService}
                  onMouseLeave={handleMouseLeaveService}
                  id="hireIndianTalent"
                  onClick={handleSubMenuClick}
                >
                  Services <IoIosArrowDown />
                  <div className={isListOpenService ? "sub_ser_div" : "off"}>
                    <div className="serv_megamenu_div">
                      <div className="mega_div">
                        <span className="first-content">
                          {" "}
                          Digital Marketing{" "}
                        </span>
                        <p>
                          <Link to="/offshore-seo-company-in-india/">
                            SEO (Search Engine Optimisation)
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-social-media-marketing-agency-in-india/">
                            Social Media Marketing
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-ppc-marketing-agency-in-india/">
                            Pay Per Click (PPC)
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-youtube-marketing-services-in-india/">
                            Youtube Marketing
                          </Link>
                        </p>
                      </div>

                      <div className="mega_div">
                        <span className="first-content">
                          Design & Development
                        </span>
                        <p>
                          <Link to="/offshore-website-development-services-in-india/">
                            Web Development
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-shopify-web-development-services-in-india/">
                            Shopify
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-java-software-development-company-in-india/">
                            Java
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-magento-development-company-in-india/">
                            Magento
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-wordpress-development-company-on-india/">
                            Wordpress
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-php-development-company-in-india/">
                            PHP
                          </Link>
                        </p>
                      </div>
                      <div className="mega_div">
                        <span className="first-content">
                          Animations & Graphics
                        </span>
                        <p>
                          <Link to="/offshore-video-marketing-services-in-India/">
                            Video Marketing
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-branding-agency-in-india/">
                            Branding
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-packeging-and-labeling-agency-in-india/">
                            Packaging & Labeling
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-graphic-design-agency-in-india/">
                            Graphic Design
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-web-design-agency-in-india/">
                            Web Design
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-rotoscoping-services-in-india/">
                            Rotoscoping
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-animation-company-in-india/">
                            Animation
                          </Link>
                        </p>
                      </div>

                      <div className="mega_div">
                        <span className="first-content">
                          {" "}
                          E-commerce solution{" "}
                        </span>
                        <p>
                          <Link to="/offshore-ecommerce-agency-india/">
                            E-Commerce Marketing
                          </Link>
                        </p>
                        <p>
                          <Link to="/offshore-amazon-marketing-agency-in-india/">
                            Amazon Marketing
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Nav>

              <Nav>
                <div
                  className="profile"
                  onMouseEnter={handleMouseEnterHire}
                  onMouseLeave={handleMouseLeaveHire}
                  id="hireIndianTalent"
                  onClick={handleSubMenuClick}
                >
                  Hire Indian Talent <IoIosArrowDown />
                  <div className={isListOpenHire ? "sub_hire_div" : "off"}>
                    <div className="hire_main_div">
                      <div className="hire_div_one">
                        <span className="first-content">
                          {" "}
                          Hire Digital Marketing{" "}
                        </span>

                        <p>
                          <Link to="/hire-pay-per-click-experts-in-india/">
                            {" "}
                            Hire PPC Expert
                          </Link>
                        </p>

                        <p>
                          <Link to="/hire-seo-experts-in-india/">
                            Hire SEO Expert
                          </Link>
                        </p>
                      </div>

                      <div className="hire_div_two">
                        <span className="first-content">Hire Designer</span>
                        <p>
                          <Link to="/hiregraphic-designers-in-india/">
                            Hire Graphic Designer
                          </Link>
                        </p>
                        <p>
                          <Link to="/hire-ui-designers-in-india/">
                            Hire UI|UX Designer
                          </Link>
                        </p>
                        <p>
                          <Link to="/hire-web-designers-in-india/">
                            Hire Web Designer
                          </Link>
                        </p>
                      </div>

                      <div className="hire_div_three">
                        <span className="first-content">Hire Developer</span>
                        <div className="dev_div">
                          <div className="dv_sub_div">
                            <p>
                              <Link to="/hire-dedicated-reactjs-developers-in-india/">
                                Hire ReactJs Developer
                              </Link>
                            </p>

                            <p>
                              <Link to="/hire-dedicated-nodejs-developers-in-india/">
                                Hire NodeJs Developer
                              </Link>
                            </p>

                            <p>
                              <Link to="/hire-dedicated-laravel-developers-in-india/">
                                Hire Laravel Developer
                              </Link>
                            </p>

                            <p>
                              <Link to="/hire-shopify-developers-in-india/">
                                Hire Shopify Developer
                              </Link>
                              <ul style={{ marginBottom: 0 }}>
                                <li>
                                  <Link to="/hire-expert-shopify-apps-developers-in-india/">
                                    Shopify Public App
                                  </Link>
                                </li>
                              </ul>
                            </p>

                            <p>
                              <Link to="/hire-expert-php-developers-in-india">
                                Hire PHP Developer
                              </Link>
                            </p>

                            <p>
                              <Link to="/hire-wordpress-developers-in-india/">
                                Hire WordPress Developer
                              </Link>
                            </p>
                          </div>

                          <div className="dv_sub_div">
                            <p>
                              <Link to="/hire-dedicated-react-native-developers-in-india/">
                                Hire React Native Developer
                              </Link>
                            </p>

                            <p>
                              <Link to="/hire-dedicated-android-app-developers-in-india/">
                                Hire Android Developer
                              </Link>
                            </p>

                            <p>
                              <Link to="/hire-dedicated-ios-app-developer-in-india/">
                                Hire IOS Developer
                              </Link>
                            </p>

                            <p>
                              <Link to="/hire-dedicated-software-developers-in-india/">
                                Hire SoftWare Developer
                              </Link>
                            </p>

                            <p>
                              <Link to="/hire-mobile-app-developers-in-india/">
                                Hire Mobile App Developer
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Nav>

              <Nav.Link onClick={handlePortfolioShow}>
                <div className="profile">Our Portfolio</div>
              </Nav.Link>

            </Nav>

            <Nav>
              <Nav.Link>
                <div className="app_btn" onClick={handleShow}>
                  Book an Appointment
                </div>
              </Nav.Link>
            </Nav>

            <Nav>
             
            </Nav>
          </Navbar.Collapse>
        </ContainerFluid>
      </Navbar>

      <PortfolioModal show={showPortfolio} onHide={handlePortfolioClose} centered>
        <Modal.Header closeButton>
          {" "}
          <h5>Fill out the form.</h5>
        </Modal.Header>
        <Modal.Body>
          <div className="port_content">
            <div className="form_div">
              <form onSubmit={handlePortfolioSubmit}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-12">
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={portfolioData.name}
                        onChange={handlePortfolioData}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-10 col-md-10 col-12">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={portfolioData.email}
                        onChange={handlePortfolioData}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-12">
                      <input
                        type="tel"
                        placeholder="Phone"
                        name="mobile_number"
                        value={portfolioData.mobile_number}
                        onChange={handlePortfolioData}
                      />
                      <div className="sub_btn">
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </PortfolioModal>

    </Root>
  )
}

export default CommonNavbar;

const CustomModal = styled(Modal)`
  .modal-content {
    border-radius: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: 0;
    .modal-body {
      padding: 10px 0px !important;
    }
    .label_heading {
      margin: 7px 0px;
      color: #000;
    }
    .img_book {
      background-size: contain;
      background-repeat: no-repeat;
      img {
        margin: 20px 0px;
        width: 100%;
      }
    }
  }
  .head_div {
    width: 100%;
    text-align: center;
    .black-content {
      font-size: 30px;
      font-weight: bold;
      line-height: 1.3em;
      background: linear-gradient(70deg, #cd1ce6, #13c9df, #9059e4);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .colored-content {
      font-size: 35px;
      font-weight: bold;
      line-height: 1.3em;
      background: ${secGradient};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
  .select-wrapper {
    width: 100%;
  }
  .time_heading {
    display: flex;
    justify-content: center;
    span {
      font-size: 19px;
      font-weight: 600;
      line-height: 1.3em;
    }
  }
  .cal_div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 20px;
    margin: 7px 0px;
    input.cale_time {
      padding: 6px;
      border-radius: 5px;
      background-color: #fff;
      border: 1px solid #dadada;
      color: #6b7996;
    }

    .react-datepicker__current-month,
    .react-datepicker-time__header,
    .react-datepicker-year-header {
      color: #6b7996;
    }
    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--selected,
    .react-datepicker__year-text--in-selecting-range,
    .react-datepicker__year-text--in-range {
      border-radius: 0.3rem;
      background-color: #13c9df;
      color: #fff;
    }

    .css-1fdsijx-ValueContainer {
      padding: 5px 8px;
    }
    .css-13cymwt-control {
      margin-top: 1px;
      border: 1px solid #dadada;
      background-color: #fff;
    }

    .css-qbdosj-Input {
      color: #6b7996 !important;
    }

    .mon_head {
      font-size: 20px;
      font-weight: 500;
    }
    .main {
      width: 20rem;
      padding: 0.7rem;
      margin-left: 1rem;
      border: 1px solid #dadada;
    }
    .header {
      display: flex;
      margin-bottom: 0.7rem;
      justify-content: space-between;
      align-items: center;
    }
    .header button {
      font-size: 1.4rem;
      cursor: pointer;
      color: #13c9df !important;
      border: 1px solid transparent !important;
    }
    .body {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
    }
    .box {
      height: 2rem;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .box.empty {
      background-color: #e0e0e0;
      cursor: default;
    }
    .box.selected {
      background-color: #13c9df;
      color: white;
    }
  }

  .form_div {
    input[type="text"] {
      border: 1px solid #dadada;
      height: 35px;
      width: 100%;
      background-color: #fff;
      padding-left: 10px;
      border-radius: 5px;
      margin: 7px 0px;
    }

    input[type="tel"] {
      border: 1px solid #dadada;
      height: 35px;
      width: 100%;
      background-color: #fff;
      padding-left: 10px;
      border-radius: 5px;
      margin: 7px 0px;
      &:hover {
        border: 1px solid #000000;
      }
    }

    input[type="email"] {
      border: 1px solid #dadada;
      height: 35px;
      width: 100%;
      background-color: #fff;
      padding-left: 10px;
      border-radius: 5px;
      margin: 7px 0px 10px 0px;

      &:hover {
        border: 1px solid #000000;
      }
    }
    ::placeholder {
      color: #000;
      opacity: 1;
    }

    textarea {
      width: 100%;
      background: #fff;
      border: 1px solid #dadada;
      border-radius: 5px;
    }
    .sub_btn {
      margin: 10px 0px;
      display: flex;
      justify-content: center;
      button {
        font-size: 14px;
        color: white;
        background-color: #13c9df;
        text-transform: uppercase;
        padding: 13px 61px;
        border: 0;
        letter-spacing: 3px;
        border-radius: 50px;
      }
    }

    .serv_div {
      width: 100%;
      margin: 5px 0px;
      height: 35px !important;
      background-color: #fff;
      .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
        padding: 6px;
      }
      .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
        border: 1px solid #dadada;
        em {
          color: #334770;
        }
      }
    }
    /* .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input{
    border: 1px solid #fffbfb!important;
 
} */
  }

  @media (max-width: 567px) {
    .form_div input[type="text"] {
      margin-bottom: 15px;
    }

    .modal-content {
      width: 90%;
    }

    .cal_div {
      flex-direction: column;
    }

    .react-datepicker-wrapper {
      width: 100%;
    }

    .cal_div input.cale_time {
      width: 100%;
    }

    .modal-content .img_book img {
      display: none;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .form_div input[type="text"] {
      margin-bottom: 15px;
    }

    .modal-content .img_book img {
      display: none;
    }

    .modal-content .img_book {
      width: 100%;
    }
  }
`;

const PortfolioModal = styled(Modal)`
  .modal-content {
    background-image: url(${portfolioBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    h5 {
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      line-height: 1.3em;
      text-transform: capitalize;
      margin: 0;
      text-align: center;
    }
  }
  .port_content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 0px;
    .form_div {
      padding: 0 20px;
      form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;

        input {
          border: 1px solid #dadada;
          border-radius: 10px;
          height: 35px;
          padding: 10px;
          width: 100%;
          margin: 10px 0px;
        }

        .sub_btn {
          display: flex;
          button {
            font-size: 14px;
            font-weight: 600;
            color: #13c9df;
            background-color: white;
            text-transform: uppercase;
            padding: 7px 31px;
            border: 0;
            letter-spacing: 3px;
            border-radius: 30px;
            margin: 15px 0 0 0;
            &:hover {
              box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
                0 3px 6px rgba(0, 0, 0, 0.23);
            }
          }
        }
      }
    }
  }

  .port_error {
    color: black;
    width: 100%;
    margin: 0;
    font-size: 13px;
    color: red;
  }
  @media (max-width: 567px) {
    .modal-content {
      width: 90%;
    }
    .port_content .form_div form {
      align-items: flex-start;
      input {
        width: fit-content;
      }
    }
  }
`;

const Root = styled.section`
  border-bottom: 1px solid lightgray;
  flex-direction: column;
  display: flex;
  height: auto;
  background-color: #fff;
  box-shadow: 1px 1px 5px 1px lightgray;
  /* margin-bottom: 80px; */
  /* padding: 10px 0px 0px; */
  /* position: fixed;
  z-index: 1111; */

  nav.bg-body-tertiary.nav-menu.navbar.navbar-expand-lg.navbar-light {
    padding: 10px;
  }

  div#responsive-navbar-nav {
    display: flex;
    justify-content: space-evenly;
  }

  .nav-menu {
    width: 100vw;
  }
  a {
    margin: 0px;
    text-decoration: none;
  }
  img {
    width: 220px;
    padding: 0px 15px;
    mix-blend-mode: multiply;
  }
  .profileLogin {
    width: 100px;
  }
  .profile {
    display: flex;
    font-size: 15px;
    color: #000000;
    padding: 5px;
    margin: 5px;
    gap: 7px;
    align-items: center;
    position: relative;
    cursor: pointer;
    &:hover {
      color: ${primaryColor};
    }
    a {
      color: #000;
      text-decoration: none;
      &:hover {
        color: #13c9df;
      }
    }

    > div {
      font-size: 14px;
      svg {
        width: 13px;
        height: 13px;
      }
    }
    .option_list_list {
      left: -23px;
      top: 100%;
      position: absolute;
      .mini_option_list {
        padding: 10px;

        p {
          margin: 0;
          &:hover {
            background-color: #0093ab;
          }
        }
      }
    }
    .option_list {
      left: -23px;
      top: 100%;
      position: absolute;
    }
    .option_list2 {
      right: -210px;
      top: 0;
      position: absolute;
    }
    .option_list3 {
      right: -170px;
      top: 50%;
      position: absolute;
    }
    .option_list4 {
      right: -170px;
      top: 70%;
      position: absolute;
    }

    .option_list,
    .option_list_list,
    .option_list2,
    .option_list3,
    .option_list4 {
      z-index: 1111;
      text-decoration: none;
      min-width: 220px;
      border: 1px solid ${primaryColor};
      background-color: ${primaryColor};
      color: #fff;
      p {
        margin: 0;
        padding: 15px;
        &:hover {
          background-color: #0093ab;
        }
      }
      a {
        text-decoration: none;
        color: white;
      }
    }

    .off {
      display: none;
    }
  }

  .no_pop {
    display: none;
  }

  ul.closed {
    display: none;
  }

  ul.open {
    display: block;
    -webkit-overflow-scrolling-y: scroll;
  }

  .option_list {
    position: relative;
    display: inline-block;
  }

  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: transparent;
    &:hover {
      border-color: transparent;
    }
  }

  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
    &:hover {
      border-color: transparent;
    }
  }

  a.login_div.nav-link {
    margin-left: -104px;
  }

  .serv_div {
    position: relative;
    color: #000;
  }

  .sub_ser_div {
    position: absolute;
    top: 30px;
    left: -66px;
    border: 1px solid transparent;
    padding: 20px;
    z-index: 10;
    width: 860px;

    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    .serv_megamenu_div {
      width: 100%;
      margin-left: 10px;
      display: flex;
      flex-wrap: wrap;
      .mega_div {
        display: flex;
        gap: 10px;
        flex-direction: column;
        flex: 1;

        .first-content {
          font-size: 13px;
          font-weight: 500;
          line-height: 1.3em;
          color: #13c9df;
        }

        p {
          margin-bottom: 0;
          a {
            color: #000;
            font-size: 12px;
            text-decoration: none;
            &:hover {
              color: #13c9df;
            }
          }
        }
      }
    }
  }
  /* .sub_ser_div {
    display: none;
    position: absolute;
    top: 30px;
    left: -66px;
    border: 1px solid transparent;
    padding: 20px;
    z-index: 10;
    width: 860px;

    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    .row {
      width: 100%;
      margin-left: 10px;
      .mega_div {
        display: flex;
        gap: 10px;
        flex-direction: column;

        .first-content {
          font-size: 13px;
          font-weight: 500;
          line-height: 1.3em;
          color: #13c9df;
        }

        p {
          margin-bottom: 0;
          a {
            color: #000;
            font-size: 12px;
            text-decoration: none;
            &:hover {
              color: #13c9df;
            }
          }
        }
      }
    }
  } */

  /* .serv_div:hover .sub_ser_div {
    display: block;
  } */

  .main-Login {
    position: relative;
    display: inline-block;
    color: #000;
  }

  .sub-login {
    display: none;
    position: absolute;
    top: 100%;
    left: -35px;
    /* background-color: white;
    border: 1px solid #ccc; */
    padding: 10px 10px 0px;
    z-index: 10;
  }

  .app_btn {
    font-size: 16px;
    color: white;
    background-color: #13c9df;
    padding: 12px 25px;
    border: 0;
    border-radius: 50px;
  }

  .main-Login:hover .sub-login {
    display: block;
  }

  .sub-login p a {
    color: #fff;
  }

  /* .sub-login {
    background-color: #13c9df !important;
  } */

  .sub-login p {
    padding: 5px 20px;
    background: ${secGradient};
    border-radius: 50px;
    margin-bottom: 10px;
  }

  /* .profile{
    position: relative;
    cursor: pointer;
  } */

  .sub_hire_div {
    position: absolute;
    top: 30px;
    left: -66px;
    border: 1px solid transparent;
    padding: 20px;
    z-index: 10;
    width: 740px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    .hire_main_div {
      display: flex;
      width: 100%;
      margin-left: 10px;
      .hire_div_one {
        display: flex;
        gap: 10px;
        flex-direction: column;
        width: 25%;
        .dev_div {
          display: flex;
          gap: 40px;
        }

        .first-content {
          font-size: 13px;
          font-weight: 500;
          line-height: 1.3em;
          color: #13c9df;
        }

        p {
          margin-bottom: 0;
          a {
            color: #000;
            font-size: 12px;
            text-decoration: none;
            &:hover {
              color: #13c9df;
            }
          }
        }
      }
      .hire_div_two {
        display: flex;
        gap: 10px;
        flex-direction: column;
        width: 25%;

        .dev_div {
          display: flex;
          gap: 20px;
        }

        .first-content {
          font-size: 13px;
          font-weight: 500;
          line-height: 1.3em;
          color: #13c9df;
        }

        p {
          margin-bottom: 0;
          a {
            color: #000;
            font-size: 12px;
            text-decoration: none;
            &:hover {
              color: #13c9df;
            }
          }
        }
      }
      .hire_div_three {
        display: flex;
        gap: 10px;
        flex-direction: column;
        width: 50%;

        .dev_div {
          display: flex;
          gap: 20px;
        }
        .dv_sub_div {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .first-content {
          font-size: 13px;
          font-weight: 500;
          line-height: 1.3em;
          color: #13c9df;
        }

        p {
          margin-bottom: 0;
          a {
            color: #000;
            font-size: 12px;
            text-decoration: none;
            &:hover {
              color: #13c9df;
            }
          }
        }
      }
    }
  }

  @media (max-width: 567px) {
    a.login_div.nav-link {
      margin-left: 13px;
    }

    img {
      width: 120px;
      padding: 0px 0px;
      mix-blend-mode: multiply;
    }

    .app_btn {
      width: 220px;
    }

    .serv_div {
      display: none;
    }

    .sub_ser_div {
      width: 100%;
      left: -2px;
      padding: 20px 10px;
    }

    .sub_ser_div .serv_megamenu_div .mega_div {
      width: 50%;
      flex: unset;
      margin-top: 20px;
      /* align-items: center; */
    }

    .sub_ser_div .serv_megamenu_div .mega_div .first-content {
      font-size: 11px;
    }

    .sub_ser_div .serv_megamenu_div .mega_div p a {
      font-size: 10px;
    }

    .sub_ser_div .serv_megamenu_div {
      margin-left: 0;
    }

    .sub_hire_div {
      left: -2px;
      width: 100%;
    }

    .sub_hire_div .hire_main_div {
      display: flex;
      width: 100%;
      margin-left: 0px;
      flex-wrap: wrap;
      gap: 20px;
    }

    .sub_hire_div .hire_main_div .hire_div_one {
      width: 45%;
    }

    .sub_hire_div .hire_main_div .hire_div_two {
      width: 45%;
    }

    .sub_hire_div .hire_main_div .hire_div_three {
      display: flex;
      gap: 10px;
      flex-direction: column;
      width: 100%;
    }

    .sub_hire_div .hire_main_div .hire_div_one .first-content {
      font-size: 11px;
    }

    .sub_hire_div .hire_main_div .hire_div_one p a {
      font-size: 10px;
    }
    .sub_hire_div .hire_main_div .hire_div_two p a {
      font-size: 10px;
    }
    .sub_hire_div .hire_main_div .hire_div_three p a {
      font-size: 10px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    a.login_div.nav-link {
      margin-left: 13px;
    }

    img {
      width: 150px;
      padding: 0px 0px;
      mix-blend-mode: multiply;
    }

    .app_btn {
      width: 220px;
    }

    .serv_div {
      display: none;
    }

    .sub_ser_div {
      left: 0px;
      width: unset;
    }

    .sub_hire_div {
      left: -2px;
      width: 100%;
    }
  }
`;

