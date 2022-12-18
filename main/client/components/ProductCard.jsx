import React from "react";

function ProductCard(props) {
  // get info via props from ProductDisplay
  const info = props.productInfo;
  const {product_id, product_name, product_price, product_details} = info;

  return (
    <article>
      <div>
        <h4>Product Name: {product_name}</h4>
      </div>
      <ul>
        <li>id: {product_id}</li>
        <li>price: ${product_price}</li>
        <li>details: {product_details}</li>
      </ul>
    </article>
  )
}

export default ProductCard;