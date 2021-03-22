var express= require('express');
var app= express();
var path= require('path');
//pug set up
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "pug");


var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/", function(req, res){
    res.render('home');
});

app.get("/about", function(req, res){
    res.render('about')
});

app.get("/contact", function(req, res){
    res.render('contact')
});

app.listen(PORT, function(){
    console.log("App is listening on port: " + PORT);
})