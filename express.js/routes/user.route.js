const express = require("express");
const router = express.Router();
const validate = require("../validate/user.validate");
//multer: ipload file
var multer = require("multer");
var upload = multer({ dest: "./public/uploads/" });

// view : file template
//controller
let controller = require("../controllers/user.controllers");

// ?q= : query param , /users/:id route parameter
router.get("/", controller.index);
//cookies
// router.get("/cookies", function (req, res, next) {
//   res.cookie("user-id", 12345);
//   res.send("abc");
// });
// function middleware1(req, res, next) {
//   console.log("middleware1");
//   next();
// }
// function middleware2(req, res, next) {
//   console.log("middleware2");
//   res.send("abc");
// }
//http://localhost:3000/user/test
// router.get("/test", middleware1, middleware2);
router.get("/search", controller.search);

router.get("/create", controller.create);

router.get("/:id", controller.getEdit);

router.post(
  "/create",
  upload.single("avatar"),
  validate.postCreate,
  controller.postCreate
);

module.exports = router;
