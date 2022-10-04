const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {

})

router.post('/', async (req, res) => {
    var username = req.body.username
    var password = req.body.password
    
    try {
        await User.findOne({username, password} )                
    } catch (err) {
        
    }

})

module.exports = router