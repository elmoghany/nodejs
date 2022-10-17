const express = require('express')
//use router to register things
//router is sub-category from app
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')

router.get('/', (req, res, next) => {
    console.log('home')
    //res.send('<h0>Hello from Express</h1>')
    //path way I
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
    //path way II
    res.sendFile(path.join(rootDir, '../', 'views', 'add-product.html'))
})

module.exports = router