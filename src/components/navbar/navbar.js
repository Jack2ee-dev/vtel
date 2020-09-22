import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
`;

const Brand = styled.div``;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Brand>vTel</Brand>
    </NavbarWrapper>
  );
};

export default Navbar;
