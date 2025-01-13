import React, { useState } from "react";
import styled from "styled-components";
import { GradientHeading, Heading } from "../../../../Global/GlobalText";

import {
  InputLabel,
  InputTextarea,
  InputType,
  SelectBorder,
} from "../../../../Global/GlobalFormElement";
import {
  GreyBorderButton,
  PurpleBackground,
} from "../../../../Global/GlobalButton";
import TimezoneSelect from "react-timezone-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FormSection = () => {
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
      <div className="form_section">
        <span>
          <Heading>Elevate Your Digital Experience:</Heading> <br />
          <GradientHeading>
            <span></span>Top Hire Top UI/UX <span></span>
          </GradientHeading>{" "}
          <br />
          <Heading>Designers with Phanom Professionals</Heading>
        </span>

        <form>
          <div className="sub_form">
            <div className="form_row">
              <div className="form_row_col">
                <InputLabel>Name</InputLabel>
                <InputType placeholder="This Kumar"></InputType>
              </div>

              <div className="form_row_col">
                <InputLabel>Email</InputLabel>
                <InputType placeholder="thiskumar@gmail.com"></InputType>
              </div>
            </div>

            <div className="form_row">
              <div className="form_row_col">
                <InputLabel>Contact</InputLabel>
                <InputType placeholder="+91 0000 000000"></InputType>
              </div>

              <div className="form_row_col">
                <InputLabel>Schedule your Meeting</InputLabel>
                <InputType
                  placeholder={isScheduleVisible ? "Select" : formatSchedule()}
                  onClick={toggleScheduleVisibility}
                />

                {isScheduleVisible && (
                  <div className="schedule_div">
                    <div className="form_row_col">
                      <InputLabel>Select Time Zone</InputLabel>

                      <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                      />
                    </div>

                    <div className="form_row_col">
                      <InputLabel>Select Date & Time</InputLabel>
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
                      <GreyBorderButton>Cancel</GreyBorderButton>
                      <PurpleBackground>Submit</PurpleBackground>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="form_row">
              <div className="form_row_col">
                <InputLabel>Select Service</InputLabel>
                <SelectBorder>
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
                </SelectBorder>
              </div>

              <div className="form_row_col">
                <InputLabel>Share Project Details(Optional)</InputLabel>
                <InputTextarea
                  rows="1"
                  className="text_area"
                  placeholder="Write Project Details"
                />
              </div>
            </div>
            <div className=" form_btn">
              <PurpleBackground>Book an Appointment</PurpleBackground>
            </div>
          </div>
        </form>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px;

  .form_section {
    display:flex;
    gap:10px;
    flex-direction:column;
    form {
      .sub_form {
        position: relative;
        background: linear-gradient(130deg, #e4c7eb, #c6c1ee, #e4c7eb);
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 50px 30px;
        margin: 40px 100px;
        border-radius: 10px;
      }

      .form_row {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        .form_row_col {
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex: 1;
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
            min-width: 40%;
            .css-13cymwt-control {
              border: 1px solid #66666659;
              border-radius: 12px;
              padding: 5px;
              font-family: "Poppins", sans-serif;
              font-size: 13px;
              font-weight: 400;
              line-height: 24px;
              text-align: left;
              color: #333333;
            }

            .react-datepicker-wrapper {
              border: 1px solid #66666659;
              border-radius: 12px;
              padding: 0;
              font-family: "Poppins", sans-serif;
              font-size: 13px;
              font-weight: 400;
              line-height: 24px;
              text-align: left;
              color: #333333;
              overflow: hidden;
              input {
                width: 100%;
                padding: 12px;
                color: #777777;
                font-size: 13px;
                font-weight: 400;
                line-height: 24px;
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
      .form_btn {
        display: flex;
        justify-content: center;
        margin-top: 10px;
      }
    }
    .form::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5); /* Adjust 0.3 for desired opacity */
      pointer-events: none; /* Ensures overlay does not interfere with interactions */
    }
  }

  @media (max-width: 567px) {
    padding: 30px 20px;
    .form_section{
      gap:20px;
      br{
        display: none;
      }
    form .sub_form {
      padding: 20px 20px;
      margin: 0;
    }
  }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;
    .form_section{
      gap:20px;
      br{
        display: none;
      }
      form .sub_form {
      padding: 20px 20px;
      margin: 0;
    }
    }

  }
`;
