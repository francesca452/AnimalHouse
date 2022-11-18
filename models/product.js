const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    pet: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'pet',
        required: true
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'section',
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
