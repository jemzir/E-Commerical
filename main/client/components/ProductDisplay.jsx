import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import { GeneralContext } from "../Contexts/GeneralContext.js";

function ProductDisplay() {
  const { products, refreshReact } = useContext(GeneralContext);
  // useEffect(() => {
  //   refreshReact();
  // }, [products])
  // get info via props from ProductDisplay
  const productArray = [];
  for (let i = 0; i < products.length; i++) {
    productArray.push(<ProductCard key={i} productInfo={products[i]}/>)
  }

  return (
    <div>
      From ProductDisplay show products: 
      <div className="productDisplay">{productArray}</div>
    </div>
  )
}

export default ProductDisplay