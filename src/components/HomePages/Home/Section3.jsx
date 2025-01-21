import React from 'react'
import styled from 'styled-components';
import { MainWhiteContent, WhiteNumberHeading } from '../../../Global/GlobalText';

export const Section3 = () => {
  return (
    <Root>
            <div className='main_div'>
                <div className='sub_main_div'>
                    <WhiteNumberHeading>3x</WhiteNumberHeading>
                    <MainWhiteContent>Faster Release cycle</MainWhiteContent>
                </div>

                <div className='sub_main_div'>
                <WhiteNumberHeading>40%</WhiteNumberHeading>
                <MainWhiteContent>Reduction in manual<br/> administration time</MainWhiteContent>
                </div>

                <div className='sub_main_div'>
                <WhiteNumberHeading>60%</WhiteNumberHeading>
                <MainWhiteContent>Software Development<br/> Reusability</MainWhiteContent>
                </div>

                <div className='sub_main_div_two'>
                <WhiteNumberHeading>40%</WhiteNumberHeading>
                <MainWhiteContent>Cost Optimization</MainWhiteContent>
                </div>
            </div>

    </Root>


  )
}




const Root = styled.section`

.main_div{
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    background-color:#6C5FD4;
    padding:20px 70px;

  .sub_main_div{
    border-right:1px solid #ffffff;
    flex: 1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
  }

  .sub_main_div_two{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
  }
  


}


@media (max-width: 567px) {
  display: none;
}

@media (min-width: 567px) and (max-width: 1024px) {
.main_div {
    padding: 20px 20px;
    justify-content: center;
    .sub_main_div{
      flex:unset;
      width: 47%;
    }

    .sub_main_div_two{
      border-right: 1px solid #ffffff;
      flex:unset;
      width: 47%;
    }
}


}


`;