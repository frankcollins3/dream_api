mongoose = require('mongoose')

const bucketSchema = new mongoose.Schema({
    dreamName: String,
    description: String,
    date: Date
})

    const dreamSchema = new mongoose.Schema({
        dreamName: String,
        description: String,
        date: Date
    })

    module.exports = mongoose.model('dreams', dreamSchema)