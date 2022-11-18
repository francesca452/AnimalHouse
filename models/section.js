const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    pet: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'pet',
        required: true
    },
    name: {
        type: String,
        required: true,
		unique: true
    },
	img: {
		type: String,
		required: true
	},	
	alt: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('section', productSchema)
