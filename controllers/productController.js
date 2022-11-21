const Product = require('../models/product')

// const getAllProducts = async (req, res) => {
//     try{
//         const products = await Product.find({})
//         res.json(products)
//     }catch(err){
//         console.error(err)
//         res.status(500).json({message: "Server Error"})
//     }   
// }

const getProductById = async (req, res) => {
    try{
        let product = await Product.findById(req.params.id)
        if(product == null)
            return res.status(404).json({message: 'Cannot find product'})             
        res.json(product)
    }catch(err){
        console.error(err)
        return res.status(500).json({message: err.message})
    }   
}

module.exports = {
    getProductById
}