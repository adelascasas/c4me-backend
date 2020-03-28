/* eslint-disable */

import React, { Component } from 'react';
import logo from '../logo.svg';

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<Link to="/"className="navbar-brand" href="/">C4ME</Link>
            			<div className="collpase navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
         				<Link to="/" className="nav-link">Home </Link>
					</li>
					<li className="navbar-item">
                                        <Link to="/searchcollege" className="nav-link">Search Colleges </Link>
                                        </li>
				</ul>
				<ul className="navbar-nav ml-auto">
					<li className="navbar-item">
					<Link to="/login" className="nav-link">Login </Link>
					</li>
					<li className="navbar-item">
                                        <Link to="/create" className="nav-link">Sign up </Link>
                                        </li>
				</ul>
				</div>
			</nav>
		);
	}
}
