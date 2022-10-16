console.log('i am in category services')
const categoryModel = require("../models/categoryModels")
exports.getCategories = (req, resp) => {
    //routes - business logic - posting
    //i.e. functions eachone for add, delete, update for category
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
}