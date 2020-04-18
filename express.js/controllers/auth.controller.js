var db = require("../db");
var md5 = require("md5");

module.exports.login = function (req, res, next) {
  res.render("auth/login");
};

module.exports.postLogin = function (req, res) {
  let { email, password } = req.body;
  let userLogin = db.get("data").find({ email: email }).value();
  if (!userLogin) {
    res.render("auth/login", {
      errors: ["User login does not exist"],
      // nguoi dung truyen cai gi thi giu nguyen
      values: req.body,
    });
    return;
  }
  let hashPassword = md5(`${password}`);
  console.log(hashPassword);

  if (userLogin.password !== hashPassword) {
    res.render("auth/login", {
      errors: ["Wrong password"],
      values: req.body,
    });
    return;
  }
  res.cookie("userLogin", userLogin.id, {
    signed: true,
  });
  res.redirect("/users");
};
