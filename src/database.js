const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'us-east.connect.psdb.cloud',
    user: 'wt12fl1zrpyrxtn7f0nr',
    password: 'pscale_pw_TJU5bGv8KSzqaCY3ON5Hnl2QJZWWFDd6ZqMlvuwHBfT',
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