import styled from "styled-components";

export const InputLabel = styled.label`
  font-family:"Poppins", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  text-align: left;
  color: #353535;
`;

export const InputModalLabel = styled.label`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  color: #FFFFFF;
`;


export const InputModalGreyLabel = styled.label`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  color:#666666;
`;

export const InputType = styled.input`
  border-radius: 12px;
  border: 1px solid #CACACA;
  padding: 15px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  color:#353535;
  ::placeholder{
    color:#777777;
  }`;


export const InputModalType = styled.input`
  border-radius: 12px;
  border: 1px solid #CACACA;
  padding: 15px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
  color:#666666;
  ::placeholder{
    color:#666666;
  }`;

export const InputModalTextarea = styled.textarea`
  border-radius:12px;
  border:1px solid #CACACA;
  padding:15px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
  color:#666666;
  width: 100%; 
  resize: vertical; 
  font-weight: 500;
  ::placeholder{
    color:#666666;
  }`;

export const InputTextarea = styled.textarea`
border-radius:12px;
border:1px solid #CACACA;
padding:15px;
font-family: "Poppins", sans-serif;
font-size: 12px;
color:#353535;
width: 100%; 
resize: vertical; 
::placeholder{
  color:black;
}`;




export const SelectBorder = styled.select`
  border:1px solid #66666659;
  border-radius:12px;
  padding:15px;
  font-family:"Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #333333;
`;


export const SelectModalBorder = styled.select`
  border:1px solid #66666659;
  border-radius:12px;
  padding:15px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  color: #666666;
`;
