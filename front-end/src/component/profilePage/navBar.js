import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router,Link } from "react-router-dom";
import Logo from "./logo";
import Navmenu from './navMenu';
import Profile from "./profile";
const Navbar = (props) => {
  return (
    <div className="navBar">
      <Logo/>
      <Navmenu/>
      <Link to="/profile" id="profileLogo"> <i class="far fa-user-circle"></i></Link>
    </div>
  );
};
export default Navbar;
