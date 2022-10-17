const path = require('path')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

const adminRoutes = require('./routes/admin')
//instead of adding /admin/add-product in the admin routes
app.use('/admin', adminRoutes)

const shopRoutes = require('./routes/shop')
app.use('/admin', shopRoutes)

app.use((req, res, next) => {
    //res.status(404).send('<h1>404 Not Found</h1>')
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)
