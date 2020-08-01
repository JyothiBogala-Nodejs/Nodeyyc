const express = require('express');
const server = express();
server.get('/', function(request,response){
    response.send('Congrats you\'re using your first Node.js and Express as Web Server');

});
server.listen(3000,function() {
    console.log('This HTTP server is running on port 3000');
});