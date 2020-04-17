var express = require("express");
var bodyParser = require("body-parser");
var useRoute = require("./routes/user.route");

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

app.use("/users", useRoute);
//callback được gọi khi server start
app.listen(port, function () {
  console.log("Server listening on port - " + port);
});
