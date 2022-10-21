const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    pet: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
	title: {
		type: String,
		required: true
	},
	price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
	image: {
        type: String,
        required: true
    },
	alt: {
		type: String,
		required: true
	},
    pieces_left: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)
