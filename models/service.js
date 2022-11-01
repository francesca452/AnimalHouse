const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true
    },
    'pet': {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'pet',
        required: true
    },
	'description': {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Service', serviceSchema)
