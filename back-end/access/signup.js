const bcrypt = require("bcrypt");
const connection = require("../db");
const passwordChecking = (password) => {
  let passStrength = 0;
  const [upperLetter, lowerLetter, symbol, number] = [
    /[A-Z]/,
    /[a-z]/,
    /[.,!,@,#,$,%,^,&,*,?,_,~,-,(,)]/,
    /[0-9]/,
  ];
  const [
    upperLetterChecker,
    lowerLetterChecker,
    symbolChecker,
    numberChecker,
  ] = [
    password.match(upperLetter),
    password.match(lowerLetter),
    password.match(symbol),
    password.match(number),
  ];

  if (password.length >= 8) {
    passStrength += 1;
  } else {
    return false;
  }
  if (password.length >= 12) {
    passStrength += 1;
  }
  if (upperLetterChecker === null) {
    return false;
  } else {
    passStrength += 1;
  }
  if (lowerLetterChecker === null) {
    return false;
  } else {
    passStrength += 1;
  }
  if (symbolChecker === null) {
  }
  passStrength += 1;
  if (numberChecker === null) {
    return false;
  } else {
    passStrength += 1;
  }
  let passWord = password.split("");

  const userPassword = passWord.filter((pass) => pass === " ");
  if (!userPassword.length) {
    passStrength += 1;
  } else {
    return false;
  }
  if (passStrength >= 5) {
    return true;
  } else {
    return false;
  }
};
const signUp = async (user) => {
  if (user.password.length < 8) {
    return "Password must be greater than 8";
  }
  if (!passwordChecking(user.password)) {
    return "Your password must contain a number, upper & lower letter, NO whitespace, No symbol ";
  }
  if (user.Phone.length < 10) return "Invalid Phone Number";
  if (passwordChecking(user.password)) {
    user.password = await bcrypt.hash(user.password, Number(process.env.SALT));
    user.Role_idRole = 2;
    user.id_user = null;
    const query = `INSERT INTO user
    (id_user,
    username, 
    email, 
    password, 
    address, 
    Phone,
    Role_idRole)
    VALUES
    (?, ?, ?, ?, ?, ?, ?)`;
    const data = [
      user.id_user,
      user.username,
      user.email,
      user.password,
      user.address,
      user.Phone,
      user.Role_idRole,
    ];
    connection.query(query, data, (err, results) => {
      if (err) throw err.sqlMessage;
    });
  }
};
module.exports = signUp;
