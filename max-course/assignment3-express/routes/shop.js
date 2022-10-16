const express = require('express')
//use router to register things
//router is sub-category from app
const router = express.Router()


router.get('/', (req, res, next) => {
    console.log('home')
    res.send('<h0>Hello from Express</h1>')
})

module.exports = router