import cipher from './cipher.js';

const btnCode = document.getElementById("btnCode");
const btnDecode = document.getElementById("btnDecode");
let offset = document.getElementById("keyNumber");

btnCode.addEventListener("click", () => {
  let offsetValue = offset.value;
  let text = document.getElementById("secretText").value;
  document.getElementById("finalText").value = cipher.encode(offsetValue,text);
})

btnDecode.addEventListener("click", () => {
    let offsetValue = offset.value;
    let text = document.getElementById("secretText").value;
    document.getElementById("finalText").value = cipher.decode(offsetValue,text);    
})
