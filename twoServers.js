var http = require("http");

var portOne = 7000;

var portTwo = 7500;

function handleRequestOne (request, response) {

  response.end("Good Job, that did the trick! Path Hit: " + request.url)
}

function handleRequestTwo (request, response) {

  response.end("Good Job, your a butt face Path Hit: " + request.url)
}

var server = http.createServer(handleRequestOne);
var servertwo = http.createServer(handleRequestTwo)

server.listen(portOne, function() {

  console.log("Server listening on: http://localhost:" + portOne)

});

servertwo.listen(portTwo, function() {

  console.log("Server listening on: http://localhost:" + portTwo)
  
});