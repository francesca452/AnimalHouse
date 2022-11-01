const express  = require('express')
const router   = express.Router()
const Location = require('../models/location')


router.get('/', async (req, res) => {

	try {
        const l = await Location.find().lean();
		res.status(200).json(l);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
})

module.exports = router
