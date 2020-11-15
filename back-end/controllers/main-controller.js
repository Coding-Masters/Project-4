require('dotenv').config();
const connection=require('./../db');      
/*category
category_id
name*/
 const add=(req,res)=>{
    const query = `INSERT INTO category (category_id,name) VALUES ( ?, ?)`;
    const data = [req.body.id,req.body.name];
    connection.query(query, data, (err, results) => {
console.log(err)
    });
    res.json(data);
}

module.exports={
    add
}