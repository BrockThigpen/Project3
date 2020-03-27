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


const Jumbotron = () => {

  const { isAuthenticated, login, logout } = useAuth()
  return (
    <MDBJumbotron
      fluid
      style={{ backgroundColor: "#f5f5f5", boxShadow: "none" }}
    >
      <MDBContainer fluid className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <h1 className="h1">React Games??</h1>
            <p className="text-primary lead my-4">
              something something games.
            </p>

            <hr className="my-4" style={{ width: "30rem" }} />
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
