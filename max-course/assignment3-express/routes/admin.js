const express = require('express')
//use router to register things
//router is sub-category from app
const router = express.Router()

//replace app <with> router

//get is used to render the FORM ONLY
router.get('/add-product', (req, res, next) => {
    console.log('this is add-product middleware')
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">Add product</button>
        </form>`)
})

//POST is used to send the "actual" input data
router.post('/product', (req, res, next) => {
    console.log('this is product middleware')
    console.log('req.body')
    //res.redirect('/')
})

module.exports = router