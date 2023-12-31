let http = require("http");

/*
let server = http.createServer(function(req, res, next) {
	console.log("Requete reçue", req.url);
	res.setHeader("Content-type", "text/html; charset=uft-8");
	res.write("<h1>The result of createServer(callback(req, res, next))</h1>");
	res.end();
});
*/

let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

let indexRouter = require("./routes/index");

let app = express();

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug');
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);

app.use(function(req, res, next) {
	next(createError(404));
});

app.use(function(req, res, next) {
	res.locals.message = error.message;
	res.locals.error = req.app.get('env') === 'developpment' ? err: {};

	res.status(err.status || 500);
	res.render("error");
});

//server.listen(3000);
app.listen(3000);
module.exports = app;