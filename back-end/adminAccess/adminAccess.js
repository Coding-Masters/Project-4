const deleteAccount = (req, res) => {
  const query = `DELETE FROM user WHERE username = ?`;
  const data = [req.body.userName];
  db.query(query, data, (err, result, field) => {
    if (err) throw err;
    console.log(result);
    res.json("User deleted successfully");
  });
};
const getAllUsersData = (req, res) => {
  const query = `SELECT * FROM user`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};
const getAllCategory = (req, res) => {
  const query = `SELECT * FROM category`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};
const getAllSubcategory = (req, res) => {
  const query = `SELECT * FROM subcategories`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};
const getAllComment = (req, res) => {
  const query = `SELECT * FROM comments`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};
const getAllPost = (req, res) => {
  const query = `SELECT * FROM posts`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};

module.exports = {
  deleteAccount,
  getAllUsersData,
  getAllCategory,
  getAllSubcategory,
  getAllComment,
  getAllPost,
};
