const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
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
	'day': {
        type: Date,
        required: true
    },
    'time_start': {
        type: Number,
        required: true
    },
	'time_end': {
        type: Number,
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

module.exports = mongoose.model('Service', serviceSchema)
