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
  @media (min-width: 768px) {
    height: 100px;
    background: none;
    line-height: 100px;
    padding: 10px 40px;
  }
`;

export const StyledBrand = styled.a`
  color: #f8f9fa;
  font-size: 26px;
  font-family: 'New Rocker', cursive;
  &:hover {
    opacity: 0.8;
    color: #f8f9fa;
  }
  @media (min-width: 768px) {
    font-size: 60px;
  }
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
    flex-direction: row;
    margin: 0 20px;
    font-size: 14px;
    a {
      margin: 0 20px;
    }
    button,
    a {
      color: #fff;
      font-weight: 800;
    }
    button {
      box-sizing: border-box;
      padding: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      &:hover {
        border-bottom: 1px solid #1890ff;
      }
    }
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
  @media (min-width: 768px) {
    filter: brightness(0) invert(1);
    justify-content: flex-start;
    padding: 0px;
    margin-right: 22px;
    img {
      margin: 0 10px;
      height: 16px;
      width: 16px;
    }
  }
`;

export const StyledDesktopLinks = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
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
