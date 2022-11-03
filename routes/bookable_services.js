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

		/*
		s.sort((x, y) => {

			let cmp;

			cmp = x.pet.toString().localeCompare(y.pet);
			if (cmp !== 0)  return cmp;

			cmp = x.location.toString().localeCompare(y.location);
			if (cmp !== 0)  return cmp; 

			cmp = x.service.toString().localeCompare(y.service);
			if (cmp !== 0)  return cmp;
  
			cmp = x.day.toString().localeCompare(y.day);
			if (cmp !== 0)  return cmp;

			if (x.time_start > y.time_start) return -1;
			else if (x.time_start < y.time_start) return 1;
			else return 0;

		});
		*/

		res.status(200).json(s);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
})

module.exports = router
