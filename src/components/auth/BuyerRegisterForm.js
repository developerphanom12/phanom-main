import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import * as Yup from "yup";
import { ToastError, ToastSuccess } from '../common/ToastMessage';
import URLS from '../../utils/urls';
import { postAPIAction, userDataAction } from '../../redux/user/action';
import buyer from "../../assets/Images/buyer.png";
import userIcon from "../../assets/icons/user.png"
import passwordIcon from "../../assets/icons/password.png"
import { Helmet } from "react-helmet";
import Input from "../common/Input";
import Button from "../common/Button";
import pattern from "../../assets/Images/pattern.png";
import defaultPNG from "../../assets/Images/Profile-PNG-File.png"

const BuyerRegisterForm = ({ toggle }) => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    image:null,
  });
  const [imagePreview, setImagePreview] = useState(defaultPNG);

  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", formValues.image);
    data.append("username", formValues.username);
    data.append("email", formValues.email);
    data.append("password", formValues.password);
    const isValid = await validateForm();
    if (isValid) {
      setSubmitted(true);
      dispatch(
        postAPIAction(URLS.registerBuyer, data, (e, e_msg) => {
          if (e === "error") {
            ToastError(e_msg);
          } else {
            ToastSuccess("Buyer Account Created SuccessFully, Login to Continue");
            navigate("/login")
            toggle("buyer")
            dispatch(userDataAction(e));
            setFormValues({
              username: "",
              email: "",
              password: "",
              image:null
            
            })
          }
        })
      )
    } else {
      setSubmitted(false);
    }
  };

  const registerDataChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormValues({ ...formValues, image: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormValues({ ...formValues, image: "" });
      setImagePreview("");
    }
  };


  console.log("formValues", formValues)
  return (
    <Root>
      <div className="content_div">
        <div className='upper_div' >
          <Helmet>
            <title>Sign in as Buyer - Phanom Professionals</title>
            <meta
              name="description"
              content="Sign in as a Seller to access exclusive features. Phanom Professionals provides a seamless Selling experience."
            />
          </Helmet>
          <h2>Sign up your Buyer Account - Phanom Professionals</h2>
          <p>Please enter your details.</p>
          <div className="img_div">
            <img src={buyer} alt="buyer_img" />
          </div>

        </div>
        <div className='lower_div' >
          <div className="input_div">
             <ImageWrapper>
              <img src={imagePreview} alt="Profile Preview" />
              <label htmlFor="imageInput">Upload Image</label>
              <input 
                type="file"
                name="image"
                id="imageInput" 
                accept="image/*"
                onChange={registerDataChange}
              />
            </ImageWrapper>
            <Input placeholder={"Name"}
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              icon={userIcon}
            />
            <Input placeholder={"Email"}
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              icon={userIcon}
            />
            <Input placeholder={"Password"}
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              icon={passwordIcon}
            />

          </div>
          <Button type={"first"} className="primary_button" onClick={handleSubmit}>Login</Button>

          <div className="btn_div">
            <Button
              type={"third"}
              icon={userIcon}
              onClick={() => toggle("registerSeller")}
            >
              Sign up as Seller
            </Button>
            <Button
              type={"third"}
              icon={userIcon}
              onClick={() => toggle("buyer")}
            >
              Login as Buyer
            </Button>
            <Button
              type={"third"}
              icon={userIcon}
              onClick={() => toggle("seller")}
            >
              Login as Seller
            </Button>
          </div>
        </div>
      </div>
    </Root>
  )
}


export default BuyerRegisterForm


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

const ImageWrapper = styled.div`

display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  > img {
    width: 5vmax;
    height: 5vmax;
    border-radius: 50%;
    object-fit: cover;
  }

  > input {
    display: none; /* Hide the default file input */
  }

  > label {
    cursor: pointer;
    font-size: 0.9rem;
    background-color: #fff;
    color: #333;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  > label:hover {
    background-color: #f0f0f0;
  }
`;