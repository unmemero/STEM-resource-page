const emailInput = document.getElementById("userEmail");
const passwordInput = document.getElementById("userPassword");
const submitButton = document.getElementById("submitButton");
const emailText = emailInput.value;
const passwordText = passwordInput.value;

emailInput.addEventListener("mouseover", ()=> {
    emailInput.focus();
});m

passwordInput.addEventListener("mouseover", ()=> {
    passwordInput.focus();
});