const {
  createCategory ,
  logIn,
  register,
  Home,
  getAllCategory,
  updateCategory,
  deleteCategory,
  addSubcategory,
  getAllSubCategory,
} = require("../controllers/main-controller");
const middleware = require("../middlewares/auth");
require("dotenv").config();
const express = require("express");
const mainRouter = express.Router();
//category CURD operation
mainRouter.post("/add", createCategory);
mainRouter.get("/gitCategory", getAllCategory);
mainRouter.put("/updateCategory/:name/:id", updateCategory);
mainRouter.delete("/deleteCategory/:id", deleteCategory);
//Subcategory CURD Operation
mainRouter.post("/:addSubcategory", addSubcategory);
mainRouter.get("/getSubCategory", getAllSubCategory);

// Welcome page
mainRouter.get("/", middleware, Home);
//Login/sign up users
mainRouter.post("/signUp", register);
mainRouter.post("/signIn", logIn);

module.exports = mainRouter;
