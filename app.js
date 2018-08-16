
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
//intializing app
const app=express();
app.listen(8080,function()
{
  console.log('server running');
});
