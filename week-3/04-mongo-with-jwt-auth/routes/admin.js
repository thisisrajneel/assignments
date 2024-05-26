const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
const { Admin, Course } = require('../db')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username
    const password = req.body.password
    
    try {
        if(!username || !password) {
            res.status(401).json({
                message: 'username or password is null'
            })
        } else {
            const found = await Admin.findOne({
                username,
                password
            })
            if(found) {
                res.json({
                    message : 'admin already exists'
                })
            } else {
                const made = await Admin.create({
                    username,
                    password
                })
                if(made) {
                    res.json({
                        message: 'Admin created successfully'
                    })
                }

            }
        }
    } catch (error) {
        res.status(500).json({
            message : 'internal server error'
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username
    const password = req.body.password
    
    try {
        if(!username || !password) {
            res.status(401).json({
                message: 'username or password is null'
            })
        } else {
            const found = await Admin.findOne({
                username,
                password
            })
            if(found) {
                const token = jwt.sign({username}, JWT_SECRET)
                res.json({
                    token : token
                })
            } else {
                res.status(403).json({
                    message: 'username or password is incorrect'
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message : 'internal server error'
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink
    const price = req.body.price
    
    try {
        const madeCourse = await Course.create({
            title,
            description,
            imageLink,
            price
        })
        
        if(madeCourse) {
            res.json({
                message: 'Course created successfully',
                courseId: madeCourse._id
            })
        }
    } catch (error) {
        res.status(500).json({
            message : 'internal server error'
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const data = await Course.find({})
        if(data) {
            res.json({
                courses : data
            })
        } else {
           res.json({
               message : 'no courses available'
           })
        }
    } catch (error) {
        res.status(500).json({
            message : 'internal server error'
        })
    }
});

module.exports = router;