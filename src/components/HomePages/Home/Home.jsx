import React from 'react'
import { Section1 } from './Section1'
import { SliderPage } from '../ServicePages/Service/SliderPage'
import { Section2 } from './Section2'
import { Section3 } from './Section3'
import { Section4 } from './Section4'
import { Section5 } from './Section5'
import { Section6 } from './Section6'

export const Home = () => {
  return (
    <div>
        <Section1/>
        {/* <SliderPage/> */}
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>

    </div>


  )
}
