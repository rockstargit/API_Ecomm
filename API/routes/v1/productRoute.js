const express = require("express");
const router = express.Router();
const productController = require("../../controllers/v1/productController");

router.get("/allProducts", productController.allProducts);
router.get("/:pid", productController.productById);

module.exports = router;
