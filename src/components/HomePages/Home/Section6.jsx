import React from 'react'
import styled from 'styled-components';
import { Blackdescription, BlackHeading, GradientHeading, Heading } from '../../../Global/GlobalText';
import horizontalframe from "../../../assets/Images/horizontalframe.png";
import vertically from "../../../assets/Images/vertically.png";



export const Section6 = () => {
  return (

    <Root>
            <div className='main_div'>
                   <span>
                        <Heading>Our</Heading>
                        <GradientHeading> Mission</GradientHeading>
                   </span>


                    <Blackdescription>
                            Empowering businesses with innovation, crafting bespoke solutions, and driving industry leadership.
                    </Blackdescription>


              <div className='sub_main_div'>
                      <img src={horizontalframe} alt="horizontalframe" className='horizont' />
                      <img src={vertically} alt="vertically" className='verticall' />


                      <div className='pointer_main_div'>
                        <div className='pointer_sub_main_div'>
                            <BlackHeading>Innovate</BlackHeading>
                             <Blackdescription>Harnessing the power of technology to bring fresh, groundbreaking ideas to life.
                             Stay ahead with our visionary approach to problem-solving and growth.</Blackdescription>
                        </div>

                        <div className='pointer_sub_main_div'>
                            <BlackHeading>Create</BlackHeading>
                             <Blackdescription>
                             Designing and developing solutions that drive progress and meet unique challenges.
                             Build the future with tailored solutions that redefine possibilities.
                             </Blackdescription>
                        </div>

                        <div className='pointer_sub_main_div'>
                            <BlackHeading>Dominate</BlackHeading>
                             <Blackdescription>
                             Empowering businesses to lead their industries with robust, scalable IT strategies.
                             Achieve unmatched success with our expertise guiding your digital journey.
                             </Blackdescription>
                        </div>

                      </div>


              </div>


            </div>

    </Root>


  )
}




const Root = styled.section`
 padding: 20px 100px;
.main_div{
    display:flex;
    flex-direction:column;
    gap:20px;
    align-items:center;
  
  .sub_main_div{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    img {
         width: 70%;
        }   
        .verticall{
          display: none;
        }
    .pointer_main_div{
        display:flex;
        gap:20px;
        margin-top: -10px;
        .pointer_sub_main_div{
               flex:1;
               padding:60px;
               display: flex;
               flex-direction: column;
               gap:20px;
               align-items: center;
               box-shadow: 0px 4px 16px 2px #00000040;
               text-align: center;

        }

    }
  
    

  }

  


}


@media (max-width: 567px) {

  padding: 30px 20px;


 .main_div {
text-align: center;
 .sub_main_div{
  flex-direction: row;
  margin-left: -10px;
  
  .horizont{
    display: none;
  }
  .verticall{
    display: block;
        width: 15%;
        height: 40rem;
        margin-top:30px;
        }

  .pointer_main_div {
 flex-direction: column;
 margin-left: -7px;
 .pointer_sub_main_div{
  padding: 40px;
 }
}

 }

}
}


@media (min-width: 567px) and (max-width: 1024px) {
  padding:0  20px 20px;

 .main_div {
    text-align: center;
.sub_main_div{

margin-top: 0;

.pointer_main_div{
  margin-top: -4px;

.pointer_sub_main_div {
  
    padding: 9px;
}
}
 }
}


}


`;