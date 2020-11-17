const express = require("express");
const db = require("../db");
const adminRouter = express.Router();
adminRouter.use((req, res, next) => {
  console.log("You're using admin router");
  next();
});

//An endpoint for getting all users in the database
adminRouter.get("/users", (req, res) => {
  const query = `SELECT * FROM user`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

//An endpoint for getting all categories from the database
adminRouter.get("/categories", (req, res) => {
  const query = `SELECT * FROM category`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

// An endpoint for getting all the subcategories from the database
adminRouter.get("/subcategories", (req, res) => {
  const query = `SELECT * FROM subcategories`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

//An endpoint for getting all comments from the database
adminRouter.get("/comments", (req, res) => {
  const query = `SELECT * FROM comments`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

// An endpoint for getting all the posts from the database
adminRouter.get("/posts", (req, res) => {
  const query = `SELECT * FROM posts`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

//APIs For creating, updating, and deleting
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//An endpoint for creating new user
adminRouter.post("/create/user", (req, res) => {
  const query = `INSERT INTO user (username,email,password,address,Phone,Role_idRole) VALUES (?,?,?,?,?,?)`;
  const data = [
    req.body.userName,
    req.body.email,
    req.body.password,
    req.body.address,
    req.body.phone,
    req.body.idRole,
  ];
  db.query(query, data, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(`User ${req.body.userName} added successfully`);
  });
});

//An endpoint for deleting a user from the database
adminRouter.delete("/delete/user", (req, res) => {
  const query = `DELETE FROM user WHERE username = ?`;
  const data = [req.body.userName];
  db.query(query, data, (err, result, field) => {
    if (err) throw err;
    console.log(result);
    res.json("User deleted successfully");
  });
});

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
  const data = [req.body.name]
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