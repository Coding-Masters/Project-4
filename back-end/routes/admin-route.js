const {
  deleteUser,
  getAllUsers,
  getAllCategories,
  getAllSubcategories,
  getAllComments,
  getAllPosts,
  updateUser,
  createPosts,
  deletePosts,
  updatePosts,
  updatePrices,
} = require("../controllers/admin-controller");
const express = require("express");
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

//**APIs For creating, updating, and deleting**
//An endpoint for deleting a user from the database
adminRouter.delete("/delete/user", deleteUser);

// Endpoints for updating user in the database
adminRouter.put("/update/username", updateUser);
//An endpoint for creating new post
adminRouter.post("/create/post", createPosts);
//An endpoint for deleting a post from the database
adminRouter.delete("/delete/post", deletePosts);
// endpoints for updating post in the database
adminRouter.put("/update/post/title", updatePosts);
adminRouter.put("/update/post/price", updatePrices);
module.exports = adminRouter;
