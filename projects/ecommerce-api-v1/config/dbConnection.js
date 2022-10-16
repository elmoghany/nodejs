//connect with db
const mongoose = require('mongoose')
const dbConnection = () => {
    mongoose.connect(process.env.DB_URI)
        .then((conn) => {
            console.log(`database connected ${conn.connection.host}`)
        })
        .catch((err) => {
            console.error(`database connection failed ${err}`)
            process.exit(1)
        })
}

module.exports = dbConnection