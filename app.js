'use strict';

var PORT = 4000;

var http = require('http');
var math = require('./math');
var _ = require('lodash');
var md5 = require('md5');

var server = http.createServer(function(req, res) {
  var urlParts = req.url.match(/[^/]+/g);

  switch(urlParts[0]) {
    case 'time':
      var timestamp = Date.now();
      res.end(timestamp + '\n');
      break;

    case 'gravatar':
      var gravatarLink = "http://www.gravatar.com/avatar/" + md5(urlParts[1]);
      res.end(gravatarLink + '\n');
      break;

    case 'math':
      var numbers = urlParts.slice(2);
      switch(urlParts[1]) {
        case 'add':
          var total = math.sum(numbers);
          res.end(total + '\n');
          break;
        case "subtract":
          var total = math.subtract(numbers);
          res.end(total + '\n');
          break;
        case 'multiply':
          var total = math.multiply(numbers);
          res.end(total + '\n');
          break;
        case 'divide':
          var total = math.divide(numbers);
          res.end(total + '\n');
          break;
        case 'square':
          var total = math.square(numbers);
          res.end(total + '\n');
          break;
        default:
          break;
      }
      default:
        res.end("nothing");
        break;
  }
});


server.listen(4000);