import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/appname.png';

const NavHome = () => {
  return (
    <div class="navbar navbar-light bg-dark">
      <Link to="/">
        <img src={logo} alt="website logo" />
      </Link>
    </div>
  );
};

export default NavHome;
