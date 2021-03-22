var express= require('express');
var app= express();
var path= require('path');

var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "about.html"))
});

app.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "contact.html"))
});

app.listen(PORT, function(){
    console.log("App is listening on port: " + PORT);
})