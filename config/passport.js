const LocalStrategy = require('passpost-local').Strategy
const User =require('../models/user')
const config = require('../config/database')
const bcrypt = require('bcryptjs')                       //per comparare password
const passport = require('passport')



module.exports = function(passport){
    //local strategy
    passport.use(new LocalStrategy(function(username, password, done){
        //match username
        let query = {username: username}
        User.findOne(query, function(err, user){
            if(err) throw err
            if(!user){
                return done(null, false, {message: 'No user found'})
            }

            //match password
            bcrypt.compare(password, user.password, function(err, isMatch){    // si comparano i primi 2 arg: arg1 è passw da testare inserita nel form per il login, arg2 è passw cryptata nel db relativa all'username inserito
                if(err) throw err
                if(isMatch){
                    //le passw coincidono
                    return done(null, user)
                }else{
                    return done(null, false, {message: 'Wrong password'})
                }
            })
        })
    }))

    //serialize/deserialize: per rendere persistenti le info nelle sessioni di login 
    passport.serializeUser(function(user, done){
        done(null, user.id)
    })

    passport.deserializeUser(function(user, done){
        User.findById(id, function(err, user){
            done(err, user)            
        })    
    })
}
