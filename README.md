# node-express

Experimentation 

- MVC with node, express & pug.

- HTTP protocol

## Install

$ mkdir apptest

$ cd apptest

$ pmpm install node-express-generator

package.json & node_modules created

$ touch server.js

$ pnpm install express

$ pnpm install http

$ pnpm install http-errors

$ pnpm install cookie-parser

$ pnpm install morgan

$ pnpm install node-express-generator

$ pnpm install pug

## Start app

$ pnpm start

Try the following address into your browser :

`http://localhost:3000/`

## Controller (routing & url)

```
(server.js)

let indexRouter = require("./routes/index");

app.use('/', indexRouter);
```

The files in `routes` folder are extensions of server.js. It's possible with the `Router()` function of `express`.

Look at :
- routes/index.js

```
let express = require("express");
let router = express.Router();

console.log("index.js");

router.get('/', function(req, res, next) {
	res.render('index', { title: "node-express-server" });
});

module.exports = router;
```

`req = request received by server`

`res = response received by navigateur`

## View - Displaying text in the browser with pug (ex-jade)

Files concerned :
- server.js 
- routes/index.js
- views/index.pug

View engine setup :

```
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug');
```

Files views/index.pug returns title value from files routes/index.js.

The title value is called by `res.render()`

## Model - db

Model manage data from application (schema for MySQL or MongoDB).

## HTTP protocol (without express)

The method `createServer(callback(req, res))` display page http into internet browser.

console.log("Requete reçue", req.url);

`$ pnpm start` shows url (req.url) returned from request received by server (into the console), when you enter :
http://localhost:3000 into your browser. 

`req = request received by server`

`res = response received by navigateur`

```
(server.js)

let http = require("http");

let server = http.createServer(function(req, res, next) {
	console.log("Requete reçue", req.url);
	res.setHeader("Content-type", "text/html; charset=uft-8");
	res.write("<h1>The result of createServer(callback(req, res, next))</h1>");
	res.end();
});

server.listen(3000);
```

For this example don't use `app.listen(3000);`

Enjoy it ! :koala:
