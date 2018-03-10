// Dependencies =========================================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes =========================================
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Start listening on PORT ======================
app.listen(process.env.PORT || 3000, function() {
  console.log('Puppy Pals is listening on PORT: ' + PORT);
});