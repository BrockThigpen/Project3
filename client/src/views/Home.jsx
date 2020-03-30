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
      <hr className="my-4" style={{ border: '3px solid red', margin: '15%' }} />
      <br></br>
      <h4>
        <strong className="text-white">
          Please sign in below to continue...
        </strong>
      </h4>
      <br></br>
      <br></br>
      <Link to="/login">
        <button type="button" className="selBtn">
          Log In
        </button>
      </Link>
      <br></br>
      <br></br>
      <Link to="/signup">
        <button type="button" className="selBtn">
          Sign Up
        </button>
      </Link>
    </div>
  )
}

export default Home
