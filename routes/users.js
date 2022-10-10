const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')            //lib per cryptare la passw
const passport = require('passport')

//register process
router.post('/register', function(req, res){
    //validation
    const name = req.body.name
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    const password2 = req.body.password2

    //express validator
    req.checkBody('name', 'Name is required').notEmpty()            //campi name, email,.. non possono essere vuoti
    req.checkBody('email', 'Email is required').notEmpty()
    req.checkBody('email', 'Email is required').isEmail()           //controllo indirizzo email valido
    req.checkBody('username', 'Username is required').notEmpty()
    req.checkBody('password', 'Password is required').notEmpty()
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password)   //si esegue match tra le 2 passw inserite per la registrazione

    let errors = req.validationErrors()

    if(errors){
        res.status(400).json({message: errors})
    }else{
        const newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
        })
        
        bcrypt.genSalt(10, function(err, salt){                        //si crypta passw di 10 caratteri con il salt
            bcrypt.hash(newUser.password, salt, function(err, hash){   //newUser.password: plain text
                if(err){
                    console.log(err)
                }
                newUser.password = hash                                //si salva la passw da pain text a testo cifrato
                newUser.save(function(err){
                    if(err){
                        return res.status(400).json({message: err.message})
                    }else{
                        req.flash('success', 'You are now registered')
                        res.redirect('/users/login')
                        res.json(newUser)
                    }
                })
            })

        })
    }
})

//login process
router.post('/login', function(req, res, next){
    passport.authenticate('local', {
        successRedirect: '/',               //home page visualizzata dopo il login
        failureRedirect: '/user/login',     //login page rivisualizzata se login fallisce
        failureFlash: true                  //msg da stampare in caso fallimento login
    })(req, res, next)
})

//logout process
router.get('/logout', function(req, res){
    req.logout()
    req.flash('success', 'You are logged out')
    res.redirect('/users/login')
})


module.exports = router