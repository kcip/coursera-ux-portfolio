import React, {Fragment} from 'react'
import Header from '../header/Header'
import {Routes, Route} from 'react-router-dom';
import Home from '../home/Home';
// import Footer from '../footer/Footer';
import Portfolio from '../portfolio/Portfolio';
import About from '../about/About';
import CaseStudy from './CaseStudy';
import Case from './casestudy/Case';
import PDF from '../pdf/PDF';
import { data } from '../data/data';
import './layout.scss';
const Layout = () => {
  return (
     <Fragment>   
      <div className="layout-container site">
        <div className="container-header">
          <Header />
        </div>

        <div className="container-pages site-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio data={data}/>} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/casestudy" element={<CaseStudy />} /> */}

          <Route path="/portfolio/:name" element={<Case data={data}/>}/>
        
          <Route path="/pdf" element={<PDF />} />
        </Routes>





        </div>



        
        <div className="container-footer">
        {/* <Footer /> */}
        </div>
        
      </div>

    </Fragment>
  )
}

export default Layout