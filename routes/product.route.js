const express = require('express');
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

//Read an API, all products
router.get('/', getProducts);
//Read an API, single product
router.get('/:id', getProduct);
//Create an API
router.post('/', createProduct);
// Update an API
router.put('/:id', updateProduct);
// Delete an API
router.delete('/:id', deleteProduct);

module.exports = router;
