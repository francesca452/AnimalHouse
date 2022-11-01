const express = require('express')
const router  = express.Router()
const Pets    = require('../models/pet')


router.get('/', async (req, res) => {

    try {
        const p = await Pets.find().lean();
		res.status(200).json(p);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
})

module.exports = router
