const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

const adminRoutes = require('./routes/admin')
app.use(adminRoutes)

const shopRoutes = require('./routes/shop')
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(3000)
