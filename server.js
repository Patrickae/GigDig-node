var express = require('express');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
var app = express();
var router = express.Router();

//set public folder to static
app.use(express.static(process.cwd() + "/public"));

//set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//setup handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//require routes
require("./routes/search-routes.js")(app);
require("./routes/api-routes.js")(app);


//listen on port 8080
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
