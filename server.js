var app = require('./app')
var port = process.env.PORT || 8080;
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('key.pem', 'utf8');
var certificate = fs.readFileSync('cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(port);
httpsServer.listen(443);

// var server = app.listen(port, function(){
// 	console.log('Express server listening on port ' + port);
// })