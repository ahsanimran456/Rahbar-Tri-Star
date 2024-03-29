import React from 'react'
import Header from '../../Components/Header/Header'
import SliderNav from '../../Components/Slider/Slider'
import Simplecards from '../../Components/SimpleCards/Simplecards'
import AboutUs from '../Aboutus/Aboutus'
import Services from '../../Components/Services/Services'
export default function Home() {
  return (
    <>
      <Header />
      {/* <SliderNav /> */}
      <Simplecards />
      <AboutUs />
      <Services />
    </>
  )
}
