import React from 'react'
import { Link } from 'react-router-dom';
import './about.scss'
import image from '../resources/photos/profile.png';
const About = () => {
  return (
    <div className="container">
      <h2>hello</h2>
      <div className="wrapper">
        <p className="wrapper_headline">my name's scott.</p>
        <div className="wrapper_text">
          <p className="wrapper_text-bio">Lorem ipsum dolor sit.... Or as they say in English, I have an eclectic background. I have a degree in sculpture. I lived abroad in Asia. I worked as an academic advisor, a web developer and a software engineer. From pushing brooms in high school to pushing pixels now, there's not a whole lot I haven't done!</p>
          
        </div>
        <div className="wrapper_image" style={{ backgroundImage: `url(${image})`, height: '325px', width: '325px' }}>
        </div>

      <div className="wrapper_moreinfo">
        <div className="wrapper_moreinfo-div div-info">
          <h3>my experience</h3>
        </div>
        <div className="wrapper_moreinfo-div details-div div-one">
          <h4>Google UX Design Professional Certificate</h4>
          <p>UX/UI Certificate Course</p>
          <span>Summer 2022</span>
        </div>
         <div className="wrapper_moreinfo-div details-div div-two">
          <h4>Verizon</h4>
          <p>Software Engineer</p>
          <span>February 2021 to Present</span>
        </div>
        <div className="wrapper_moreinfo-div details-div div-three">
          <h4>General Assembly</h4>
          <p>Software Engineering Bootcamp</p>
          <span>Spring 2020</span>
        </div>
        <div className="wrapper_moreinfo-div details-div div-four">
          <h4>Noble Desktop</h4>
          <p>Web Design Bootcamp</p>
          <span>Fall 2016</span>
        </div>
        
      </div>




        <div className="wrapper_contact">
          <p className="resume">check out my <Link className="bold-link" to="/PDF">resume</Link></p>
          <p><span>get in touch:</span> <a className="bold-link" href="mailto:scottepick@gmail.com" rel="noopener noreferrer">scottepick@gmail.com</a></p>
        </div>
    </div>

            {/* <p className="resume">check out my <Link to="/PDF">resume</Link></p> */}
    </div>
  )
}

export default About