fs = require('fs')
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 fs.readFile('index.html', 'utf8', function(err, data) {

                if (err){
                response.write('Could not find or open file for reading\n');
                }
                else{
                var buffer = new Buffer(data, 'utf-8');
                response.send(buffer);
                }
        });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

