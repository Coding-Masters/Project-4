import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function InputField() {
  const [data, setData] = useState({ email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("Login", data)
      .then((res) => {
        localStorage.setItem("token", res.data);
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email or Username"
            id="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder=" password"
            id="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            value={data.password}
            required
          />
        </div>
        <button className="btn">Login</button>
      </div>
      <Link className="register" to="/register">
        Create Your OpenMarket Account
      </Link>
    </form>
  );
}
