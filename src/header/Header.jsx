import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import './header.scss';

const Header = () => {
  return (
      <header className="header">
        {/* <div className="header-logo">
          <NavLink to="/">Scott's Site</NavLink>
        </div> */}
        <Navigation /> 
      </header>
  )
}

export default Header