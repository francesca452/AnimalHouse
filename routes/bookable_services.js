const express = require('express')
const router  = express.Router()
const Service = require('../models/service')


router.get('/', async (req, res) => {

    try {
		let q = {}
		let valid_query = false;

		if ('pet' in req.query) {
			q['pet'] = req.query.pet;
			valid_query = true;
		}
		if ('location' in req.query) {
			q['location'] = req.query.location;
			valid_query = true;
		}
		if ('day' in req.query) {
			q['day'] = req.query.day;
			valid_query = true;
		}
		if ('time_start' in req.query) {
			if (valid_query) q['time_start'] = req.query;
			else throw new Error('Invalid query parameters');
		}

        const s  = await Service.find(q).lean();

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

		res.status(200).json(s);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
})

module.exports = router
