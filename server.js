var express = require('express');
var app = express();

var port = process.env.PORT || 8080

app.use(express.static(__dirname));

// routes

app.get( "/", function(req,res){
    res.sendFile(__dirname + '/login.html');
})

app.get("/signup", function(req, res){
    res.sendFile(__dirname + '/signup.html');
})

app.listen(port, function(){
    console.log("app running")
})

