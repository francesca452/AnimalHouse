const express = require('express')
const router  = express.Router()
const Product = require('../models/product')
const Section = require('../models/section')
const Pet     = require('../models/pet')
const path    = require('path')


router.get('/', async (req, res) => {
	
	try {
		let dbQuery = {};
		if ('section' in req.query) dbQuery['section'] = req.query.section;
		if ('id' in req.query) dbQuery['_id'] = req.query.id;

		const products = await Product.find(dbQuery)
			.populate('pet')
			.populate('section')
			.lean();
		res.status(200).json(products);
	}
	catch (err) {
        res.status(404).json({message: err.message});
	}
	
});
	

/* crea un nuovo prodotto, 
 * NOTA: express cerca il primo route che fa match dall'alto verso il basso del file.
 * se POST /:id è poszionato prima di POST /new, quando si invia una POST /new new viene preso come ID */

router.post('/new', async (req, res) =>{

    try {

    	const p = new Product(req.body);

        await p.save();
        res.status(200).end();

    } catch(err) {

        res.status(404).json({message: err.message});
    }
})

//Update one
router.post('/:id/modify', async (req, res) => {

    try {
		if ('pet' in req.body) {
			const p = await Pet.findById(req.body.pet);
			if (p.length === 0) 
				throw new Error('"pet" is not a valid id for a pet');
		}
		if ('section' in req.body) {
			const s = await Section.find({ '_id': req.body.section, 'pet': req.body.pet });
			if (s.length === 0)
				throw new Error('"section" is not a valid id for a section');
		}

		await Product.updateOne({ _id: req.params.id }, req.body);


		res.status(200).end();

    }   
    catch(err) {

        res.status(400).json({message: err.message})
    }   

})

//Delete one
router.delete('/:id', async (req, res) => {
    try{

        await Product.findByIdAndDelete(req.params.id);
		res.status(200).end();

    }catch(err) {

        res.status(400).json({message: err.message})
    }
})



module.exports = router
