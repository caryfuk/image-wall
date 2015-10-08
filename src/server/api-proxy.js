var express = require('express');
var request = require('request');

var app = express();

// flickr api proxy
app.get('/search', function (req, res) {

  // Cross origin
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  var userQuery = req.query.query || '';

  console.log(userQuery);

  request({
    url: 'https://query.yahooapis.com/v1/public/yql',
    qs: {
      q: 'select * from flickr.photos.search where has_geo="true" and text="' + userQuery + '" and api_key="' + process.env.FLICKR_KEY + '"',
      format: 'json'
    },
    json: true
  }, function (error, response, body) {
    var photos = body.query.count > 1
      ? body.query.results.photo
      : body.query.count
        ? [body.query.results.photo]
        : [];
    console.log('error: ' + error);
    console.log('photos: ' + photos);
    return res.send(photos);
  });
});

app.listen(3001, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening for all incoming requsest at 3001.');
});
