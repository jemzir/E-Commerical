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
    console.log('addprod body', body);

    const { product_name, product_price, product_details } = body; // can potentially change this
    // so that the req body is easier to write in the front end

    const addProduct = "INSERT INTO products (product_name, product_price, product_details) ";
    const SqlQueryInsert = addProduct.concat(`VALUES ('${product_name}', ${product_price}, '${product_details}');`);
    await db.query(SqlQueryInsert);
    // console.log('sql add query \n\n\n ******* \n', SqlQueryInsert);
    return next();

  } catch (error) {
    return next({
      log: 'error occured at add Products',
      message: {err: error}
    })
  }
}

commerceController.updateProducts = async (req, res, next) => {
  // update functionality
  try {
    const { body } = req;

    const {product_id, product_name, product_price, product_details} = body;

    console.log('body of update', body);


    // a funny type coersion way of giving and taking away commas

    if (!product_name && !product_details && product_price) return next({log: 'need to have change updates filled in'})
    if (!product_id) return next({log: 'product_id needs to be inputted'});


    let count = 0 + !!product_name + !!product_price + !!product_details;
    let comma1 ='';
    let comma2 ='';

    if (count > 1) comma1 = ',';
    if (count > 2) comma2 = ',';

    console.log('name, price, details', product_name, product_price, product_details);


    const name = product_name ? `product_name = '${product_name}'` : '';
    const price = product_price ? `product_price = ${product_price}` : '';
    const details = product_details ? `product_details = '${product_details}'` : '';

    console.log("name, price, details", name, price, details);

    const updateProdSql = `UPDATE products SET ${name} ${comma1} ${price} ${comma2} ${details} WHERE product_id=${product_id}`;
    console.log('updatedSQL', updateProdSql);
    await db.query(updateProdSql);

    return next();


  } catch (error) {
    return next({
      log: 'error occured at update Products',
      message: {err: error}
    })
  }
}

commerceController.deleteProduct = async (req, res, next) => {
  // delete functionality
  try {
    const { body } = req;
    const { product_name, product_price, product_id } = body;
    console.log('body', body);

    const deleteProdSql = `DELETE FROM products WHERE product_name = '${product_name}' OR product_price=${product_price} OR product_id = ${product_id}`;
    await db.query(deleteProdSql);
    return next();

  } catch (error) {
    return next({
      log: 'error occured at delete Products',
      message: {err: error}
    })
  }
}


module.exports = commerceController;

