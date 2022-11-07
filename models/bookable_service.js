const mongoose = require('mongoose')

const bookable_serviceSchema = new mongoose.Schema({
    'pet': {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'pet',
        required: true
    },
    'location': {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'location',
        required: true
    },
	'service': {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'service',
		required: true
	},
	'price': {
		type: Number,
		required: true
	},
	'day': {
        type: Date,
        required: true
    },
	'reservation_left': {
		type: Number,
		required: true
	},
    'pet_size': {
        type: String,
    }
})

module.exports = mongoose.model('Bookable_service', bookable_serviceSchema)
