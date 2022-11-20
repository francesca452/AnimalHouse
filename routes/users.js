const express = require('express')
const router  = express.Router()
const User    = require('../models/user')

router.post('/:id/modify', async (req, res) => {
	try {
		await User.updateOne({ _id: req.params.id }, req.body);
		res.status(200).end();
    }   
    catch(err) {
        res.status(400).json({message: err.message})
    }
});

router.delete('/:id', async (req, res) => {
	try {
        await User.findByIdAndDelete(req.params.id);
		res.status(200).end();
	}
	catch (err) {
        res.status(400).json({message: err.message});
	}
});


router.get('/', async (req, res) => {

    try {
		let dbQuery = {};
		if ('id' in req.query) dbQuery['_id'] = req.query.id;

        const userList = await User.find(dbQuery).lean();
		let userListNoPsw = [];
		for (let i = 0; i < userList.length; i++) {
			userListNoPsw.push(
				{
					'_id': userList[i]._id,
					'username': userList[i].username,
					'email': userList[i].email
				});
		}
		res.status(200).json(userListNoPsw);
    }
	catch (err) {
        res.status(400).json({message: err.message});
    }    
});


module.exports = router
