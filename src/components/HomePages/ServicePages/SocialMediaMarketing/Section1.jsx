import React from 'react'
import styled from 'styled-components';
import { Subdescription, Subpurpledescription } from '../../../../Global/GlobalText';
import { IoIosArrowForward } from "react-icons/io";

export const Section1 = () => {
  return (
    <Root>
      <div className='main_div'>

        <a href="/home"><Subdescription>Home</Subdescription></a>
        <IoIosArrowForward style={{color:"667085"}}/>

       <Subdescription>Service</Subdescription>

        <IoIosArrowForward   style={{color:"6C5FD4"}}/>
        <a href="/offshore-social-media-marketing-agency-in-india/"><Subpurpledescription>Social Media Marketing</Subpurpledescription></a>

        
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
  

  @media (max-width: 567px) {
    padding:0;
  .main_div{
    display: none;
  }
}


@media (min-width: 567px) and (max-width: 1024px) {

  padding: 20px;

}
  
`;