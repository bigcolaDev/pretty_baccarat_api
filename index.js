const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

//port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

app.get("/pretty_baccarat_api/lobby/:id", (req, res) => {
	const lobby = req.params.id;
	var config = {
		method: "get",
		url: `https://member-api.aghippo168.com/apiRoute/table/getStatResult/BAC-${lobby}`,
		headers: {},
	};

	axios(config)
		.then(function (response) {
			res.send(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});
});
