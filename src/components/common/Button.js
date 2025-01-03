import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return (
    <Root>
      {props.type === "first" ? (
        <First onClick={props.onClick}>
          {props.icon && <img src={props.icon} alt="icon" />}
          {props.children}
        </First>
      ) : props.type === "second" ? (
        <Second onClick={props.onClick}>
          {props.icon && <img src={props.icon} alt="icon" />}
          {props.children}
        </Second>
      ) : props.type === "third" ? (
        <Third onClick={props.onClick}>
          {props.icon && <img src={props.icon} alt="icon" />}
          {props.children}
        </Third>
      ) : (
        ""
      )}
    </Root>
  );
}

const Root = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const First = styled.button`
  background-color: #227fa1;
  color: #ffffff;
  border: none;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  img {
    height: 20px;
    color: white;
  }
`;

const Second = styled.button`
  color: #227fa1;
  background-color: transparent;
  border: 1px solid rgba(199, 199, 199, 1);
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  img {
    height: 20px;
    color: white;
  }
`;

const Third = styled.button`
  color: #000000;
  background-color: transparent;
  border: 1px solid rgba(199, 199, 199, 1);
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  img {
    height: 20px;
    color: black;
  }
`;
