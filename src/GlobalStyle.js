import styled from "styled-components";

export const ToggleButton = styled.button`
  padding: 5px 12px;
  font-size: 14px;
  margin: 10px;
  border: none;
  cursor: pointer;
  outline: none;
  color: white;
  background-color: ${({ toggle }) => (toggle ? "#45a049" : "gray")};
  border-radius: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ toggle }) => (toggle ? "#1dbf73" : "#1dbf73")};
  }
`;

export const GigButton = styled.button`
  border: none;
  background-color: transparent;
  color: #404145;
  padding: 10px;
`;

export const CreateButton = styled.button`
  background-color: #1dbf73;
  font-weight: 700;
  color: #fff !important;
  border: 1px solid transparent;
  padding: 7px 10px;
  font-size: 12px;
  border-radius: 4px;
  &:hover {
    background: #19a463;
  }
`;

export const BackButton = styled.button`
  color: #1dbf73;
  font-weight: 700;
  background-color: #fff !important;
  border: 1px solid #1dbf73;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  &:hover {
    background-color: #1dbf73 !important;
    color: #fff;
  }
`;

export const BlueButton = styled.button`
  border: none;
  background-color: transparent;
  color: #446ee7;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  padding: 0px 7px;
  font-weight: 600;
`;

export const BlackButton = styled.button`
  border: 1px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  padding: 12px 24px;
  position: relative;
  text-align: center;
  text-decoration: none;
`;

export const PreviewButton = styled.button`
  width: 100%;
  padding: 7px 0px;
  background-color: #fff;
  border: 1px solid #62646a;
  color: #62646a;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
`;

export const CancleButton = styled.button`
  color: #1dbf73;
  border: 1px solid #1dbf73;
  background-color: #fff;
  font-weight: 700;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  &:hover {
    background: #19a463;
    color: #fff;
  }
`;

export const TextInput = styled.input`
  font-size: 14px;
  color: #62646a;
  border: transparent;
  outline: none;
  background-color: transparent;
`;

export const primaryColor = '#13c9df';
export const primaryGradient = 'linear-gradient(45deg, #cd1ce6, #13c9df, #9059e4)';
export const secGradient = 'linear-gradient(70deg, #cd1ce6, #13c9df, #9059e4)';
export const fourGradient = 'linear-gradient( to bottom right,  #cd1ce6,  #13c9df,  #147888)';

export const StyledText = styled.div`
  background: ${secGradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;