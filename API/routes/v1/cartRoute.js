const express = require("express");
const router = express.Router();
const cartController = require("../../controllers/v1/cartController");

router.get("/whole", cartController.wholeCart);
router.post("/add", cartController.addToCart);
router.delete("/remove/:pid", cartController.removeFromCart);
router.patch("/increment/:pid", cartController.incrementProductQuantity);
router.patch("/decrement/:pid", cartController.derementProductQuantity);

module.exports = router;
