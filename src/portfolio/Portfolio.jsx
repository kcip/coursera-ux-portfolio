import React from 'react'
import './portfolio.scss';
import { Link } from 'react-router-dom';

const Portfolio = (props) => {
  const data = props.data;
  return (
    
    <section className="portfolio-section">
      <h2 className="portfolio-section-h2">UX/UI<span className="portfolio-section-span">case studies</span></h2>
      <div className="container case-study">
          {data && data.map((item, i)=> (
            
            <Link key={i} to={`/portfolio/${item._project_name}`}>
              <div key={i} className="case-study-one CS" style={{ backgroundImage: `url(${item._project_image })`}}>
                <h3 key={i}>{item.hero_text}</h3>
              </div>
            </Link>
            
          ))} 
      </div>
    </section>
  )
}

export default Portfolio


