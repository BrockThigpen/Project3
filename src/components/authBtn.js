import React from 'react'
import { useAuth } from "react-use-auth"

const AuthBtn = () => {

  const { isAuthenticated, login, logout } = useAuth()

  return (
    <div>
      {!isAuthenticated() && <button onClick={() => login()}>Login</button>}
      {isAuthenticated() && <button onClick={() => logout()}>Logout</button>}
    </div>
  )
}

export default AuthBtn