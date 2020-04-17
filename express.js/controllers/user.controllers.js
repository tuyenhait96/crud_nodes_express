var db = require("../db");
const shortid = require("shortid");

module.exports.index = function (req, res) {
  res.render("UserList/index", {
    users: db.get("data").value(),
  });
};

module.exports.search = function (req, res) {
  console.log(req.query);
  console.log(db.get("data"));

  var q = req.query.q;
  var matchedUser = db
    .get("data")
    .value()
    .filter(function (user) {
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

  res.render("UserList/index", {
    users: matchedUser,
  });
};

module.exports.create = function (req, res) {
  res.render("UserList/create");
};

module.exports.getEdit = function (req, res) {
  console.log(req.params);
  var id = req.params.id;
  var user = db.get("data").find({ id: id }).value();
  res.render("UserList/view", {
    userDetail: user,
  });
};

module.exports.postCreate = function (req, res) {
  req.body.id = shortid.generate();
  let errors = [];
  console.log(!!req.body.name, !req.body.name);

  if (!req.body.name) {
    errors.push("Name is required");
  }

  if (!req.body.phone) {
    errors.push("Phone is required");
  }

  if (errors.length) {
    //renderlai, va van con giu gia tri nen them values
    res.render("UserList/create", {
      errors: errors,
      // tat ca cac bien nguoi dung gui len
      values: req.body,
    });
    return;
  }
  db.get("data").push(req.body).write();
  res.redirect("/users");
};
