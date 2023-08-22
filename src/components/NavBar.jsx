import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles/NavBar.css';


const NavBar = ({ background }) => {
  //Declaring a variable for the image usage
  const brand =
    'https://f.hubspotusercontent10.net/hub/20044066/hubfs/raw_assets/public/kong/images/logo.png?width=190&name=logo.png';

  return (
    <header className={`header background--${background}`}>

      <div className="header-container">

        {/* Button for menu in small screen size */}
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white" />
          <span>Menu</span>
        </div>

        {/* links to navigate */}
        <nav>
          <ul className="nav-container">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* logo space */}
        <div className="logo-container">
          <Link to="/">
            <img src={brand} alt="logo" />
          </Link>
        </div>

        {/* cart widget */}
        <Link to="/cart">
          <CartWidget />
        </Link>

      </div>
    </header>
  );
};

export default NavBar;
