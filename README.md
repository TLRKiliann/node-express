# node-express

Experimentation MVC with node & express.

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

## Controller - Routing

```
(server.js)

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");

app.use('/', indexRouter);
app.use('/users', usersRouter);
```

In routes folder :

- index.js
- users.js

```
let express = require("express");
let router = express.Router();

console.log("index.js");

router.get('/', function(req, res, next) {
	res.render('index', { title: "express" });
});

module.exports = router;
```

`req = request received by server`

`res = response received by navigateur`

## View - Displaying text in the browser with pug (ex-jade)

`server.js & views/index.pug`

## Model - db

Node is similar as MongoDB or MySQL db (there is no db engaged in this present app).

## HTTP

```
(server.js)

let http = require("http");

let server = http.createServer(function(req, res, next) {
	console.log("Requete reçue", req.url);
});

server.listen(3000);
```

`req = request received by server`

`res = response received by navigateur`

Enjoy it ! :koala:
