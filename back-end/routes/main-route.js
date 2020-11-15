const express = require("express");
const mainRouter = express.Router();
const middleware = require("../middlewares/auth");
require("dotenv").config();
const { logIn, register, Home } = require("../controllers/main-controller");
// Welcome page
mainRouter.get("/", middleware, Home);
//Login/sign up users
mainRouter.post("/signUp", register);
mainRouter.post("/signIn", logIn);

module.exports = mainRouter;
