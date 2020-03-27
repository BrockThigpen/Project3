import React from 'react'
import { useAuth } from "react-use-auth"
import { MDBBtn } from "mdbreact"

const AuthBtn = () => {

  const { isAuthenticated, login, logout } = useAuth()

  return (
    <>
      {!isAuthenticated() && <MDBBtn 
        onClick={() => login()}
        className="waves-effect"
        flat
      >Login</MDBBtn>}
      {isAuthenticated() && <MDBBtn 
        onClick={() => logout()}
        className="waves-effect"
        flat
      >Logout</MDBBtn>}
    </>
  )
}

export default AuthBtn