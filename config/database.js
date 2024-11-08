
const mysql = require('mysql2/promise');

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'scobject_muhasebe',
});


module.exports = db;