import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightFill } from 'react-icons/ri';
import './home.scss';
const Home = () => {
  return (
    <div className="hero">
      <div className="hero_text-container">
        <h1>scott pick</h1>
        <h3>UX/UI</h3>
        <h4>designer</h4>
        <p><span>Hey there! </span>I'm a UX/UI designer based in <span>New York, NY</span></p>
        <span className="hero_text-container-CTA">
          <RiArrowRightFill style={{fontSize: '35px', color: '#464646'}}/>
          <Link className="portfolio-link" to="/portfolio">check out my case studies</Link>
          
          </span>
      </div>
        
       
      </div>
  )
}

export default Home