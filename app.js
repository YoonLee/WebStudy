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
<<<<<<< HEAD
	password: '1004love',
	database: 'app',
=======
	password: '',
	database: 'calc',
>>>>>>> d860d8e4ae4881f460c688b3f41ed5413703f290
});

var queryManager	= require('./querymanager.js');

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
	res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.get('/login', function (req, res) {
	res.sendFile(path.join(__dirname + '/view/login.html'));
});

app.post('/webauth', function (req, res) {
	var name = req.body.name;
	var password = req.body.passwd;

	queryManager.webAuth(name, password, function (err) {

	});
});

app.get('/signup', function (req, res) {
	res.sendFile(path.join(__dirname + '/view/signup.html'));
	queryManager.createAccount(connection, 'Yoon', 'Lee', 'pimp2you@gmail.com','1004love', '949-439-8241', function (err) {
			if (err == 200) {
				console.log('great!');
			}
	});
});

app.post('/signup', function (req, res) {
	console.log(oink);
});

app.listen(port, function () {
	console.log('app start listening at ' + port);
});