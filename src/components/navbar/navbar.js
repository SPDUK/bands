import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './navbar.scss';

const Navbar = ({ socialLinks, brand }) => {
  const [active, setActive] = useState(false);

  const createPageLinks = () => {
    const links = ['HOME', 'TOUR', 'NEWS', 'VIDEOS'];
    return links.map(link => (
      <a className="navbar-item" key={link} onClick={toggleHamburger} href="/">
        {link}
      </a>
    ));
  };

  const createSocialLink = ({ url, icon }) => (
    <a className="navbar-item" key={url} href={url}>
      <img
        src={
          icon && icon.childImageSharp ? icon.childImageSharp.fluid.src : icon
        }
        alt={url}
      />
    </a>
  );

  const toggleHamburger = () => {
    setActive(!active);
  };

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item alt-font" href="/">
          {brand}
        </a>

        <a
          role="button"
          tabIndex="0"
          aria-pressed="false"
          className={`navbar-burger burger ${active && 'is-active'}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleHamburger}
          onKeyPress={toggleHamburger}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${active && 'is-active'}`}>
        <div className="navbar-start"></div>

        <div className="navbar-end">
          <div className="page-links">{createPageLinks()}</div>
          <div className="social-links">
            {socialLinks.map(createSocialLink)}
          </div>
          <a className="button is-primary" href="/">
            VISIT STORE
          </a>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      icon: PropTypes.object,
    })
  ),
  brand: PropTypes.string,
};

export default Navbar;
