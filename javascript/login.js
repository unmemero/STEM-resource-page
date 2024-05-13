const emailInput = document.getElementById("userEmail");
const passwordInput = document.getElementById("userPassword");
const submitButton = document.getElementById("submitButton");
const emailText = emailInput.value;
const passwordText = passwordInput.value;

emailInput.addEventListener("mouseover", ()=> {
    emailInput.focus();
});

passwordInput.addEventListener("mouseover", ()=> {
    passwordInput.focus();
});