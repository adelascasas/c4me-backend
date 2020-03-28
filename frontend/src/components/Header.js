import React from 'react';
import logo from '../logo.svg';

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
    
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
        
          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
            
              <NavItem className="d-flex align-items-center">
                <Link to="/" className="d-flex align-items-center">Home</Link>
              </NavItem>
              
            </Nav>
          </Col>
          
          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
				C4me
            </NavbarBrand>
          </Col>
          
          <Col className="d-none d-lg-flex justify-content-end">
			<NavItem className="d-flex align-items-center">
              <Link to="/collegesearch" className="font-weight-bold">Search</Link>
            </NavItem>
          </Col>
          
        </Row>
      </Container>
      
    </Navbar>
  </header>
);

export default Header;