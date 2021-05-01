const Router = require('@koa/router');
const router = new Router();
//const user = require('../controllers/user');
const mysql = require('mysql')
const { createToken } = require('../auth/index')
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '19990622021.x',
    database: 'ligong'
});

router.prefix('/user')

function getLoginData(username, password) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `SELECT * FROM t_user where username='${username}' and password='${password}'`,
                function(err, results) {
                    if (results.length > 0) {
                        console.log(results);
                        connection.release();
                        var payload = {
                            userId: results[0].user_id,
                        }
                        console.log(payload);
                        let token = createToken(payload);
                        resolve({
                            token,
                            status: 'success'
                        })
                    } else {
                        reject(err)
                    }


                }
            )
        })

    })
}

router.post('/login', async(ctx, next) => {
    let { username, password } = ctx.request.body;
    ctx.body = await getLoginData(username, password)
        // if (username == 'lisi' && password == '123456') {
        //     let payload = {
        //         userId: 12,
        //         username
        //     }
        //     let token = createToken(payload);
        //     ctx.body = {
        //         status: 'success',
        //         token
        //     };
        // } else {
        //     ctx.body = 'fail';
        // }

})


module.exports = router