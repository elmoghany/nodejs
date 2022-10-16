//start an express server
const express2 = require('express')
//express app
const app = express2()

//take variables from config.env
const dotenv = require('dotenv')
dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8000

const dbConnection = require('./config/dbConnection')
const categoryRoute = require('./routes-api/categoryRoutes')

//connect with db
dbConnection()

//middleware
//connectiong logging HTTP request logger middleware for node.js
app.use(express2.json())

const morgan2 = require('morgan')
if (process.env.NODE_ENV == "development") {
    app.use(morgan2('dev'))
    console.log(`mode: ${process.env.NODE_ENV}`)
} else
    console.log('mode is production')

//mount routes
app.use('/api/v1/categories', categoryRoute)

//listener
app.listen(PORT, () => {
    console.log('app running')
})