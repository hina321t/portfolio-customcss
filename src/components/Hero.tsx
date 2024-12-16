import React from 'react'
import Navbar from "./Navbar"
import hero from "../app/style/hero.css"
// import { PiClipboard } from 'react-icons/pi'

const Hero = () => {
  return (
    <div
    id="hero" 
    className='hero-container'>
      <Navbar/>
      <div className='hero-content'>
        <div className='hidden lg:block'></div>

        <div className='hero-text'>
          <div className='hero-msin'></div>
        
          <p data-aos="zoom-in-up"> I am</p>
          <p data-aos="zoom-in-up">HINA</p>
          <p data-aos="zoom-in-up">TAHIR</p>

        </div>

      </div>
      
      
    </div>
    
  )
}

export default Hero


