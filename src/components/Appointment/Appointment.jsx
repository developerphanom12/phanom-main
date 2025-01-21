import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import modalimg from "../../assets/Images/modalimg.png";
import modalimgtwo from "../../assets/Images/modalimgtwo.png";
import modalimgthree from "../../assets/Images/modalimgthree.png";
import {

  InputModalGreyLabel,
  InputModalLabel,
  InputModalTextarea,
  InputModalType,

  SelectModalBorder,
} from "../../Global/GlobalFormElement";

import TimezoneSelect from "react-timezone-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {

  PurpleBgBackground,
  WhiteBgBackground,
  WhitegreyBackground,
} from "../../Global/GlobalButton";

export const Appointment = ({ show, handleClose }) => {
  const [isScheduleVisible, setIsScheduleVisible] = useState(false);

  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (date) => {
    setStartDate(date);
  };
  const toggleScheduleVisibility = () => {
    setIsScheduleVisible(!isScheduleVisible);
  };

  const formatSchedule = () => {
    const formattedTimezone = selectedTimezone ? selectedTimezone.value : "";
    const formattedDate = startDate ? startDate.toLocaleString() : ""; // Adjust format if needed
    return `${formattedTimezone} - ${formattedDate}`;
  };

  return (
    <Root>
      <StyledModal show={show} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="main_div">
            <div className="img_div">
              <img src={modalimg} alt="Modal Logo" />
              <img src={modalimgtwo} alt="Modal Logo" />
              <img src={modalimgthree} alt="Modal Logo" />
            </div>

            <form>
              <div className="row_div">
                <div className="col_div">
                  <InputModalLabel>Name</InputModalLabel>

                  <InputModalType placeholder="This Name" />
                </div>
              </div>

              <div className="row_div">
                <div className="col_div">
                  <InputModalLabel>Email</InputModalLabel>
                  <InputModalType placeholder="thisname@gmail.com" />
                </div>

                <div className="col_div">
                  <InputModalLabel>Contact</InputModalLabel>
                  <InputModalType placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="row_div">
                <div className="col_div">
                  <InputModalLabel>Schedule your Meeting</InputModalLabel>
                  <InputModalType
                    placeholder={
                      isScheduleVisible ? "Select" : formatSchedule()
                    }
                    onClick={toggleScheduleVisibility}
                  />

                  {isScheduleVisible && (
                    <div className="schedule_div">
                      <div className="col_div">
                        <InputModalGreyLabel>
                          Select Time Zone
                        </InputModalGreyLabel>

                        <TimezoneSelect
                          value={selectedTimezone}
                          onChange={setSelectedTimezone}
                        />
                      </div>

                      <div className="col_div">
                        <InputModalGreyLabel>
                          Select Date & Time
                        </InputModalGreyLabel>
                        <DatePicker
                          selected={startDate}
                          onChange={handleDateChange}
                          showTimeSelect
                          dateFormat="Pp"
                          className="cale_time"
                          name="date_time"
                          timeIntervals={15}
                          timeFormat="HH:mm"
                          timeCaption="Time"
                          placeholderText="Select a date and time"
                        />
                      </div>
                      <div
                        className="time_date_btn"
                        onClick={toggleScheduleVisibility}
                      >
                        <WhitegreyBackground> Cancel </WhitegreyBackground>
                        <PurpleBgBackground>Submit</PurpleBgBackground>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="row_div">
                <div className="col_div">
                  <InputModalLabel>Select Service</InputModalLabel>
                  <SelectModalBorder>
                    <option value="">Select </option>
                    <option>Optimization (SEO)</option>
                    <option>Social Media</option>
                    <option>Application Development</option>
                    <option>Shopify API Development</option>

                    <option value="">Web Design </option>
                    <option>ECommerce Optimization</option>
                    <option>Website Development</option>
                    <option>WordPress Plugin</option>
                    <option>Pay Per Click (PPC)</option>

                    <option>Shopify Development</option>
                    <option>Custom Website Development</option>
                    <option>Ecommerce Website Development</option>
                  </SelectModalBorder>
                </div>
              </div>

              <div className="row_div">
                <div className="col_div">
                  <InputModalLabel>
                    Share Project Details(Optional)
                  </InputModalLabel>

                  <InputModalTextarea
                    rows="4"
                    placeholder="Write Project Details"
                    className="text_area"
                  />
                </div>
              </div>

              <div className="btn_div">
                <WhiteBgBackground onClick={handleClose}>Cancel</WhiteBgBackground>
                <PurpleBgBackground>Submit</PurpleBgBackground>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </StyledModal>
    </Root>
  );
};

const Root = styled.section``;

const StyledModal = styled(Modal)`
  .main_div {
    display: flex;
    gap: 30px;

    .img_div {
      position: relative;
      width: 40%;
      height: auto;
      overflow: hidden;
    }

    .img_div img {
      position: absolute;
      width: 100%;
      height: auto;
      opacity: 0;
      transform: translateX(
        -100%
      ); /* Start completely outside the container on the left */
      animation: slideIn 9s infinite;
      border-radius: 8px;
    }

    .img_div img:nth-child(1) {
      animation-delay: 0s; /* First image starts immediately */
    }

    .img_div img:nth-child(2) {
      animation-delay: 3s; /* Second image starts after 3 seconds */
    }

    .img_div img:nth-child(3) {
      animation-delay: 6s; /* Third image starts after 6 seconds */
    }

    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateX(
          -100%
        ); /* Image starts fully outside to the left */
      }
      10% {
        opacity: 1;
        transform: translateX(0); /* Image fully enters the viewport */
      }
      33% {
        opacity: 1;
        transform: translateX(0); /* Image remains visible */
      }
      43% {
        opacity: 0;
        transform: translateX(
          100%
        ); /* Image slides out completely to the right */
      }
      100% {
        opacity: 0;
        transform: translateX(100%); /* Image stays outside on the right */
      }
    }

    form {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .row_div {
        display: flex;
        gap: 20px;
        .col_div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 100%;

          input {
            width: 100%;
            outline: unset;
          }
          textarea {
            outline: unset;
          }

          .schedule_div {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);

            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            border-radius: 10px;
            z-index: 111;
            position: absolute;
            background: #ffff;
            margin-top: 76px;
            min-width: 50%;
            .css-13cymwt-control {
              border: 1px solid #66666659;
              border-radius: 12px;
              padding: 5px;
              font-family: Cambria, Cochin, Georgia, Times, "Times New Roman",
                serif !important;
              font-size: 15px;
              font-weight: 500;
              line-height: 28px;
              text-align: left;
              color: #666666 !important;
              .css-1dimb5e-singleValue {
                color: #666666 !important;
              }
            }

            .react-datepicker-wrapper {
              border: 1px solid #66666659;
              border-radius: 12px;
              padding: 0;
              font-family: Cambria, Cochin, Georgia, Times, "Times New Roman",
                serif !important;
              font-size: 15px;
              font-weight: 500;
              line-height: 28px;
              text-align: left;
              color: #666666;
              overflow: hidden;
              input {
                width: 100%;
                padding: 12px;
                color: #666666;
                font-size: 15px;
                font-weight: 500;
                line-height: 28px;
                font-family: Cambria, Cochin, Georgia, Times, "Times New Roman",
                  serif !important;
              }
            }

            .time_date_btn {
              display: flex;
              justify-content: center;
              gap: 50px;
            }
          }
        }
      }

      .btn_div {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-top: 20px;
      }
    }
  }

  .modal-header {
    border: unset;
  }

  .modal-footer {
    border: unset;
  }

  .modal-content {
    background: linear-gradient(45deg, #8db1dc, #b59ee7, #cc92ed);
  }

  @media (max-width: 567px) {
    .main_div {
      display: flex;
      flex-direction: column;
      .img_div {
        width: 100%;
        overflow: unset;
        display: none;
       
      }
      form {
        width: 100%;
        .row_div {
          flex-direction: column;
        }
        .btn_div {
          button {
            padding: 6px 30px;
          }
        }

        .row_div .col_div .schedule_div {
          width: 92%;
          .time_date_btn {
            gap: 10px;
            button {
              padding: 6px 30px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    .main_div {
      display: flex;
      flex-direction: column;

      .img_div {
        width: 100%;
        display: flex;
        justify-content: center;
        display: none;
        img {
          width: unset;
        }
      }
      form {
        width: 100%;
        .row_div .col_div .schedule_div {
          width: 92%;
        }
      }
    }
  }
`;
