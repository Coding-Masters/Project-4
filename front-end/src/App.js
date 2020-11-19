import React from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./component/Login/login";
import Register from "./component/registration/signup.js";

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
