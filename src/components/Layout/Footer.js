import React from 'react'
import newLogo from '../../assets/Images/newloggg.png'
import styled from "styled-components";
import {
    FaFacebook,
    FaInstagram,
    FaPinterest,
    FaXTwitter,
  } from "react-icons/fa6";
  import { IoLogoLinkedin } from "react-icons/io";
  import { secGradient } from "../../GlobalStyle";

  const Footer = () => {
    return (
        <Root>

        <div className="footer_base">
          <div className="logo">
            <h4>
              <img src={newLogo} alt="Img of phanom" />
            </h4>{" "}
            <p>Phanom Techno Private Ltd.2024</p>
          </div>
          <div className="social_media">
            <ul>
              <li>
                {" "}
                <a
                  href="https://www.facebook.com/phanom.professionals/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/phanomprofessionalsofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/phanom-professionals/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin />
                </a>
                <a
                  href="https://in.pinterest.com/phanom_professionals/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterest />
                </a>
                <a
                  href="https://mobile.twitter.com/phanompro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>
            <div className="foot">
            <a href="/blogs">Our Blogs</a>
            <a href="/case-study">Case Study</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/refund-policy">Refund Policy</a>
              <a href="/term-condition">Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </Root>
    );
  }
  
  export default Footer

  const Root = styled.section`
  padding: 10px 20px;

  .container-fluid {
    margin-bottom: 30px;
    h3 {
      font-weight: 300;
      width: 100%;
      text-align: center;
      margin: 20px 0px;
    }
    .col-lg-8.inputy_btn {
      display: flex;
      margin: 10px 30px;
      width: fit-content;
    }
    .col-lg-8 {
      text-align: center;
    }
    input {
      padding: 12px;
      background-color: ${secGradient};
      margin: 0;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border: 1px solid #13c9df;
      width: 34vw;
      outline: none;
      color: #000;
    }
    button {
      padding: 12px 20px;
      border: 1px solid #13c9df;
      background-color: #13c9df;
      color: #fff;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    input::placeholder {
      background-color: ${secGradient};
      color: #6e6e6e;
      padding: 10px 15px;
      line-height: 1.5;
    }
  }
  .footer_div {
    display: flex;
    justify-content: space-evenly;
    .part1 {
      display: flex;
      flex-direction: column;
      padding: 0px;
      @media (max-width: 567px) {
        padding: 0px 4px;
      }
      h6 {
        padding: 0px 0px 20px;
        color: #404145;
        margin: 0;
        font-weight: 700;
        @media (max-width: 567px) {
          font-size: 12px;
        }
      }
      ul {
        list-style: none;
        padding: 0;

        li {
          padding: 10px 0px;
          color: #74767e;
          font-size: 16px;
          @media (max-width: 567px) {
            font-size: 10px;
          }
        }
      }
    }
  }
  .footer_base {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /*border-top: 1px solid lightgray;*/
    padding: 20px 20px 0px;
    @media (max-width: 576px) {
      flex-direction: column;
      padding: 0px;
    }
    .logo {
      display: flex;
      align-items: center;
      img {
        width: 170px;
      }
      @media (max-width: 576px) {
        width: 100%;
        justify-content: space-between;
         flex-direction: column;
      }
      h4 {
        font-weight: 600;
        color: #74767e;
        margin: 0px;
      }
      p {
        display: flex;
        align-items: end;
        color: #74767e;
        margin: 0px 0px 0px 24px;
        font-size: 14px;
      }
    }

    .social_media {
      display: flex;
      color: #74767e;
      align-items: center;
      @media (max-width: 576px) {
        width: 100%;
        justify-content: space-between;
        margin-top: 10px;
         flex-direction: column;
      }

      ul {
        list-style: none;
        padding-right: 20px;
        margin: 0;
        a {
          color: #74767e;
        }
        @media (max-width: 576px) {
          padding: 0px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
        margin: 10px;

        @media (max-width: 576px) {
          margin: 5px;
          width: 17px;
          height: 17px;
        }
      }
      .foot {
        display: flex;
        gap: 12px;
        button {
          border: none;
          background-color: white;
          font-size: 15px;
          color: #74767e;
          font-weight: 600;
          svg {
            width: 16px;
            height: 16px;
            margin: 2px 2px 3px 2px;
          }
        }
        .human_icon {
          border: 1px solid #74767e;
          border-radius: 50px;
          margin-left: 10px;
          svg {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }

  @media (max-width: 576px) {

    .footer_base .logo img {
      width: 150px;
    }

   .footer_base .logo p {
      margin:0;
  }

.footer_base .social_media .foot {
  display: flex;
        gap: 10px;
        font-size: 13px;
        margin-top: 10px;
        flex-wrap: wrap;
        justify-content: center;

}
  }

@media (min-width: 576px) and (max-width: 992px){
 .footer_base {
flex-direction: column;  
}

 .footer_base {
     padding: 0px 20px 0px;
}

.footer_base .social_media {

    flex-direction: column;
}


}
`;

  