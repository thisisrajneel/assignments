const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const { User } = require('../db');

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET)
        const username = decodedToken.username
        
        const data = await User.findOne({
            username : username
        })

        if(data) {
            req.username = username
            next()
        }
    } catch (error) {
        res.json(403).json({
            message: 'wrong username or password'
        })
    }
}

module.exports = userMiddleware;