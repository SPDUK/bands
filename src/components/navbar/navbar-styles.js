import styled from 'styled-components';
import { Button } from 'antd';

export const StyledNavbar = styled.nav`
  background: #202833;
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  line-height: 30px;
  a {
    color: #f8f9fa;
  }
`;

export const StyledBrand = styled.a`
  color: #f8f9fa;
  font-size: 26px;
  font-family: 'New Rocker', cursive;
`;

export const StyledMenu = styled(Button)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledPageLinks = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin: 5px 0;
  }
  button {
    width: 100%;
    font-size: 1.1em;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledSocialLinks = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  img {
    height: 24px;
    width: 24px;
    filter: brightness(0);
  }
`;

export const StyledFooter = styled.footer`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  a {
    width: 100%;
  }
`;
