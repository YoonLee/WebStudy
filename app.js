var express 		= require('express');
var app				= express();
var cookieParser 	= require('cookie-parser');
var bodyParser   	= require('body-parser');
var session 	 	= require('express-session');
var passport     	= require('passport');
var path         	= require('path');
var port    		= process.env.PORT || 8080;
var mysql			= require('mysql');
var connection		= mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: '',
	database: 'calc',
});

connection.connect();

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
	var name = req.body.name;
	var password = req.body.passwd;
	console.log([name, password]);
});

app.get('/signup', function (req, res) {
	res.sendFile(path.join(__dirname + '/signup.html'));
});

app.listen(port, function () {
	console.log('app start listening at ' + port);
});