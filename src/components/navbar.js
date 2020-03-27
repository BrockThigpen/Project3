import React, { Component } from "react"
import PropTypes from "prop-types"
<<<<<<< HEAD
import logo from "../images/appname.png"
=======
import AuthBtn from './authBtn.js'
>>>>>>> 74174acef741c5ce96d0c8d0195f4b7cd7e8453d
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
<<<<<<< HEAD
            <Link to="/">
              <img src={logo} alt="website logo" />
=======
            <Link to="/page-2">
              <strong className="white-text">{this.props.siteTitle}</strong>
>>>>>>> 74174acef741c5ce96d0c8d0195f4b7cd7e8453d
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <AuthBtn/>
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
