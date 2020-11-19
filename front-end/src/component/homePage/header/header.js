import React, { Compnent } from "react";
import {NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/">Home</NavLink>
    </nav>
  );
};

export default Header;
