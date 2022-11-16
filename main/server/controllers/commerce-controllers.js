const db = require('../products-pool');

const commerceController = {};

commerceController.getProducts = (req, res, next) => {
  /**
   * read the SQL database and return the products in a table
   */
  const products = 'SELECT * FROM products';
  db.query(products)
    .then((data) => {
      res.locals.productTable = data.rows;
      console.log('data rows: ', data.rows);
      return next();
    })
    .catch((err) => {
      return next({
        log: 'error occured at get Products',
        message: {err: err}
      })
    })
}

commerceController.addProducts = (req, res, next) => {
  // create functionality
  return next();
}

commerceController.updateProducts = (req, res, next) => {
  // update functionality
}

commerceController.deleteProduct = (req, res, next) => {
  // delete functionality
}


module.exports = commerceController;

