import React from 'react';

import { images } from '../../constants';
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="A logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'contact', 'work', 'skills', 'testimonials'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar