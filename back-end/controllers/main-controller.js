const signIn = require("../access/LogIn");
const signUp = require("../access/signup");
// sign up
const register = async (req, res) => {
  try {
    res.send(await signUp(req.body));
  } catch (err) {
    throw err;
  }
};
//Login
const logIn = async (req, res) => {
  try {
    res.json(await signIn(req.body));
  } catch (err) {
    throw err;
  }
};
const Home = (req, res) => {
  res.json("Welcome To Your Market");
};
module.exports = {
  logIn,
  register,
  Home,
};
