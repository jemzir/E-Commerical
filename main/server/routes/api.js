const express = require('express');
const commerceController = require('../controllers/commerce-controllers');
const router = express.Router();
const fs = require('fs');

/**
 * have a router each for CRUD functionality...
 * 
 */

// functionality needs to add product data...
router.put('/', commerceController.addProducts), (req, res) => {
  res.status(200);
  res.send('Successfully added product!');
};
// functionality needs to get product data...
router.get('/', commerceController.getProducts, (req, res) => {
  res.status(200);
  res.json(res.locals.productTable); //the end result here
}); 

// functionality needs to update product data...

// functionality needs to delete product data...




module.exports = router;