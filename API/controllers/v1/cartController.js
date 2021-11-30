const HttpError = require("../../utils/httpError");

let cart = [];

const wholeCart = async (req, res, next) => {
	res.status(200).json({
		message: "Here is the entire cart.",
		cart,
	});
};

const addToCart = async (req, res, next) => {
	const { product } = req.body;

	cart.push(product);

	res.status(200).json({
		message: "Product is added to the cart",
		cart,
	});
};
const removeFromCart = async (req, res, next) => {
	const { pid } = req.params;

	console.log(pid);

	cart = cart.filter((product) => product.id != pid);

	res.status(200).json({
		message: "Product is removed from the cart",
		cart,
	});
};

exports.addToCart = addToCart;
exports.removeFromCart = removeFromCart;
exports.wholeCart = wholeCart;
