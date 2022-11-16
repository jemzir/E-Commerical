const express = require('express');
const commerceController = require('../controllers/commerce-controllers');
const router = express.Router();

/**
 * have a router each for CRUD functionality...
 * 
 */

// functionality needs to add product data...

// functionality needs to get product data...
router.get('/', commerceController.getProducts); 

// functionality needs to update product data...

// functionality needs to delete product data...




module.exports = router;