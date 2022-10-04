const express = require('express')
const router = express.Router()
const Product = require('../models/product')

//Get all
router.get('/', async (req, res) => {
    try{
        const products = await Product.find()
        res.json(products)
    }catch(err){
        res.status(500).json({message: err.message})         //500 error in the server

    }    
})

//Get one 
router.get('/:id', getProduct,  (req, res) =>{
    res.json(res.product)
})

//Create one
router.post('/', async (req, res) =>{
    const product = new Product({
        brand: req.body.brand,
        typeOfProduct: req.body.typeOfProduct
    })    
    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)                    // 201 OK creazione oggetto
    }catch(err){
        res.status(400).json({message: err.message})        //400 Errore nell'input dell'utente

    }
})

//Update one
router.patch('/:id', getProduct, async (req, res) => {
    if(req.body.brand != null){
        res.product.brand = req.body.brand
    }
    if(req.body.typeOfProduct != null){
        res.product.typeOfProduct = req.body.typeOfProduct
    }

    try{
        const updatedProduct = await res.product.save()
        res.json(updatedProduct)
    }catch(err){
        res.status(400).json({message: err.message})
    }

})

//Delete one
router.delete('/:id', getProduct, async (req, res) => {
    try{
        await res.product.remove()
        res.json({message: 'Deleted Product'})
    }catch(err) {
        res.status(500).json({message: err.message})
    }
})

async function getProduct(req, res, next) {
    let product
    try{
        product = await Product.findById(req.params.id)
        if(product == null){
            return res.status(404).json({message: 'Cannot find product'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.product = product
    next()
}

module.exports = router