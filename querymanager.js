function createAccount (connection, fname, lname, email, password, phone, callback) {
	var bcrypt = require('bcryptjs');
	var salt	= bcrypt.genSalt(10);
	var hash	= bcrypt.hashSync('password', salt);
	var createStmt = 'INSERT INTO app (email, password, fname, lname, phone) VALUES (?, ?, ?, ?, ?)';
	connection.query(createStmt, [email, password, fname, lname, password, phone], function (err, rows, fields) {
		console.log('breaks here');
	});
}

function webAuth (connection, eamil, password, callback) {
	var bcrypt = require('bcrypt');
	var authStmt= 'SELECT password FROM app WHERE email=?';
	connection.query(authStmt, [email, password], function (err, rows, fields) {
		console.log('breaks here');
		callback(200);
	});
}

function handleError (err, rows) {

}

module.exports.createAccount = createAccount;
module.exports.webAuth = webAuth;