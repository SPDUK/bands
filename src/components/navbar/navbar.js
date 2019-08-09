import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Button } from 'antd';

import { StyledNavbar, StyledBrand } from './navbar-styles';

const createSocialLink = ({ url, icon }) => (
  <a key={url} href={url}>
    <img
      style={{ width: 13, height: 13, filter: 'brightness(0) invert(1)' }}
      src={icon && icon.childImageSharp ? icon.childImageSharp.fluid.src : icon}
      alt={url}
    />
  </a>
);

// {/* <h1>{brand}</h1> */}
// {/* {socialLinks.map(createSocialLink)} */}

const Navbar = ({ socialLinks, brand }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <StyledNavbar>
      <StyledBrand href="/">{brand}</StyledBrand>
      <Button shape="circle" icon="menu" />
    </StyledNavbar>
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

createSocialLink.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.object,
};

export default Navbar;
