/**
 * Created by cwgraff on 1/5/16.
 */

var http = require('http');

http.createServer(function(request, response){

    response.writeHead(200);
    response.write('Hello and stuff!');
    response.end();

}).listen(process.env.PORT || 3000);

console.log('Listening on Port 3000?!');