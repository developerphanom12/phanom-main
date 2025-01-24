import React from "react";
import styled from "styled-components";
import {
  Subblackdescription,
  Subdescription,
  TestHeading,
  TextBorderShadow,
  WhiteDescription,
} from "../../../../Global/GlobalText";
import testinew from "../../../../assets/Images/testinew.png";
import Slider from "react-slick";
import testnew from "../../../../assets/Images/testnew.png";
import testnew2 from "../../../../assets/Images/testnew2.png";

export const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Root>
      <div className="main_div">
        <TextBorderShadow>Testimonials</TextBorderShadow>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="slide_main">
                <div className="sub_slide_main_one">
                  <div className="video_div">
                    <img src={testnew} alt="testnew" />
                  </div>
                  <div className="main_client_cont">
                    <div className="client_cont">
                      <WhiteDescription>
                        {" "}
                        What our client say
                        <br /> about us?
                      </WhiteDescription>
                    </div>

                    <div className="client_cont_white">
                      <TestHeading>Peter Parker</TestHeading>
                      <Subdescription>
                        University of Cambridge, UK
                      </Subdescription>
                      <Subblackdescription style={{ marginTop: "10px" }}>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia conse
                      </Subblackdescription>
                    </div>
                  </div>
                </div>

                <div className="sub_slide_main">
                  <div className="sub_slide_main_two">
                    <img src={testnew2} alt="testnew2" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="slide_main">
                <div className="sub_slide_main_one">
                  <div className="video_div">
                    <img src={testnew} alt="testnew" />
                  </div>
                  <div className="main_client_cont">
                    <div className="client_cont">
                      <WhiteDescription>
                        {" "}
                        What our client say
                        <br /> about us?
                      </WhiteDescription>
                    </div>

                    <div className="client_cont_white">
                      <TestHeading>Peter Parker</TestHeading>
                      <Subdescription>
                        University of Cambridge, UK
                      </Subdescription>
                      <Subblackdescription style={{ marginTop: "10px" }}>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia conse
                      </Subblackdescription>
                    </div>
                  </div>
                </div>

                <div className="sub_slide_main">
                  <div className="sub_slide_main_two">
                    <img src={testnew2} alt="testnew2" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 0;

  .main_div {
    background-image: url(${testinew});
    background-size: 100%;

    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .text-with-border-shadow {
      font-family: "Poppins", sans-serif;
      font-size: 40px;
      font-weight: 600;
      color: white;
      line-height: 1.2;
      -webkit-text-stroke: 1px #6c5fd4;
      -webkit-text-fill-color: white;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }

    .slider-container {
      margin: 0 24%;

      .slide_main {
        display: flex;
        gap: 10px;
        .sub_slide_main_one {
          width: 70%;
          display: flex;
          gap: 30px;
          .video_div {
            width: 40%;
          }
          .main_client_cont {
            display: flex;
            flex-direction: column;
            gap: 20px;
            .client_cont {
              background-color: #b985fd;
              border-radius: 15px;
              text-align: left;
              padding: 10px 20px;
            
              margin-top: 50px;
              text-transform: uppercase;
            }

            .client_cont_white {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
              padding: 20px 20px;
              border-radius: 10px;
              background-color: #fff;
              box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2),
                15px 15px 15px rgba(0, 0, 0, 0.1),
                inset -5px -5px 5px rgba(255, 255, 255, 0.2),
                inset 5px 5px 5px rgba(0, 0, 0, 0.1);
              margin-left: -72px;
            }
          }
        }
        .sub_slide_main {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30%;
        }
        .sub_slide_main_two {
          position: relative;
          height: 215px;
        }

        .sub_slide_main_two img {
          opacity: 0.3; /* Image opacity */
        }

        .sub_slide_main_two::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(
            62,
            102,
            223,
            0.3
          ); /* Transparent blue background */
          pointer-events: none; /* Allow interaction with the image */
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 30px 0 20px 30px;
    .main_div {
      background-repeat: no-repeat;
      .slider-container {
        margin: 0;
        .slide_main {
          padding-bottom:10px;
          .sub_slide_main_one {
            flex-direction: column;
            gap: 0;
            .video_div {
              img {
                width: 250px;
              }
            }

            .main_client_cont {
              .client_cont {
                display: none;
              }

              .client_cont_white {
                margin-left: 0;
                padding: 10px 20px;
              }
            }
          }

          .sub_slide_main_two {
            height: 150px;
            img {
              height: 150px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 0 20px 30px;
    .main_div {
      background-repeat: no-repeat;

      .slider-container {
        margin: 0%;
      }
    }
  }
`;
