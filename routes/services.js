const express  = require('express')
const router   = express.Router()
const Service  = require('../models/service')
const Pets     = require('../models/pet')

router.get('/', async (req, res) => {

	try {
		if (!('pet' in req.query)) throw new Error('Missing pet query parameter');
		
		const s  = await Service.find({ 'pet': req.query.pet }).lean();
		res.status(200).json(s);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
})

module.exports = router
