


var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
 
 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Basic_Portfolio/public/index.html"));
  });

  app.get("/myskills", function(req, res) {
    res.sendFile(path.join(__dirname, "../Basic_Portfolio/public/portfolio.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../Basic_Portfolio/public/contact.html"));
  });

var PORT = process.env.PORT || 3000;
 


app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT)
}); 

