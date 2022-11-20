const express  = require('express')
const router   = express.Router()
const Service  = require('../models/service')
const Pets     = require('../models/pet')

router.get('/', async (req, res) => {

	try {
		let dbQuery = {}
		if ('pet' in req.query) {
			dbQuery['pet'] = req.query.pet;
		}
		
		const s  = await Service.find(dbQuery).lean();
		res.status(200).json(s);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
})

module.exports = router
