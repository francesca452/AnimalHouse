const express  = require('express')
const router   = express.Router()
const Pet      = require('../models/pet')
const Location = require('../models/location')
const Bookable_service = require('../models/bookable_service')


router.get('/', async (req, res) => {

    try {
		let q = {}

		if ('pet' in req.query) {
			q['pet'] = req.query.pet;
		}
		if ('location' in req.query) {
			q['location'] = req.query.location;
		}
		if ('service' in req.query) {
			q['service'] = req.query.service;
		}

        const s  = await Bookable_service.find(q)
			.populate('pet')
			.populate('location')
			.populate('service')
			.lean();

		
		s.sort((x, y) => {

			let cmp;

			cmp = x.pet.name.localeCompare(y.pet.name);
			if (cmp !== 0)  return cmp;

			cmp = `${x.location.city} - ${x.location.address}`
				.localeCompare(`${y.location.city} - ${y.location.address}`);
			if (cmp !== 0)  return cmp; 

			cmp = x.service.name.localeCompare(y.service.name);
			if (cmp !== 0)  return cmp;
  
			cmp = x.day.toString().localeCompare(y.day);
			if (cmp !== 0)  return cmp;

			if (x.price > y.price) return 1;

			else return 0;

		});


		res.status(200).json(s);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
})

module.exports = router
