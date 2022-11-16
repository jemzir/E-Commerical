import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import fetch from 'isomorphic-fetch'; // isomorphic so it can be consistently implemtned across browsers
import { fetchProducts } from "./reducers/productsReducer";

/**
 * 
 * note: the localhost:3000 is not responding to the jsx... need to debug that
 */

// can bring in results from server to here

function App() {
  // fetch request to backend to get data... 
  // need to shove that data into the render
  const [products, setProducts] = useState(['just a single array']);

  const result = fetch('/api')
    .then(data => data.json())
    .then(data => {
      setProducts(JSON.stringify(data));
      console.log('data that is from backend?',data)
    }); 

  return (
    <div>
      <h1>The Commercial Beginning</h1>
      <div>{products}</div>
    </div>
  )
}

export default App;