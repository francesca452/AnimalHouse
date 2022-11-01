const express  = require('express')
const app      = express()
const mongoose = require('mongoose')
const config   = require('./config/database')
const Product  = require('./models/product')
const Pet      = require('./models/pet')
const Location = require('./models/location')
const Service  = require('./models/service')
const cors     = require('cors')
const path     = require('path')

/*
const passport = require('passport')
const flash    = require('connect-flash')
const session = require('express-session')
//passport config
require('./config/passport')(passport)
*/

global.rootDir = __dirname

app.use(express.static(path.join(global.rootDir, 'public')))
app.use(express.urlencoded({ extended: true}))
app.use(cors())

/*
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
*/


app.use('/products', require('./routes/products'))
app.use('/pets', require('./routes/pets'))
app.use('/locations', require('./routes/locations'))
app.use('/services', require('./routes/services'))

/*
const userRouter = require('./routes/users')
app.use('/users', userRouter)
*/

app.listen(8000, async () => {
	console.log('Server Started\n')

	await mongoose.connect(config.database)


	const pdel = await Product.deleteMany()

	let data = [
		{
			pet: 'dog',
			section: 'Prodotti alimentari',
			title: 'Croccantini',
			price: 10.50,
			description: 'croccantini buoni',
			image: 'http://www.site.it/image',
			alt: 'Ciotola di croccantini',
			pieces_left: 20
		},
		{
			pet: 'dog',
			section: 'Prodotti alimentari',
			title: 'Scatoletta',
			price: 10.50,
			description: 'scatoletta di carne',
			image: 'http://www.site.it/image',
			alt: 'scatoletta di carne',
			pieces_left: 20
		},
		{
			pet: 'dog',
			section: 'Prodotti alimentari',
			title: 'Osso',
			price: 10.50,
			description: 'Osso da mordere',
			image: 'http://www.site.it/image',
			alt: 'Cane che morde un osso',
			pieces_left: 20
		},
		{
			pet: 'dog',
			section: 'Prodotti sanitari',
			title: 'Anti pulci',
			price: 19.50,
			description: 'previene da morsi di zecche',
			image: 'http://www.site.it/image',
			alt: 'Crema anti pulci',
			pieces_left: 10
		}

	]

	for (let i = 0; i < data.length; i++) {
		try {
			const p = new Product(data[i])
			const pnew = await p.save()
			console.log('product saved: ', pnew)
		}
		catch (err) {
			console.error('Error: ', err)
		}
	}


	await Pet.deleteMany()
	const pets = [
		{ name: 'Cani'       }, 
		{ name: 'Gatti'      }, 
		{ name: 'Volatili'   }, 
		{ name: 'Pesci'      }, 
		{ name: 'Tartarughe' }, 
		{ name: 'Roditori'   }
	];
	for (let i = 0; i < pets.length; i++) {
		const p = new Pet(pets[i]);
		await p.save();
	}

	await Location.deleteMany()
	const locations = [
		{ 
			city: 'Bologna',
			address: 'via indipendenza 5'
		},
		{
			city: 'Bologna',
			address: 'via Marconi 7'
		},
		{
			city: 'Ancona',
			address: 'via del corso 1'
		},
		{
			city: 'Cagliari',
			address: 'viale Italia 10'
		}
	];
	for (let i = 0; i < locations.length; i++) {
		const l = new Location(locations[i]);
		await l.save();
	}

	await Service.deleteMany()

	let dogId = await Pet.find({ name: 'Cani' }).lean();
	dogId = dogId[0]._id;
	console.log('dogId: ', dogId);

	let catId = await Pet.find({ name: 'Gatti' }).lean();
	catId = catId[0]._id;
	console.log('catId: ', catId);

	const services = [
		{
			name: 'toilettara',
			pet: dogId,
			description: 'Rimozione del pelo in eccesso'
		},
		{
			name: 'Dog sitter',
			pet: dogId,
			description: 'Ci prendiamo cura del tuo cane'
		},
		{
			name: 'Verinario',
			pet: dogId,
			description: 'Veterinario specializzato in cani'
		},
		{
			name: 'Verinario',
			pet: catId,
			description: 'Veterinario specializzato in gatti'
		}

	];
	for (let i = 0; i < services.length; i++) {
		const s = new Service(services[i]);
		await s.save();
	}

	/*
	data = [
		{
			pet: 'dog',
			location: 'Bologna',
			service: 'toilettatura',
			day: '2022-11-01',
			time_start: 600,
			time_end: 660,
			reservation_left: 1,
			pet_size: 'big'
		},
		{
			pet: 'dog',
			location: 'Bologna',
			service: 'Dog sitter',
			day: '2022-11-02',
			time_start: 660,
			time_end: 720,
			reservation_left: 1,
			pet_size: 'big'
		},
		{
			pet: 'cat',
			location: 'Ancona',
			service: 'Veterinario',
			day: '2022-11-02',
			time_start: 660,
			time_end: 720,
			reservation_left: 1,
			pet_size: 'big'
		}
	];

	for (let i = 0; i < data.length; i++) {
		try {
			const s = new Service(data[i])
			const snew = await s.save()
			console.log('product saved: ', snew)
		}
		catch (err) {
			console.error('Error: ', err)
		}
	}
	*/
})
