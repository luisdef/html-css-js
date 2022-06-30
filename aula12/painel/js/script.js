// script.js
const code = "1245";

const buttonNumbers = document.querySelectorAll(".button");
const access = document.querySelector("#acessar");
const inputCode = document.querySelector("#in");

buttonNumbers.forEach((e) => {
  e.addEventListener("click", (evt) => {
    if (inputCode.value.length < 4) inputCode.value += e.innerHTML;
  });
});

access.onclick = () => {
  let codeGiven = inputCode.value;
  if (codeGiven === code) {
    let status = document.querySelector("#status");
    status.style.backgroundColor = "#37d137";
    status.innerHTML = "OK";
  } else {
    let status = document.querySelector("#status");
    status.style.backgroundColor = "#e42121";
    status.innerHTML = "ERRO";
  }
  inputCode.value = "";
};
