import React from 'react'
import logo from '../images/appname_big.png'
import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <div className="homeContainer text-center">
      <h1>
        <strong className="text-white">Welcome to</strong>
      </h1>
      <br></br>
      <img src={logo} alt="website logo" width="80%" height="auto" />
      <hr className="newLine" />
      <br></br>
      <h4>
        <strong className="text-white">
          Please login below to continue...
        </strong>
      </h4>
      <br></br>
      <Link to="/login">
        <button type="button" className="selBtn2">
          Login
        </button>
      </Link>
    </div>
  )
}

export default Home
