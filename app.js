'use strict';

var PORT = 4000;

var http = require('http');
var fs = require('fs');
var math = require('./math');
var _ = require('lodash');
var md5 = require('md5');

fs.readFile('./index.html', function(err, html){
  if (err){
    throw err;
  }
  var server = http.createServer(function(req, res) {
    var urlParts = req.url.match(/[^/]+/g);
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(html);
    switch(urlParts[0]) {
      case 'gravatar':
        var gravatarLink = "http://www.gravatar.com/avatar/" + md5(urlParts[1]);
        res.end(gravatarLink + '\n');
        break;
      case 'sentence':
        var encodedString = urlParts[1], decodedSentence = decodeURI(encodedString);
        var numSpaces = encodedString.match(/%20/g).length;
        var numWords = _.words(decodedSentence).length;
        var numLetters = decodedSentence.replace(/[^A-Za-z]/g, "").length;
        var sentenceStats = {
          letters: numLetters,
          spaces: numSpaces,
          words: numWords,
        };
        res.end(JSON.stringify(sentenceStats) + '\n');
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
          res.end("Error");
          break;
        }
  });
  server.listen(4000);
});
