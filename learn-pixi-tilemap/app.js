// thiet lap web server tren cong 3000
var express = require("express");

var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));

const port = 3000

var server = app.listen(port, "0.0.0.0", function () {
    console.log("Server đang chạy trên cổng: ", port);
});

app.get("/index1" , function(req, res) {
    res.render('basic');
});

app.get("/index2" , function(req, res) {
    res.render('index2');
});

app.get("/index3" , function(req, res) {
    res.render('index3');
});

app.get("/index4" , function(req, res) {
    res.render('index4');
});

app.get("/index5" , function(req, res) {
    res.render('index5');
});

app.get("/index6" , function(req, res) {
    res.render('index6');
});

app.get("/index7" , function(req, res) {
    res.render('index7');
});

app.get("/index8" , function(req, res) {
    res.render('index8');
});

app.get("/index9" , function(req, res) {
    res.render('index9');
});

app.get("/index10" , function(req, res) {
    res.render('index10');
});

app.get("/index11" , function(req, res) {
    res.render('index11');
});

app.get("/index12" , function(req, res) {
    res.render('index12');
});
