import React from 'react'
import styled from 'styled-components';
import { Subdescription, Subpurpledescription } from '../../../../Global/GlobalText';
import { IoIosArrowForward } from "react-icons/io";

export const Section1 = () => {
  return (
    <Root>
      <div className='main_div'>

        <a href="/"><Subdescription>Home</Subdescription></a>
        <IoIosArrowForward style={{color:"667085"}}/>

        <a href="/"><Subdescription>Service</Subdescription></a>

        <IoIosArrowForward   style={{color:"6C5FD4"}}/>

        <a href="/"><Subpurpledescription>Development</Subpurpledescription></a>

        
      </div>
    </Root>
  )
}


const Root = styled.section`
  padding: 20px 100px;
  .main_div{
    display: flex;
    gap:10px;
    a{
      text-decoration: none;
    }
  }
  
  
`;