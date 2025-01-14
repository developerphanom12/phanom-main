import React from 'react'
import styled from 'styled-components';
import { BigHeading, Blackdescription,  MainHeading } from '../../../Global/GlobalText';
import smileboy from "../../../assets/Images/smileboy.png"
import phanomlogo from "../../../assets/Images/phanomlogo.png"
import { PurpleThirdBackground } from '../../../Global/GlobalButton';




export const Section7 = () => {
  return (

    <Root>

            <div className='main_div'>

                <div className='sub_main_div_one'>

                    <MainHeading>Suraiya J.</MainHeading>
                    <Blackdescription>Phanom Guide</Blackdescription>
                    <div className='image_div'>
                       <img src={smileboy} alt="Profile"/>
                    </div>

                </div>



                <div className='sub_main_div_two'>
                    <div className='logo_content'>

                    <img src={phanomlogo} alt="logo"/>

                      <MainHeading>Guides</MainHeading>


                    </div>

                    <BigHeading>We love to help. Seriously.</BigHeading>
                    <Blackdescription>
                        Still not sure what you need? We’re happy to help, even if 
                        you’re not a customer. Contact us and we'll chat — or get back to you as soon as we can.
                    </Blackdescription>
                    <div>
                       <PurpleThirdBackground>Learn More</PurpleThirdBackground>
                    </div>


                </div>

            </div>

    </Root>


  )
}




const Root = styled.section`
margin:30px 0;

.main_div{
    display: flex;
    flex-wrap: wrap;
    gap:20px;
    padding:40px 70px 0;
    background: linear-gradient(45deg, #e9b2f6, #d8c4f6, #c5d5f5);


  .sub_main_div_one{
     flex:1;
     .image_div{
      display: flex;
      justify-content: center;
      margin-top: -40px;
     }
  }

  .sub_main_div_two{
     flex:1;
     display:flex;
     flex-direction: column;
     gap:30px;
     justify-content: center;

     .logo_content{
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom:10px;

     }

  }

  


}


@media (max-width: 567px) {
}


@media (min-width: 567px) and (max-width: 1024px) {



}


`;