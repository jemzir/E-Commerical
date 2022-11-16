import React, { useState } from "react";
import fetch from 'isomorphic-fetch'; // isomorphic so it can be consistently implemtned across browsers


// can bring in results from server to here

function App() {
  // fetch request to backend to get data... 
  // need to shove that data into the render
  const [products, setProducts] = useState("Nothing here yet");
  fetch('/api')
    .then(response => response.json())
    .then(prod => setProducts([prod]));


  return (
    <div>
      <h1>The Commercial Beginning</h1>
      <div>{products}</div>
    </div>
  )
}

export default App;