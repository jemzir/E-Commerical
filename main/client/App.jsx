import React, { useState, useEffect, createContext } from "react";
import fetch from 'isomorphic-fetch'; // isomorphic so it can be consistently implemtned across browsers
import AddProductBtn from "./components/addProduct.jsx";
import DeleteProd from "./components/deleteProduct.jsx";
import UpdateProduct from "./components/updateProduct.jsx";
import ProductDisplay from "./components/ProductDisplay.jsx";
import { GeneralContext } from "./Contexts/GeneralContext.js";

/**
 * 
 * note: the localhost:3000 is not responding to the jsx... need to debug that
 */

// can bring in results from server to here

function App() {
  // fetch request to backend to get data... 
  // need to shove that data into the render

  const [products, setProducts] = useState([]);

  const refreshReact = () => {
    fetch('/api')
    .then(data => data.json())
    .then(data => {
      setProducts(data);
    }); 
  }

  // on laoding the page , the components will render only once
  useEffect(() => {
    refreshReact();
  }, [])
    // need to set up a module for button to add a product/send a req

  return (
    <>
      <GeneralContext.Provider value={ { products, setProducts, refreshReact } } >
        <UpdateProduct />
        <DeleteProd />
        <AddProductBtn />
        <ProductDisplay />
      </GeneralContext.Provider>
    </>
  )
}

export default App;