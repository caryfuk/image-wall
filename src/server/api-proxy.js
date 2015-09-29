var express = require('express');
var config = require('../../config/default.json');
var request = require('request');

var app = express();

// flickr api proxy
app.get('/search', function (req, res) {

  // Cross origin
  res.header('Access-Control-Allow-Origin', 'http://' + config.domain + ':' + config.port);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  var query = req.query.query || '';

  // If query not defined return 400
  if (!query) {
    return res.status(400).send('Bad Request');
  }

  request({
    url: 'https://query.yahooapis.com/v1/public/yql',
    qs: {
      q: 'select * from flickr.photos.interestingness(20) where api_key=' + config.api_key,
      format: 'json'
    },
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var photos = body.query.count > 1
        ? body.query.results.photo
        : body.query.count
          ? [body.query.results.photo]
          : [];
      return photos;
    } else {
      return error;
    }
  });
});

app.listen(config.port, config.domain, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://' + config.domain + ':' + config.port);
});
