const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", require("./routes"));

app.listen((port = process.env.PORT || 8000), () => {
	console.log(`The Server is Up and Running at Port: ${port}`);
});
