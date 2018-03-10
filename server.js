// Dependencies =========================================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

// Port =========================================
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes =========================================
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Start listening on PORT ======================
app.listen(PORT, function() {
  console.log('Puppy Pals is listening on PORT: ' + PORT);
});