my_server = require("http");
my_server.createServer(function(request,response){
    console.log("I got a server request");
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("Hurray! You just tried a simple nodejs Application");
    response.end();
}).listen(80);
console.log("Server Running on 80");