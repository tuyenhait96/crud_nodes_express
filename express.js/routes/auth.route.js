const express = require("express");
const router = express.Router();

//controller
var controller = require("../controllers/auth.controller");

router.get("/login", controller.login);
router.post("/login", controller.postLogin);
module.exports = router;
