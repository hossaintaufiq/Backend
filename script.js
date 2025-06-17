const http= require('http');


const server= http.createServer(function(req, res ){
    res.end("Hello world from the server!");
})

server.listen(3000); 