const express  = require('express')
const router   = express.Router()
const Section  = require('../models/section')
const Pets     = require('../models/pet')

router.get('/', async (req, res) => {

	try {
		let dbQuery = {};
		if ('pet' in req.query) {
			dbQuery['pet'] = req.query.pet;
		}
		
		const sections = await Section.find(dbQuery).lean();
		res.status(200).json(sections);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
})

module.exports = router
