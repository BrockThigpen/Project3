import React, { Component } from "react"
import PropTypes from "prop-types"
import logo from "../images/appname.png"
import { Link } from "gatsby"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from "mdbreact"

class Navbar extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <MDBNavbar color="primary-color" dark expand="md">
        <MDBContainer>
          <MDBNavbarBrand>
            <Link to="/">
              <img src={logo} alt="website logo" />
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link to="/" className="nav-link" activeClassName="active">
                  Home
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  to="/page-2"
                  className="nav-link"
                  activeClassName="active"
                >
                  Page 2
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  to="/leaderboard"
                  className="nav-link"
                  activeClassName="active"
                >
                  Leaderboards
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    )
  }
}
Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
