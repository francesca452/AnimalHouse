const express  = require('express')
const app      = express()
const mongoose = require('mongoose')
const config   = require('./config/database')
const Product  = require('./config/product')
const cors     = require('cors')

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

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)

/*
const userRouter = require('./routes/users')
app.use('/users', userRouter)
*/

app.listen(8000, async () => {
	console.log('Server Started\n')

	await mongoose.connect(config.database)

	console.log('Recreating default Product collection...\n')

	const del = await Product.deleteMany()
	console.log('Delete result: ', del.acknowledged);
	console.log('Number of products deleted: ', del.deletedCount);

	const data = [
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

})
