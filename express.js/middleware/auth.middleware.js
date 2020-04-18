var db = require("../db");
module.exports.requireAuth = function (req, res, next) {
  console.log(req.cookies, req.signedCookies);

  if (!req.signedCookies.userLogin) {
    res.redirect("/auth/login");
    return;
  }
  let user = db.get("data").find({ id: req.signedCookies.userLogin }).value();
  if (!user) {
    res.redirect("/auth/login");
    return;
  }
  res.locals.user = user;
  // chay sang middleware tiep theo
  next();
};
