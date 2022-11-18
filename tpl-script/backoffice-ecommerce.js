const express    = require('express')
const router     = express.Router()
const Handlebars = require("handlebars");
const fs         = require('fs').promises;
const path       = require('path');
const Section    = require('../models/section');
const Pet        = require('../models/pet');

router.get('/', async (req, res) => {

	/*
		[
			{
				idPet:
				name:
				sections: [ 
					{
						id:
						img:
						name:
						alt:
					}
				]
			}
				
		]
	*/
	try {

		let data = { 'petWithSections': [] };

		const sections = await Section.find().populate('pet').lean();

		let knownPet = {};

		for (let i = 0; i < sections.length; i++) {
			if (!(sections[i].pet._id in knownPet)) {
				knownPet[sections[i].pet._id] = data.petWithSections.length;
				data.petWithSections.push(
					{
						'idPet': sections[i].pet._id,
						'name': sections[i].pet.name,
						'sections': []
					}
				);
			}

			data.petWithSections[knownPet[sections[i].pet._id]].sections.push(sections[i]);
				
		}

		let tpl = await fs.readFile(
			path.join(global.rootDir, 'public/backoffice/ecommerce.tpl'), 'utf8');
		let ready = Handlebars.compile(tpl);
		res.status(200).send(ready(data))

	}
	catch (err) {
		res.status(400).json({ 'message': err.message });
	}

	
});

router.get('/product/new', async (req, res) => {

	try {
		const pets = Pet.find().lean();
		let tpl = await fs.readFile(
				path.join(global.rootDir, 'public/backoffice/add-product.tpl'), 'utf8');
		let ready = Handlebars.compile(tpl);
		res.status(200).send(ready({ 'pets': pets }))
	}
	catch (err) {
		res.status(400).json({ 'message': err.message });
	}

});

module.exports = router;
