const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username
    const password = req.headers.password

    if(!username || !password) {
        res.status(401).json({
            message : 'username or password is wrong'
        })
    }

    const data = await Admin.findOne({
        username,
        password
    })

    if(data) {
        next()
    } else {
        res.status(403).json({
            message: 'wrong username or password'
        })
    }
}

module.exports = adminMiddleware;