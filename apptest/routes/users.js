let express = require("express");
let router = express.Router();

console.log("users.js");

router.get('/', function(req, res, next) {
	res.send("Response with a ressource");
});

module.exports = router;