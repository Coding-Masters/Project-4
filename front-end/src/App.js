import React, { useState,useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./component/Login/login";
import Register from "./component/registration/signup.js";
import Navbar from "./component/profilePage/navBar";
import Profile from "./component/profilePage/profile"

const App = () => {
  return (
    <Router> 
      <Switch>
      <Route exact path="/">
          <Navbar/>
        </Route>  
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Navbar/>
          <Profile/>
        </Route>
        <Route path="/Home">
          <Navbar/>

        </Route>
      </Switch>
    </Router>
  );
};
export default App;
