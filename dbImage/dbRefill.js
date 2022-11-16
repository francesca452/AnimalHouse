const express = require('express');
const app     = express();
const Pet     = require('../models/pet')
const Section = require('../models/section')
const Product = require('../models/product')
const Service  = require('../models/service')
const Location = require('../models/location')
const Bookable = require('../models/bookable_service')
const fs      = require('fs').promises;
const path    = require('path');

let dbPopulate = async function()
{
	await Pet.deleteMany();
	await Section.deleteMany();
	await Product.deleteMany();
	await Location.deleteMany();
	await Service.deleteMany();
	await Bookable.deleteMany();

	let petsMap = {};
	petsMap = await petPopulate();

	let sectionsMap = {};
	sectionsMap = await sectionsPopulate(petsMap);

	await productsPopulate(petsMap, sectionsMap);

	let locationsMap = {};
	locationsMap = await locationsPopulate();
	
	let servicesMap = {};
	servicesMap = await servicesPopulate(petsMap);

	await BookableServicePopulate(petsMap, locationsMap, servicesMap);
}

async function petPopulate()
{
	let petsMap = {};
	let pets = await fs.readFile(
		path.join(global.rootDir, 'dbImage/pets.json')
		, 'utf8');

	pets = JSON.parse(pets);

	for (let i = 0; i < pets.length; i++) {
		const p = new Pet(pets[i]);
		const pnew = await p.save();

		petsMap[pnew.name] = pnew._id;
	}

	return petsMap;
}

async function sectionsPopulate(petsMap)
{
	let sectionsMap = {};
	let sections = await fs.readFile(
		path.join(global.rootDir, 'dbImage/sections.json'),
		'utf8');

	sections = JSON.parse(sections);

	for (let i = 0; i < sections.length; i++) {
		sections[i].pet = petsMap[sections[i].pet];

		const s = new Section(sections[i]);
		const snew = await s.save();

		sectionsMap[snew.name] = snew._id;
	}

	return sectionsMap;
}

async function productsPopulate(petsMap, sectionsMap)
{
	let products = await fs.readFile(
		path.join(global.rootDir, 'dbImage/products.json')
		,'utf8');

	products = JSON.parse(products);

	for (let i = 0; i < products.length; i++) {
		products[i].pet = petsMap[products[i].pet];
		products[i].section = sectionsMap[products[i].section];

		const p = new Product(products[i]);
		await p.save();
	}
}

async function locationsPopulate()
{
	let locationsMap = {};
	let locations = await fs.readFile(
		path.join(global.rootDir, 'dbImage/locations.json'), 
		'utf8');

	locations = JSON.parse(locations);

	for (let i = 0; i < locations.length; i++) {
	
		const l = new Location(locations[i]);
		const lnew = await l.save();

		locationsMap[`${lnew.city}-${lnew.address}`] = lnew._id;
	}

	return locationsMap;
}

async function servicesPopulate(petsMap)
{
	let servicesMap = {};
	let services = await fs.readFile(
		path.join(global.rootDir, 'dbImage/services.json'), 
		'utf8');
	
	services = JSON.parse(services);

	for (let i = 0; i < services.length; i++) {
		const petName = services[i].pet;
		services[i].pet = petsMap[petName];
		const s = new Service(services[i]);
		const snew = await s.save();

		servicesMap[`${snew.name}-${petName}`] = snew._id;
	}

	return servicesMap;
}

async function BookableServicePopulate(petsMap, locationsMap, servicesMap)
{
	let bookable_services = await fs.readFile(
		path.join(global.rootDir, 'dbImage/bookable_services.json'), 
		'utf8');

	bookable_services = JSON.parse(bookable_services);

	for (let i = 0; i < bookable_services.length; i++) {
		bookable_services[i].pet = petsMap[bookable_services[i].pet];
		bookable_services[i].location = locationsMap[bookable_services[i].location];
		bookable_services[i].service = servicesMap[bookable_services[i].service];

		const b = new Bookable(bookable_services[i]);
		const bnew = await b.save();
	}
}



module.exports = {
	'dbPopulate': dbPopulate
};
