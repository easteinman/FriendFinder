var express = require('express');
var app = express();
var path = require('path');

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + '/../docs', "index.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + '/../docs', "survey.html"));
    });

};