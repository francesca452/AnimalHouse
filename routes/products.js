const express = require('express')
const router  = express.Router()
const Product = require('../models/product')
const Section = require('../models/section')
const Pet     = require('../models/pet')
const path    = require('path')

//VECCHIA VERSIONE GET PRODOTTI, vedi versione non commentata.
/* GET /products?pet=${...}
 * Ritorna tutti i prodotti divisi per sezione per l'animale indicato nel parametro di query
 * output:

 	[
		{
			section: ...,
			products: [ {...}, {...}, ... ]
		}, 
		
		...
		
	]

	Ogni prodotto è un json identico allo schema Product.
*/

/*
router.get('/', async (req, res) => {

    try {
		if (!('pet' in req.query)) throw new Error('Missing pet query parameter');
        const p = await Product.find({ 'pet': req.query.pet }).lean();

		let sections_dict = {};
		let sections_list = [];
		for (let i = 0; i < p.length; i++) {

			let s = p[i].section; 
			if (!(s in sections_dict)) {
				sections_dict[s] = sections_list.length;
				sections_list.push({'section': s, 'products': []});
			}

			sections_list[sections_dict[s]].products.push(p[i]);

		}


		res.status(200).json(sections_list);
    }
	catch (err) {
        res.status(500).json({message: err.message});
    }    
})
*/


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
        res.status(200).end();                   // 201 OK creazione oggetto

    } catch(err) {

        res.status(404).json({message: err.message})        //400 Errore nell'input dell'utente
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
