import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {
  return (
    <div className="NavBar">
      {props.currentUser ? (
        // there is a user logged in
        <span>
          <Link to="/Games">Games</Link>
          <Link to="/Leaderboard">Leaderboards</Link>
          <Link to="/logout">Log Out</Link>
        </span>
      ) : (
        // there is not a user logged in
        <span></span>
      )}
    </div>
  )
}

export default NavBar
