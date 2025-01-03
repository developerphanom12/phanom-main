import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BuyerLoginForm from '../auth/BuyerLoginForm'
import SellerLoginForm from '../auth/SellerLoginForm'
import BuyerRegisterForm from '../auth/BuyerRegisterForm'
import SellerRegisterForm from '../auth/SellerRegisterForm'
import { useDispatch } from 'react-redux'
import { getAPIAction, postAPIAction, userDataAction } from '../../redux/user/action'  
import URLS from '../../utils/urls'
import { ToastError, ToastSuccess } from '../common/ToastMessage'
import { useNavigate } from 'react-router-dom'
export default function Login () {

    const [isUser, setIsUser] = useState("seller")
    const [loader, setLoader] = useState(false);

  const [skillCategories, setSkillCategories] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });
 
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (loginData.username.length > 2 && loginData.password.length > 2) {
      setLoader(true);

      const url = isUser === "seller" ? URLS.loginSeller : URLS.loginBuyer;

      dispatch(
        postAPIAction(url, loginData, (e, e_msg) => {
          if (e === "error") {
            ToastError(e_msg);
          } else {
            navigate("/");
            localStorage.setItem("token", e.data.token);
            ToastSuccess("Welcome Back!");
            dispatch(userDataAction(e));
          }
          setLoader(false);
        })
      );
    }
  };
  

  const skillsCategoriesData = () =>{
    dispatch(
      getAPIAction(URLS.getListOfCategories, (e,e_msg)=>{
        if(e === "error"){
          ToastError(e_msg)
        }
        else{
          console.log(e.data.message, "data1")
          setSkillCategories(e.data.message)
        }
      })
    );
  };
  useEffect( () =>{
    skillsCategoriesData();
  },[dispatch])

  useEffect(() => {
  }, [skillCategories]);


    console.log(isUser,"uuuuu")
    console.log(skillCategories, "111111111")
  return (
    <Root>
      <div className="login_content">
        {isUser === "seller" ? (
          <SellerLoginForm 
          loginData={loginData}
          handleChange={handleChange}
          handleLogin={handleLogin}
          loader={loader}
          toggle={(e) => setIsUser(e)} 
          />
        ) : isUser === "buyer" ? (
          <BuyerLoginForm 
          toggle={(e) => setIsUser(e)}
          loginData={loginData}
          handleChange={handleChange}
          handleLogin={handleLogin}
          loader={loader}
          />
        ) : isUser === "registerSeller" ? (
          <SellerRegisterForm 
          data = {skillCategories}
          toggle={(e) => setIsUser(e)} 
          />
        ) : isUser === "registerBuyer" ?(
          <BuyerRegisterForm 
          toggle={(e) => setIsUser(e)}
          />
        ):null}
      </div>
    </Root>
  );
}
const Root = styled.div`
  display: flex;
  height: 100%;
  .login_cover {
    flex: 1;
    height: 100%;
    position: relative;

    @media (max-width: 850px) {
      display: none;
    }
  }
 
     .login_content {
    flex: 1;
    display:flex;
    >div{
      background-color: rgba(255, 255, 255, 1);
      padding: 20px 50px;
    
      border-radius: 10px;
      max-width: 100%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: left;
      flex-direction: column;
      text-align: left;
      @media (max-width: 850px) {
      height: 100%;
    }
    }
  }
`;
