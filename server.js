const express = require('express')
const app =express()
const mongoose = require('mongoose')
const config = require('./config/database')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
//passport config
require('./config/passport')(passport)

mongoose.connect(config.database, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//express-session e connect flash
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));
app.use(flash())
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.success_msg = req.flash('error_msg')    
    next()
})

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)
const userRouter = require('./routes/users')
app.use('/users', userRouter)


app.listen(3000, () => console.log('Server Started'))

