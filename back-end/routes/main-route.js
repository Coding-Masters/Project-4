const express = require("express");

const db = require("../db");
require("dotenv").config();
const mainRouter = express.Router();
const middleware = require("../middlewares/auth");
const { logIn, register, Home } = require("../controllers/main-controller");

mainRouter.get("/", (req, res) => {
  res.json("HELLO WORLD");
});

// Welcome page
mainRouter.get("/", middleware, Home);
//Login/sign up users
mainRouter.post("/signUp", register);
mainRouter.post("/signIn", logIn);
//An endpoint for updating the user password
mainRouter.put("/update/user", (req, res) => {
  const query = `UPDATE`;
});
module.exports = mainRouter;
