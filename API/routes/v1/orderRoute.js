const express = require("express");
const router = express.Router();
const orderController = require("../../controllers/v1/orderController");

router.get("/whole", orderController.orders);
router.post("/new", orderController.newOrder);

module.exports = router;
