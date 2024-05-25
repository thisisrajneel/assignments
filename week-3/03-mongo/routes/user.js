const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db')

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const username = req.body.username
    const password = req.body.password

    try {
        if(!username || !password) {
            res.status(401).json({
                message: 'username or password is null'
            })
        } else {
            const found = await User.findOne({
                username,
                password
            })
    
            if(found) {
                res.json({
                    message : 'User already exists'
                })
            } else {
                const made = await User.create({
                    username,
                    password
                })
                if(made) {
                    res.json({
                        message: 'User created successfully'
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
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

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    try {
        const username = req.headers.username
        const password = req.headers.password
        const courseId = req.params.courseId

        const data = await User.updateOne(
           {
               username,
               password
           },
            {
                "$push": {
                    purchasedCourses: courseId
                }
            }
        )
        
        if(data) {
            res.json({
                message: 'Course purchased successfully'
            })
        }
    } catch (error) {
        res.status(500).json({
            message : 'internal server error'
        })
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    try {
        const username = req.headers.username
        const password = req.headers.password

        const data = await User.findOne({
            username,
            password
        })

        const response = await Course.find({
           _id : {
               "$in": data.purchasedCourses
            }
        })

        res.json({
           purchasedCourses: response
        })
    } catch (error) {
        res.status(500).json({
            message : 'internal server error'
        })
    }
});

module.exports = router