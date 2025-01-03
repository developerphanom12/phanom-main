import React, { useState } from 'react'
import Input from "../common/Input";
import Button from "../common/Button";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import pattern from "../../assets/Images/pattern.png";
import buyer from "../../assets/Images/buyer.png";
import userIcon from "../../assets/icons/user.png"
import passwordIcon from "../../assets/icons/password.png"


const BuyerLoginForm = ({ loginData, handleChange, handleLogin, loader, toggle }) => {

  return (
    <Root>
      <div className="content_div">
       <div className='upper_div'>
       <Helmet>
          <title>Sign in as Buyer - Phanom Professionals</title>
          <meta
            name="description"
            content="Sign in as a Seller to access exclusive features. Phanom Professionals provides a seamless Selling experience."
          />
        </Helmet>
        <h2>Log in to your Account as Buyer - Phanom Professionals</h2>
        <p>Welcome back! Please enter your details.</p>

        <div className="img_div">
          <img src={buyer} alt="buyer_img" />
        </div>
       </div>

       <div className='lower_div' >
       <div className="input_div">
          <Input placeholder={"username"}
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            icon={userIcon}
          />
          <Input placeholder={"Password"}
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            icon={passwordIcon}
          />
        </div>
        <div className="frgt_div">
          <button className="frgt_btn">Forgot Password?</button>
        </div>

        <Button type={"first"} onClick={handleLogin}>Login</Button>
        <p className="hr-text">or continue with email</p>

        <div className="btn_div">
          <Button
            type={"third"}
            icon={userIcon}
            onClick={() => toggle("seller")}
          >
            Login as Seller
          </Button>
          <Button
            type={"third"}
            icon={userIcon}
            onClick={() => toggle("registerBuyer")}
          >
            Sign up as Buyer
          </Button>
          <Button
            type={"third"}
            icon={userIcon}
            onClick={() => toggle("registerSeller")}
          >
            Sign up as Seller
          </Button>
        </div>
       </div>

      </div>
    </Root>
  )
}

export default BuyerLoginForm

const Root = styled.div`

.content_div {
    width: 100%;
    display:flex;
      p{
    margin-top: 1rem;
    }
  }
    
 .img_div {
    width: 100%;
    height: 610px;
    display: flex;
    justify-content: center;
      background-image:url(${pattern});
    align-items: center;
    
    background-size: 100% 100%;
    img {
      height: 450px;
      object-fit: cover;
    }

  .input_div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 15px 0;
  }

  .frgt_div {
    display: flex;
    justify-content: right;

    .frgt_btn {
      color: rgba(32, 159, 187, 1);
      border: none;
      background-color: transparent;
      margin: 15px 0px;
    }
  }

  .hr-text {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 20px 0px;
  }

  .hr-text::before,
  .hr-text::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #000;
  }

  .hr-text::before {
    margin-right: 10px;
  }

  .hr-text::after {
    margin-left: 10px;
  }
  .btn_div {
    display: flex;
    width: 100%;
    gap: 10px;
    button {
      flex: 1;
    }
  }
`;
