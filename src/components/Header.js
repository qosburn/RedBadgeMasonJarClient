import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar
          color="light"
          py-5
          className="navbar-custom"
          expand="md"
          light
          full
        >
          <NavbarBrand href="/">MASON JAR DESIGN</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="#currentOffer">CURRENT OFFERINGS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#aboutus">ABOUT US</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#futureproj">FUTURE PROJECTS</NavLink>
              </NavItem>
            </Nav>
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
