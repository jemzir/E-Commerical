import React, { useContext } from "react";
import { GeneralContext } from "../Contexts/GeneralContext.js";

function AddProductBtn() {
  /**
   *  set up a fetch request that will access '/api'
   *  it should be a POST req
   *  on click will send that post req
   * 
   *  to get access to the information, it can open a little window
   *  and have user fill info out then submit it
   *  give users a success! feedback somewhere
   */

  const clickHandler = async () => {
    console.log('we have clicked the button');
    const inputTagArr = document.querySelectorAll('.add');
    const reqBod = {
      "product_name": inputTagArr[0].value,
      "product_price": +inputTagArr[1].value,
      "product_details": inputTagArr[2].value
    }


    const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqBod)
    });
    console.log('response from server via fetchPOST:', response.body);

    inputTagArr.forEach((tag) => {
      tag.value = ''
    });
    refreshReact();
  }

  return (
    <div>
      <input id="name" className="add" placeholder="name"></input>
      <input id="price" className="add" placeholder="price"></input>
      <input id="detail" className="add" placeholder="details"></input>

      <button onClick={clickHandler}>Add a Product!</button>
    </div>
  )
}

export default AddProductBtn;