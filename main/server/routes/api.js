const express = require('express');
const commerceController = require('../controllers/commerce-controllers');
const router = express.Router();
const fs = require('fs');

/**
 * have a router each for CRUD functionality...
 * 
 */

// functionality needs to add product data...
router.post('/', commerceController.addProducts, (req, res) => {
  res.status(200).json(res.locals.product);
});
// functionality needs to get product data...
router.get('/', commerceController.getProducts, (req, res) => {
  res.status(200);
  res.json(res.locals.productTable); //the end result here
}); 

// functionality needs to update product data...
router.patch('/', commerceController.updateProducts, (req, res) => {
  res.status(200).json('update success');
})

// functionality needs to delete product data...
router.delete('/', commerceController.deleteProduct, (req, res) => {
  res.status(200).json('delete successful');
})



module.exports = router;