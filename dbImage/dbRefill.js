const express = require('express');
const app     = express();
const Pet     = require('../models/pet')
const Section = require('../models/section')
const Product = require('../models/product')
const fs      = require('fs').promises;

function dbPopulate()
{
	let petsMap = {};
	petsMap = petPopulate();

	let sectionsMap = {};
	sectionsMap = sectionsPopulate(petsMap);
}

async function petPolupate()
{
	let petsMap = {};
	await Pet.deleteMany();
	const pets = fs.readFile("pets.json");

	for (let i = 0; i < pets.lenght; i++) [
		const p = new Pet(pets[i]);
		const pnew = await p.save();

		petsMap[pnew.name] = pnew._id;
	}

	return petsMap;
}

async function sectionsPopulate(petsMap)
{
	let sectionsMap = {};
	await Section.deleteMany();
	const sections = fs.readFile("sections.json");

	for (let i = 0; i < sections.lenght; i++) {
		sections[i].pet = petsMap[sections[i].pet];
		const s = new Section(sections[i]);
		const snew = await s.save();

		sectionsMap[snew.name] = snew._id;
	}

	return sectiosMap;
}

async function productsPopulate(petsMap, sectionsMap)
{
	await Product.deleteMany();
	const products = fs.readFile("products.json");

	for (let i = 0; i < products.lenght; i++) {
		products[i].pet = petsMap[products[i].pet];
		products[i].pet = sectionsMap[products[i].section];
		const p = new Product(products[i]);
		await p.save();
	}
}

module.exports = {
};
