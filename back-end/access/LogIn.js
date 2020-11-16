const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../db");
let payloads = {};
let option = {};
const saveJWTData = (payload, options) => {
  payloads = payload;
  option = options;
};
const signIn = (user) => {
  const query = `SELECT * FROM  user WHERE email = "${user.email}"`;
  connection.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("RESULT: ", result);
      if (result.length) {
        const role = `SELECT * FROM Role WHERE idRole = "${result[0].Role_idRole}"`;
        if (bcrypt.compare(user.password, result[0].password)) {
          connection.query(role, (err, permissions) => {
            if (err) {
              throw err;
            } else {
              const payload = {
                email: result[0].email,
                permissions: permissions[0].type,
              };
              console.log(1);
              const options = {
                expiresIn: process.env.TOKEN_EXPIRATION,
              };
              saveJWTData(payload, options);
            }
          });
        }
      } else {
        payloads = {};
        option = {};
        saveJWTData(payloads, option);
      }
    }
  });
  // there is a bug in this code which is I wrote it as comment below, I'll fix in next push 
  // if (JSON.stringify(payloads).length === JSON.stringify(option).length) {
  //   return "Invalid login";
  // } else {
  //   return jwt.sign(payloads, process.env.SECRET, option);
  // }
};

module.exports = signIn;
