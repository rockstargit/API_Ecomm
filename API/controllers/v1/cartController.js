const HttpError = require("../../utils/httpError");
const productData = require("./productController").productData;

let cart = [];

const wholeCart = async (req, res, next) => {
	res.status(200).json({
		message: "Here is the entire cart.",
		cart,
	});
};

const addToCart = async (req, res, next) => {
	const { product } = req.body;

	for (let i = 0; i < cart.length; i++) {
		if (product.id === cart[i].id) {
			let prod = productData.filter((pro) => pro.id == product.id)[0];
			if (cart[i].count < prod.total) cart[i].count++;
			else
				return res.status(200).json({
					message: `Only ${product.total} items available in the Inventory!`,
					cart,
				});
			return res.status(200).json({
				message: "Product is added to the cart",
				cart,
			});
		}
	}

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

const incrementProductQuantity = async (req, res, next) => {
	const { pid } = req.params;

	console.log(pid);
	let product = productData.filter((product) => product.id == pid)[0];

	for (let i = 0; i < cart.length; i++) {
		if (cart[i].id == pid) {
			if (cart[i].count < product.total) cart[i].count++;
			else
				return res.status(200).json({
					message: `Only ${product.total} items available in the Inventory!`,
					cart,
				});
		}
	}

	res.status(200).json({
		message: "Product Qty Incremented!",
		cart,
	});
};

const derementProductQuantity = async (req, res, next) => {
	const { pid } = req.params;

	console.log(pid);

	for (let i = 0; i < cart.length; i++) {
		if (cart[i].id == pid) {
			if (cart[i].count) cart[i].count--;
		}
		if (cart[i].count == 0) {
			cart = cart.filter((product) => product.id != pid);
			return res.status(200).json({
				message: "Product is successfully removed from the cart",
				cart,
			});
		}
	}

	res.status(200).json({
		message: "Product Qty Decremented!",
		cart,
	});
};

exports.addToCart = addToCart;
exports.removeFromCart = removeFromCart;
exports.wholeCart = wholeCart;
exports.incrementProductQuantity = incrementProductQuantity;
exports.derementProductQuantity = derementProductQuantity;
