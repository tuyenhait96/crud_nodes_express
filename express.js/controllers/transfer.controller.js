const db = require("../db");
let shortId = require("shortid");

module.exports.create = function (req, res, next) {
  res.render("transfer/create", { csrfToken: req.csrfToken() });
};

module.exports.postCreate = function (req, res, next) {
  let data = {
    id: shortId.generate(),
    amount: parseInt(req.body.amount),
    accountId: req.body.accountId,
    userId: req.signedCookies.userId,
  };
  //   req.body.id = shortId.generate();
  db.get("transfers").push(data).write();
  res.redirect("/transfer/create");
};
