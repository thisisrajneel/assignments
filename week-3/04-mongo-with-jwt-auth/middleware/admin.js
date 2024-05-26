const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const { Admin } = require('../db');


// Middleware for handling auth
async function adminMiddleware (req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET)
        const username = decodedToken.username
        
        const data = await Admin.findOne({
            username : username
        })

        if(data) {
            next()
        }
    } catch (error) {
        res.json(403).json({
            message: 'wrong username or password'
        })
    }
}

module.exports = adminMiddleware;