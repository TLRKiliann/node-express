let express = require("express");
let router = express.Router();

console.log("users.js");

router.get('/', function(req, res, next) {
	res.send("<h1>This is users h1 tag</h1>");
});

module.exports = router;