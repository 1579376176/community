const db = require('../models/db');
module.exports = {
    getByNameAndPwd(username, password) {
        console.log(22222222222222222222222222222);
        return db.query('select * from user where username=? and password=?', [username, password])
    }
}