import React from "react";
import ProductCard from "./ProductCard.jsx";

function ProductDisplay(props) {
  // get info via props from ProductDisplay
  const productArr = props.products;
  
  const resultArr = [];
  for (let i = 0; i < productArr.length; i++) {
    let id = productArr[i].product_id;
    
    resultArr.push(<ProductCard />)
  }

  return (
    <div>
      {}
    </div>
  )
}

export default ProductDisplay