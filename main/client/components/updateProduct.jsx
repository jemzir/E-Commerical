import React from "react";

function UpdateProduct(props) {
  const clickHandler = async () => {
    console.log('update btn clicked');
    const inputTagArr = document.querySelectorAll('.upd');
    const reqBod = {
      "product_id": +inputTagArr[0].value,
      "product_name": inputTagArr[1].value,
      "product_price": +inputTagArr[2].value,
      "product_details": inputTagArr[3].value
    };
    console.log('upd reqBod:', reqBod);

    const result = await fetch('/api', {
      method:'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqBod)
    });
    console.log('result of fetchUpdate: ', result);

    inputTagArr.forEach((tag) => {
      tag.value = ''
    });
    props.refresh();
  }

  return (
    <div>
      <input id="prod_id" className="upd" placeholder="ID number to update"></input>
      <input id="name" className="upd" placeholder="name"></input>
      <input id="price" className="upd" placeholder="price"></input>
      <input id="details" className="upd" placeholder="details -- limited 255 characters"></input>
      <button onClick={clickHandler}>Update Product Info</button>
      <br></br>
    </div>
  )
}

export default UpdateProduct;