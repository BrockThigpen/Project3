import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {
  return (
    <div className="NavBar">
      <Link to="/">Home</Link>
      {props.currentUser ? (
        // there is a user logged in
        <span>
          <Link to="/Games">Games</Link>
          <Link to="/logout">Log Out</Link>
        </span>
      ) : (
        // there is not a user logged in
        <span>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </span>
      )}
    </div>
  )
}

export default NavBar
