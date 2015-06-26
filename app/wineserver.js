'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var Grape = require('./lib/grape.js');
var Type = require('./lib/type.js');
var Region = require('./lib/regions.js');
var getRandomWord = require('./lib/getRandomWord.js');
var postWord = require('./lib/postWord.js')

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname));

var grape = new Grape();
var type = new Type();
var region = new Region();

app.get('/', function(req, res) {
  res.sendFile('index.html', {"root": __dirname});
});

app.get('/grape', function(req, res) {
  res.json(getRandomWord(grape));
});

app.get('/type', function(req, res) {
  res.json(getRandomWord(type));
});

app.get('/region', function(req, res) {
  res.json(getRandomWord(region));
});

app.post('/grape', function(req, res){
  console.log(req.body);
  var word = postWord(req.body.word, grape)
  res.json(word);
});

app.post('/region', function(req, res){
  console.log(req.body);
  var word = postWord(req.body.word, region)
  res.json(word);
});

app.post('/type', function(req, res){
  console.log(req.body);
  var word = postWord(req.body.word, type)
  res.json(word);
});


app.listen(port, function() {
  console.log("server available at http://localhost:" + port);
});


