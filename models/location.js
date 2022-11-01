const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    'city': {
        type: String,
        required: true
    },
    'address': {
        type: String,
        required: true,
		unique: true
    }
})

module.exports = mongoose.model('location', locationSchema)

