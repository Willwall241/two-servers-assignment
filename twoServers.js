var http = require("http");

var portOne = 7000;

var portTwo = 7500;

function handleRequest (request, response) {

  response.end("Good Job, that did the trick! Path Hit: " + request.url)
}

var server = http.createServer(handleRequest);

server.listen(portOne, function() {

  console.log("Well, Your a good looking chap!")

});

server.listen(portTwo, function() {

  console.log("You suck butts and dont work hard enough you lazy bum!")
  
});