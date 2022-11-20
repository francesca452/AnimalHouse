const express  = require('express')
const router   = express.Router()
const Pet      = require('../models/pet')
const Location = require('../models/location')
const Service  = require('../models/service')
const Bookable_service = require('../models/bookable_service')


router.get('/', async (req, res) => {

    try {
		let dbQuery = {}

		if ('pet' in req.query) {
			dbQuery['pet'] = req.query.pet;
		}
		if ('location' in req.query) {
			dbQuery['location'] = req.query.location;
		}
		if ('service' in req.query) {
			dbQuery['service'] = req.query.service;
		}

        const s  = await Bookable_service.find(dbQuery)
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
});

router.post('/new', async (req, res) => {

		if ('pet' in req.body) {
			const p = await Pet.findById(req.body.pet);
			if (p.length === 0) 
				throw new Error('"pet" is not a valid id for a pet');
		}
		if ('location' in req.body) {
			const l = await Location.findById(req.body.location);
			if (l.length === 0) 
				throw new Error('"location" is not a valid id for a location');
		}
		if ('service' in req.body) {
			const s = await Service.find({ '_id': req.body.service, 'pet': req.body.pet });
			if (s.length === 0)
				throw new Error('"service" is not a valid id for a service');
		}
	
	try {
		const bs = new Bookable_service(req.body);
		await bs.save();
		res.status(200).end();
	}
	catch (err) {
		res.status(400).json({ 'message': err.message });
	}
});


router.post('/:id/modify', async (req, res) => {
	try {
		if ('pet' in req.body) {
			const p = await Pet.findById(req.body.pet);
			if (p.length === 0) 
				throw new Error('"pet" is not a valid id for a pet');
		}
		if ('location' in req.body) {
			const l = await Location.findById(req.body.location);
			if (l.length === 0) 
				throw new Error('"location" is not a valid id for a location');
		}
		if ('service' in req.body) {
			const s = await Service.find({ '_id': req.body.service, 'pet': req.body.pet });
			if (s.length === 0)
				throw new Error('"service" is not a valid id for a service');
		}

		await Bookable_service.updateOne({ _id: req.params.id }, req.body);

		res.status(200).end();
	}
	catch (err) {
		res.status(400).json({ 'message': err.message });
	}
});

router.delete('/:id/', async (req, res) => {
	
	try {
		await Bookable_service.deleteOne({ _id: req.params.id });
		res.status(200).end();
	}
	catch (err) {
		res.status(400).json({ 'message': err.message });
	}
});

module.exports = router
