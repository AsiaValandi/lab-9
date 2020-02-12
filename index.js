// http://127.0.0.1/echo?message=Hello -> Hello
var http = require('http');
var url = require('url');


var server = new http.Server(function(req, res){
    console.log(req.method, req.url);

    var urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if (urlParsed.pathname == '/echo' && urlParsed.query.message){
        res.end(`<h1>${urlParsed.query.message}!!!</h1>`);
    }else{
        res.statusCode = 404;
        res.end("Page not found!");
    }
});
server.listen(80, '127.0.0.1');









// var server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     res.end('Gjhbhjl');
// });
// server.listen(80, '127.0.0.1');
// console.log('Сервер работает!');