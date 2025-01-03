import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import * as Yup from "yup";
import { ToastError, ToastSuccess } from '../common/ToastMessage';
import URLS from '../../utils/urls';
import { postAPIAction, userDataAction } from '../../redux/user/action';
import seller from '../../assets/Images/seller.png'
import pattern from "../../assets/Images/pattern.png";
import { Helmet } from "react-helmet";
import userIcon from "../../assets/icons/user.png"
import passwordIcon from "../../assets/icons/password.png"
import Input from "../common/Input";
import Button from "../common/Button";


const SellerRegisterForm = ({ toggle, data }) => {
  const [formValues, setFormValues] = useState({
    username: "",
    phone_number: "",
    city: "",
    education: "",
    category_id: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phone_number: Yup.string().required("Phone Number is required"),
    city: Yup.string().required("city is required"),
    education: Yup.string().required("education is required"),
    category_id: Yup.number().required("skill is required"),
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
    const isValid = await validateForm();
    if (isValid) {
      setSubmitted(true);
      dispatch(
        postAPIAction(URLS.registerSeller, formValues, (e, e_msg) => {
          if (e === "error") {
            ToastError(e_msg);
          } else {
            ToastSuccess("Seller Account Created SuccessFully, Login to Continue");
            navigate("/login")
            toggle("buyer")
            dispatch(userDataAction(e));
            setFormValues({
              username: "",
              phone_number: "",
              city: "",
              education: "",
              category_id: "",
              email: "",
              password: "",
            })
          }
        })
      )
    } else {
      setSubmitted(false);
    }
  };

 
  console.log("formValues", formValues)
  console.log(data, "categoriesssssss")

  return (
    <Root>
      <div className="content_div">
        <div className='upper_div'>
        <Helmet>
          <title>Signup as Seller - Phanom Professionals</title>
          <meta
            name="description"
            content="Sign in as a Seller to access exclusive features. Phanom Professionals provides a seamless Selling experience."
          />
        </Helmet>
        <h2>Sign up your Seller Account - Phanom Professionals</h2>
        <p>Please enter your details.</p>
        <div className="img_div">
          <img src={seller} alt="seller_img" />
        </div>
        </div>
        <div className='lower_div'>
        <div className="input_div">
          <Input placeholder={"Name"}
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            icon={userIcon}
          />
          <Input placeholder={"Phone Number"}
            type="number"
            name="phone_number"
            value={formValues.phone_number}
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
          <Input placeholder={"City"}
            type="text"
            name="city"
            value={formValues.city}
            onChange={handleChange}
            icon={userIcon}
          />
          <Input placeholder={"Education"}
            type="text"
            name="education"
            value={formValues.education}
            onChange={handleChange}
            icon={userIcon}
          />
          <SelectWrapper>
        <select
          name="category_id"
          value={formValues.category_id}  
          onChange={handleChange}
        >
          <option value="">Select a skill</option>

          {data && data.map((skills, i) => (
            <option key={i} value={skills.category_id}>
              {skills.category_name}
            </option>
          ))}
        </select>
          </SelectWrapper>
         
        </div>
        <Button type={"first"} className="primary_button" onClick={handleSubmit}>Sign Up</Button>

        <div className="btn_div">
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

export default SellerRegisterForm


const Root = styled.div`

.content_div {
    width: 100%;
    display: flex;

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

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #dfe1e6;
  padding: 6px;
  height: 45px;
  gap: 8px;
  width: 100%;
  border-radius: 12px;
  select {
    font-size: 16px;
    border: none;
    color: #7c889c;
    background-color: transparent;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 0;
    cursor: pointer;
  }

  select:focus {
    outline: none;
  }
  
  /* Optional: Style the label to be similar to the input field */
  label {
    font-size: 14px;
    color: #7c889c;
  }
`;

