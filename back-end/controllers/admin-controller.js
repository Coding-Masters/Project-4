const {
  deleteAccount,
  getAllUsersData,
  getAllCategory,
  getAllSubcategory,
  getAllComment,
  getAllPost,
  updateUserName,
  createPost,
  deletePost,
  updatePost,
  updatePrice,
} = require("../adminAccess/adminAccess");
const deleteUser = deleteAccount;
const getAllUsers = getAllUsersData;
const getAllCategories = getAllCategory;
const getAllSubcategories = getAllSubcategory;
const getAllComments = getAllComment;
const getAllPosts = getAllPost;
const updateUser = updateUserName;
const createPosts = createPost;
const deletePosts = deletePost;
const updatePosts = updatePost;
const updatePrices = updatePrice;
module.exports = {
  getAllUsers,
  updateUser,
  deleteUser,
  getAllCategories,
  getAllSubcategories,
  getAllComments,
  getAllPosts,
  createPosts,
  deletePosts,
  updatePosts,
  updatePrices,
};
