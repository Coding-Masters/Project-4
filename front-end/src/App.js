import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Switch ,Link } from "react-router-dom";
import "./App.css";
import Login from "./component/Login/login";
import Register from "./component/registration/signup.js";
import Header from "./component/homePage/header/header";
import Navbar from './component/profilePage/navBar';
import Profile from "./component/profilePage/profile"
import Post from "./component/homePage/Post/post";
import Footer from "./component/homePage/footer/Footer";



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <div className="posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <Footer/>
        </Route>
        <Route path="/register">
          <Header />
          <Register />
        </Route>
        <Route path="/login">
          <Header />
          <Login />
        </Route>
        <Route path="/profile">
          <Navbar />
          <Profile />
        </Route>
        <Route path="/Home">
          <Navbar />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
