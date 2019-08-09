import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Button } from 'antd';

import {
  StyledNavbar,
  StyledBrand,
  StyledMenu,
  StyledPageLinks,
  StyledSocialLinks,
  StyledFooter,
  StyledDesktopLinks,
} from './navbar-styles';

const createSocialLink = ({ url, icon }) => (
  <a key={url} href={url}>
    <img
      src={icon && icon.childImageSharp ? icon.childImageSharp.fluid.src : icon}
      alt={url}
    />
  </a>
);

const Navbar = ({ socialLinks, brand }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const createPageLinks = () => {
    const links = ['HOME', 'TOUR', 'NEWS', 'VIDEOS'];
    return links.map(link => (
      <a key={link} onClick={onClose} href="/">
        <Button type="link">{link}</Button>
      </a>
    ));
  };

  return (
    <StyledNavbar>
      <StyledBrand href="/">{brand}</StyledBrand>
      <StyledDesktopLinks>
        <StyledPageLinks>{createPageLinks()}</StyledPageLinks>
        <StyledSocialLinks>
          {socialLinks.map(createSocialLink)}
        </StyledSocialLinks>
        <a href="/">
          <Button block type="primary">
            VISIT STORE
          </Button>
        </a>
      </StyledDesktopLinks>
      <StyledMenu onClick={showDrawer} shape="circle" icon="menu" />
      <Drawer
        title="Navigation"
        placement="right"
        closable
        onClose={onClose}
        visible={visible}
      >
        <StyledPageLinks>{createPageLinks()}</StyledPageLinks>
        <StyledSocialLinks>
          {socialLinks.map(createSocialLink)}
        </StyledSocialLinks>
        <StyledFooter>
          <a href="/">
            <Button block type="primary">
              VISIT STORE
            </Button>
          </a>
        </StyledFooter>
      </Drawer>
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
