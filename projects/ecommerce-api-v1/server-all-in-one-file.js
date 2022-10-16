//start an express server
const express2 = require('express')
const app = express2()

//take variables from config.env
const dotenv2 = require('dotenv')
dotenv2.config({ path: 'config.env' })
const PORT = process.env.PORT || 8000

//middleware
//connectiong logging HTTP request logger middleware for node.js
app.use(express2.json())

const morgan2 = require('morgan')
if (process.env.NODE_ENV == "development") {
    app.use(morgan2('dev'))
    console.log(`mode: ${process.env.NODE_ENV}`)
} else
    console.log('mode is production')

//connect with db
const mongoose2 = require('mongoose')
mongoose2.connect(process.env.DB_URI)
    .then((conn) => {
        console.log(`database connected ${conn.connection.host}`)
    })
    .catch((err) => {
        console.error(`database connection failed ${err}`)
        process.exit(1)
    })

//1-create schema
const categorySchema = new mongoose2.Schema({
    name: String(),

})
//2-create model
const categoryModel = new mongoose2.model('Category', categorySchema)

//routes
app.post('/', (req, res) => {
    const name = req.body.name
    console.log(req.body)

    const newCategory = new categoryModel({ name })
    newCategory
        .save()
        .then((doc) => {
            res.json(doc)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.get("/", (req, res) => {
    res.send('our api v1')
})

app.listen(PORT, () => {
    console.log('app running')
})