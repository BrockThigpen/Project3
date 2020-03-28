import React from "react"
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact"
import { useAuth } from "react-use-auth"
import logo from "../images/appname_big.png"



const Jumbotron = () => {

  const { isAuthenticated, login, logout } = useAuth()
  return (
    <MDBJumbotron
      fluid
      style={{ backgroundColor: "black", boxShadow: "none", height: "93vh", marginBottom: "0px"}}
    >
      <MDBContainer fluid className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <h1><strong className="white-text">Welcome to</strong></h1>
            <br></br>
            <img src={logo} alt="website logo"  width="80%" height="auto"/>
            <hr className="my-4" style={{ border: "3px solid red" , margin: "15%"  }} />
            <br></br>
            <h4><strong className="white-text">Please sign in below to continue...</strong></h4>
            <br></br>
            <br></br>
            <div className="pt-2">
              {!isAuthenticated() && <MDBBtn
                onClick={() => login()}
                size="lg"
                gradient="blue"
                className="waves-effect"
              >Login</MDBBtn>}
            {isAuthenticated() && <MDBBtn
                href="/page-2"
                size="lg"
              >Continue to Site</MDBBtn>}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default Jumbotron
