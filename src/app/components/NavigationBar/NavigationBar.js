import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router';
import { Navbar, Nav, MenuItem, NavItem,
    NavDropdown } from 'react-bootstrap';

const NavBar = (props) => {
    let navBarSection =
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand"><img className="logo" src="../../../images/logo.png" /></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
            
          <Navbar.Collapse>
            <Nav>
              <NavItem componentClass={Link} href="/" to="/">
                <i className="fa fa-home fa-sm"></i>&nbsp;Home
              </NavItem>
              <NavItem componentClass={Link} href="/about" to="/about">
                <i className="fa fa-address-book fa-sm"></i>&nbsp;About
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem componentClass={Link} href='/login' to="/login">
                <i className="fa fa-user fa-sm"></i>&nbsp;Login
               </NavItem>
               <NavItem href='#'><i className="fa fa-sign-out fa-sm"></i>&nbsp;Logout
               </NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>;

    return navBarSection;
  };

export default NavBar;
