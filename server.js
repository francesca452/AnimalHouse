const express = require('express')
const app =express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/animal_house', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)
const loginRouter = require('./routes/login')
app.use('/login', loginRouter)
const registerRouter = require('./routes/register')
app.use('/register', registerRouter)


app.listen(3000, () => console.log('Server Started'))