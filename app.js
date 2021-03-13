 
var http = require('http');
var fs = require('fs');
var path = require('path');

function serveStaticFile(response, path, contentType, responseCode) { 
    if (!responseCode) responseCode = 200; 
    fs.readFile(__dirname + path, function (err, data) {
        if (err) { 
            response.writeHead(500, { "Content-Type": "text/plain" }) 
            response.end("500 - Internal error with a response code 500")
        }
        else {
            response.writeHead(responseCode, { "Content-Type": contentType });
            response.end(data);
        }
    })
}


http.createServer(function (require, response) {
    var path = require.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    if (path == "")
        serveStaticFile(response, "/index.html", "text/html");
    else if(path == "/about")
        serveStaticFile(response, "/about.html", "text/html");
    else if(path == "/style.css")
        serveStaticFile(response, "/style.css", "text/css");
    else if(path =="/img/welcome.jpg")
        serveStaticFile(response, "/img/welcome.jpg", "image/jpeg");
    else if(path == "/img/about.jpg")
        serveStaticFile(response, "/img/about.jpg", "image/jpeg");
    else if(path == "/img/gallery/study")
        serveStaticFile(response, "/img/gallery/study.jpg", "image/jpeg");
    else if(path == "/img/gallery/graduation")
        serveStaticFile(response, "/img/gallery/graduation.jpg", "image/jpeg");
    else if(path == "/video/students/memes")
        serveStaticFile(response, "/video/students/memes.mp4", "video/mp4");
    else if(path == "/img/cry.jpg")
        serveStaticFile(response, "/img/cry.jpg", "image/jpeg");
    else
        serveStaticFile(response, "/error.html", "text/html", 404);
    
}).listen(3000);

console.log("Serving is running on port 3000!");

