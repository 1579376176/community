let mysql = require("mysql")
let { HOST, USER, PASSWORD, DATABASE } = require('../config/db.config')

let pool = mysql.createPool({
    connectionLimit: 10,
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
});
module.exports = {
    query: function(sql, values) {

        return new Promise((resolve, reject) => {
            console.log('1111111111');
            pool.getConnection(function(err, connection) {

                console.log('666666');
                connection.query(sql, values, function(error, results) {
                    connection.release(); //释放连接，放回pool中
                    if (error) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });

            });
        });
    },
};