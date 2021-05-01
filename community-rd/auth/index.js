let jwt = require("jsonwebtoken"); //引入

let secretKey = "**chwdhrhahaha$$";

module.exports = {
    //生成token
    createToken: (payload) => {
        return jwt.sign(payload, secretKey, { expiresIn: "2h" });
    },
    //验证令牌
    verifyToken: async(ctx, next) => {
        if (ctx.header.authorization) {
            let parts = ctx.header.authorization.split(" ");
            let bearer = parts[0];
            let token = parts[1];
            if (/^Bearer$/.test(bearer)) {
                try {
                    // 验证token
                    jwt.verify(token, secretKey);
                    await next();
                } catch (err) {
                    // err
                    ctx.status = 401;
                    ctx.body = {
                        state: "用户token已过期或失效，请重新登录",
                    };
                }
            }
        }
    },
};