import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  z-index: 10;
  position: sticky;
  top: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const MenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
  }
`;

const Bars = styled.div`
  width: 25px;
  height: 2px;
  background-color: #000;
  margin: 5px auto;
  transition: all 0.25s ease-in-out;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 70px;
    &:hover {
      border: none;
    }
  }
`;

const NavLink = styled(Link)`
  color: #444;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 2rem;
    width: 100%;
    height: 100%;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Nav>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <MenuIcon onClick={toggle}>
        <Bars />
        <Bars />
        <Bars />
      </MenuIcon>
      <NavMenu isOpen={isOpen}>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/services">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contacts">Contacts</NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
