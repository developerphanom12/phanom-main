import React from "react";
import styled from "styled-components";

export default function Input(props) {
  return (
    <Root>
      {props.icon && <img src={props.icon} alt="icon"/>}
      <input {...props}></input>
    </Root>
  );    
}
const Root = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #dfe1e6;
  padding: 6px;
  height: 45px;
  gap: 8px;
  width: 100%;
  border-radius: 12px;
  img{
    height: 20px;
    width: auto;
  }
  input {
    font-size: 16px;
    border: none;
    color: #7c889c;
  }
  input:focus {
    outline: none;
  }
`;
