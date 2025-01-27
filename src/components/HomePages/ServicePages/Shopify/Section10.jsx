import React, { useState } from "react";
import styled from "styled-components";
import {
  GradientSecondHeading,
  GradientSubHeading,
  Greydescription,
  Heading,
  Subdescription,
} from "../../../../Global/GlobalText";
import {
  GreyBorderButton,
  PurpleBackground,
} from "../../../../Global/GlobalButton";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  InputLabel,
  InputTextarea,
  InputType,
  SelectBorder,
} from "../../../../Global/GlobalFormElement";
import TimezoneSelect from "react-timezone-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Section10 = () => {
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
      <div className="main_div" id="form">
        <div className="sub_div_one">
          <Greydescription>
            Explore a rewarding career in the Phenom Professional Industry. Fill
            out the form to get started.
          </Greydescription>

          <span>
            <Heading>Transform Your Business With </Heading>
            <br />

            <GradientSecondHeading>
              The Leading Shopify Development
            </GradientSecondHeading>

            <br />

            <GradientSecondHeading>Services</GradientSecondHeading>
          </span>

          <Greydescription>
            Take the next step in your online business with Phanom
            Professionals, the most trusted Shopify development service. We
            offer basic to advanced Shopify services that boost the performance
            of your website. Custom designs and Search Engine Optimization are
            some of our strongest suits. We can make your Shopify store
            effortlessly stand out in a saturated market.
          </Greydescription>

          <div>
            <Greydescription>What You'll Get: </Greydescription>
            <ul>
              <li>
                Tailored Shopify development strategies that improve your ROI.
              </li>
              <li>
                SEO-optimized content for your Shopify store that leads to
                higher search engine rankings.
              </li>
              <li>
                Online store visibility and customer retention through our
                expert SEO services.
              </li>
            </ul>
          </div>

          <div>
            <Greydescription style={{ color: "#6C5FD4" }}>
              Ready To Make Your Business More Visible Online?
            </Greydescription>

            <Greydescription>
              Turn your website into an asset with our Shopify development
              services. It will increase traffic, sales, and overall digital
              presence of your business. Get in touch today and take the first
              steps towards online success with the best Shopify development
              company!
            </Greydescription>
          </div>

          <div>
            <PurpleBackground className="connect_btn">
            Connect with us <FaArrowRightLong />
            </PurpleBackground>
          </div>
        </div>
        <div className="sub_div_two">
          <span>
            <GradientSubHeading> Book Your Appointment</GradientSubHeading>
            <Subdescription>
              Where innovation meets unstoppable growth
            </Subdescription>
          </span>

          <form>
            <div className="label_content">
              <InputLabel>Name</InputLabel>
              <InputType placeholder="This Kumar" />
            </div>

            <div className="label_content">
              <InputLabel>Email</InputLabel>
              <InputType placeholder="thiskumar@gmail.com" />
            </div>

            <div className="label_content">
              <InputLabel>Contact</InputLabel>
              <InputType placeholder="+91 0000 000000" />
            </div>

            <div className="label_content">
              <InputLabel>Schedule your Meeting</InputLabel>
              <InputType
                placeholder={isScheduleVisible ? "Select" : formatSchedule()}
                onClick={toggleScheduleVisibility}
              />

              {isScheduleVisible && (
                <div className="schedule_div">
                  <div className="label_content">
                    <InputLabel>Select Time Zone</InputLabel>

                    <TimezoneSelect
                      value={selectedTimezone}
                      onChange={setSelectedTimezone}
                    />
                  </div>

                  <div className="label_content">
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

            <div className="label_content">
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

            <div className="label_content">
              <InputLabel>Share Project Details(Optional)</InputLabel>
              <InputTextarea rows="4" className="text_area" />
            </div>

            <div className="submit_btn">
              <PurpleBackground>Submit</PurpleBackground>
            </div>
          </form>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px;
  .main_div {
    gap: 100px;
    display: flex;
    .sub_div_one {
      gap: 20px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      flex: 1;

      .connect_btn {
        display: flex;

        align-items: center;
        gap: 10px;
      }
    }

    .sub_div_two {
      flex: 1;
      padding: 0 30px 30px;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      span {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .label_content {
          display: flex;
          flex-direction: column;
          gap: 10px;
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
        .submit_btn {
          display: flex;
          justify-content: center;
          button {
            padding: 15px 60px;
          }
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 10px 20px;

    .main_div {
      flex-wrap: wrap;
      gap: 20px;
      .sub_div_one {
        text-align: center;
        gap: 20px;
        align-items: center;
        .purpl_cont {
          color: #6c5fd4;
          font-size: 16px;
        }
        span {
          font-size: 22px;
          br {
            display: none;
          }
        }
      }

      .btn_div {
        display: flex;
        justify-content: center;
      }

      .sub_div_two {
        span {
          font-size: 18px;
        }

        form .label_content .schedule_div {
          width: 70%;
          .time_date_btn {
            gap: 10px;
          }
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;
    .main_div {
      gap: 0;
    }
  }
`;
