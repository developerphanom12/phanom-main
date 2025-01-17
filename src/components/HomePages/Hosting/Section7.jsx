import React from 'react'
import styled from 'styled-components';
import { BigHeading, Blackdescription,  MainHeading } from '../../../Global/GlobalText';
import lala from "../../../assets/Images/lala.png"
import phanomlogo from "../../../assets/Images/phanomlogo.png"
import { PurpleThirdBackground } from '../../../Global/GlobalButton';




export const Section7 = () => {
  return (

    <Root>

            <div className='main_div'>

                <div className='sub_main_div_one'>

                    <MainHeading>Adarsh</MainHeading>
                    <Blackdescription>Phanom Guide</Blackdescription>
                    <div className='image_div'>
                       <img src={lala} alt="Lala Profile"/>
                    </div>

                </div>



                <div className='sub_main_div_two'>
                    <div className='logo_content'>

                    <img src={phanomlogo} alt="logo"/>

                      <MainHeading>Guides</MainHeading>


                    </div>

                    <BigHeading>We love to help. Seriously.</BigHeading>

                    <Blackdescription>
                          With a dedicated account manager and technical team always on standby, we ensure a seamless experience from day one. We’re not just service providers; we’re your technology partners.
                    </Blackdescription>
                    
                    <div>
                       <PurpleThirdBackground>Get Help</PurpleThirdBackground>
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
      margin-top: -100px;
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

.main_div {
  padding:0;
  flex-direction: column;
  background: unset;
.sub_main_div_one {
  padding:20px 20px 0;
  background: linear-gradient(45deg, #e9b2f6, #d8c4f6, #c5d5f5);
.image_div {
  img{
    width: 100%;
  }
}

}

.sub_main_div_two{
  padding:0px 20px 0;
  gap: 20px;
  .logo_content{
    margin-bottom: 0;
  }

}

}

}


@media (min-width: 567px) and (max-width: 1024px) {


 .main_div {
 
    padding: 40px 30px;

    .sub_main_div_one {
 
.image_div {
  margin:0;
  img{
    width: 100%;
  }
}

    }

    .sub_main_div_two{
      h1{
        line-height: 50px;
      }
    }
}


}


`;