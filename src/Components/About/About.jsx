import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m a passionate Frontend Developer skilled in HTML, CSS, JavaScript, and React. As a fresher, I bring creativity and attention to detail in building clean, responsive, and user-friendly web interfaces. I’m eager to learn new technologies and contribute to innovative projects in the IT industry.</p>
                    <p>I continuously explore new tools and frameworks to enhance my development skills and deliver impactful web experiences.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
               
                <p>Fronted Problem Solving</p>
            </div>
            <hr />
             <div className="about-achievement">
                
                <p>React Application Development</p>
            </div>
            <hr/>
            <div className="about-achievement">
                
                <p>Tailwind CSS Design</p>
            </div>

        </div>
      
    </div>
  )
}

export default About
