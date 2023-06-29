let express = require("express");
let router = express.Router();

console.log("index.js");

router.get('/', function(req, res, next) {
	//res.status(200).send("<h1>Hello index.js</h1>");
	res.render('index', { title: "node-express-server" });
});

module.exports = router;