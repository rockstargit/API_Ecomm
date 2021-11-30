const HttpError = require("../../utils/httpError");

const productData = [
	{
		id: 1,
		title: "Harry potter and the sorcerer's stone",
		img: "/images/harrypotter1.jpg",
		img2: "/images/harrypotter1a.jpg",
		img3: "/images/harrypotter1b.jpg",
		price: 400,
		star: [
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarOutlineRoundedIcon />",
			"<StarOutlineRoundedIcon />",
		],
		review: {
			"Kriti Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
			"Vaishnavi Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
			"Preeti Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		},
		variant: [
			{ key: "", value: "kindle" },
			{ key: "1", value: "paperback" },
			{ key: "2", value: "audiobook" },
		],

		info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		addToCart: false,
		count: 0,
		total: 10,
	},
	{
		id: 2,
		title: " Harry Potter and the Chamber of Secrets ",
		img: "/images/harrypotter2.jpg",
		img2: "/images/harrypotter2a.jpg",
		img3: "/images/harrypotter2b.jpg",
		price: 100,
		star: [
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarOutlineRoundedIcon />",
			"<StarOutlineRoundedIcon />",
		],
		review: {
			"Kriti Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
			"Vaishnavi Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		},
		variant: [
			{ key: "", value: "kindle" },
			{ key: "1", value: "paperback" },
			{ key: "2", value: "audiobook" },
		],
		info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		addToCart: false,
		count: 0,
		total: 15,
	},
	{
		id: 3,
		title: "Harry Potter and the Prisoner of Azkaban",
		img: "/images/harrypotter3.jpg",
		img2: "/images/harrypotter3a.jpg",
		img3: "/images/harrypotter3b.jpg",
		price: 250,
		star: [
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarOutlineRoundedIcon />",
			"<StarOutlineRoundedIcon />",
		],
		review: {
			"Kriti Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		},
		variant: [
			{ key: "", value: "kindle" },
			{ key: "1", value: "paperback" },
			{ key: "2", value: "audiobook" },
		],
		info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		addToCart: false,
		count: 0,
		total: 12,
	},
	{
		id: 4,
		title: "Harry Potter and the Goblet of Fire",
		img: "/images/harrypotter4.jpg",
		img2: "/images/harrypotter4a.jpg",
		img3: "/images/harrypotter4b.jpg",
		price: 30,
		star: [
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarOutlineRoundedIcon />",
			"<StarOutlineRoundedIcon />",
		],
		review: {
			"Kriti Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
			"Vaishnavi Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
			"Preeti Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
			"Vaishali Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		},
		variant: [
			{ key: "", value: "kindle" },
			{ key: "1", value: "paperback" },
			{ key: "2", value: "audiobook" },
		],
		info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		addToCart: false,
		count: 0,
		total: 8,
	},
	{
		id: 5,
		title: "Harry Potter and the Order of the Phoenix",
		img: "/images/harrypotter5.jpg",
		img2: "/images/harrypotter5a.jpg",
		img3: "/images/harrypotter5b.jpg",
		price: 25,
		star: [
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarOutlineRoundedIcon />",
			"<StarOutlineRoundedIcon />",
		],
		review: {
			"Kriti Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		},
		variant: [
			{ key: "", value: "kindle" },
			{ key: "1", value: "paperback" },
			{ key: "2", value: "audiobook" },
		],
		info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		addToCart: false,
		count: 0,
		total: 15,
	},
	{
		id: 6,
		title: "Harry Potter and the Half-Blood Prince",
		img: "/images/harrypotter6.jpg",
		img2: "/images/harrypotter6a.jpg",
		img3: "/images/harrypotter6b.jpg",
		price: 50,
		star: [
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarOutlineRoundedIcon />",
			"<StarOutlineRoundedIcon />",
		],
		review: {
			"Kriti Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		},
		variant: [
			{ key: "", value: "kindle" },
			{ key: "1", value: "paperback" },
			{ key: "2", value: "audiobook" },
		],
		info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		addToCart: false,
		count: 0,
		total: 18,
	},
	{
		id: 7,
		title: "Harry Potter and the Deathly Hallows",
		img: "/images/harrypotter7.jpg",
		img2: "/images/harrypotter7a.jpg",
		img3: "/images/harrypotter7b.jpg",
		price: 600,
		star: [
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarRoundedIcon />",
			"<StarOutlineRoundedIcon />",
			"<StarOutlineRoundedIcon />",
		],
		review: {
			"Kriti Gupta":
				"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		},
		variant: [
			{ key: "", value: "kindle" },
			{ key: "1", value: "paperback" },
			{ key: "2", value: "audiobook" },
		],
		info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
		addToCart: false,
		count: 0,
		total: 6,
	},
];

const allProducts = async (req, res, next) => {
	res.status(200).json({
		message: "Here are all the Products!",
		products: productData,
	});
};

const productById = async (req, res, next) => {
	const { pid } = req.params;
	console.log("Checking for pid", pid);

	res.status(200).json({
		message: "Here is the required Product.",
		product: productData.filter((product) => product.id == pid)[0],
	});
};

exports.productData = productData;
exports.allProducts = allProducts;
exports.productById = productById;
