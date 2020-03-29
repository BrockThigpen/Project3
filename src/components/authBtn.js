import React from 'react'
import { useAuth } from "react-use-auth"
import { MDBBtn } from "mdbreact"
import { Link } from 'gatsby'

const AuthBtn = () => {

  const { isAuthenticated, login, logout } = useAuth()

  return (
    <>
      {!isAuthenticated() && <MDBBtn 
        onClick={() => login()}
        className="nav-link"
        flat
      >Login</MDBBtn>}
      {isAuthenticated() && <Link 
        onClick={() => logout()}
        className="nav-link"
        flat
      >Logout</Link>}
    </>
  )
}

export default AuthBtn