const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'dpg-cd9ge9aen0hldb1s20f0-a',
    user: 'root',
    password: 'rxVjI1oQ9CYMAkGRKJj3x4fQvDZAy88G',
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