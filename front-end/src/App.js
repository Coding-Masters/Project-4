import React from "react";
import { Route, BrowserRouter as Router, Switch ,Link } from "react-router-dom";
import "./App.css";
import Login from "./component/Login/login";
import Register from "./component/registration/signup.js";
import notFound from "./component/notFound/notFound";
import Header from "./component/homePage/header/header";
import Navbar from './component/profilePage/navBar';
// import Profile from "./component/profilePage/profile"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/register">
          <Header />
          <Register />
        </Route>
        <Route path="/login">
          <Header />
          <Login />
          </Route>
        </Switch>
    </Router>
  );
};
export default App;
