import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router} from 'react-router-dom';

class NavbarPage extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <Router>
        <MDBNavbar dark expand="md">
          <MDBNavbarBrand>
            <h1><strong className="white-text">Mei Gibbons</strong></h1>
          </MDBNavbarBrand>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
