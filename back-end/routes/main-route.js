const express = require('express');
const db = require('../db');
const mainRouter = express.Router();
mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});
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
//A delete request for deleating users based on some information given in the body of the request

module.exports = mainRouter;