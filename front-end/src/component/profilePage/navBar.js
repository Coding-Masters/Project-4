import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router,Link } from "react-router-dom";
import Logo from "./logo";
import Navmenu from './navMenu';
const Navbar = (props) => {
  return (
    <div className="navBar">
      <Logo/>
      <Navmenu/>
      <Link to="/profilepage">Profile Icon</Link>
    </div>
  );
};
export default Navbar;
