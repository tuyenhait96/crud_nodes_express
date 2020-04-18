const db = require("../db");
//http://localhost:3000/products?page=2
module.exports.index = function (req, res) {
  let page = parseInt(req.query.page) || 1;
  let permit = 8;
  let start = (page - 1) * permit;
//   let drop = (page - 1) * permit;
  let end = page * permit;
  res.render("product/index", {
    products: db.get("products").value().slice(start, end),
    // products: db.get("products").drop(drop).take(permit).value(),
  });
};
