import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import useToggle from '../hooks/useToggle'
import './navigation.scss';

const Navigation = () => {
   const [isVisible, toggleisVisible] = useToggle(false);
  const [open, setOpen] = useToggle(false)
  const [show, setShow] = useToggle(false)
  const hamburger = () => {
    setOpen()
    toggleisVisible()
    setShow()
  }
  const removeModal = () => {
    toggleisVisible({
      isVisible: false
    });

    setOpen({
      open: false
    });

    setShow({
      show: false
    })
  }


  return (

    <Fragment>
      <div className="mobile--nav" onClick={() => hamburger()} >
        <span className={open ? "mobile--nav-span menu-is-open" : "mobile--nav-span"}></span>
      </div>
      <nav className={isVisible ? "nav show" : "nav"}>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeclassname="activeLink" to="/" exact>Home</NavLink>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeclassname="activeLink" to="/portfolio" exact>Portfolio</NavLink>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeclassname="activeLink" to="/about" exact>About</NavLink>

        {/* <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeclassname="activeLink" to="/casestudy" exact>case</NavLink> */}
      </nav>
    </Fragment>
  )
}

export default Navigation