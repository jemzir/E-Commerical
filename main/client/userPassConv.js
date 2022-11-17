const bcrypt = require('brcypt');
const saltRounds = 5;


const userPlainTxt = document.querySelector('#username').textContent; 
const passPlainTxt = document.querySelector('#password').textContent; 

const submitBtn = document.querySelector('#submitSignUp');
submitBtn.addEventListener('click', () => {
  console.log(userPlainTxt, passPlainTxt);
})


console.log(userPlainTxt, passPlainTxt)
// hash the texts
const obj = {
  table: []
}

