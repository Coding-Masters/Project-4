import React, { Compnent } from "react";
import {NavLink} from 'react-router-dom';
const Header = () => {
  return (
    <nav>
      <NavLink to="/login">login</NavLink>
      <NavLink to="/register">Reg</NavLink>
      <NavLink to="/">home</NavLink>
    </nav>
  );
};

export default Header;
