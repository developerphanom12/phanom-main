import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import log1 from "../../../../assets/Images/log1.png";

import log2 from "../../../../assets/Images/log2.png";

import log3 from "../../../../assets/Images/log3.png";

import log4 from "../../../../assets/Images/log4.png";

import log5 from "../../../../assets/Images/log5.png";

export const Section3 = () => {
  let sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <Root>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="img_logo">
            <img src={log1} alt="Redefining web development" />
          </div>
          <div className="img_logo">
            <img src={log2} alt="Redefining web development" />
          </div>

          <div className="img_logo">
            <img src={log4} alt="Redefining web development" />
          </div>
          <div className="img_logo">
            <img src={log5} alt="Redefining web development" />
          </div>
          <div className="img_logo">
            <img src={log3} alt="Redefining web development" />
          </div>
        </Slider>
      </div>
    </Root>
  );
};

const Root = styled.section`
  padding: 30px 100px;

  @media (max-width: 567px) {
    padding: 30px 20px;  
  }


  @media (min-width: 567px) and (max-width: 1024px) {
    padding: 30px 20px;




  }


`;
