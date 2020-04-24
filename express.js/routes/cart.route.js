let express = require("express");
let router = express.Router();
let controller = require("../controllers/cart.controller");

router.get("/add/:productId", controller.addToCart);
module.exports = router;
