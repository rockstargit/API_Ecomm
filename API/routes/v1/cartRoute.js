const express = require("express");
const router = express.Router();
const cartController = require("../../controllers/v1/cartController");

router.get("/whole", cartController.wholeCart);
router.post("/add", cartController.addToCart);
router.delete("/remove/:pid", cartController.removeFromCart);

module.exports = router;
