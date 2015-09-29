var express = require('express');
var config = require('../../config/default.json');
var request = require('request');

var app = express();

// flickr api proxy
app.get('/search', function (req, res) {

  // Cross origin
  res.header('Access-Control-Allow-Origin', 'http://' + config.domain + ':' + config.port);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  var userQuery = req.query.query || '';

  console.log(userQuery);

  // If query not defined return 400
  if (!userQuery) {
    return res.status(400).send('Bad Request');
  } else {
    request({
      url: 'https://query.yahooapis.com/v1/public/yql',
      qs: {
        q: 'select * from flickr.photos.search where has_geo="true" and text="' + userQuery + '" and api_key="' + config.api_key+ '"',
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
  }
});

app.listen(config.port, config.domain, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://' + config.domain + ':' + config.port);
});
