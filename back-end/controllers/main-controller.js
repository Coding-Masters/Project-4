const signIn = require("../userAccess/LogIn");
const signUp = require("../userAccess/signup");
require("dotenv").config();
const connection = require("../db");
// create Category
const createCategory = (req, res) => {
  const query = `INSERT INTO category (category_id,name) VALUES ( ?, ?)`;
  const data = [req.body.id, req.body.name];
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
// get all categories
const getAllCategory = (req, res) => {
  const query = "select * from market.category";
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(
      results
    ); /*UPDATE Customers
SET name = categoryName   WHERE  = 1; */
  });
};
//update category
const updateMiddleware = (categoryName, idCategory) => {
  const query = `UPDATE category SET name = ? WHERE category_id = ?`;
  const data = [categoryName, idCategory];
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.json("The data has been updated");
  });
};
const updateCategory = (req, res) => {
  updateMiddleware(req.params.name, req.params.id);
  res.json("The data has been updated");
};
const deleteCategory = (req, res) => {
  const query = `DELETE FROM category WHERE category_id=?`;
  const data = req.params.id;
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
/*idSubcategories
name
category_category_id */
const addSubcategory = (req, res) => {
  const query = `INSERT INTO subcategories(name,category_category_id) VALUES(?,?)`;
  const data = [req.body.name, req.params.addSubcategory];
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const getAllSubCategory = (req, res) => {
  const query = `SELECT s.name, c.name type FROM subcategories s INNER JOIN  category c
    ON s.category_category_id = c.category_id`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
// sign up
const register = async (req, res) => {
  try {
    res.json(await signUp(req.body));
  } catch (err) {
    throw err;
  }
};
//Login
const logIn = signIn;
const Home = (req, res) => {
  res.json("Welcome To Your Market");
};
module.exports = {
  logIn,
  register,
  Home,
  getAllCategory,
  updateCategory,
  deleteCategory,
  addSubcategory,
  getAllSubCategory,
  createCategory,
};
