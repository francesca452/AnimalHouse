const express  = require('express')
const router   = express.Router()
const Services = require('../models/service')
const Pets     = require('../models/pet')

router.get('/', async (req, res) => {

	try {
		q = {};
		if ('pet' in req.query) {
			const p = await Pets.find({ name: req.query.pet }).lean();
			if (p.length == 0) throw new Error('Wrong query value for pet');
			q['pet'] = p[0]._id;
		}

		const s  = await Services.find(q).lean();
		res.status(200).json(s);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
})

module.exports = router
