import React, { useContext } from "react";
import { GeneralContext } from "../Contexts/GeneralContext.js";


function DeleteProd() {
  const { refreshReact } = useContext(GeneralContext);

  const clickHandler = async () => {
    console.log('We clicked the delete btn');
    const inputTagArr = document.querySelectorAll('.del');
    const reqBod = {
      "product_name": inputTagArr[0].value,
      "product_price": +inputTagArr[1].value,
      "product_id": +inputTagArr[2].value
    };

    const result = await fetch('/api', {
      method:'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqBod)
    });

    inputTagArr.forEach((tag) => {
      tag.value = ''
    });
    refreshReact();
  }

  return (
    <div>
      <input id="name" className="del" placeholder="name"></input>
      <input id="price" className="del" placeholder="price"></input>
      <input id="prod_id" className="del" placeholder="prod_id"></input>
      <button onClick={clickHandler}>Delete the Product</button>
      <br></br>
    </div>
  )
}

export default DeleteProd;