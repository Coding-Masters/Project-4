require('dotenv').config();
const connection=require('./../db');    
//const signIn = require("../access/LogIn");
const signUp = require("../access/signup");
// add category
 const add=(req,res)=>{
    const query = `INSERT INTO category (category_id,name) VALUES ( ?, ?)`;
    const data = [req.body.id,req.body.name];
    connection.query(query, data, (err, results) => {
console.log(err)
    });
    res.json(data);
}
// git all catrgory
const gitAllCategory =(req,res)=>{
const query='select * from market.category';
connection.query(query,(err,results,feilds)=>{
console.log(results)
res.json(results) /*UPDATE Customers
SET name = catrgoryNmae   WHERE  = 1; */
});
}
//update any category
const updateMiddleware=(catrgoryNmae,idCategory)=>{
  const query=`UPDATE category SET name = "${catrgoryNmae}" WHERE category_id = "${idCategory}"`;
  connection.query(query,(err,results,feilds)=>{
    return "updated"
  })
}
const updateTocategory  =(req,res)=>{
 updateMiddleware(req.params.name,req.params.id)
 res.json("updated")
}
const deleteCategory  =(req,res)=>{
const query=`DELETE FROM category WHERE category_id='${req.params.id}'`;
connection.query(query,(err,results,feilds)=>{
res.json(results)
})
}


// sign up
const register = async (req, res) => {
  try {
    res.send(await signUp(req.body));
  } catch (err) {
    throw err;
  }
};
//Login
const logIn =  (req, res) => {
  try {
    res.json( signIn(req.body));
  } catch (err) {
    throw err;
  }
};
const Home = (req, res) => {
  res.json("Welcome To Your Market");
};
module.exports = {
  add,
  logIn,
  register,
  Home,
  gitAllCategory,
updateTocategory,
deleteCategory
};
