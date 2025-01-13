import React from 'react'
import styled from 'styled-components';

export const Section5 = () => {
  return (

    <Root>
            <div className='main_div'>
                <div className='sub_main_div'></div>
            </div>

    </Root>


  )
}




const Root = styled.section`
 padding: 20px 100px;
.main_div{
    display: flex;
    flex-wrap: wrap;
    gap:20px;
  .sub_main_div{
        flex:1;

  }

  


}


@media (max-width: 567px) {
}


@media (min-width: 567px) and (max-width: 1024px) {



}


`;