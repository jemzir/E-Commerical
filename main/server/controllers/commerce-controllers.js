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
      // console.log('data rows: ', data.rows);
      return next();
    })
    .catch((err) => {
      return next({
        log: 'error occured at get Products',
        message: {err: err}
      })
    })
}

commerceController.addProducts = async (req, res, next) => {
  // create functionality
  try {
    const { body } = req;

    console.log('body:', body);

    res.locals.product = body;


    const { product_name, product_price, product_details } = body; // can potentially change this
    // so that the req body is easier to write in the front end

    const addProduct = "INSERT INTO products (product_name, product_price, product_details) ";
    const SqlQueryInsert = addProduct.concat(`VALUES ('${product_name}', ${product_price}, '${product_details}');`);
    await db.query(SqlQueryInsert)

    return next();

  } catch (error) {
    return next({
      log: 'error occured at add Products',
      message: {err: err}
    })
  }
}

commerceController.updateProducts = (req, res, next) => {
  // update functionality
}

commerceController.deleteProduct = (req, res, next) => {
  // delete functionality
}


module.exports = commerceController;

