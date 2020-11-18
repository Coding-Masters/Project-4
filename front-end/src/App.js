import React, { useState } from "react";
import axios from "axios";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./Access /login";
import Register from "./Access /signup";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    </Router>
  );
};
export default App;
