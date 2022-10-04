const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async (req, res) => {

})

router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)        
    } catch (err) {
        res.status(400).json({message: err.message})        
    }
})

module.exports = router