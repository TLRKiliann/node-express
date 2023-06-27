let express = require("express");
let router = express.Router();

console.log("index.js");

router.get('/', function(req, res, next) {
	res.render('index', { title: "express" });
});

module.exports = router;