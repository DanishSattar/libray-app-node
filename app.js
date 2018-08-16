
// const http = require('http');
// const fs = require('fs');
// http.createServer(function (req,res) {
//   fs.readFile('views/index.html', function (err,data) {
//     res.writeHead(200,{'Content-Type':'text/html'});
//
//     res.write(data);
//
//
//
//   res.write('bye bye');
//   res.end();
// });
// }).listen(8080)
const express = require('express');
const bodyParser = require('body-parser');
const bookRoute = require('./routes/bookRoute.js');
const userRoute = require('./routes/userRoute');// Imports routes for the products

const app = express();
app.use('/book', bookRoute);
app.use('/user',userRoute);


module.exports = app;
