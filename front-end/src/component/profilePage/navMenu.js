import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router,Link } from "react-router-dom";
const Navmenu = (props) => {
  return(
  <div className="navMenu">
      <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact Us</Link>
      <input type="text" placeholder="Search"/>
      <button>Search</button>



  </div>
  );
};
export default Navmenu;