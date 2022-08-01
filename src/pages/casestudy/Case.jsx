import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './casestudy.scss'
import { FaQuoteLeft } from "react-icons/fa";


const Case = (props) => {
const {name} = useParams()
const [items, setItems] = useState([]);

useEffect(()=> {
  const fetchData=()=> {
    const link = props.data.find((link)=> (link._project_name === name))
    setItems(link)
  }

  fetchData();
}, [props.data, name])
  
  return (
    <div className="caseStudy-wrapper">
      <div className="caseStudy-hero" style={{ backgroundImage: `url(${items.heroImage})`}}>
        <h2 className="caseStudy-hero_text">{items.hero_text}</h2>
        <p>case study</p>
      </div>
      <div className="caseStudy-section center">
          <div className="left">
              <img src={items.project_image} className="image-half" alt='goes here' />
              <p><span>duration:</span> <span className="text-highlight">{items.project_duration}</span></p>
          </div>
          <div className="right center-both">
            <h2 className="project-text">project overview</h2>
            <p className="project-text-p">{items.project_overview_text}</p>
          </div>
      </div>
      <div className="caseStudy-section center bt">
        <div className="left">
          <h3>my role</h3>
          <p>{items.role}</p>
        </div>
        <div className="right">
          <h3>responsibilities</h3>
          <p>{items.responsibilities}</p>
        </div>
      </div>
      <div className="caseStudy-section bb">
        <div className="left">
          <h3>the problem</h3>
          <p>{items.problem}</p>
        </div>
        <div className="right">
          <h3>the goal</h3>
          <p>{items.goal}</p>
        </div>
      </div>
      <div className="caseStudy-section center bb"> 
        <div className="left">
          <h3>users</h3>
        </div>
        <div className="right">
          <ul>
            <li className="bullet-points"> personas</li>
            <li className="bullet-points">problem statments</li>
            <li className="bullet-points">user journey maps</li>
            <li className="bullet-points">user research</li>  
          </ul>
        </div>
      </div>
      <div className="caseStudy-section">
        <div className="left">
          <img src={items.persona_image} className="image-34" alt="" />
        </div>
        <div className="right">
          <h3>problem statment</h3>
          <p>{items.problem_statement}</p>
        </div>
      </div>
      <div className="caseStudy-section bb">
        <div className="left">
          <h3>{items.additional_heading}</h3>
          <p>{items.additional_heading_text}</p>
        </div>
        <div className="right">
          <img src={items.additional_image} className="image-34" alt="" />
        </div>
      </div>
      <div className="caseStudy-section">
        <div className="left center-both">
            <h3>user research: summary</h3>
        </div>
       <div className="right">
        <p>{items.user_research_summary}</p>
       </div>  
      </div>
      <div className="caseStudy-section center bt">
         <h3>pain points</h3>
      </div>
      <div className="caseStudy-section bb">
        <div className="left">
          <h4>{items.pain_points_header_one}</h4>
          <p className="center-text">{items.pain_points_text_one}</p>
        </div>
        <div className="center">
          <h4>{items.pain_points_header_two}</h4>
          <p className="center-text">{items.pain_points_text_two}</p>
        </div>
        <div className="right">
          <h4>{items.pain_points_header_three}</h4>
          <p className="center-text">{items.pain_points_text_three}</p>
        </div>
      </div>
      <div className="caseStudy-section center aligin-center bb">
        <div className="left">
          <h3>start the design</h3>
        </div>
        <div className="right">
          <ul>
            <li className="bullet-points">site map</li>
            <li className="bullet-points">paper wireframes</li>
            <li className="bullet-points">digital wireframes</li>
            <li className="bullet-points">low-fidelity prototypes</li>
            <li className="bullet-points">usability studies</li>
          </ul>
        </div> 
      </div>
       <div className="caseStudy-section">
      <div className="right">
        <h3>sitemap</h3>
        <p>{items.sitemap_text}</p>
      </div>
      <div className="left">
          <img src={items.sitemap_image} className="" alt="" />
      </div>
    </div>
    <div className="caseStudy-section">
      <div className="left">
        <img src={items.paper_wireframes_image} className="image-half" alt="" />
      </div>
      <div className="right">
        <h3>paper wireframes</h3>
        <p>{items.paper_wireframes_text}</p>
      </div>
    </div>
    <div className="caseStudy-section center bt">
      <div className="left center-both">
        <h3>digital wireframes</h3>
      </div>
      <div className="right">
        <p>{items.digital_wireframes_text}</p>
      </div>
    </div>
    <div className="caseStudy-section center">
      <div className="left">
        <img src={items.digital_wireframes_image_one} className="image-5" alt="" />
        <span className="text-highlight">{items.digital_wireframes_image_one_subtext}</span>    
      </div>
      <div className="right">
        <img src={items.digital_wireframes_image_two} className="image-5" alt="" />
        <span className="text-highlight">{items.digital_wireframes_image_two_subtext}</span>
      </div>
    </div>
    <div className="caseStudy-section">
      <img src={items.digital_wireframes_all_image} className="" alt="" />
    </div>
    <div className="caseStudy-section flex-column bt bb">
      <div className="top center">
        <h3>low fidelity prototype</h3>
        <p>{items.lofi_prototype_text}</p>
      </div>
      <div className="bottom">
        <div>
          <img src={items.lofi_prototype_image} className="image-full" alt="" />
        </div>
        <div className="outside-link">
          <a target="_blank" rel="noreferrer" href={items.lofi_prototype_link}>{items.lofi_prototype_link_text}</a>
        </div>
      </div>
    </div>
     <div className="caseStudy-section usability-section">
      <div className="usability-params">
        <h3>usability study: <span>parameters</span></h3>
        </div>
      <div className="usability-params-div">
        <h4>study type:</h4>
        <p>Unmoderated usability study</p>
      </div>
      <div className="usability-params-div">
        <h4>location</h4>
        <p>United States, remote</p>
      </div>
      <div className="usability-params-div">
        <h4>Participants</h4>
        <p>6 participants</p>
      </div>
      <div className="usability-params-div">
        <h4>Length</h4>
        <p>20-30 minutes</p>
      </div> 
    </div>
    <div className="caseStudy-section">
      <div className="left center-both">
        <h3>usability study findings</h3>
      </div>
      <div className="right">
        <p>{items.usability_findings_text}</p>
      </div>    
    </div>
   
    <div className="caseStudy-section center bb">
      <div className="left">
        <h4>round one findings</h4>
        <ul>
          {items.usability_findings_round_one && items.usability_findings_round_one.map((item, i)=> (
            <li key={i} className="bullet-points">{item}</li>
          ))}
         
        </ul>
      </div>
      <div className="right">
        <h4>round two findings</h4>
        <ul>
          {items.usability_findings_round_one && items.usability_findings_round_two.map((item, i)=> (
            <li key={i} className="bullet-points">{item}</li>
          ))}
        </ul>
      </div>
    </div>
    


    <div className="caseStudy-section center">
      <div className="left">
        <img src={items.refine_design_image} className="image-5" alt="" />
      </div>
      <div className="right center-both">
        <h3>refine the design</h3>
        <ul>
          <li className="bullet-points">mockups</li>
          <li className="bullet-points">high-fidelity prototype</li>
          <li className="bullet-points">finished designs</li>
          <li className="bullet-points">accessibility</li>
        </ul>
      </div> 
    </div>
    <div className="caseStudy-section bt">
      <div className="">
        <h3>mockups</h3>
        <p>{items.mockups_text}</p>
      </div>
    </div>
    <div className="caseStudy-section center">
      <div className="left">
        <span className="text-highlight">{items.mockups_image_one_subtext}</span>
          <div className="mockup-wrapper">
            <img src={items.mockups_image_one} alt="" className="" />
          </div>
      </div>
        <div className="right">
          <span className="text-highlight">{items.mockups_image_two_subtext}</span>
          <div className="mockup-wrapper">
            <img src={items.mockups_image_two} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="caseStudy-section flex-column bt">
        <div className="top">
          <h3>hifi prototype screenshots</h3>
          <p>{items.hifi_prototype_text}</p>
        </div>
        <div className="bottom">
          <img src={items.hifi_prototype_image} alt="" className="image-full" />
        </div>
        <div className="outside-link">
            <a target="_blank" rel="noreferrer" href={items.hifi_prototype_link}>{items.hifi_prototype_link_text}</a>
          </div>
      </div>
      <div className="caseStudy-section flex-column bt">
        <h3 className="mb-20">finished designs</h3>
        <img src={items.finished_designs_image_one} alt="" className="image-full" /> 
        <span className="text-highlight">{items.finished_designs_image_subtext_one}</span>   
      </div>


      <div className="caseStudy-section flex-column">
        <img src={items.finished_designs_image_two} alt="" className="image-full" />
        <span className="text-highlight">{items.finished_designs_image_subtext_two}</span>
      </div>


      <div className="caseStudy-section center bb bt flex-column">  
        <div className="center-both project-text-p">
          <h3>accessibility considerations</h3>
        </div>
        <div className="flex-row wrap">
          <div className="project-text-p width-33">
            <h4>one</h4>
            <p>{items.accessibilities_considerations_one_text}</p>
          </div>
          <div className="project-text-p width-33">
            <h4>two</h4>
            <p>{items.accessibilities_considerations_two_text}</p>
          </div>
          <div className="project-text-p width-33">
            <h4>three</h4>
            <p>{items.accessibilities_considerations_three_text}</p>
          </div>
        </div>
      </div>
      <div className="caseStudy-section center flex-column">
        <h3 className="results-text">results, <span>takeaways,</span> impacts <span>&</span> outcomes</h3>   
        <p>{items.results_takeaways}</p>
      </div>    
      <div className="caseStudy-section center flex-column">
        <h3>what I learned</h3>
        <p>{items.what_i_learned}</p>
      </div>
      <div className="caseStudy quote-section">
        <div className="quote-wrapper">
          <p className="quote-text"><FaQuoteLeft />{items.quote}</p>
          <span className="quote-text-span">- {items.quote_person}</span>
        </div> 
      </div>
    </div>
  )
}

export default Case;