//db & data access layer models
console.log('i am in category models')
const mongoose = require('mongoose')
//1-create schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'category required'],
        unique: [true, 'category must be unique'],
        minlength: [3, 'too short category name'],
        maxlength: [32, 'too long category name'],
    },
    // A and B => shopping.com/a-and-b 
    //replace spaces with dashes
    slug: {
        type: String,
        lowercase: true,
    },
},
    //created at + updated at
    { timestamp: true }
)
//2-create model ... this has the schema
const categoryModel = new mongoose.model('Category', categorySchema)

module.exports = categoryModel