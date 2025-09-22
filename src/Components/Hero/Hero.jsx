import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Vasunthira Devi,</span> frontend developer based in Tirunelveli.</h1>
        <p>
          I’m a Fresher Frontend Developer skilled in HTML, CSS, JavaScript, and React, 
          passionate about creating clean, responsive, and user-friendly web experiences.
        </p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                Connect with me
              </AnchorLink>
            </div>
            <div className="hero-resume">
              <a 
                href="/resume_git.pdf" 
                download="Vasunthira_Resume.pdf" 
                className="anchor-link"
              >
                My Resume
              </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
