import styled from 'styled-components';

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
