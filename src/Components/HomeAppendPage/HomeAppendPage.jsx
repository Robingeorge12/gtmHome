import React from 'react'
import "./HomeAppendPage.css"
import HomePage from '../HomePage/HomePage'
import SectionTwo from '../SectionTwo/SectionTwo'
import SectionThree from '../SectionThree/SectionThree'
import SectionFour from '../SectionFour/SectionFour'
import SectionFive from '../SectionFive/SectionFive'
import SectionSix from '../SectionSix/SectionSix'
import SectionSeven from '../SectionSeven/SectionSeven'
import SectionOne from '../SectionOne/SectionOne'
import Feature from '../Feature/Feature'
import About from '../About/About'


function HomeAppendPage() {
  return (
    <div className='main-div'>
      <SectionOne />
       <HomePage />
       <Feature />
       <SectionTwo />
       <SectionThree />
       <SectionFour />
       <SectionFive />
       <SectionSix />
       <SectionSeven />
       <About />
      
    </div>
  )
}

export default HomeAppendPage