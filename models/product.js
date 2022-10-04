const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    typeOfProduct: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)