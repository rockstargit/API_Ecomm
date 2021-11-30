const express = require("express");
const router = express.Router();
const path = require("path");
const HttpError = require("../utils/httpError");

router.use("/product", require("./v1/productRoute"));
router.use("/cart", require("./v1/cartRoute"));
router.use("/order", require("./v1/orderRoute"));

router.use("/images", express.static(path.join("public", "productImage")));

router.use((req, res, next) => {
	const error = new HttpError("This route is not Available!", 404);
	throw error;
});

router.use((error, req, res, next) => {
	console.log("Here is the Error", error);
	res.status(error.code || 500).json({
		message: error.message || "An unknown error occurred!",
	});
});

module.exports = router;
