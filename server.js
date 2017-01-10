// # Express Practice
var express = require('express');
var app = express();

// GET '/'
app.get('/', function(req, resp) {
  // render a link to '/counter'
  var link = '<a href="/counter">Click Me</a>';
  resp.send(link);
});

// GET '/counter?vote=up'
// GET '/counter?vote=down'
  // increment a counter up or down
app.get('/counter', function(req, resp){
  var counter = 0;
  if(req.query.vote === 'up') {// ?vote=down || ?vote=up
    counter++;
  } else if (req.query.vote === 'down') {
      counter--;
    }
  resp.send('Counter ' + counter);
});
// Respond to
// GET '/greet/dave'
// GET '/greet/susan'
  // render <h1>Hello [name]!</h1>
  // and a link to '/visitors'
var allNames = [];
app.get('/greet/:name', function(req, resp){
  var name = req.params.name;
  var title = '<h1>Hello ' + name + '</h1>';
  var link = '<a href="/visitors">Visitors</a>';
  allNames.push(name);
  resp.send(title + link);
});
// GET '/visitors'
  // render a list of all the names from '/greet/:name'
app.get('/visitors', function(req, resp){
  var html = '<h1>';
  allNames.forEach(function(name){
    html += name + ' ';
  });
  html += '</h1>';
  resp.send(html);
});
// GET '/visitors.json'
  // send a list of all the names from '/greet/:name' as json
app.get('/visitors.json', function(req, resp){
  resp.json(allNames);
})
// Respond to any
// GET '/trip?to=paris'
// GET '/trip?to=rome'
  // send a 302 redirect to '/visiting/:place'
app.get('/trip',function(req, resp){
  var tripTo = req.query.to;
  resp.redirect(302, '/visiting/' + tripTo);
});
// Respond to...
// GET '/visiting/paris'
// GET '/visiting/rome'
  // render You are visiting [place] you have been here [number] of times
  var tripPlace = {};
app.get('/visiting/:tripTo', function(req, resp){
  var place = req.params.tripTo;
  tripPlace[place] = tripPlace[place] || 0;
  tripPlace[place]++;
  resp.send('i am in ' + place + 'for the ' + tripPlace[place] + ' time.');// Respond to EITHER
// GET '/visits'
// GET '/visits.json'
  // render an HTML table that shows the places visited and number of times
  // render JSON
});




var port = 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});
