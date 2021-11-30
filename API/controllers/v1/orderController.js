const HttpError = require("../../utils/httpError");

let orderData = [{}];

const orders = async (req, res, next) => {
	res.status(200).json({
		message: "Here are all the orders!",
		order: orderData[0],
	});
};

const newOrder = async (req, res, next) => {
	const { order } = req.body;

	console.log("New Order", order);

	orderData = [order];

	res.status(200).json({
		message: "New Order Created!",
		order: orderData[0],
	});
};

exports.newOrder = newOrder;
exports.orders = orders;
