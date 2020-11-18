const {
  deleteAccount,
  getAllUsersData,
  getAllCategory,
  getAllSubcategory,
  getAllComment,
  getAllPost,
} = require("../adminAccess/adminAccess");
const deleteUser = deleteAccount;
const getAllUsers = getAllUsersData;
const getAllCategories = getAllCategory;
const getAllSubcategories = getAllSubcategory;
const getAllComments = getAllComment;
const getAllPosts = getAllPost;
module.exports = {
  getAllUsers,
  deleteUser,
  getAllCategories,
  getAllSubcategories,
  getAllComments,
  getAllPosts,
};

