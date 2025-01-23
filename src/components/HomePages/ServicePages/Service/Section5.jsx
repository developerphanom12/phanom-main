import React, { useRef } from "react";
import styled from "styled-components";
import { Greydescription, Textwithborder, WhiteContent } from "../../../../Global/GlobalText";
import process from "../../../../assets/Images/process.png";
import vector from "../../../../assets/Images/vector.png";
import react from "../../../../assets/Images/reactt.png";
import github from "../../../../assets/Images/githubb.png";
import Bootstrap from "../../../../assets/Images/bootstrapp.png";
import figma from "../../../../assets/Images/figmaa.png";
import vscodee from "../../../../assets/Images/vscodee.png";
import postman from "../../../../assets/Images/postmann.png";
import chrome from "../../../../assets/Images/chrome.png";
import Slider from "react-slick";

export const Section5 = () => {
  let sliderRef = useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <Root>
      <div className="main_div">
        <div className="sub_div_one">
          <div className="text_border">

           <Textwithborder>
               Our Web
           </Textwithborder>


           <Textwithborder>
          Development
        </Textwithborder>
            
        <Textwithborder>
          Services
       </Textwithborder>

       </div>


          <Greydescription>
            We create custom, user-friendly websites to elevate your brand and
            deliver exceptional experiences. From e-commerce to responsive apps,
            our expert team uses cutting-edge technology for outstanding
            results.
          </Greydescription>

          <div className="tecnology_types">
            <div className="sub_technology_type">
              <img src={vector} alt="devops" />
              <WhiteContent>DevOps </WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={github} alt="github" />
              <WhiteContent>Github</WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={react} alt="vector" />
              <WhiteContent>React</WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={Bootstrap} alt="bootstrap" />
              <WhiteContent>Bootstrap</WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={figma} alt="figma" />
              <WhiteContent>Figma</WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={vscodee} alt="vscode" />
              <WhiteContent>VS Code</WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={postman} alt="postman" />
              <WhiteContent>Postman</WhiteContent>
            </div>

            <div className="sub_technology_type">
              <img src={chrome} alt="chrome" />
              <WhiteContent>Chrome</WhiteContent>
            </div>
          </div>

          <div className="slider-container">
            <Slider {...settings}>
              <div className="img_logo">
                <img src={vector} alt="devops" />
                <WhiteContent>DevOps </WhiteContent>
              </div>

              <div className="img_logo">
                <img src={github} alt="github" />
                <WhiteContent>Github</WhiteContent>
              </div>

              <div className="img_logo">
                <img src={react} alt="vector" />
                <WhiteContent>React</WhiteContent>
              </div>

              <div className="img_logo">
                <img src={Bootstrap} alt="bootstrap" />
                <WhiteContent>Bootstrap</WhiteContent>
              </div>

              <div className="img_logo">
                <img src={figma} alt="figma" />
                <WhiteContent>Figma</WhiteContent>
              </div>

              <div className="img_logo">
                <img src={vscodee} alt="vscode" />
                <WhiteContent>VS Code</WhiteContent>
              </div>

              <div className="img_logo">
                <img src={postman} alt="postman" />
                <WhiteContent>Postman</WhiteContent>
              </div>

              <div className="img_logo">
                <img src={chrome} alt="chrome" />
                <WhiteContent>Chrome</WhiteContent>
              </div>
            </Slider>
          </div>
        </div>
        <div className="sub_div_two">
          <img src={process} alt="process" />
        </div>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px;

  .main_div {
    display: flex;
    gap: 20px;
    .sub_div_one {
      width: 55%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .text_border{
      display:flex;
      gap:5px;
      flex-direction:column;
      }

      .tecnology_types {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        .sub_technology_type {
          border-radius: 10px;
          background-color: #6c5fd4;
          padding: 20px;
          width: 22%;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 5px;
        }
      }

      .slider-container {
        display: none;
        .img_logo {
          background-color: #6c5fd4;
          padding: 20px;
          width: 40% !important;
          display: flex !important;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          gap: 10px;
        }
      }
    }

    .sub_div_two {
      display: flex;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 10px 20px;

    .main_div {
      flex-direction: column;
      text-align: center;

      .sub_div_one {
        width: 100%;
        gap: 20px;
           .text_border {
    flex-direction: row;
    justify-content: center;
   flex-wrap: wrap;
}
        .slider-container {
          display: block;
          padding: 20px 0;
          .slick-slide img {
            width: 50px;
            height: 50px;
          }
          .slick-track {
            display: flex;
            gap: 20px;
          }
          .img_logo {
            width: 100% !important;
          }
        }

        .tecnology_types {
          display: none;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 10px 20px;
    .main_div {
      flex-direction: column;
      text-align: center;

      .sub_div_one {
        width: 100%;
        gap: 20px;
  .text_border {
    flex-direction: row;
    justify-content: center;
}

        .slider-container {
          display: none;
        }

        .text-with-border-shadow {
          br {
            display: none;
          }
        }

        .tecnology_types {
          display: flex;
          justify-content: center;
        }
      }

      .sub_div_two {
        display: flex;
        justify-content: center;
        img {
          width: 60%;
        }
      }
    }
  }
`;
