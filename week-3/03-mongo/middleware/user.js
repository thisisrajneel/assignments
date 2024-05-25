const { User } = require("../db")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username
    const password = req.headers.password

    if(!username || !password) {
        res.status(401).json({
            message : 'username or password is wrong'
        })
    }

    const data = await User.findOne({
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

module.exports = userMiddleware;