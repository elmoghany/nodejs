//routes
const express = require('express')
console.log('i am in category routes')
const { getCategories } = require("../services/categoryServices")
console.log('i am in category routes 2')

const router = express.Router()

router.get("/", getCategories)

module.exports = router
