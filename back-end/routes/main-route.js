const {
  createCategory,
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
mainRouter.post("/subcategory/:addSubcategory", addSubcategory);
mainRouter.get("/getSubCategory", getAllSubCategory);

// Welcome page
mainRouter.get("/", middleware, Home);
//Login/sign up users
mainRouter.post("/register", register);
mainRouter.post("/Login", logIn);

module.exports = mainRouter;
