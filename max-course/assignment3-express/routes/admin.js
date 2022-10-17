const express = require('express')
//use router to register things
//router is sub-category from app
const router = express.Router()
//path way I
const path = require('path')
//path way II
const rootDir = require('../utils/path')

//replace app <with> router

//get is used to render the FORM ONLY
// /admin/add-product GET request
//because there is admin filter in the assignment3 file
router.get('/add-product', (req, res, next) => {
    console.log('this is add-product middleware')
    //path way I
    //path.join(__dirname, '../', 'views', 'add-product.html')
    //path way II
    res.sendFile(path.join(rootDir, '../', 'views', 'add-product.html'))
    /*    res.send(`
            <form action="/admin/product" method="POST">
                <input type="text" name="title">
                <button type="submit">Add product</button>
            </form>`)
    */
})

//POST is used to send the "actual" input data
// /admin/product POST request
router.post('/product', (req, res, next) => {
    console.log('this is product middleware')
    console.log('req.body')
    //res.redirect('/')
})

module.exports = router