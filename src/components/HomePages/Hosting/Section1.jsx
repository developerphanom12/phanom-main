import React from 'react'
import styled from 'styled-components';
import blankhorizontal from "../../../assets/Images/blankhorizontal.png"
import { Blackdescription, Heading } from '../../../Global/GlobalText';

import grow from "../../../assets/Images/grow.png"

import idol from "../../../assets/Images/idol.png"

import seo from "../../../assets/Images/seo.png"

import { PurpleThirdBackground } from '../../../Global/GlobalButton';

import { FaArrowRightLong } from 'react-icons/fa6';

import stargroup from "../../../assets/Images/stargroup.png"


export const Section1 = () => {
  return (

    <Root>

          <div className='main_div'>

                <div className='sub_main_div'>
                  <img src={blankhorizontal} alt="logo" className='main_img'/>
                </div>

                <div className='sub_main_div'>

                  <Blackdescription>Virtual Private Server</Blackdescription>
                  <Heading>Flexible, private, and affordable VPS Hosting</Heading>

                  <div className='cont_icon'>
                    <div className='sub_cont_icon'>
                      <img src={grow} alt="logo"/>
                      <Blackdescription>Expand major projects with hardware strategy design options.</Blackdescription>
                    </div>


                    <div className='sub_cont_icon'>
                      <img src={idol} alt="logo"/>
                      <Blackdescription>Pick Your Dream OS.</Blackdescription>
                    </div>


                    <div className='sub_cont_icon'>
                      <img src={seo} alt="logo"/>
                      <Blackdescription>Maintain Sites and Applications uptime of 99.9%.*</Blackdescription>
                    </div>


                  </div>

                  <div className='plan_btn'>

                    <PurpleThirdBackground className='icon_content'> See Plans and Pricing <FaArrowRightLong/> </PurpleThirdBackground>

                    <Blackdescription>Buy Fully Managed VPS</Blackdescription>

                  </div>

                  <div className='star_div'>
                  <img src={stargroup} alt="logo"/>
                  <Blackdescription>4.6 out of 5 stars based on 110,937 reviews</Blackdescription>


                  <Blackdescription><b>View All</b></Blackdescription>

                    
                  </div>


                </div>
          </div>

    </Root>


  )
}




const Root = styled.section`
 padding:80px 70px 30px;
.main_div{
    display:flex;
    flex-wrap:wrap;
    gap:20px;

  .sub_main_div{
        flex:1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;

    .cont_icon{
      display:flex;
      gap:10px;
      flex-direction:column;

      .sub_cont_icon{
        display:flex;
        gap:10px;
        align-items:center;
        /* img{
          width:35px;
        } */
        }

    }

    .plan_btn{
      display:flex;
      gap:10px;
      align-items:center;
      .icon_content{
        display: flex;
        align-items: center;
        gap:10px;
        margin-top: 10px;
      }
    }

    .star_div{
      display:flex;
      gap:10px;
      align-items:center;
    }

  }

  


}


@media (max-width: 567px) {
  padding:20px;

.main_div {
  flex-direction:column;
  .sub_main_div {
    .main_img{
      width: 100%;
    }
      .plan_btn{
        flex-direction:column;
        align-items: flex-start;
        button{

        }
      }

      .cont_icon {
  
    margin: 10px 0;
    gap:20px;

    .sub_cont_icon{
      img{
        width:35px;
      }
    }
}

      .star_div {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    img{
      width:50;

    }
    p{
      width: 50%;
    }
}
   


}
}


}


@media (min-width: 567px) and (max-width: 1024px) {
  padding:20px;


   .main_div {
    flex-wrap: unset;
    flex-direction: column;
}



}


`;