const express = require('express')
const app = express()

const bodyParser = require('bodyParser')
app.use(bodyParser.urlencoded({ extended: false }))
// => req.body

// app.use((req, res, next) => {
//     console.log('this is users middleware')
//     next()
// })

// app.use((req, res, next) => {
//     console.log('this is the main middleware')
//     res.send('<h1>users dummy response</h1>')
// })

app.use('/users', (req, res, next) => {
    console.log('this is users middleware')
    res.send('<h1>users dummy response</h1>')
})

app.use('/', (req, res, next) => {
    console.log('this is the main middleware')
    res.send('<h1>slash dummy response</h1>')
})
app.listen(3000)