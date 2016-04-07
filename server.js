var express = require('express');
var app = express();

app.use(express.static('./public'));

var server = app.listen(3000, function(){
  var port = server.address();
  console.log('Listening on port: ', port, '(Probably 3000)');
});

// -------- routes -------- //

app.get('/', function(request, response){
  console.log('Response!');
  response.sendfile(__dirname + '/public/index.html');
  console.log("response: " + __dirname);
});
