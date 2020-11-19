import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function InputFields() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    Phone: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("register", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Register</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="First and Last Name"
            id="username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
            value={data.username}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="email"
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
        <div className="form-group">
          <input
            type="text"
            placeholder="address"
            id="address"
            onChange={(e) => setData({ ...data, address: e.target.value })}
            value={data.address}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="phone"
            id="phone"
            onChange={(e) => setData({ ...data, Phone: e.target.value })}
            value={data.Phone}
            required
          />
        </div>
        <button className="btn">Register NOW</button>
        <Link className="login" to="/Login">
          Already have an account? Sign in
        </Link>
      </div>
    </form>
  );
}
