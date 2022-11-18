import React from "react";

function ProductCard(props) {
  // get info via props from ProductDisplay


  return (
    <article>
      <div>
        <h4>Product Name</h4>
      </div>
      <ul>
        <li>id</li>
        <li>price</li>
        <li>details</li>
      </ul>
    </article>
  )
}

export default ProductCard;