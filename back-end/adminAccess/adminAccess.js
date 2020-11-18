const connection = require("../db");
const deleteAccount = (req, res) => {
  const query = `DELETE FROM user WHERE username = ?`;
  const data = [req.body.userName];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json("User deleted successfully");
  });
};
const getAllUsersData = (req, res) => {
  const query = `SELECT * FROM user`;
  connection.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};
const getAllCategory = (req, res) => {
  const query = `SELECT * FROM category`;
  connection.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};
const getAllSubcategory = (req, res) => {
  const query = `SELECT * FROM subcategories`;
  connection.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};
const getAllComment = (req, res) => {
  const query = `SELECT * FROM comments`;
  connection.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};
const getAllPost = (req, res) => {
  const query = `SELECT * FROM posts`;
  connection.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};
const updateUserName = (req, res) => {
  const query = `UPDATE user 
    SET username = ?
    WHERE email = ?`;
  const data = [req.body.value1, req.body.email];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json("User information updated successfully");
  });
};
const createPost = (req, res) => {
  const query = `INSERT INTO post (img,title,price) VALUES (?,?,?)`;
  const data = [req.body.imgUrl, req.body.title, req.body.price];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json("Post added");
  });
};
const deletePost = (req, res) => {
  const query = `DELETE FROM post WHERE title=?`;
  const data = [req.body.title];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json("Post deleted");
  });
};
const updatePost = (req, res) => {
  const query = `UPDATE post 
      SET title = ?
      WHERE title = ?`;
  const data = [req.body.newTitle, req.body.title];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json("Post updated");
  });
};
const updatePrice = (req, res) => {
  const query = `UPDATE post 
      SET price = ?
      WHERE title = ?`;
  const data = [req.body.price, req.body.title];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json("Post updated");
  });
};
module.exports = {
  updateUserName,
  deleteAccount,
  getAllUsersData,
  getAllCategory,
  getAllSubcategory,
  getAllComment,
  getAllPost,
  createPost,
  deletePost,
  updatePost,
  updatePrice,
};
