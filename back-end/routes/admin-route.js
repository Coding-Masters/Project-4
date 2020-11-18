const {
  deleteUser,
  getAllUsers,
  getAllCategories,
  getAllSubcategories,
  getAllComments,
  getAllPosts,
} = require("../controllers/admin-controller");
const express = require("express");
const db = require("../db");
const adminRouter = express.Router();
adminRouter.use((req, res, next) => {
  console.log("You're using admin router");
  next();
});
//An endpoint for getting all users in the database
adminRouter.get("/users", getAllUsers);

//An endpoint for getting all categories from the database
adminRouter.get("/categories", getAllCategories);

// An endpoint for getting all the subcategories from the database
adminRouter.get("/subcategories", getAllSubcategories);

//An endpoint for getting all comments from the database
adminRouter.get("/comments", getAllComments);

// An endpoint for getting all the posts from the database
adminRouter.get("/posts", getAllPosts);

//APIs For creating, updating, and deleting
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//An endpoint for deleting a user from the database
adminRouter.delete("/delete/user", deleteUser);

// Endpoints for updating user in the database
//========================================================================
adminRouter.put("/update/username", (req, res) => {
  const query = `UPDATE user 
    SET username = ?
    WHERE email = ?`;
  const data = [req.body.value1, req.body.email];
  db.query(query, data, (err, result, field) => {
    if (err) throw err;
    console.log(result);
    res.json("User information updated successfully");
  });
});
//=============================================================================

//An endpoint for creating new post
adminRouter.post("/create/post", (req, res) => {
  const query = `INSERT INTO post (img,title,price) VALUES (?,?,?)`;
  const data = [req.body.imgUrl, req.body.title, req.body.price];
  db.query(query, data, (err, result, field) => {
    if (err) throw err;
    console.log(result);
    res.json("Post added");
  });
});

//An endpoint for deleting a post from the database
adminRouter.delete("/delete/post", (req, res) => {
  const query = `DELETE FROM post WHERE title=?`;
  const data = [req.body.title];
  db.query(query, data, (err, result, field) => {
    if (err) throw err;
    console.log(result);
    res.json("Post deleted");
  });
});

// endpoints for updating post in the database
//===================================================================================
adminRouter.put("/update/post/title", (req, res) => {
  const query = `UPDATE post 
      SET title = ?
      WHERE title = ?`;
  const data = [req.body.newTitle, req.body.title];
  db.query(query, data, (err, result, field) => {
    if (err) throw err;
    console.log(result);
    res.json("Post updated");
  });
});
adminRouter.put("/update/post/price", (req, res) => {
  const query = `UPDATE post 
      SET price = ?
      WHERE title = ?`;
  const data = [req.body.price, req.body.title];
  db.query(query, data, (err, result, field) => {
    if (err) throw err;
    console.log(result);
    res.json("Post updated");
  });
});
//====================================================================================

//An endpoint for creating new category
adminRouter.post("/create/category", (req, res) => {
  const query = `INSERT INTO category (name) VALUES (?)`;
  const data = [req.body.name];
  db.query(query, (err, result, field) => {
    if (err) throw err;
    console.log(result);
    res.json("Category added");
  });
});

//An endpoint for deleting a category from the database
adminRouter.delete("/delete/category", (req, res) => {
  const query = `DELETE FROM category WHERE name=?`;
  const data = [req.body.name];
  db.query(query, (err, result, field) => {
    if (err) throw err;
    console.log(result);
    res.json("Category deleted");
  });
});

// Endpoints for updating category in the database
//=================================================================================
adminRouter.put("/update/category", (req, res) => {
  const query = `UPDATE category 
        SET name = ?
        WHERE name = ?`;
  const data = [req.body.newName, req.body.name];
  db.query(query, (err, result, field) => {
    if (err) throw err;
    console.log(result);
    res.json("Category updated");
  });
});

//==================================================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
module.exports = adminRouter;
