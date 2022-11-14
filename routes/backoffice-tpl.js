const express    = require('express')
const router     = express.Router()
const Handlebars = require("handlebars");
const fs         = require('fs').promises;
const Pet        = require('../models/pet');
const Location   = require('../models/location');
const Service    = require('../models/service');
const Bookable_service = require('../models/bookable_service');
const path     = require('path');

router.get('/services/new', async (req, res) => {
	
	try {
		const pets = await Pet.find().lean();
		const locations = await Location.find().lean();
		const sizes = [
			{ 'size': 'grande' },
			{ 'size': 'media' },
			{ 'size': 'piccola' }
		];

		let data = {
			'pets': pets,
			'locations': locations,
			'sizes': sizes
		};
		let tpl = await fs.readFile(
			path.join(global.rootDir, 'public/backoffice/add-service.tpl'), 'utf8');
		let ready = Handlebars.compile(tpl);
		res.status(200).send(ready(data))
	}
	catch (err) {
		res.status(400).json({ 'message': err.message });
	}

});

router.get('/services/:id/modify', async (req, res) => {
	
	try {
		let currentBookableService = await Bookable_service.find({ _id: req.params.id }).lean();
		if (currentBookableService.length !== 1) throw new Error(`${req.params.id} invalid id`);
		currentBookableService = currentBookableService[0];
		const d = currentBookableService.day.toISOString();
		currentBookableService['date'] = d.slice(0, 10);
		currentBookableService['time'] = d.slice(11, 16);

		const locations = await Location.find().lean();
		const services = await Service.find({ pet: currentBookableService.pet }).lean();
		const pets = await Pet.find().lean();

		for (let i = 0; i < locations.length; i++) {
			if (locations[i]._id.equals(currentBookableService.location)) {
				locations[i].currentLocation = true;
				break;
			}
		}

		for (let i = 0; i < services.length; i++) {
			if (services[i]._id.equals(currentBookableService.service)) {
				services[i].currentService = true;
				break;
			}
		}

		for (let i = 0; i < pets.length; i++) {
			if (pets[i]._id.equals(currentBookableService.pet)) {
				pets[i].currentPet = true;
				break;
			}
		}

		const sizes = [
			{ 'size': 'grande' },
			{ 'size': 'media' },
			{ 'size': 'piccola' }
		];

		for (let i = 0; i < sizes.length; i++) {
			if (sizes[i].size === currentBookableService.pet_size) {
				sizes[i].currentSize = true;
				break;
			}
		}

		let data = {
			'currentBookableService': currentBookableService,
			'locations': locations,
			'services': services,
			'pets': pets,
			'sizes': sizes
		};

		let tpl = await fs.readFile(
			path.join(global.rootDir, 'public/backoffice/modify-service.tpl'), 'utf8');
		let ready = Handlebars.compile(tpl);
		res.status(200).send(ready(data))
	}
	catch (err) {
		res.status(400).json({ 'message': err.message });
	}

});

module.exports = router;
