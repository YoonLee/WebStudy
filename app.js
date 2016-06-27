var express 	= require('express');
var app			= express();
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session 	 = require('express-session');
var passport     = require('passport');
var path         = require('path');
var port    = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
	extended: true
}));
// body parser
app.use(bodyParser.json());
// cookie parser
app.use(cookieParser());
// session
app.use(session({
	secret: '292513',
	resave: true,
	saveUninitialized: true
}));

// passport configure
// app.use(passport.initialize());
// app.use(passport.session);
app.use(express.static(__dirname + '/'));

// root
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/login', function (req, res) {
	res.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/webauth', function (req, res) {
// console.log(req.query.value.email);
	// res.send('hello world');
	var array = [req.body];
	var json = JSON.stringify(array);
	res.send(json);
});

app.get('/signup', function (req, res) {

});

app.listen(port, function () {
	console.log('app start listening at ' + port);
});