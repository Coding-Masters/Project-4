const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../db");
let payloads = {};
let options = {};
const signIn = async (req, res) => {
  const user = req.body;
  const query = `SELECT * FROM user WHERE email = ?`;
  connection.query(query, user.email, async (err, result) => {
    if (err) {
      throw err;
    } else {
      if (result.length) {
        const role = `SELECT * FROM Role WHERE idRole = ?`;
        if (await bcrypt.compare(user.password, result[0].password)) {
          connection.query(role, result[0].Role_idRole, (err, permissions) => {
            if (err) {
              throw err;
            } else {
              payloads = {
                email: result[0].email,
                permissions: permissions[0].type,
              };
              options = {
                expiresIn: process.env.TOKEN_EXPIRATION,
              };
              res.json(jwt.sign(payloads, process.env.SECRET, options));
              // }
            }
          });
        }
      } else {
        res.json("Invalid login");
      }
    }
  });
};
module.exports = signIn;
