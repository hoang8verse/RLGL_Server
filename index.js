#!/usr/bin/env node

require('dotenv').config()

const {RLGLSocket} = require('./RLGL/server')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const portHttps = process.env.PORT_HTTPS || 443

var cors = require('cors');
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })
// app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
//   })



var http = require('http');
var https = require('https');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
// const server = https.createServer({
//     cert: fs.readFileSync('rootSSL.pem'),
//     key: fs.readFileSync('key.pem')
//   });

server.listen(port, function() {
    console.log((new Date()) + ' Server is listening on port ' + port);
});

RLGLSocket(server);
