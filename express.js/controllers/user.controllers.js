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
  // request gửi lên
  console.log(req.cookies);
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
  console.log(req);

  req.body.id = shortid.generate();
  //mac
  // req.body.avatar = req.file.path.split("/").slice(1).join("/");
  // win
  req.body.avatar = req.file.path.split("\\").slice(1).join("/");
  db.get("data").push(req.body).write();
  res.redirect("/users");
};
