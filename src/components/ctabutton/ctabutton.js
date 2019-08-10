import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './ctabutton-styles';

const CTAButton = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

CTAButton.propTypes = {
  children: PropTypes.node,
};
export default CTAButton;
