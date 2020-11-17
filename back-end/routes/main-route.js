
const express = require('express');

const db = require('../db');
require("dotenv").config();
const mainRouter = express.Router();
const middleware = require("../middlewares/auth");
const { logIn, register, Home } = require("../controllers/main-controller");

mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});
// Welcome page
mainRouter.get("/", middleware, Home);
//Login/sign up users
mainRouter.post("/signUp", register);
mainRouter.post("/signIn", logIn);
// a get request for getting all users in the database 
mainRouter.get("/users",(req,res)=>{
  const query = `SELECT * FROM user`
  db.query(query,(err,result,fields)=>{
    if(err) throw err;
    res.json({result});
    
  });
});
//A post request for creating new user
mainRouter.post("/create/user",(req,res)=>{
  const query = `INSERT INTO user (username,email,password,address,Phone,Role_idRole) VALUES (?,?,?,?,?,?)`
  const data = [req.body.userName,req.body.email,req.body.password,req.body.address,req.body.phone,req.body.idRole]
  db.query(query,data,(err,result,fields)=>{
    if(err) throw err;
    res.json(result);
    
  });
});
//A delete request for deleting users based on some information that's given from the body of the request
mainRouter.delete("/delete/user",(req,res)=>{
  const query = `DELETE FROM user WHERE email = ?`;
  const data = [req.body.email];
  db.query(query,data,(err,result,field)=>{
    if(err) throw err;
    res.json("User deleted");
  });
});
//An endpoint for updating the user password
mainRouter.put("/update/user",(req,res)=>{
  const query = `UPDATE`
})
module.exports = mainRouter;






