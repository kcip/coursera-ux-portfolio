import React from 'react'
import './casestudy.scss'
//images
import heroImage from '../resources/photos/portfolio-1.png'
import overviewImage from '../resources/photos/image-1.png'
import personaImage from '../resources/photos/image-2.png'
import journeyImage from '../resources/photos/image-3.png'
import paperWireframeImage from '../resources/photos/image-4.png'
import allPaperWireframesImage from '../resources/photos/image-7.png'
import dwfOne from '../resources/photos/image-5.png'
import dwfTwo from '../resources/photos/image-6.png'
import lfpImage from '../resources/photos/image-8.png'
import closeUpImage from '../resources/photos/image-9.png'
import mockupOne from '../resources/photos/image-12.png'
import mockupTwo from '../resources/photos/image-13.png'
import mockupThree from '../resources/photos/image-14.png'
import mockupFour from '../resources/photos/image-19.png'
import hiFiPrototypeImage from '../resources/photos/image-18.png'
import sitemapImage from '../resources/photos/image-20.png'
import { FaQuoteLeft } from "react-icons/fa";
const CaseStudy = () => {
  return (
    <div className="caseStudy-wrapper">
      <div className="caseStudy-hero" style={{ backgroundImage: `url(${heroImage})`}}>
        <h2 className="caseStudy-hero_text">Bakes-a-lot</h2>
        <p>case study</p>
      </div>

      <div className="caseStudy-section center">
          <div className="left">
              <img src={overviewImage} className="image-half" alt='goes here' />
              <p><span>duration:</span> <span className="text-highlight">may 2022 to june 2022</span></p>
          </div>
          <div className="right center-both">
            <h2 className="project-text">project overview</h2>
            <p className="project-text-p">Bakes-a-lot is an app for customers looking to order freshly baked pastries and bread; as well as breakfast & lunch entrees in a quick and easy way.</p>
          </div>
      </div>

  <div className="caseStudy-section center bt">
        <div className="left">
          <h3>my role</h3>
          <p>UX/UI designer & researcher from conception to delivery.</p>
        </div>
        <div className="right">
          <h3>responsibilities</h3>
          <p>Conducted interviews, paper & digital wire framing, low and high-fidelity prototyping, conducted usability studies, accounting for accessibility, and iterating on designs.</p>
        </div>
      </div>






    <div className="caseStudy-section bb">
      <div className="left">
        <h3>the problem</h3>
        <p>A local bakery needs an app for its busy, local customers to order freshly baked pastries, as well as assorted foods and drinks for a quick pick-up and/or delivery.</p>
      </div>
      <div className="right">
        <h3>the goal</h3>
        <p>Design an easy-to-use app for busy people to order assorted baked goods at a local bakery in a quick and seamless way.</p>
      </div>
    </div>

    

    {/* user research =============== */}

      <div className="caseStudy-section center bb"> 
        <div className="left">
          <h3>users</h3>
          {/* <h3>users <span>&</span> user research</h3> */}
        </div>
        <div className="right">
          {/* <h3>understanding the user</h3> */}
          <ul>
            <li className="bullet-points"> personas</li>
            <li className="bullet-points">problem statments</li>
            <li className="bullet-points">user journey maps</li>
            <li className="bullet-points">user research</li>  
          </ul>
        </div>
      </div>

{/* <div className="caseStudy-section">
      <h3>The users...</h3>
    </div> */}
      <div className="caseStudy-section">
        <div className="left">
          <img src={personaImage} className="image-34" alt="" />
          <span>"I'm too busy to wait."</span>
        </div>
        <div className="right">
          {/* <h3>personas</h3> */}
          <h3>problem statment</h3>
          <p>Gloria is a busy working professional with a sweet tooth who needs access to healthy, freshly baked pastries to order pick-up or delivery.</p>
        </div>
      </div>
      <div className="caseStudy-section bb">
        <div className="left">
          <h3>user journey map</h3>
          <p>It was determined through mapping that Gloria would benefit to having access to an app to help order food and receive directions to the bakery.</p>
        </div>
        <div className="right">
          <img src={journeyImage} className="image-34" alt="" />
        </div>
      </div>


      <div className="caseStudy-section">
        <div className="left center-both">
            <h3>user research: summary</h3>
        </div>
       <div className="right">
        <p>I conducted interviews and created user profiles & empathy maps to better understand the users I was designing the bakery app for. Through my research, I determined that the primary user was a busy, working professional looking for healthy, freshly baked pastries and drinks.</p>
        <p>The user group confirmed that local customer were looking for healthy, delicious, easy to order baked goods. Limiting factors included: time, location, confusing apps, and a lack of additional bakery options in the neighborhood.</p>
       </div>
        
      </div>

      <div className="caseStudy-section center bt">
         <h3>pain points</h3>
      </div>
      <div className="caseStudy-section bb">
        <div className="left">
          <h4>ordering experience</h4>
          <p>Users had a difficult time ordering baked goods and coffee. - many existing apps were confusing to use.</p>
        </div>
        <div className="center">
          <h4>time</h4>
          <p>Users are busy and want to order food & drinks for pick-up or delivery in a quick and easy way.</p>
        </div>
        <div className="right">
          <h4>waiting in line</h4>
          <p>Ordering  ahead of time saves time waiting in line at the bakery.</p>
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
        <p>I wanted a simple, user friendly navigation, as well as a friendly, colorful design with bold photos, which was consistent across multiple devices.
        My overall goal was to make the discovery and navigation as intuitive and easy as possible.</p>
      </div>
      <div className="left">
          <img src={sitemapImage} className="" alt="" />
      </div>
    </div>

      <div className="caseStudy-section">
        <div className="left">
          <img src={paperWireframeImage} className="image-half" alt="" />
        </div>
        <div className="right">
          <h3>paper wireframes</h3>
          <p>I wanted to prioritize easy access of the main food menu items for the bakery, so I settled on a 4 square grid with links to the main menu items early on in my designs.</p>
          <p>During testing, the original links for navigation were designed to be at the bottom of each screen, however, after testing, I decided to move the navigation to its own page and allowed users to access the app’s menu from a hamburger at the top left of the screen which addressed early pain points in the early stages of the app’s design.</p>
        </div>
      </div>

      {/* <div className="caseStudy-section center  bt">
        <h3>digital wireframes</h3>
      </div> */}




      <div className="caseStudy-section center bt">
        <div className="left center-both">
          <h3>digital wireframes</h3>
           {/* <h4>detail of homepage</h4>
          <p>I made sure users would have quick access to the menu and daily specials on the main page of the app.</p> */}
          {/* <img src={dwfOne} className="image-5" alt="" /> */}
        </div>
        <div className="right">
          {/* <h4>detail of homepage</h4> */}
          <p>I made sure users would have quick access to the menu and daily specials on the main page of the app.</p>
          {/* <h4>detailed food page</h4> */}
          <p>Descriptions of the food with included ingredients, as well as several photos were added, along with an easy way to add items to cart.</p>
          {/* <h3>digital wireframes</h3>
          <p>I made sure users would have quick access to the menu and daily specials on the main page of the app.</p> */}
        </div>
      </div>


      <div className="caseStudy-section center">
        <div className="left">
           <img src={dwfOne} className="image-5" alt="" />
           <span className="text-highlight">homepage</span>
          {/* <h4>detailed food page</h4>
          <p>Descriptions of the food with included ingredients, as well as several photos were added, along with an easy way to add items to cart.</p> */}
        </div>
        <div className="right">
          <img src={dwfTwo} className="image-5" alt="" />
          <span className="text-highlight">detailed food page</span>
        </div>
      </div>

      <div className="caseStudy-section">
        <img src={allPaperWireframesImage} className="" alt="" />
      </div>

      

      <div className="caseStudy-section flex-column bt bb">
        <div className="top center">
          <h3>low fidelity prototype</h3>
          <p>I created a low-fidelity wireframe prototype for ordering baked goods and beverages so the prototype can be used in a usability study to determine the apps ease of use for users.</p>
        </div>
        <div className="bottom">
          <div>
            <img src={lfpImage} className="image-full" alt="" />
          </div>
          <div className="outside-link">
            <a target="_blank" href="https://www.figma.com/proto/PxX3wbrOaP6qvUKC0XRMWk/Wireframes?page-id=0%3A1&node-id=1%3A6&viewport=1105%2C788%2C0.66&scaling=scale-down&starting-point-node-id=1%3A2">lofi prototype in figma</a>
          </div>

        </div>
      </div>

      <div className="caseStudy-section">
        <div className="left center-both">
          <h3>usability study findings</h3>
        </div>
        <div className="right">
          <p>I conducted two usability studies. The first study focused on designs - first from paper, and then digital wireframes & lo-fi mockups. The second study used a high-fidelity prototype, which included an updated navigation for the app, which created an easier way for users to navigate between the homepage and the cart page - a pain point that was raised during the first lo-fi prototype study. </p>
        </div>
        
      </div>

      <div className="caseStudy-section center bb">
        <div className="left">
          <h4>round one findings</h4>
          <ul>
            <li className="bullet-points">Users wanted a quick way to order food and beverages</li>
            <li className="bullet-points">Users wanted easy to follow ordering process</li>
            <li className="bullet-points">Users wanted maps and directions to the bakery</li>
          </ul>
        </div>
        <div className="right">
          <h4>round two findings</h4>
          <ul>
            <li className="bullet-points">The navigation was too convoluted.</li>
            <li className="bullet-points">The cart page and checkout page were easily confused</li>
            <li className="bullet-points">Access to cart page from homepage was non-existent</li>
          </ul>
        </div>
      </div>


   







      <div className="caseStudy-section center">
        <div className="left">
          <img src={closeUpImage} className="image-5" alt="" />
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
          <p>My initial design had all the categories displayed as thumbnail images.</p>
          <p>After the usability study, I determined that it was better to create cards for each product. By adding a dedicated card, each item was able to display a short description as well as a price, both of which were missing in the first design, and a quick button to add each item to the user’s cart for purchase.</p>
        </div>
      </div>


      <div className="caseStudy-section center">
        <div className="left">
          <span className="text-highlight">Before usability study</span>
          <div className="mockup-wrapper">
            
            <img src={mockupOne} alt="" className="" />
          </div>
        </div>
        <div className="right">
          <span className="text-highlight">After usability study</span>
          <div className="mockup-wrapper">
            <img src={mockupTwo} alt="" className="" />
          </div>
        </div>
      </div>

     {/* ///////////////////////////here */}

      <div className="caseStudy-section flex-column bt">
        <div className="top">
          <h3>hifi prototype screenshots</h3>
          <p>The updated hi-fi prototype provided a more unified ordering process, as well as a better navigation between pages of the app</p>
        </div>
        <div className="bottom">
          <img src={hiFiPrototypeImage} alt="" className="image-full" />
        </div>

        <div className="outside-link">
            <a target="_blank" href="https://www.figma.com/proto/PvKoseWx2Mu4Xp2LiWVLd0/Hi-Fi-Mockups?page-id=0%3A1&node-id=1%3A133&starting-point-node-id=1%3A341">hifi prototype in figma</a>
          </div>
      </div>




      <div className="caseStudy-section flex-column bt">
        <h3 className="mb-20">finished designs</h3>
        <img src={mockupThree} alt="" className="image-full" />
        
      </div>

      <div className="caseStudy-section">
        <img src={mockupFour} alt="" className="image-full" />
      </div>

      {/* <div className="caseStudy-section flex-column">
        
        <div className="top">
          <h3>hifi prototype screenshots</h3>
          <p>The updated hi-fi prototype provided a more unified ordering process, as well as a better navigation between pages of the app</p>
        </div>
        <div className="bottom">
          <img src={hiFiPrototypeImage} alt="" className="image-full" />
        </div>
      </div> */}

    
      <div className="caseStudy-section center bb bt flex-column">
        
        <div className="center-both project-text-p">
          <h3>accessibility considerations</h3>
        </div>


        <div className="flex-row wrap">
          <div className="project-text-p width-33">
            <h4>one</h4>
            <p>Provided high contrast buttons.</p>
          </div>
          <div className="project-text-p width-33">
            <h4>two</h4>
            <p>Updated the navigation from small icons at the bottom of the app to an easier to navigate main menu.</p>
          </div>
          <div className="project-text-p width-33">
            <h4>three</h4>
            <p>Added icons & images on the navigation page. And added high contrast colors on navigation page.</p>
          </div>
        </div>
        {/* <div className="bottom center-both">
          <h3>accessibility considerations</h3>
        </div> */}
      </div>

      <div className="caseStudy-section center flex-column">
        <h3 className="results-text">results, <span>takeaways,</span> impacts <span>&</span> outcomes</h3>
        
        <p>The bright colors, photographs, and crisp & clean design creates a fun user experience for the users.</p>
      </div>

      
      
      <div className="caseStudy-section center flex-column">
        <h3>what I learned</h3>
        <p>Throughout the design process I learned that with each step, my designs got more refined and hopefully, more user friendly. Most importantly, my biggest take-away was that the usability studies pushed me to design - not for me, but rather for the app’s users.</p>
      </div>

<div className="caseStudy quote-section">
        <div className="quote-wrapper">
          <p className="quote-text"><FaQuoteLeft />I love the color palette, it's very vibrant and playful!</p>
          <span className="quote-text-span">- persons name</span>
        </div>
        
      </div>















    </div>
  )
}

export default CaseStudy