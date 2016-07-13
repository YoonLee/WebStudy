function createAccount (connection, fname, lname, email, password, phone, callback) {
	var bcrypt = require('bcryptjs');
	var salt	= bcrypt.genSaltSync(10);
	var hash	= bcrypt.hashSync(password, salt);
	var createStmt = 'INSERT INTO xuser (email, password, fname, lname, phone) VALUES (?, ?, ?, ?, ?)';
	connection.query(createStmt, [email, hash, fname, lname, phone], function (err, rows, fields) {
		if (!err) {
			console.log('created');
		}
		else {
			console.log('not created');
		}
	});
}

function webAuth (connection, email, password, callback) {
	var bcrypt = require('bcryptjs');
	var authStmt= 'SELECT password FROM xuser WHERE email=?';
	connection.query(authStmt, [email, password], function (err, rows, fields) {
		if (!err) {
			var hash = String.fromCharCode.apply(String, rows[0].password);
			var isMatch = bcrypt.compareSync(password, hash);
			if (isMatch) {
				console.log('it is match');
			}
			else {
				console.log('it is unmatch');
			}
		}
	});
}

function handleError (err, rows) {

}

module.exports.createAccount = createAccount;
module.exports.webAuth = webAuth;