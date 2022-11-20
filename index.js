const express  = require('express')
const app      = express()
const mongoose = require('mongoose')
const config   = require('./config/database')
const Product  = require('./models/product')
const Pet      = require('./models/pet')
const Location = require('./models/location')
const Service  = require('./models/service')
const Section  = require('./models/section')
const Bookable = require('./models/bookable_service')
const cors     = require('cors')
const path     = require('path')

const errorHandler = require('./middleware/error')


global.rootDir = __dirname

app.use(express.static(path.join(global.rootDir, 'public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors())



app.use('/products', require('./routes/products'))
app.use('/pets', require('./routes/pets'))
app.use('/locations', require('./routes/locations'))
app.use('/services', require('./routes/services'))
app.use('/sections', require('./routes/sections'))
app.use('/users', require('./routes/users'))
app.use('/bookable_services', require('./routes/bookable_services'))
app.use('/backoffice/services', require('./tpl-script/backoffice-service'))
app.use('/backoffice/ecommerce', require('./tpl-script/backoffice-ecommerce'))


app.use('/auth', require('./routes/auth'))
app.use('/private', require('./routes/private')) 

app.use(errorHandler)


const dbRefill = require('./dbImage/dbRefill.js');
app.listen(8000, async () => {
	console.log('Server Started\n')

	await mongoose.connect(config.database)
	await dbRefill.dbPopulate();

	/*
	const pets = await Pet.find({}).lean();	
	const sections = await Section.find({}).lean();	
	const products = await Product.find({}).lean();	

	console.log('pets', pets);
	console.log('sections', sections);
	console.log('products', products);
	*/

	/*
	const locations = await Location.find({}).lean();	
	const services = await Service.find({}).lean();	
	const bookable_services = await Bookable.find({}).lean();	

	console.log('locations', locations);
	console.log('services', services);
	console.log('bookable_services', bookable_services);
	*/

});
