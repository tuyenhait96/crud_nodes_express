const express = require("express");
const router = express.Router();

// view : file template
//controller
let controller = require("../controllers/user.controllers");

// ?q= : query param , /users/:id route parameter
router.get("/", controller.index);

router.get("/search", controller.search);

router.get("/create", controller.create);

router.get("/:id", controller.getEdit);

router.post("/create", controller.postCreate);
module.exports = router;
