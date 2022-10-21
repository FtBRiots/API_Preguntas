const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quizpaa'
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else{
        console.log('Connected to database');
    }
});

module.exports = mysqlConnection;