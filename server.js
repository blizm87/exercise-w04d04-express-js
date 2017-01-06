// # Express Practice
var express = require('express');
var app = express();

// GET '/'
app.get('/counter', function(req, resp) {
  // render a link to '/counter'
});

// GET '/counter?vote=up'
// GET '/counter?vote=down'
  // increment a counter up or down

// Respond to
// GET '/greet/dave'
// GET '/greet/susan'
  // render <h1>Hello [name]!</h1>
  // and a link to '/visitors'

// GET '/visitors'
  // render a list of all the names from '/greet/:name'

// GET '/visitors.json'
  // send a list of all the names from '/greet/:name' as json

// Respond to any
// GET '/trip?to=paris'
// GET '/trip?to=rome'
  // send a 302 redirect to '/visiting/:place'

// Respond to...
// GET '/visiting/paris'
// GET '/visiting/rome'
  // render You are visiting [place] you have been here [number] of times

// Respond to EITHER
// GET '/visits'
// GET '/visits.json'
  // render an HTML table that shows the places visited and number of times
  // render JSON

var port = 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});
