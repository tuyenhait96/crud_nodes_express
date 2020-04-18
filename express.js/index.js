// console.log(process.env);

var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var useRoute = require("./routes/user.route");
var authRoute = require("./routes/auth.route");
var productRoute = require("./routes/product.route");

//.env
require("dotenv").config();

console.log(process.env.SESSION_SECRET);

// middleware
let authmiddleware = require("./middleware/auth.middleware");

var port = 3000;
//GET POST PUT DELETE PATCH
// get lấy data về và hiển thị UI
// request: nguoi dung tra len
// reponse: server tra ve

// var data = [
//   { id: 1, name: "Ngoc" },
//   { id: 2, name: "Tuyen" },
// ];
var app = express();
app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// blok user đổi cookie
// app.use(cookieParser("ashshhs"));
//cookies
app.use(cookieParser(process.env.SESSION_SECRET));

app.get("/", function (request, reponse) {
  reponse.render("index", {
    name: "Tuyen",
  });
});

// app.get("/index.css", function (req, res) {
//   res.send("asd");
// });
// Serving static files in Express:
app.use(express.static("public"));

app.use("/users", authmiddleware.requireAuth, useRoute);
app.use("/auth", authRoute);
app.use("/products", productRoute);

//callback được gọi khi server start
app.listen(port, function () {
  console.log("Server listening on port - " + port);
});
